import { Observable } from "rxjs";

export * from "./types";
export * from "./client";

/**
 * Handles invocation of JSONRPC requests and parses responses into observable streams.
 */
export interface IRpcClient {
  /**
   * Invokes JSONRPC request and returns result.
   * @param method The JSONRPC method name.
   * @param params The JSONRPC request parameters.
   * @returns JSONRPC call result.
   * @throws If JSONRPC responds with error.
   */
  call<TParams, TRet>(method: string, params: TParams): Observable<TRet>;
}
