/* eslint-disable @typescript-eslint/no-empty-interface */
import { IDuplicateException } from '../../../geotab/checkmate/object_model/i_duplicate_exception';



/**
*  An exception that occurs when adding a key to a user that is assigned to another
* user.
*
* @deprecated
*/
export interface IDuplicateKeyException extends IDuplicateException
{
  /** Gets the message of the exception. */
  message: string;
}
