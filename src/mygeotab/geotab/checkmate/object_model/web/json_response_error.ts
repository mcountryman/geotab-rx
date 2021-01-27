/* eslint-disable @typescript-eslint/no-empty-interface */
import { IJsonRpcError } from '../../../../geotab/checkmate/object_model/web/i_json_rpc_error';



/** A JSON-RPC response with error. */
export interface IJsonResponseError
{
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
  requestIndex: number;
}
