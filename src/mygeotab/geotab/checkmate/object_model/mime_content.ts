/* eslint-disable @typescript-eslint/no-empty-interface */
import { ITextMessageContentType } from '../../../geotab/checkmate/object_model/i_text_message_content_type';



/**
* The contents of a {@link ISerialIoxContent} and is not compatible with all Add-Ons.
* For more information regarding Add-On compatible please contact your reseller. MimeContent
* is converted into bytes with a specific format. The first byte is the length of
* the MimeType (N). The next N bytes are the ASCII encoded bytes of the MimeType string.
* The next two bytes are the length of the Data (L). Finally, the next L bytes are
* the Data. Messages from MyGeotab will be delivered in this format and messages to
* MyGeotab must be in this format as well.<br> 
*/
export interface IMimeContent extends ITextMessageContentType
{
  binaryDataPacketDelay?: Date;
  channelNumber?: number;
  data: number[];
  mimeType: string;
  /**
  * @inheritdoc
  */
  payload: number[];
}
