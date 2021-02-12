/* eslint-disable @typescript-eslint/no-empty-interface */
import { INotificationData } from './notification_data';

/** The message data associated with a notification. */
export interface INotificationMessageData extends INotificationData {
  /** Gets or sets the information. */
  info?: string;
  /** Gets or sets the machine name pertaining to the relevant information. */
  machineName?: string;
  /** Gets or sets what is the source of the application exception. */
  source?: string;
}
