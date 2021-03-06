/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseConversionStrategy } from "../../unit_conversion/strategies/base_conversion_strategy";

/** Implementation of which converts fuel consumption from L/100 km to MPG (Imperial). */
export interface ILitersPer100KilometersToMilesPerGallonImperialConversionStrategy
  extends IBaseConversionStrategy {}
