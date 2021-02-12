/* eslint-disable @typescript-eslint/no-empty-interface */

/**  The origin of a . */
export enum DutyStatusOrigin {
  /** Automatic recorded by device */
  Automatic = 'Automatic',
  /** Manual entry by driver. */
  Manual = 'Manual',
  /** Other authenticated user. */
  OtherUser = 'OtherUser',
  /** Unassigned driver. */
  Unassigned = 'Unassigned',
}
