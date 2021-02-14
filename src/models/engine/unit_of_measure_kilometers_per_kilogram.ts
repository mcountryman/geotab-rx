/* eslint-disable @typescript-eslint/no-empty-interface */
import { IUnitOfMeasureSystem } from "../engine/unit_of_measure_system";

/** Represents the unit of measure for the ratio of distance to fuel consumption. */
export interface IUnitOfMeasureKilometersPerKilogram
  extends IUnitOfMeasureSystem {
  /** Gets the singleton instance. */
  value: IUnitOfMeasureKilometersPerKilogram;
}
