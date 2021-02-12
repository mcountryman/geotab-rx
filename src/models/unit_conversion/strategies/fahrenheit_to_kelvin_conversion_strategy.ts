/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseConversionStrategy } from '../../unit_conversion/strategies/base_conversion_strategy';

/** Implementation of which converts temperatures from Fahrenheit to Kelvin degrees. */
export interface IFahrenheitToKelvinConversionStrategy
  extends IBaseConversionStrategy {}
