/* eslint-disable @typescript-eslint/no-empty-interface */
import { INotificationData } from '../../../geotab/checkmate/object_model/i_notification_data';
import { IExceptionEvent } from '../../../geotab/checkmate/object_model/exceptions/i_exception_event';
import { NotificationType } from '../../../geotab/checkmate/object_model/notification_type';



/** The notification data pertaining to Exception Rules. */
export interface INotificationExceptionData extends INotificationData
{
  /** Gets or sets the exception event that holds the data for this notification. */
  exceptionEvent: IExceptionEvent;
  /** Gets or sets the information for the notification exception data. */
  info: string;
  /** Gets or sets the {@link INotificationType} of the notification. */
  type: NotificationType;
}
