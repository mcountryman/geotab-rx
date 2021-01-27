/* eslint-disable @typescript-eslint/no-empty-interface */
import { ITextMessageContentType } from '../../../geotab/checkmate/object_model/i_text_message_content_type';



/**  Message that can deliver data to a component of a GO device. */
export interface IDataToComponentContent extends ITextMessageContentType
{
  /**
  * Gets a value indicating whether get true if the recipient device is required to
  * respond with an acknowledge. false]otherwise.
  */
  isAcknowledgeRequired: boolean;
  /**
  * Gets method to get raw binary. NOTE: The endianness of IDs and other numbers inside
  * of the payload are reversed to keep the C# format.
  */
  payload: number[];
}
