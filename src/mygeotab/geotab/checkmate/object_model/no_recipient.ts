/* eslint-disable @typescript-eslint/no-empty-interface */
import { IRecipient } from '../../../geotab/checkmate/object_model/i_recipient';
import { RecipientType } from '../../../geotab/checkmate/object_model/recipient_type';
import { IUser } from '../../../geotab/checkmate/object_model/i_user';



/** No Recipient. */
export interface INoRecipient extends IRecipient
{
  /**
  * Sets the recipient address. This is used when sending notifications via email or
  * Web Services.
  */
  address: string;
  /**
  * Gets or sets the type of recipient this instance refers to. This determines whether
  * the recipient is emailed or notified in a different manner.
  */
  recipientType?: RecipientType;
  /** Sets the application user this recipient belongs to. */
  user: IUser;
}
