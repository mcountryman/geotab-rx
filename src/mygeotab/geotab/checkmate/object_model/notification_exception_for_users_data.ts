/* eslint-disable @typescript-eslint/no-empty-interface */
import { INotificationData } from '../../../geotab/checkmate/object_model/i_notification_data';



/**
* The notification data associated with application exceptions that can be resolved
* by user action.
*/
export interface INotificationExceptionForUsersData extends INotificationData
{
  /** Gets or sets what is the description for the exception. */
  description: string;
  /** Gets or sets additional info related to the exception. */
  info: string;
  /** Gets or sets the machine name where the exception occurred. */
  machineName: string;
  /** Gets or sets what is the source of the exception. */
  source: string;
}
