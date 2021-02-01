/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseConversionStrategy } from "../../unit_conversion/strategies/base_conversion_strategy";

/** Implementation of which converts electricity from V to mV. */
export interface IVoltsToMillivoltsConversionStrategy
  extends IBaseConversionStrategy {}
