/* eslint-disable @typescript-eslint/no-empty-interface */

/**
 * This class stores information of devices that need replacement. This information
 * is coming from MyAdmin.
 */
export interface IReplacementDeviceDetails {
  /** Gets or sets Hardware Id. */
  hardwareId: number;
  /** Gets or sets Serial number of the device. */
  serialNumber: string;
}
