/* eslint-disable @typescript-eslint/no-empty-interface */
import { FuelTaxRoadType } from "./fuel_tax_road_type";

/** Fuel tax attributes. */
export interface IFuelTaxAttributes {
  /** Gets or sets the road type. */
  roadType?: FuelTaxRoadType;
  /** Gets or sets a value indicating whether updates are available to this detail. */
  updatesAvailable?: boolean;
}
