/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseConversionStrategy } from "../../unit_conversion/strategies/base_conversion_strategy";
import { IUnitOfMeasure } from "../../engine/unit_of_measure";

/** Implementation of which converts temperatures from Kelvin to Celsius degrees. */
export interface IKelvinToCelsiusConversionStrategy
  extends IBaseConversionStrategy {
  /**
   * @inheritdoc
   */
  unitOfMeasure: IUnitOfMeasure;
}
