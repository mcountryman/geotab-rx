/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseConversionStrategy } from "../../unit_conversion/strategies/base_conversion_strategy";

/** Implementation of which converts temperature from Kelvin to Fahrenheit degrees. */
export interface IKelvinToFahrenheitConversionStrategy
  extends IBaseConversionStrategy {}
