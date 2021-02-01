/* eslint-disable @typescript-eslint/no-empty-interface */
import { ITransitionTime } from "./transition_time";

/** Adjustment rule for timezones. */
export interface ITimeZoneInfoAdjustmentRule {
  /** Gets the date end. */
  dateEnd?: Date;
  /** Gets the date start. */
  dateStart?: Date;
  /** Gets the daylight delta. */
  daylightDelta: Date;
  /** Gets the daylight transition end. */
  daylightTransitionEnd: ITransitionTime;
  /** Gets the daylight transition start. */
  daylightTransitionStart: ITransitionTime;
}
