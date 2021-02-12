/* eslint-disable @typescript-eslint/no-empty-interface */
import { IJsonRpcErrorData } from '../web/json_rpc_error_data';
import { IJsonErrorInner } from '../web/json_error_inner';

/**
 * Models a JSON-RPC error provided as "error" property of JSON-RPC response object
 * when an error is encountered while making a request. http://www.jsonrpc.org/specification#error\_object.
 */
export interface IJsonRpcError {
  /** Gets or sets exception code indicating the error type that occurred. */
  code: number;
  /**
   * Gets or sets the {@link IJsonRpcErrorData} containing detailed information about
   * the error.
   */
  data: IJsonRpcErrorData;
  /** Gets or sets inner errors. */
  errors: IJsonErrorInner[];
  /**
   * Gets or sets a short description of the error, ex: "Argument Out Of Range" with
   * no error context-specific data.
   */
  message: string;
  /** Gets the name of the JSON-RPC error. */
  name: string;
}
