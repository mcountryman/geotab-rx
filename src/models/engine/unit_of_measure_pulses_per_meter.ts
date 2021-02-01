/* eslint-disable @typescript-eslint/no-empty-interface */
import { IUnitOfMeasureSystem } from "../engine/unit_of_measure_system";

/** Represents the unit of measure an amount of digital pulses per meter. */
export interface IUnitOfMeasurePulsesPerMeter extends IUnitOfMeasureSystem {
  /** Gets the singleton instance. */
  value: IUnitOfMeasurePulsesPerMeter;
}
