/* eslint-disable @typescript-eslint/no-empty-interface */
import { ITextContent } from '../../../geotab/checkmate/object_model/i_text_content';
import { ICannedResponseOption } from '../../../geotab/checkmate/object_model/i_canned_response_option';



/**
* Text message content including a list of predetermined responses. Derived from {@link
* ITextContent}.
*/
export interface ICannedResponseContent extends ITextContent
{
  /** Gets or sets the list of predetermined responses to a text message. See {@link ICannedResponseOption}. */
  cannedResponseOptions: ICannedResponseOption[];
  /** Gets or sets get the predetermined responses options that are serialized. */
  cannedResponseOptionsSerialized: ICannedResponseOption[];
}
