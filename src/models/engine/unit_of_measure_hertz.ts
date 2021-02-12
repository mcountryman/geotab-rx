/* eslint-disable @typescript-eslint/no-empty-interface */
import { IUnitOfMeasureSystem } from '../engine/unit_of_measure_system';

/** Represents the unit of measure an amount of cycles per second. */
export interface IUnitOfMeasureHertz extends IUnitOfMeasureSystem {
  /** Gets the singleton instance. */
  value: IUnitOfMeasureHertz;
}
