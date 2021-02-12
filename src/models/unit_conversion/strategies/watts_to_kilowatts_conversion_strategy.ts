/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseConversionStrategy } from '../../unit_conversion/strategies/base_conversion_strategy';

/** Implementation of which converts electricity from W to kW. */
export interface IWattsToKilowattsConversionStrategy
  extends IBaseConversionStrategy {}
