/* eslint-disable @typescript-eslint/no-empty-interface */
import { IUserModifiedInfo } from '../../../geotab/checkmate/object_model/i_user_modified_info';



/**
* A class which represents data associated with {@link INotificationUserModifiedData}.
* This type holds additional information about properties of the {@link IUser} which
* were modified. It only applies to certain types of {@link IUserModification})}).
*/
export interface IUserModifiedValueInfo extends IUserModifiedInfo
{
  /**
  * Gets a string representing the value that was sent to the Audit log from given property
  */
  message: string;
  /**
  * Gets a set of strings representing values that were added to a property for a given
  * {@link IUser}. Only applicable for or . When a User's {@link IGroup}s are modified,
  * the names of all the groups that were added.<br> OR:<br> When a User's {@link ISecurityClearance}s
  * are modified, the names of all the clearances that were added.<br> 
  */
  propertyValuesAdded: string[];
  /**
  * Gets a set of strings representing values that were removed from a property for
  * a given {@link IUser}. Only applicable for or . When a User's {@link IGroup}s are
  * modified, the names of all the groups that were removed.<br> OR:<br> When a User's
  * {@link ISecurityClearance}s are modified, the names of all the clearances that were
  * removed.<br> 
  */
  propertyValuesRemoved: string[];
}
