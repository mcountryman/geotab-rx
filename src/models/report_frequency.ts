/* eslint-disable @typescript-eslint/no-empty-interface */

/** The frequency with which reports can be generated. */
export enum ReportFrequency {
  /** The default frequency, none. */
  None = "None",
  /** Every 5 minutes. */
  FiveMinutes = "FiveMinutes",
  /** Every 30 minutes. */
  ThirtyMinutes = "ThirtyMinutes",
  /** Every hour. */
  Hourly = "Hourly",
  /** Daily */
  Daily = "Daily",
  /** Weekly */
  Weekly = "Weekly",
  /** Monthly */
  Monthly = "Monthly",
  /** Add hoc - when ever needed. */
  WhenNeed = "WhenNeed",
  /** Every minute */
  Minute = "Minute",
  /** Every two weeks */
  BiWeekly = "BiWeekly",
  /** Every four weeks */
  FourWeeks = "FourWeeks",
  /** Every quarter */
  Quarterly = "Quarterly",
}
