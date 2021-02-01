/* eslint-disable @typescript-eslint/no-empty-interface */
import { INotificationData } from "./notification_data";
import { IExceptionEvent } from "./exceptions/exception_event";
import { NotificationType } from "./notification_type";

/** The notification data pertaining to Exception Rules. */
export interface INotificationExceptionData extends INotificationData {
  /** Gets or sets the exception event that holds the data for this notification. */
  exceptionEvent: IExceptionEvent;
  /** Gets or sets the information for the notification exception data. */
  info: string;
  /** Gets or sets the {@link INotificationType} of the notification. */
  type: NotificationType;
}
