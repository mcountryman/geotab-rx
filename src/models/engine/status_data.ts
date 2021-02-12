/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntityWithVersion } from '../entity_with_version';
import { IDevice } from '../device';
import { IDiagnostic } from '../engine/diagnostic';
import { IController } from '../engine/controller';

/**
 *  A record that represents an engine status record from the engine system of the
 * specific {@link IDevice}.
 */
export interface IStatusData extends IEntityWithVersion {
  /** Gets or sets the {@link IDevice} specified. */
  controller: IController;
  /** Gets or sets the recorded value of the diagnostic parameter. */
  data?: number;
  /** Gets or sets the date and time of the logged event. */
  dateTime?: Date;
  /** Gets or sets the StatusData for the {@link IDevice} specified. */
  device?: IDevice;
  /** Gets or sets the {@link IDevice} specified. */
  diagnostic?: IDiagnostic;
  /**
   * Gets or sets a value indicating whether this instance is the last active record
   * in the vehicle's active period. Possible values are:. false: The record is within
   * the active period and not the last active recordtrue: The record is within the active
   * period and is the last active recordnull: The record is not within the active period
   * or the diagnostic does not observe active state (ex. Accelerometer)
   */
  isLastActive?: boolean;
}
