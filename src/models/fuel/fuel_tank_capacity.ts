/* eslint-disable @typescript-eslint/no-empty-interface */
import { FuelTankCapacitySource } from "../fuel/fuel_tank_capacity_source";

/** Represent a vehicle's fuel tank capacity and how it was derived. */
export interface IFuelTankCapacity {
  /** Gets or sets the tank capacity source. */
  source: FuelTankCapacitySource;
  /** Gets or sets the volume (L). */
  volume: number;
}
