/* eslint-disable @typescript-eslint/no-empty-interface */


/** An object with {@link ITimeZoneInfo} */
export interface IDateTimeWithTimeZone
{
  /** Gets the local. {@link IDateTime} */
  localDateTime: Date;
  /** Gets the {@link ITimeZoneInfo}. */
  timeZone: any;
}
