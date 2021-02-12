/* eslint-disable @typescript-eslint/no-empty-interface */

/** Indicates whether administrator of data base requires training or not */
export enum RequireTraining {
  /** Unknown status */
  Unknown = 'Unknown',
  /** Yes, administrator requires training */
  Yes = 'Yes',
  /** No, administrator doesn't require training */
  No = 'No',
  /** Maybe later */
  Maybe = 'Maybe',
}
