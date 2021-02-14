/* eslint-disable @typescript-eslint/no-empty-interface */

/** An enum indicating the type of a trip. */
export enum TripType {
  /** The device does not have a specific {@link ITripType} assigned. */
  Unknown = "Unknown",
  /** The device is in private mode and will have it's GPS data hidden. */
  Private = "Private",
  /** The device is a special NoGPS device. This device will report speed but not position. */
  NoGpsDevice = "NoGpsDevice",
  /**
   * While a device has this {@link ITripType} it will not send any positional or speed
   * data.
   */
  NoGpsOrSpeedDevice = "NoGpsOrSpeedDevice",
}
