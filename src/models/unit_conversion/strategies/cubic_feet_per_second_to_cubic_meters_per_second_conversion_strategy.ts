/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseConversionStrategy } from '../../unit_conversion/strategies/base_conversion_strategy';
import { IUnitOfMeasure } from '../../engine/unit_of_measure';

/** Implementation of which converts ft^3/s to m^3/s. */
export interface ICubicFeetPerSecondToCubicMetersPerSecondConversionStrategy
  extends IBaseConversionStrategy {
  /**
   * @inheritdoc
   */
  unitOfMeasure: IUnitOfMeasure;
}
