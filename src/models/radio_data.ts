/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from "./entity";
import { RadioConnectionStatus } from "./radio_connection_status";
import { RadioConnectionType } from "./radio_connection_type";
import { IRadioDownloader } from "./radio_downloader";
import { IDevice } from "./device";

/** The statistical information about a radio data connection. */
export interface IRadioData extends IEntity {
  /** Gets or sets the bytes received. */
  bytesReceived?: number;
  /** Gets or sets the bytes sent. */
  bytesSent?: number;
  /** Gets or sets the {@link IDevice}. */
  device: IDevice;
  /** Gets the duration. */
  duration?: Date;
  /** Gets or sets the end time. */
  endTime?: Date;
  /** Gets or sets the radio connection status. */
  radioConnectionStatus?: RadioConnectionStatus;
  /** Gets or sets the type of the radio connection. */
  radioConnectionType?: RadioConnectionType;
  /**
   * Gets or sets the {@link IRadioDownloader} associated with this RadioData. Can be
   * NULL for example 802.11 data that does not originate from a {@link IRadioDownloader}.
   */
  radioDownloader: IRadioDownloader;
  /** Gets or sets the signal strength. */
  signalStrength?: number;
  /** Gets or sets the start time. */
  startTime?: Date;
}
