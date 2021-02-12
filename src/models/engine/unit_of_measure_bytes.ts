/* eslint-disable @typescript-eslint/no-empty-interface */
import { IUnitOfMeasureSystem } from '../engine/unit_of_measure_system';

/** Represents the unit of measure for digital storage. */
export interface IUnitOfMeasureBytes extends IUnitOfMeasureSystem {
  /** Gets the singleton instance. */
  value: IUnitOfMeasureBytes;
}
