/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseConversionStrategy } from '../../unit_conversion/strategies/base_conversion_strategy';

/** Implementation of which converts speed from knots to meters/sec. */
export interface IKnotsToMetersPerSecondConversionStrategy
  extends IBaseConversionStrategy {}
