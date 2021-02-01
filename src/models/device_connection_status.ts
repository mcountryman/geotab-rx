/* eslint-disable @typescript-eslint/no-empty-interface */

/** The state of the. {@link IDeviceConnection} */
export enum DeviceConnectionStatus {
  /** The device is currently connected and active */
  Active = "Active",
  /** The connection is inactive and was terminated normally */
  Disconnected = "Disconnected",
  /** The device is currently connected but not active */
  Inactive = "Inactive",
}
