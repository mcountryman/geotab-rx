/* eslint-disable @typescript-eslint/no-empty-interface */


/** Transition time for adjustment rule. */
export interface ITransitionTime
{
  /** Gets the day. */
  day: number;
  /** Gets the day of week. */
  dayOfWeek?: number;
  /**
  * Gets a value indicating whether DST is fixed Day in month or should be calculated
  * with Week and DayOfWeek.
  */
  isFixedDateRule: boolean;
  /** Gets the month. */
  month: number;
  /** Gets the time of day. */
  timeOfDay?: Date;
  /** Gets the week. */
  week: number;
}
