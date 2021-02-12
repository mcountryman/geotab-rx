/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseConversionStrategy } from '../../unit_conversion/strategies/base_conversion_strategy';

/** Implementation of which converts distance from miles to km. */
export interface IMilesToKilometersConversionStrategy
  extends IBaseConversionStrategy {}
