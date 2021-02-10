import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import {
  IHttpAdapter,
  IHttpResponse,
  IRpcBatchRequest,
  IRpcRequest,
  IRpcResponse,
} from "../../rpc";

export const RPC_ERROR_CODE = 420.69;
export const RPC_ERROR_MESSAGE = "THIS_IS_A_BAD_RPC_RESPONSE";
export const HTTP_ERROR_MESSAGE = "THIS_IS_A_BAD_HTTP_RESPONSE";

/**
 * Creates instance of {@link IHttpAdapter}
 * @param op - Allows custom mapping of {@link IRpcRequest} to {@link IRpcResponse}
 */
export function mockHttpAdapter(
  op: (req$: Observable<IRpcRequest>) => Observable<IRpcResponse>
): IHttpAdapter {
  return {
    post(_: string, body: string): Observable<IHttpResponse> {
      const req: IRpcRequest = JSON.parse(body);
      const res$ = op(of(req));
      return res$.pipe(map((res) => ({ body: JSON.stringify(res) })));
    },
  };
}

/**
 * Responds to requests with successful responses built from {@link IRpcRequest.params}
 */
export const echoHttpAdapter = mockHttpAdapter((req$) =>
  req$.pipe(map(echoRequest))
);

/**
 * Responds to requests with hard-coded {@link IRpcResponse}
 *
 * - Code will always be {@link RPC_ERROR_CODE}
 * - Message will always be {@link RPC_ERROR_MESSAGE}
 */
export const rpcErrorHttpAdapter = mockHttpAdapter((req$) =>
  req$.pipe(
    map((req) => ({
      id: req.id,
      error: {
        code: RPC_ERROR_CODE,
        message: RPC_ERROR_MESSAGE,
      },
      jsonrpc: "2.0",
    }))
  )
);

/**
 * Throws an error on every request.
 *
 * - Message is hardcoded to be {@link HTTP_ERROR_MESSAGE}
 */
export const httpErrorHttpAdapter = mockHttpAdapter((req$) =>
  req$.pipe(
    map(() => {
      throw new Error(HTTP_ERROR_MESSAGE);
    })
  )
);

export function echoRequest(req: IRpcRequest): IRpcResponse {
  const res: IRpcResponse = {
    id: req.id ?? "",
    result: req.params,
    jsonrpc: "2.0",
  };

  if (req.method === "ExecuteMultiCall") {
    const batchReq = req as IRpcBatchRequest;

    res.result = batchReq.params.calls.map((call) => call.params);
  }

  return res;
}
