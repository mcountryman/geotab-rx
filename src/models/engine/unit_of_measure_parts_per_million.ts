/* eslint-disable @typescript-eslint/no-empty-interface */
import { IUnitOfMeasureSystem } from "../engine/unit_of_measure_system";

/** Represents the unit of measure for dimensionless quantities. */
export interface IUnitOfMeasurePartsPerMillion extends IUnitOfMeasureSystem {
  /** Gets the singleton instance. */
  value: IUnitOfMeasurePartsPerMillion;
}
