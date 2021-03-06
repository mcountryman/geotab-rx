/* eslint-disable @typescript-eslint/no-empty-interface */

/** The charging state as reported by the device. */
export enum DeviceReportedChargingState {
  /** The vehicle is not charging. */
  NotCharging = "NotCharging",
  /** The vehicle is charging using alternating current. */
  ACCharging = "ACCharging",
  /** The vehicle is charging using direct current. */
  DCCharging = "DCCharging",
  /** The vehicle is charging but it is unknown how it is charging. */
  ChargingUnknownSource = "ChargingUnknownSource",
}
