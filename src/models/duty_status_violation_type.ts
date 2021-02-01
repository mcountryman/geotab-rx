/* eslint-disable @typescript-eslint/no-empty-interface */

/**  The different types of {@link IDutyStatusViolation}. */
export enum DutyStatusViolationType {
  /** Driving limits. */
  Driving = "Driving",
  /** Rest requirements. */
  Rest = "Rest",
  /** On-duty limits. */
  Duty = "Duty",
  /** Work day limits */
  Workday = "Workday",
  /** Cycle limits. */
  Cycle = "Cycle",
  /** Daily driving limits. */
  DailyDriving = "DailyDriving",
  /** Daily rest requirements. */
  DailyRest = "DailyRest",
  /** Daily duty limits. */
  DailyDuty = "DailyDuty",
  /** Daily off-duty requirements. */
  DailyOff = "DailyOff",
  /** Cycle rest requirements. */
  CycleRest = "CycleRest",
  /** On-duty since cycle rest limit. */
  DutySinceCycleRest = "DutySinceCycleRest",
}
