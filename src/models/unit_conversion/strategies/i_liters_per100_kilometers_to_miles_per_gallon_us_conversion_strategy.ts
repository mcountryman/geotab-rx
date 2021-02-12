/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseConversionStrategy } from '../../unit_conversion/strategies/base_conversion_strategy';

/** Implementation of which converts fuel consumption from L/100 km to MPG (US). */
export interface ILitersPer100KilometersToMilesPerGallonUsConversionStrategy
  extends IBaseConversionStrategy {}
