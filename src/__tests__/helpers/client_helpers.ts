import { Observable, of, throwError } from "rxjs";
import { switchMap } from "rxjs/operators";
import { IRpcClient, IRpcRequest, IRpcResponse } from "../../rpc";

export function mockRpcClient(
  op: (req$: Observable<IRpcRequest>) => Observable<IRpcResponse>
): IRpcClient {
  return {
    endPoint: "",
    call<TRes, TParams>(method: string, params: TParams) {
      return op(
        of({
          id: "",
          method,
          params,
          jsonrpc: "2.0",
        })
      ).pipe(
        switchMap((res) => {
          if (res.error) {
            return throwError(new Error(res.error.message));
          } else {
            return of(res.result as TRes);
          }
        })
      );
    },
  };
}
