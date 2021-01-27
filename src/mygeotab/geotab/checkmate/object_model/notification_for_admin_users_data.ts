/* eslint-disable @typescript-eslint/no-empty-interface */
import { INotificationExceptionForUsersData } from '../../../geotab/checkmate/object_model/i_notification_exception_for_users_data';



/** The notification data associated with application notifications meant for admins. */
export interface INotificationForAdminUsersData extends INotificationExceptionForUsersData
{
  /** Gets a value indicating whether it is admin only for notification. */
  isAdminOnly: boolean;
}
