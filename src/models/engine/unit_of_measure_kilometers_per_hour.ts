/* eslint-disable @typescript-eslint/no-empty-interface */
import { IUnitOfMeasureSystem } from '../engine/unit_of_measure_system';

/** Represents the unit of measure for speed. */
export interface IUnitOfMeasureKilometersPerHour extends IUnitOfMeasureSystem {
  /** Gets the singleton instance. */
  value: IUnitOfMeasureKilometersPerHour;
}
