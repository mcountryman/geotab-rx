/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntityWithVersion } from '../entity_with_version';
import { IDevice } from '../device';

/** Log of fueling events. */
export interface IFuelUsed extends IEntityWithVersion {
  /** Gets or sets the UTC date and time of the transaction. */
  dateTime?: Date;
  /** Gets or sets the StatusData for the {@link IDevice} specified. */
  device: IDevice;
  /** Gets or sets the volume of fuel purchased in Liters. Default [0]. */
  totalFuelUsed?: number;
}
