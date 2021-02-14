/* eslint-disable @typescript-eslint/no-empty-interface */
import { IUnitOfMeasureSystem } from "../engine/unit_of_measure_system";

/** Represents the unit of measure for acceleration. */
export interface IUnitOfMeasureNewtonMeters extends IUnitOfMeasureSystem {
  /** Gets the singleton instance. */
  value: IUnitOfMeasureNewtonMeters;
}
