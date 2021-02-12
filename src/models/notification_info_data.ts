/* eslint-disable @typescript-eslint/no-empty-interface */
import { INotificationData } from './notification_data';
import { NotificationStatus } from './notification_status';

/** The information data associated with a notification. */
export interface INotificationInfoData extends INotificationData {
  /** Gets or sets the information for the specific machine. */
  info?: string;
  /**
   * Gets or sets the instance of this particular notification eg. the particular downloader
   * serial number.
   */
  instance?: string;
  /** Gets or sets the machine name pertaining to the relevant information. */
  machineName?: string;
  /** Gets or sets what is the source of the application exception. */
  source?: string;
  /** Gets or sets what is the current state for the application exception. */
  state?: NotificationStatus;
}
