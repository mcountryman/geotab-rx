import { Observable, from, of } from "rxjs";
import { mergeMap, map, catchError, filter, withLatestFrom } from "rxjs/operators";
import {
  IRpcRequest,
  IRpcResponse,
  IRpcBatchRequest,
  IRpcBatchResponse,
  IRpcError,
} from "..";
import { ICredentials } from "../../models/credentials";

const BATCH_METHOD = "ExecuteMultiCall";

export function flattenResponses<TRpcRequest extends IRpcRequest>(req: TRpcRequest) {
  return (res$: Observable<IRpcResponse>) =>
    res$.pipe(
      mergeMap((res) => {
        if (req.method === BATCH_METHOD) {
          const batchReq = (req as unknown) as IRpcBatchRequest;
          const batchRes = res as IRpcBatchResponse;

          const throwErr = (err: IRpcError) =>
            from(batchReq.params.calls).pipe(map((call) => toErrResponse(call, err)));

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

export function flattenErrors<TRpcRequest extends IRpcRequest>(req: TRpcRequest) {
  return (res$: Observable<IRpcResponse>) =>
    res$.pipe(
      catchError((err) => {
        if (req.method === BATCH_METHOD) {
          const batchReq = (req as unknown) as IRpcBatchRequest;

          return from(batchReq.params.calls).pipe(
            map((call) => toErrResponse(call, err))
          );
        }

        return of(toErrResponse(req, err));
      })
    );
}

export function toBatch<TReq extends IRpcRequest>(
  credentials$: Observable<ICredentials | undefined>
) {
  return (req$: Observable<TReq[]>) =>
    req$.pipe(
      filter((req) => req.length > 1),
      withLatestFrom(credentials$),
      map(
        ([calls, credentials]): IRpcBatchRequest => ({
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

export function toSingle<TReq extends IRpcRequest>(
  credentials$: Observable<ICredentials | undefined>
) {
  return (req$: Observable<TReq[]>) =>
    req$.pipe(
      filter((req) => req.length === 1),
      withLatestFrom(credentials$),
      map(
        ([req, credentials]): IRpcRequest => ({
          ...req[0],
          params: {
            ...req[0].params,
            credentials,
          },
        })
      )
    );
}

export function toOkResponse<TReq extends IRpcRequest, TRes>(
  req: TReq,
  result: TRes
): IRpcResponse {
  return {
    id: req.id,
    result,
    jsonrpc: "2.0",
  };
}

export function toErrResponse<TReq extends IRpcRequest>(
  req: TReq,
  err: IRpcError
): IRpcResponse {
  return {
    id: req.id,
    error: err,
    jsonrpc: "2.0",
  };
}
