/* eslint-disable @typescript-eslint/no-empty-interface */
import { IFuelUsedEvent } from '../../../../geotab/checkmate/object_model/fuel/i_fuel_used_event';
import { FuelUpEventConfidences } from '../../../../geotab/checkmate/object_model/fuel/fuel_up_event_confidences';
import { IFillUpExtrema } from '../../../../geotab/checkmate/object_model/fuel/i_fill_up_extrema';
import { IFuelTankCapacity } from '../../../../geotab/checkmate/object_model/fuel/i_fuel_tank_capacity';
import { IFuelTransaction } from '../../../../geotab/checkmate/object_model/fuel/i_fuel_transaction';



/** An event representing adding fuel to a vehicle. */
export interface IFillUp extends IFuelUsedEvent
{
  /** Gets or sets the confidence associated with the transaction. */
  confidence?: FuelUpEventConfidences;
  /** Gets or sets the volume derived from fuel tank capacity. */
  derivedVolume?: number;
  /** Gets or sets the difference in fuel out vs fuel in. */
  deviationFactor?: number;
  /** Gets or sets the raw fuel transaction. */
  fuelTransactions?: IFuelTransaction[];
  /** Gets or sets the fuel tank capacity. */
  tankCapacity?: IFuelTankCapacity;
  /** Gets or sets the fuel tank level change. */
  tankLevelExtrema?: IFillUpExtrema;
  /** Gets or sets the total fuel used up to this point in time. */
  totalFuelUsed?: number;
}
