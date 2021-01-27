/* eslint-disable @typescript-eslint/no-empty-interface */


/** A list of speed limit change results. */
export interface ISpeedLimitChanges
{
  /**
  * Gets or sets the array of ratios that represent the ratio of distance or time (depends
  * on the usage context) changes between two coordinate indexes where a change in the
  * speed limit happened. For example, if the speed limit changes halfway in between
  * point2 and point3, we would return and index of 2.5.
  */
  indexRatios: number[];
  /** Gets or sets the array of speed limit change values for each index ratio. */
  speedLimits: number[];
}
