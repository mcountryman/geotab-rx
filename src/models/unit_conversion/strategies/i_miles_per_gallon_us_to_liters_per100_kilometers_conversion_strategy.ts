/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseConversionStrategy } from '../../unit_conversion/strategies/base_conversion_strategy';

/** Implementation of which converts fuel consumption from MPG (US) to L/100 km. */
export interface IMilesPerGallonUsToLitersPer100KilometersConversionStrategy
  extends IBaseConversionStrategy {}
