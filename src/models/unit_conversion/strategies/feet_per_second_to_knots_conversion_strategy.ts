/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseConversionStrategy } from '../../unit_conversion/strategies/base_conversion_strategy';

/** Implementation of which converts speed from feet/sec to knots. */
export interface IFeetPerSecondToKnotsConversionStrategy
  extends IBaseConversionStrategy {}
