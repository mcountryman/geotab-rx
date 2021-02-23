import { BehaviorSubject, merge, Observable, of, Subject, throwError } from "rxjs";
import {
  bufferTime,
  first,
  mergeMap,
  publish,
  refCount,
  switchMap,
  timeout,
  withLatestFrom,
} from "rxjs/operators";
import uuid from "uuid-random";
import { IRpcClient } from ".";
import { ICredentials } from "../models/credentials";
import {
  IHttpAdapter,
  IRpcRequest,
  IRpcResponse,
  makeNullableSubject,
  RpcError,
} from "./types";
import { withHttpAdapter } from "./utils/adapter";
import { flattenErrors, flattenResponses, toBatch, toSingle } from "./utils/req_res";
import { deserializeResponse, serializeRequest } from "./utils/serialize";

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
  constructor(opts: IRpcClientOpts) {
    this.endPoint$ = new BehaviorSubject(opts.endPoint);
    this._timeoutMs = opts.timeoutMs ?? 5000;

    this._rx$ = this._tx$.asObservable().pipe(
      bufferTime(opts.bufferTimeMs ?? 100),
      publish((multi$) =>
        merge(
          multi$.pipe(toBatch(this.credentials$.asObservable())),
          multi$.pipe(toSingle(this.credentials$.asObservable()))
        )
      ),

      withLatestFrom(this.endPoint$),
      withHttpAdapter(opts),
      mergeMap(([[req, endPoint], adapter]) =>
        adapter
          .post(endPoint, serializeRequest(req))
          .pipe(deserializeResponse(), flattenResponses(req), flattenErrors(req))
      ),
      publish(),
      refCount()
    );
  }

  /** @inheritdoc */
  getEndPoint(): string {
    return this.endPoint$.getValue();
  }

  /** @inheritdoc */
  setEndPoint(value: string) {
    this.endPoint$.next(value);
  }

  /** @inheritdoc */
  setCredentials(value: ICredentials | undefined) {
    this.credentials$.next(value);
  }

  /** @inheritdoc */
  call<TRet, TParams extends Record<string, any> = Record<string, any>>(
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

  protected readonly endPoint$: BehaviorSubject<string>;
  protected readonly credentials$ = makeNullableSubject<ICredentials>();

  private readonly _timeoutMs: number;
  private readonly _rx$: Observable<IRpcResponse>;
  private readonly _tx$ = new Subject<IRpcRequest>();
}
