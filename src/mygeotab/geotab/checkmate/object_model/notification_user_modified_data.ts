/* eslint-disable @typescript-eslint/no-empty-interface */
import { INotificationData } from '../../../geotab/checkmate/object_model/i_notification_data';
import { IUserModifiedInfo } from '../../../geotab/checkmate/object_model/i_user_modified_info';
import { UserModification } from '../../../geotab/checkmate/object_model/user_modification';



/**
* A class for notifying of changes to a {@link IUser}. Provides information about
* who was changed, who did the changes, what type of changes happened, and any values
* that were changed if applicable. Matching {@link IUserModified}.<br> Notifications
* of this type are only delivered to SystemNotice subscribers who have valid Group
* scope and {@link ISecurityIdentifier}.<br> 
*/
export interface INotificationUserModifiedData extends INotificationData
{
  /** Gets the type of {@link IUserModification} that occurred. */
  modificationAction: UserModification;
  /**
  * Gets additional info about the stored in a data class. This info is JSON-serialized
  * and stored in the "sInfo" column of the NotificationData table.<br> 
  */
  userModifiedInfo: IUserModifiedInfo;
}
