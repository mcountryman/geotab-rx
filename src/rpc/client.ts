import { from, iif, merge, Observable, of, Subject, throwError } from "rxjs";
import {
  bufferTime,
  catchError,
  filter,
  first,
  map,
  mergeMap,
  publish,
  refCount,
  switchMap,
  tap,
  timeout,
  withLatestFrom,
} from "rxjs/operators";
import uuid from "uuid-random";
import { IRpcClient } from ".";
import { ICredentials } from "../models/credentials";
import {
  IHttpAdapter,
  IHttpResponse,
  IRpcBatchRequest,
  IRpcBatchResponse,
  IRpcError,
  IRpcRequest,
  IRpcResponse,
  RpcError,
} from "./types";

const BATCH_METHOD = "ExecuteMultiCall";

export interface IRpcClientOpts {
  /** The default HTTP endPoint. */
  endPoint: string;
  /** The default credentials. */
  credentials?: Partial<ICredentials>;
  /** The default HTTP adapter. */
  adapter?: IHttpAdapter;
  /**
   * The time in milliseconds to wait before throwing timeout errors.
   * @default 1000
   * */
  timeoutMs?: number;
  /**
   * The time in milliseconds to wait for batch request candidates.
   * @default 100
   * */
  bufferTimeMs?: number;
}

export class RpcClient implements IRpcClient {
  public endPoint: string;
  public credentials?: Partial<ICredentials>;

  constructor(opts: IRpcClientOpts) {
    this.endPoint = opts.endPoint;
    this.credentials = opts.credentials;
    this._timeoutMs = opts.timeoutMs ?? 5000;

    this._rx$ = this._tx$.asObservable().pipe(
      bufferTime(opts.bufferTimeMs ?? 100),
      publish((multi$) =>
        merge(
          multi$.pipe(toBatch(this.credentials)),
          multi$.pipe(toSingle(this.credentials))
        )
      ),

      withHttpAdapter(opts),
      mergeMap(([req, adapter]) =>
        adapter
          .post(this.endPoint, serialize(req))
          .pipe(deserialize(), flattenResponses(req), flattenErrors(req))
      ),
      publish(),
      refCount()
    );
  }

  /** @inheritdoc */
  call<TRet, TParams = unknown>(
    method: string,
    params: TParams
  ): Observable<TRet> {
    const id = uuid();

    return new Observable<IRpcResponse>((observer) => {
      this._rx$.subscribe(observer);
      this._tx$.next({
        id,
        method,
        params,
        jsonrpc: "2.0",
      });
    }).pipe(
      first((res) => res.id === id),
      timeout(this._timeoutMs),
      switchMap((res) => {
        if (res.error) return throwError(new RpcError(res.error));
        return of(res.result as TRet);
      })
    );
  }

  private readonly _timeoutMs: number;
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

          const throwErr = (err: IRpcError) =>
            from(batchReq.params.calls).pipe(
              map((call) => toErrResponse(call, err))
            );

          // Pipe results as direct `IRpcResponse`s
          if (batchRes.result) {
            if (!(batchRes.result instanceof Array))
              return throwErr({ code: 69, message: "" });

            return from(batchRes.result).pipe(
              map((res, i) => toOkResponse(batchReq.params.calls[i], res))
            );
          }

          // Pipe duplicated error using supplied requests
          if (res.error) return throwErr(res.error);

          // Malformed response
          return throwErr({ code: 69, message: "" });
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
  err: IRpcError
): IRpcResponse {
  return {
    id: req.id,
    error: err,
    jsonrpc: "2.0",
  };
}

function withHttpAdapter<T>(opts: IRpcClientOpts) {
  const adapter$ = opts.adapter
    ? of(opts.adapter)
    : from(import("./adapters/fetch_adapter")).pipe(
      map((imp) => imp.FetchHttpAdapter),
      map((FetchHttpAdapter) => new FetchHttpAdapter())
    );

  return (observer: Observable<T>) => observer.pipe(withLatestFrom(adapter$));
}
