/* eslint-disable @typescript-eslint/no-empty-interface */
import { IUnitOfMeasureSystem } from "../engine/unit_of_measure_system";

/** Represents the unit of measure for volumetric flow rate. */
export interface IUnitOfMeasureCubicMetersPerSecond
  extends IUnitOfMeasureSystem {
  /** Gets the singleton instance. */
  value: IUnitOfMeasureCubicMetersPerSecond;
}
