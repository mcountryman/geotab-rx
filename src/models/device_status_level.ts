/* eslint-disable @typescript-eslint/no-empty-interface */

/**
 * The device status level. Used to indicate the "level" of severity for a device's
 * status.
 */
export enum DeviceStatusLevel {
  /** The device has a critical problem. */
  Critical = 'Critical',
  /** The device has a problem. */
  Warning = 'Warning',
  /** The device status is OK. */
  Good = 'Good',
  /** The device is disabled. */
  Disabled = 'Disabled',
  /** The device status is currently unknown. */
  Unknown = 'Unknown',
}
