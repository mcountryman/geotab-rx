/* eslint-disable @typescript-eslint/no-empty-interface */
import { IUnitOfMeasure } from "../../engine/unit_of_measure";

/**
 * Base implementation of which converts measurements units using basic value multiplied
 * by conversion factor.
 */
export interface IBaseConversionStrategy {
  /** Gets the amount to multiply a value by to convert to another unit of measure. */
  conversionFactor: number;
  /** Gets signifies which unit of measure the converted value now references. */
  unitOfMeasure: IUnitOfMeasure;
}
