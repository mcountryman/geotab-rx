/* eslint-disable @typescript-eslint/no-empty-interface */
import { DeviceConnectionStatus } from '../../../geotab/checkmate/object_model/device_connection_status';
import { IDevice } from '../../../geotab/checkmate/object_model/i_device';



/** Represents a connection from a GO device. */
export interface IDeviceConnection
{
  /** Gets or sets gets the {@link IDevice}. */
  device: IDevice;
  /** Gets or sets the state of the connection. */
  deviceConnectionStatus: DeviceConnectionStatus;
  /** Gets or sets the date and time the connected was ended in UTC. */
  endDate?: Date;
  /** Gets or sets the date and time the connection was started in UTC. */
  startDate?: Date;
}
