/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseConversionStrategy } from "../../unit_conversion/strategies/base_conversion_strategy";

/** Implementation of which converts fuel consumption from km/L to L/100 km. */
export interface IKilometersPerLiterToLitersPer100KilometersConversionStrategy
  extends IBaseConversionStrategy {}
