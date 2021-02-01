/* eslint-disable @typescript-eslint/no-empty-interface */

/**
 * The interval in which a {@link IDiagnostic} reading is monitored, may be logged
 * and the slope can be drawn between values and interpolated according to the slope
 * of the line.
 */
export enum ValidLoggingPeriod {
  /** No period in which it is valid to interpolate. */
  None = "None",
  /** May be logged within the active state of the device. */
  Active = "Active",
  /** May be logged within the power state of the device. */
  Power = "Power",
}
