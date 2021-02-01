/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseConversionStrategy } from "../../unit_conversion/strategies/base_conversion_strategy";
import { IUnitOfMeasure } from "../../engine/unit_of_measure";

/** Implementation of which converts pressure from inH2O to Pa. */
export interface IInchesOfWaterToPascalsConversionStrategy
  extends IBaseConversionStrategy {
  /**
   * @inheritdoc
   */
  unitOfMeasure: IUnitOfMeasure;
}
