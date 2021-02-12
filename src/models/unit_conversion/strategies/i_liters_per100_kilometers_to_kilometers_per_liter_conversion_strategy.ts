/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseConversionStrategy } from '../../unit_conversion/strategies/base_conversion_strategy';
import { IUnitOfMeasure } from '../../engine/unit_of_measure';

/** Implementation of which converts fuel consumption from L/100 km to km/liter. */
export interface ILitersPer100KilometersToKilometersPerLiterConversionStrategy
  extends IBaseConversionStrategy {
  /**
   * @inheritdoc
   */
  unitOfMeasure: IUnitOfMeasure;
}
