/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBinaryPayload } from './binary_payload';
import { IDevice } from './device';

/**  A message that requests the current location of a device through Iridium. */
export interface IRequestLocation extends IBinaryPayload {
  /**
   * Gets or sets the device associated with the location request Used to look up device
   * in BinaryPayloadBridge
   */
  device: IDevice;
  /** Gets or sets the device's hardware ID. */
  deviceId: number;
  /** Gets the binary data. */
  payload: number[];
}
