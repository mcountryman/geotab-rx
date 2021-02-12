/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseConversionStrategy } from '../../unit_conversion/strategies/base_conversion_strategy';

/** Implementation of which converts pulses/mile to pulses/km. */
export interface IPulsesPerMileToPulsesPerKilometerConversionStrategy
  extends IBaseConversionStrategy {}
