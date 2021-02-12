/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseConversionStrategy } from '../../unit_conversion/strategies/base_conversion_strategy';

/** Implementation of which converts pressure from Pa to inHg. */
export interface IPascalsToInchesOfMercuryConversionStrategy
  extends IBaseConversionStrategy {}
