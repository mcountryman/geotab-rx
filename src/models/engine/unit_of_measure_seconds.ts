/* eslint-disable @typescript-eslint/no-empty-interface */
import { IUnitOfMeasureSystem } from '../engine/unit_of_measure_system';

/** Represents the unit of measure for an amount of time. */
export interface IUnitOfMeasureSeconds extends IUnitOfMeasureSystem {
  /** Gets the singleton instance. */
  value: IUnitOfMeasureSeconds;
}
