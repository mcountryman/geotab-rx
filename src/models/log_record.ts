/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from "./entity";
import { IDevice } from "./device";

/**
 * Record of log entries containing data for a device's position and speed at a specific
 * date and time.
 */
export interface ILogRecord extends IEntity {
  /** Gets or sets the date and time the log was recorded. */
  dateTime?: Date;
  /** Gets or sets the {@link IDevice} this log belongs to. */
  device: IDevice;
  /**
   * Gets or sets a value indicating whether this instance is the last active record
   * in the vehicle's active period. Possible values are:. false: The record is within
   * the active period and not the last active recordtrue: The record is within the active
   * period and is the last active recordnull: The record is not within the active period
   * (ex. GPS heartbeat)
   */
  isLastActive?: boolean;
  /** Gets or sets the latitude of the log record. */
  latitude: number;
  /** Gets or sets the longitude of the log record. */
  longitude: number;
  /** Gets or sets the logged speed or an invalid speed (in km/h). */
  speed: number;
}
