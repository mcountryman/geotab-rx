/* eslint-disable @typescript-eslint/no-empty-interface */
import { IRecipient } from "./recipient";
import { RecipientType } from "./recipient_type";
import { IUser } from "./user";

/** No Recipient. */
export interface INoRecipient extends IRecipient {
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
