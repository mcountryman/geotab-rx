/* eslint-disable @typescript-eslint/no-empty-interface */
import { IFuelEvent } from '../../../../geotab/checkmate/object_model/fuel/i_fuel_event';
import { IDevice } from '../../../../geotab/checkmate/object_model/i_device';
import { IDriver } from '../../../../geotab/checkmate/object_model/i_driver';



/** An event representing fuel used for a vehicle. */
export interface IFuelUsedEvent extends IFuelEvent
{
  /** Gets or sets the associated with the transaction. */
  device: IDevice;
  /** Gets or sets the distance traveled since the last fill-up. */
  distance?: number;
  /** Gets or sets the associated with the transaction. */
  driver: IDriver;
}
