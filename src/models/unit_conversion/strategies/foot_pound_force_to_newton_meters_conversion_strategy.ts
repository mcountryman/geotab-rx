/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseConversionStrategy } from "../../unit_conversion/strategies/base_conversion_strategy";
import { IUnitOfMeasure } from "../../engine/unit_of_measure";

/** Implementation of which converts from ft lbf to N m. */
export interface IFootPoundForceToNewtonMetersConversionStrategy
  extends IBaseConversionStrategy {
  /** Gets the unit of measure that the converted value now references. */
  unitOfMeasure: IUnitOfMeasure;
}
