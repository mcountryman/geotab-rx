/* eslint-disable @typescript-eslint/no-empty-interface */

/** Used to represent the duration for which the report is generated. */
export enum ReportPeriod {
  /** None period */
  None = "None",
  /** For the previous hour */
  PreviousHour = "PreviousHour",
  /** For today. */
  Today = "Today",
  /** For yesterday */
  Yesterday = "Yesterday",
  /** For this week */
  ThisWeek = "ThisWeek",
  /** For previous week */
  LastWeek = "LastWeek",
  /** For this month */
  ThisMonth = "ThisMonth",
  /** For previous month */
  LastMonth = "LastMonth",
  /** Previous 24 hours */
  PreviousDay = "PreviousDay",
  /** Previous 7 days */
  PreviousWeek = "PreviousWeek",
  /** Last three months */
  LastThreeMonths = "LastThreeMonths",
  /** Previous four weeks */
  PreviousFourWeeks = "PreviousFourWeeks",
  /** Last six months */
  LastSixMonths = "LastSixMonths",
  /** Last twelve months */
  LastTwelveMonths = "LastTwelveMonths",
  /** Year to date. */
  YearToDate = "YearToDate",
  /** Previous two weeks */
  PreviousTwoWeeks = "PreviousTwoWeeks",
  /** Custom time period, not available through user interface */
  Custom = "Custom",
  /** The this working week */
  ThisWorkingWeek = "ThisWorkingWeek",
  /** The last working week */
  LastWorkingWeek = "LastWorkingWeek",
  /** The previous thirty days */
  PreviousThirtyDays = "PreviousThirtyDays",
  /** The last quarter */
  LastQuarter = "LastQuarter",
}
