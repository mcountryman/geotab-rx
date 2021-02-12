/* eslint-disable @typescript-eslint/no-empty-interface */
import { IWay } from './way';

/** A list of way segments and details. */
export interface IWayPathDetails {
  /**
   * Gets or sets the array of ratios that represent the ratio of distance changes between
   * two coordinate indexes where a change in the way segment happened. For example,
   * if the speed limit changes halfway in between point2 and point3, we would return
   * and index of 2.5.
   */
  indexRatios: number[];
  /** Gets or sets the array of way segment values for each index ratio. */
  waySegments: IWay[];
}
