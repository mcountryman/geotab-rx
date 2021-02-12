/* eslint-disable @typescript-eslint/no-empty-interface */
import { IJsonRpcError } from '../web/json_rpc_error';

/** A JSON-RPC response without error. */
export interface IJsonResponse<T> {
  /** Gets or sets the {@link IJsonRpcError}. */
  error: IJsonRpcError;
  /**
   * Gets or sets the identifier which corresponds to the value of the id member in the
   * request object.
   */
  id: any;
  /** Gets the version of the JSON-RPC protocol. */
  jsonrpc: string;
  /** Gets or sets the {@link IInt32} index. */
  requestIndex?: number;
  /** Gets or sets the result. */
  result: T;
}
