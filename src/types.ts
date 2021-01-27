import { Observable } from "rxjs";

export interface IAsyncCallable {
  call<TParams, TRet>(method: string, params: TParams): Promise<TRet>;
}

export interface IObservableCallable {
  call<TParams, TRet>(method: string, params: TParams): Observable<TRet>;
}
