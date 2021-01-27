/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from '../../../geotab/checkmate/object_model/i_search';
import { RecipientType } from '../../../geotab/checkmate/object_model/recipient_type';



/**
*  The object used to specify the arguments when searching for (s).
*
* @deprecated
*/
export interface IRecipientSearch extends ISearch
{
  /** Gets or sets search for {@link IRecipient} of this {@link IRecipientType}. */
  recipientType: RecipientType;
}
