/* eslint-disable @typescript-eslint/no-empty-interface */
import { INotificationData } from "./notification_data";

/**
 * The notification data associated with application exceptions that the end user cannot
 * control.
 */
export interface INotificationApplicationExceptionData
  extends INotificationData {
  /** Gets or sets what is the description for the application exception. */
  description?: string;
  /** Gets or sets additional info related to the application exception. */
  info?: string;
  /** Gets or sets the machine name where the application exception occurred. */
  machineName?: string;
  /** Gets or sets what is the source of the application exception. */
  source?: string;
}
