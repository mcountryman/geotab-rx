/* eslint-disable @typescript-eslint/no-empty-interface */

/** The implementation specific error data for a JSON-RPC request error. */
export interface IJsonRpcErrorData {
  /** Gets or sets the error instance identifier. */
  id: string;
  /**
   * Gets or sets a primitive or structured value that contains additional information
   * about the error. {@link IState} information.
   */
  info: string;
  /**
   * Gets or sets the index of the request in a "multicall" at which a failure occurred,
   * otherwise [null].
   */
  requestIndex: number;
  /** Gets or sets the type of error. */
  type: string;
}
