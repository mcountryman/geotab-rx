/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from '../../../geotab/checkmate/object_model/i_entity';
import { IDevice } from '../../../geotab/checkmate/object_model/i_device';
import { IDriver } from '../../../geotab/checkmate/object_model/i_driver';
import { IFuelTaxAttributes } from '../../../geotab/checkmate/object_model/i_fuel_tax_attributes';



/**
* Fuel tax reporting element. The available driving history for a is stored as a sequence
* of such details. Each next detail starts when and where the previous detail ended.
* A detail is identified by its parameters (enter and exit time, odometer, GPS odometer,
* latitude and longitude) and its attributes (jurisdiction, , toll road, authority).
* When any of the attributes changes, the current detail ends and a new detail begins.
* For more information, see IFTA Guide.
*/
export interface IFuelTaxDetail extends IEntity
{
  /** Gets or sets the attributes. */
  attributes: string;
  /** Gets or sets the authority. 'None' by default. */
  authority: string;
  /** Gets or sets the . */
  device: IDevice;
  /** Gets or sets the . */
  driver: IDriver;
  /** Gets or sets the GPS odometer, in km, at the enter time. */
  enterGpsOdometer: number;
  /** Gets or sets the latitude at the enter time. */
  enterLatitude: number;
  /** Gets or sets the longitude at the enter time. */
  enterLongitude: number;
  /** Gets or sets the odometer, in km, at the enter time. */
  enterOdometer: number;
  /** Gets or sets the time at which the detail begins. */
  enterTime: Date;
  /** Gets or sets the GPS odometer, in km, at the exit time. */
  exitGpsOdometer: number;
  /** Gets or sets the latitude at the exit time. */
  exitLatitude: number;
  /** Gets or sets the longitude at the exit time. */
  exitLongitude: number;
  /** Gets or sets the odometer, in km, at the exit time. */
  exitOdometer: number;
  /** Gets or sets the time at which the detail ends. */
  exitTime: Date;
  /** Gets or sets the attributes. */
  fuelTaxAttributes: IFuelTaxAttributes;
  /** Gets a value indicating whether the details has hourly data. */
  hasHourlyData: boolean;
  /**
  * Gets or sets the GPS odometer values, in km, at each hour within the detail's time
  * interval.
  */
  hourlyGpsOdometer: number[];
  /**
  * Gets or sets a list of values indicating whether the odometer at the corresponding
  * hour is interpolated.
  */
  hourlyIsOdometerInterpolated: boolean[];
  /** Gets or sets the latitude values at each hour within the detail's time interval. */
  hourlyLatitude: number[];
  /** Gets or sets the longitude values at each hour within the detail's time interval. */
  hourlyLongitude: number[];
  /** Gets or sets the odometer values, in km, at each hour within the detail's time interval. */
  hourlyOdometer: number[];
  /**
  * Gets or sets a value indicating whether the odometer values are based on engine
  * odometer records and/or odometer adjustment records, as opposed to GPS distances
  * alone.
  */
  isClusterOdometer: boolean;
  /** Gets or sets a value indicating whether the odometer at enter time is interpolated. */
  isEnterOdometerInterpolated: boolean;
  /** Gets or sets a value indicating whether the odometer at exit time is interpolated. */
  isExitOdometerInterpolated: boolean;
  /** Gets a value indicating whether the detail is negligible by time or distance. */
  isNegligible: boolean;
  /** Gets or sets the jurisdiction, such as a U.S. state or a Canadian province. */
  jurisdiction: string;
  /** Gets or sets the toll road name. null by default. */
  tollRoad: string;
  /** Gets or sets the last processed record versions. */
  versions: number[];
}
