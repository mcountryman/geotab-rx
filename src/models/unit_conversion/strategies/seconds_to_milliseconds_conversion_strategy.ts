/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseConversionStrategy } from '../../unit_conversion/strategies/base_conversion_strategy';

/** Implementation of which converts time from seconds to milliseconds. */
export interface ISecondsToMillisecondsConversionStrategy
  extends IBaseConversionStrategy {}
