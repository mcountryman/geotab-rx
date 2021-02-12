/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseConversionStrategy } from '../../unit_conversion/strategies/base_conversion_strategy';

/** Implementation of which converts speed from miles/hour to feet/sec. */
export interface IMilesPerHourToFeetPerSecondConversionStrategy
  extends IBaseConversionStrategy {}
