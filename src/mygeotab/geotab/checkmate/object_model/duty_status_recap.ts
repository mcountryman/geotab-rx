/* eslint-disable @typescript-eslint/no-empty-interface */


/** Represents a single days total hours that count towards the cycle limit. */
export interface IDutyStatusRecap
{
  /** Gets the recap date. */
  dateTime: Date;
  /** Gets the duration of time counting towards cycle. */
  duration: Date;
}
