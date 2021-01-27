/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntityWithVersion } from '../../../geotab/checkmate/object_model/i_entity_with_version';
import { INotificationApplicationExceptionData } from '../../../geotab/checkmate/object_model/i_notification_application_exception_data';
import { INotificationExceptionForUsersData } from '../../../geotab/checkmate/object_model/i_notification_exception_for_users_data';
import { INotificationExceptionData } from '../../../geotab/checkmate/object_model/i_notification_exception_data';
import { INotificationInfoData } from '../../../geotab/checkmate/object_model/i_notification_info_data';
import { INotificationNewsData } from '../../../geotab/checkmate/object_model/i_notification_news_data';
import { INotificationMessageData } from '../../../geotab/checkmate/object_model/i_notification_message_data';
import { INotificationUserModifiedData } from '../../../geotab/checkmate/object_model/i_notification_user_modified_data';
import { INotificationForAdminUsersData } from '../../../geotab/checkmate/object_model/i_notification_for_admin_users_data';
import { IRecipient } from '../../../geotab/checkmate/object_model/i_recipient';
import { INotificationData } from '../../../geotab/checkmate/object_model/i_notification_data';



/**
*  This class represents a notification that has to be send to a recipient.
*
* @deprecated
*/
export interface INotification extends IEntityWithVersion
{
  /** Gets or sets gets the date. */
  dateTime?: Date;
  /**
  * Gets or sets the timestamp indication until when this notification was processed
  * (viewed, delivered).
  */
  dateTimeEnd?: Date;
  /**
  * Gets or sets the {@link INotificationApplicationExceptionData} data that provides
  * the data for this notification. Deprecated: Please send all exceptions directly
  * to Error Reporting rather than using<br> 
  */
  notificationApplicationExceptionData: INotificationApplicationExceptionData;
  /** Gets or sets the notification data. */
  notificationData: INotificationData;
  /**
  * Gets or sets the {@link INotificationExceptionData} data that provides the data
  * for this notification.
  */
  notificationExceptionData: INotificationExceptionData;
  /** Gets or sets the data that provides the data for this notification. */
  notificationExceptionForUsersData: INotificationExceptionForUsersData;
  /**
  * Gets or sets the {@link INotificationForAdminUsersData} data that provides the data
  * for this notification.
  */
  notificationForAdminUsers: INotificationForAdminUsersData;
  /**
  * Gets or sets the {@link INotificationInfoData} data that provides the data for this
  * notification.
  */
  notificationInfoData: INotificationInfoData;
  /** Gets or sets the data that provides the data for this notification. */
  notificationMessageData: INotificationMessageData;
  /** Gets or sets the data that provides the data for this notification. */
  notificationNewsData: INotificationNewsData;
  /** Gets or sets the data that provides the data for this notification. */
  notificationUserModifiedData: INotificationUserModifiedData;
  /** Gets or sets the recipient this notification belongs to. */
  recipient: IRecipient;
}
