/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseConversionStrategy } from '../../unit_conversion/strategies/base_conversion_strategy';

/** Implementation of which converts velocity from mph/s to kph/s. */
export interface IKilometersPerHourPerSecondToMilesPerHourPerSecondConversionStrategy
  extends IBaseConversionStrategy {}
