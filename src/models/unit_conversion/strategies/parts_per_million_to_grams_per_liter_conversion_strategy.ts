/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseConversionStrategy } from '../../unit_conversion/strategies/base_conversion_strategy';

/** Implementation of which converts speed from ppm to g/L. */
export interface IPartsPerMillionToGramsPerLiterConversionStrategy
  extends IBaseConversionStrategy {}
