import { Observable } from "rxjs";
import { ICredentials } from "../../../mygeotab/src";

export interface IRpcRequest<TParams = unknown, TResult = unknown> {
  id?: string | number | null;
  method: string;
  params: TParams;
  jsonrpc: "2.0";
}

export interface IRpcResponse<TResult = unknown, TError = unknown> {
  id?: string | number | null;
  error?: TError;
  result?: TResult;
  jsonrpc: "2.0";
}

export interface IRpcBatchRequest<
  TReqs extends Array<IRpcRequest> = IRpcRequest[]
> extends IRpcRequest {
  method: "ExecuteMultiCall";
  params: {
    calls: TReqs;
    credentials?: Partial<ICredentials>;
  };
}

export interface IRpcBatchResponse extends IRpcResponse {
  id: undefined;
  result?: unknown[];
}

export interface IHttpResponse {
  body: string;
}

export interface IHttpAdapter {
  /**
   * Send `POST` request with supplied JSON body to supplied url returing JSON encoded
   * resoponse.
   * @param url The url to send HTTP request to.
   * @param body The JSON serialized body.
   * @returns The JSON serialized body.
   */
  post(url: string, body: string): Observable<IHttpResponse>;
}
