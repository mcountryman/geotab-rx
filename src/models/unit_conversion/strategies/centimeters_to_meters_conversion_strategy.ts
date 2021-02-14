/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseConversionStrategy } from "../../unit_conversion/strategies/base_conversion_strategy";
import { IUnitOfMeasure } from "../../engine/unit_of_measure";

/** Implementation of which converts length from cm to m. */
export interface ICentimetersToMetersConversionStrategy
  extends IBaseConversionStrategy {
  /**
   * @inheritdoc
   */
  unitOfMeasure: IUnitOfMeasure;
}
