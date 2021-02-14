/* eslint-disable @typescript-eslint/no-empty-interface */
import { IUnitOfMeasureSystem } from "../engine/unit_of_measure_system";

/** Represents the unit of measure for mass per second. */
export interface IUnitOfMeasureGramsPerSecond extends IUnitOfMeasureSystem {
  /** Gets the singleton instance. */
  value: IUnitOfMeasureGramsPerSecond;
}
