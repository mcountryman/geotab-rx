/* eslint-disable @typescript-eslint/no-empty-interface */
import { IDataToComponentContent } from './data_to_component_content';
import { VehicleCommand } from './vehicle_command';

/** Message content to send {@link IVehicleCommand}s to a vehicle. */
export interface IVehicleCommandContent extends IDataToComponentContent {
  /** Gets or sets the command to send to the vehicle. */
  command: VehicleCommand;
  /**
   * Gets or sets the {@link IDateTime} the command was sent. The commands that are too
   * old will be ignored.
   */
  commandDate: Date;
  /**
   * Gets or sets an optional payload that goes with the command. If not needed it will
   * be set to 0.
   */
  commandPayload: number;
}
