/* eslint-disable @typescript-eslint/no-empty-interface */

/** The big data average road speed API result. */
export interface IBigDataAverageRoadSpeed {
  /** Gets or sets the median speed during morning rush hour. */
  medianSpeedAmRush?: number;
  /** Gets or sets the median speed on off peak hours. */
  medianSpeedOffPeak?: number;
  /** Gets or sets the median speed during evening rush hour. */
  medianSpeedPmRush?: number;
  /** Gets or sets the median speed on the weekend. */
  medianSpeedWeekend?: number;
  /** Gets or sets the way Id. */
  wayId?: number;
}
