/* eslint-disable @typescript-eslint/no-empty-interface */
import { IUnitOfMeasureSystem } from "../engine/unit_of_measure_system";

/** Represents the unit of measure an amount of circulation rotations. */
export interface IUnitOfMeasureRevolutions extends IUnitOfMeasureSystem {
  /** Gets the singleton instance. */
  value: IUnitOfMeasureRevolutions;
}
