/* eslint-disable @typescript-eslint/no-empty-interface */

/** MyAdmin Device Recall/Replacement request status. */
export interface IDeviceReplacementStatus {
  /** Gets or sets Serial number of the device. */
  serialNumber: string;
  /**
   * Gets or sets a value indicating whether replacement initiation request is successful
   * or not.
   */
  success: boolean;
}
