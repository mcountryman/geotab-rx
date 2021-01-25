import { Observable } from "rxjs";

export interface IRpcClient {
  call<TParams, TRet>(method: string, params: TParams): Observable<TRet>;
}
