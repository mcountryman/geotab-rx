/* eslint-disable @typescript-eslint/no-empty-interface */

/**
 * A class representing extra data to be stored with a {@link INotificationUserModifiedData}
 * and serialized into the Info column of the 'notificationdata' table.
 */
export interface IUserModifiedInfo {
  /** Gets the username of the {@link IModifiedUserName}. */
  modifiedByUserName: string;
  /** Gets the username of the {@link IUser} which was modified. */
  modifiedUserName: string;
}
