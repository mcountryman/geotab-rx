/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseConversionStrategy } from '../../unit_conversion/strategies/base_conversion_strategy';
import { IUnitOfMeasure } from '../../engine/unit_of_measure';

/** Implementation of which converts angular degrees to revolutions. */
export interface IDegreesToRevolutionsConversionStrategy
  extends IBaseConversionStrategy {
  /** Gets which unit of measure the converted value now references. */
  unitOfMeasure: IUnitOfMeasure;
}
