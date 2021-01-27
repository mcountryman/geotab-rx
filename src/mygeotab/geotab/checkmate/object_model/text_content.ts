/* eslint-disable @typescript-eslint/no-empty-interface */
import { ITextMessageContentType } from '../../../geotab/checkmate/object_model/i_text_message_content_type';



/**  The contents of a GPS Text Message. See also:. {@link ILocationContent} */
export interface ITextContent extends ITextMessageContentType
{
  /** Gets or sets contains the message text. */
  message: string;
  /**
  * Gets or sets a value indicating whether set to true this message is sent to display
  * immediately on the Garmin device. This value has no effect on messages sent from
  * the Garmin device.
  */
  urgent?: boolean;
}
