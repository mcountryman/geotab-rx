/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseConversionStrategy } from '../../unit_conversion/strategies/base_conversion_strategy';
import { IUnitOfMeasure } from '../../engine/unit_of_measure';

/** Implementation of which converts temperatures from Fahrenheit to Celsius degrees. */
export interface IFahrenheitToCelsiusConversionStrategy
  extends IBaseConversionStrategy {
  /** Gets the unit of measure which the converted value now references. */
  unitOfMeasure: IUnitOfMeasure;
}
