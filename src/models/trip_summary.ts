/* eslint-disable @typescript-eslint/no-empty-interface */
import { IDevice } from "./device";
import { IDriver } from "./driver";

/** The trip summary data for TripSummary report. */
export interface ITripSummary {
  /** Gets or sets the duration of the customer. */
  customerDuration: Date;
  /** Gets or sets the customer stop count. */
  customerStopCount: number;
  /** Gets number of distinct days driven. */
  daysDriven: Date[];
  /** Gets or sets the device. */
  device: IDevice;
  /** Gets or sets the distance. */
  distance: number;
  /** Gets or sets the driver. */
  driver: IDriver;
  /** Gets or sets the duration of the driving. */
  drivingDuration: Date;
  /** Gets or sets the duration of the home. */
  homeDuration: Date;
  /** Gets or sets the duration of the idling. */
  idlingDuration: Date;
  /** Gets or sets the maximum speed. */
  maximumSpeed: number;
  /** Gets or sets the duration of the office. */
  officeDuration: Date;
  /** Gets or sets the stop count of all trips. */
  stopCount: number;
  /** Gets or sets the duration of the stop. */
  stopDuration: Date;
}
