/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseConversionStrategy } from '../../unit_conversion/strategies/base_conversion_strategy';

/** Implementation of which converts frequency from MHz to kHz. */
export interface IMegahertzToKilohertzConversionStrategy
  extends IBaseConversionStrategy {}
