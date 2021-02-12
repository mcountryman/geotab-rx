/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseConversionStrategy } from '../../unit_conversion/strategies/base_conversion_strategy';

/** Implementation of which converts temperature from Celsius to Fahrenheit degrees. */
export interface ICelsiusToFahrenheitConversionStrategy
  extends IBaseConversionStrategy {}
