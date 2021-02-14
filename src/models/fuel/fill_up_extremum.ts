/* eslint-disable @typescript-eslint/no-empty-interface */
import { FuelTankCapacitySource } from "../fuel/fuel_tank_capacity_source";

/**
 * An event representing adding fuel to a vehicle. An extremum representing either
 * the minimum or maximum point of fuel used for a given {@link IFillUp}.
 */
export interface IFillUpExtremum {
  /**
   * Gets or sets the data of the extremum. This is derived from the {@link IStatusData}
   * record used to calculate the extremum.
   */
  data?: number;
  /**
   * Gets or sets the date time of the extremum. This is derived from the {@link IStatusData}
   * record used to calculate the extremum.
   */
  dateTime?: Date;
  /**
   * Gets or sets the maxima type as the fuel tank capacity source. This is derived from
   * the specific diagnostic type of the {@link IStatusData} records used to calculate
   * the extremum.
   */
  source: FuelTankCapacitySource;
}
