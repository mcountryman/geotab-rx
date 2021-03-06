/* eslint-disable @typescript-eslint/no-empty-interface */

/**
 * The Geotab GO device type enumeration. Geotab has produced various types of tracking
 * devices and this device type enumeration can be used to determine which type of
 * hardware a particular device is.
 */
export enum DeviceType {
  /** Unknown device type. */
  None = "None",
  /** GEOTAB unit (unsupported). */
  OldGeotab = "OldGeotab",
  /** GO Device. */
  GO2 = "GO2",
  /** GO3 Tracking Device. */
  GO3 = "GO3",
  /** GO4 Tracking Device. */
  GO4 = "GO4",
  /** GO4v3 Tracking Device - like GO4 but with larger memory and some new functionality. */
  GO4v3 = "GO4v3",
  /** GO5 Tracking Device. */
  GO5 = "GO5",
  /** GO6 Tracking Device. */
  GO6 = "GO6",
  /** GO7 Tracking Device. */
  GO7 = "GO7",
  /** GO8 Tracking Device. */
  GO8 = "GO8",
  /** GO9 Tracking Device. */
  GO9 = "GO9",
  /** Custom (third-party) device. */
  CustomDevice = "CustomDevice",
  /** GoDrive Mobile Device. */
  GoDriveDevice = "GoDriveDevice",
  /** Custom (third-party) automotive vehicle tracking device. */
  CustomVehicleDevice = "CustomVehicleDevice",
}
