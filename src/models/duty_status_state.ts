/* eslint-disable @typescript-eslint/no-empty-interface */

/**  The state of the record. */
export enum DutyStatusState {
  /** The log is active and has been accepted by the driver. */
  Active = "Active",
  /**
   * The log is inactive. It has been removed or it is the modification history of a
   * log.
   */
  Inactive = "Inactive",
  /** The log is a pending edit request from another user. */
  Requested = "Requested",
  /** The log is a rejected edit request from another user. */
  Rejected = "Rejected",
}
