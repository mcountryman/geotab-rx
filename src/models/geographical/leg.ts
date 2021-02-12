/* eslint-disable @typescript-eslint/no-empty-interface */
import { IWaypoint } from '../geographical/waypoint';
import { IStep } from '../geographical/step';

/** A single leg of {@link IWaypoint}s. */
export interface ILeg {
  /** Gets or sets the destination {@link IWaypoint} of this leg. */
  destination: IWaypoint;
  /** Gets or sets the distance estimate for this leg in kilometers. */
  distance: number;
  /** Gets or sets the travel time duration estimate for this leg. */
  duration: Date;
  /** Gets or sets the origin {@link IWaypoint} of this leg. */
  origin: IWaypoint;
  /** Gets or sets the ordered sequence of this leg. */
  sequence: number;
  /**
   * Gets or sets the steps denoting information about each separate {@link IStep} of
   * the leg.
   */
  steps: IStep[];
}
