/* eslint-disable @typescript-eslint/no-empty-interface */
import { IFuelEvent } from "../fuel/fuel_event";
import { IDevice } from "../device";
import { IDriver } from "../driver";

/** An event representing fuel used for a vehicle. */
export interface IFuelUsedEvent extends IFuelEvent {
  /** Gets or sets the associated with the transaction. */
  device: IDevice;
  /** Gets or sets the distance traveled since the last fill-up. */
  distance?: number;
  /** Gets or sets the associated with the transaction. */
  driver: IDriver;
}
