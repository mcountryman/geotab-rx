/* eslint-disable @typescript-eslint/no-empty-interface */

/**
 * An enum that describes possible types of {@link INotificationUserModifiedData} to
 * be created.
 */
export enum UserModification {
  /** A {@link IUser} was created. */
  Created = "Created",
  /** A {@link IUser} was removed. */
  Removed = "Removed",
  /** A {@link IUser} was enabled (moved from archived mode back to regular/active mode). */
  Enabled = "Enabled",
  /** A {@link IUser} was disabled (moved from regular/active mode to archived mode). */
  Disabled = "Disabled",
  /** A {@link IGroup} properties changed. */
  GroupsChanged = "GroupsChanged",
  /** A {@link ISecurityClearance} properties changed. */
  ClearancesChanged = "ClearancesChanged",
  /** A {@link IUser} was modified. */
  ModifiedGeneral = "ModifiedGeneral",
}
