/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseConversionStrategy } from '../../unit_conversion/strategies/base_conversion_strategy';

/** Implementation of which converts mass from g/s to lbs/s. */
export interface IGramsPerSecondToPoundsPerSecondConversionStrategy
  extends IBaseConversionStrategy {}
