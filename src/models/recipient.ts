/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from './entity';
import { RecipientType } from './recipient_type';
import { IUser } from './user';
import { TripType } from './trip_type';
import { IGroup } from './group';
import { INotificationBinaryFile } from './notification_binary_file';

/**
 *  The recipient for a specific notification. A recipient is linked to {@link IRule}(s)
 * via a {@link IDistributionList}. When a {@link IRule} is violated the {@link IDistributionList}
 * linked recipient receives a notification. The type of recipient is defined by it's
 * {@link IRecipientType}. Not all properties of this object will have a value at the
 * same time they are dependent on the {@link IRecipientType}. Recipient is represented
 * by the string "NoRecipientId" where there is no recipient.
 */
export interface IRecipient extends IEntity {
  /** Gets or sets the email address used when sending notifications via Email. */
  address: string;
  /** Gets or sets the {@link IGroup} to assign the related device to. */
  group: IGroup;
  /** Gets or sets the NotificationBinaryFile to notify with. */
  notificationBinaryFile: INotificationBinaryFile;
  /**
   * Gets or sets the {@link IRecipientType} (type of notification message) this instance
   * refers to.
   */
  recipientType?: RecipientType;
  /** Gets or sets the {@link ITripType} to assign the related device to. */
  tripType?: TripType;
  /** Gets or sets the {@link IUser} to receive notification. */
  user: IUser;
}
