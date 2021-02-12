/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseConversionStrategy } from '../../unit_conversion/strategies/base_conversion_strategy';

/** Implementation of which converts material consumption from L/km to gal/mi. */
export interface ILitersPerKilometerToGallonsUsPerMileConversionStrategy
  extends IBaseConversionStrategy {}
