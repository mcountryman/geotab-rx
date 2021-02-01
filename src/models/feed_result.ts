/* eslint-disable @typescript-eslint/no-empty-interface */

/**  An object containing the result of a feed method. */
export interface IFeedResult<T> {
  /** Gets or sets a list of data returned by the feed. */
  data?: T[];
  /**
   * Gets or sets the last version of the data returned by the feed call. If this parameter
   * is passed back into the feed call, then returned data will be the changes that occurred
   * after the last feed call was made. In this way the feed can return a continuous
   * stream of data.
   */
  toVersion?: number;
}
