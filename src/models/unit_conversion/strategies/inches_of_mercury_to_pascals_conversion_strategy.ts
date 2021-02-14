/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseConversionStrategy } from "../../unit_conversion/strategies/base_conversion_strategy";
import { IUnitOfMeasure } from "../../engine/unit_of_measure";

/** Implementation of which converts pressure from Hg to Pa. */
export interface IInchesOfMercuryToPascalsConversionStrategy
  extends IBaseConversionStrategy {
  /**
   * @inheritdoc
   */
  unitOfMeasure: IUnitOfMeasure;
}
