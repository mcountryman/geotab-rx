/* eslint-disable @typescript-eslint/no-empty-interface */

/** Represents total cycle hours that will be available in the up coming days. */
export interface IDutyStatusCycleAvailability {
  /** Gets the amount of cycle time available. */
  available: Date;
  /** Gets the cycle gain date. */
  dateTime: Date;
}
