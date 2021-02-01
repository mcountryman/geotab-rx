import { from, iif, merge, Observable, of, Subject, throwError } from "rxjs";
import {
  bufferTime,
  catchError,
  filter,
  first,
  map,
  mergeMap,
  publish,
  switchMap,
  tap,
  timeout,
  withLatestFrom,
} from "rxjs/operators";
import { ICredentials } from "src/models/credentials";
import uuid from "uuid-random";
import { IRpcClient } from ".";
import {
  IHttpAdapter,
  IHttpResponse,
  IRpcBatchRequest,
  IRpcBatchResponse,
  IRpcRequest,
  IRpcResponse,
} from "./types";

const BATCH_METHOD = "ExecuteMultiCall";

export class RpcClient implements IRpcClient {
  constructor(
    /** The HTTP endpoint. */
    public endPoint: string,
    /** The credentials to pass to rpc calls. */
    public credentials?: Partial<ICredentials>,
    /** The HTTP adapter. */
    private _adapter?: IHttpAdapter,
    /** The millisecond threshold to group requests into single batch call.  */
    bufferTimeMs = 500
  ) {
    this._rx$ = this._tx$.pipe(
      bufferTime(bufferTimeMs),
      publish((multi$) =>
        merge(
          multi$.pipe(toBatch(this.credentials)),
          multi$.pipe(toSingle(this.credentials))
        )
      ),

      withLatestFrom(this.getAdapter()),
      mergeMap(([req, adapter]) =>
        adapter
          .post(this.endPoint, serialize(req))
          .pipe(deserialize(), flattenResponses(req), flattenErrors(req))
      )
    );
  }

  /** @inheritdoc */
  call<TRet>(method: string, params: unknown): Observable<TRet> {
    const id = uuid();

    this._tx$.next({
      id,
      method,
      params,
      jsonrpc: "2.0",
    });

    return this._rx$.pipe(
      filter((res) => res.id === id),
      first(),
      timeout(5000),
      switchMap((res) => {
        if (res.error) return throwError(res.error);
        return of(res.result as TRet);
      })
    );
  }

  /**
   * Resolves configured {@link IHttpAdapter} or default {@link FetchHttpAdapter}.
   */
  getAdapter(): Observable<IHttpAdapter> {
    return iif(
      () => !this._adapter,
      from(import("./adapters/fetch_adapter")).pipe(
        map((imp) => imp.FetchHttpAdapter),
        map((FetchHttpAdapter) => new FetchHttpAdapter()),
        tap((adapter) => (this._adapter = adapter))
      ),
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      from([this._adapter!])
    );
  }

  private readonly _rx$: Observable<IRpcResponse>;
  private readonly _tx$ = new Subject<IRpcRequest>();
}

/**
 * Serialize stream of {@link IRpcRequest} to JSON
 */
function serialize<TRpcRequest extends IRpcRequest>(req: TRpcRequest) {
  return JSON.stringify(req);
}

/**
 * Map stream of {@link IHttpResponse} body to {@link IRpcResponse}
 */
function deserialize() {
  return (json$: Observable<IHttpResponse>) =>
    json$.pipe(map((res) => JSON.parse(res.body) as IRpcResponse));
}

function flattenResponses<TRpcRequest extends IRpcRequest>(req: TRpcRequest) {
  return (res$: Observable<IRpcResponse>) =>
    res$.pipe(
      mergeMap((res) => {
        if (req.method === BATCH_METHOD) {
          const batchReq = req as IRpcBatchRequest;
          const batchRes = res as IRpcBatchResponse;

          // Pipe results as direct `IRpcResponse`s
          if (batchRes.result)
            return from(batchRes.result).pipe(
              map((res, i) => toOkResponse(batchReq.params.calls[i], res))
            );

          // Pipe duplicated error using supplied requests
          if (res.error)
            return from(batchReq.params.calls).pipe(
              map((call) => toErrResponse(call, res.error))
            );
        }

        return of(res);
      })
    );
}

function flattenErrors<TRpcRequest extends IRpcRequest>(req: TRpcRequest) {
  return (res$: Observable<IRpcResponse>) =>
    res$.pipe(
      catchError((err) => {
        if (req.method === BATCH_METHOD) {
          const batchReq = req as IRpcBatchRequest;

          return from(batchReq.params.calls).pipe(
            map((call) => toErrResponse(call, err))
          );
        }

        return of(toErrResponse(req, err));
      })
    );
}

function toBatch<TReq extends IRpcRequest>(
  credentials?: Partial<ICredentials>
) {
  return (req$: Observable<TReq[]>) =>
    req$.pipe(
      filter((req) => req.length > 1),
      map(
        (calls): IRpcBatchRequest => ({
          method: BATCH_METHOD,
          params: {
            calls,
            credentials,
          },
          jsonrpc: "2.0",
        })
      )
    );
}

function toSingle<TReq extends IRpcRequest>(
  credentials?: Partial<ICredentials>
) {
  return (req$: Observable<TReq[]>) =>
    req$.pipe(
      filter((req) => req.length === 1),
      map(
        (req): IRpcRequest => ({
          ...req[0],
          credentials,
        })
      )
    );
}

function toOkResponse<TRpcRequest extends IRpcRequest, TRes>(
  req: TRpcRequest,
  result: TRes
): IRpcResponse {
  return {
    id: req.id,
    result,
    jsonrpc: "2.0",
  };
}

function toErrResponse<TRpcRequest extends IRpcRequest>(
  req: TRpcRequest,
  err: any
): IRpcResponse {
  return {
    id: req.id,
    error: err,
    jsonrpc: "2.0",
  };
}
