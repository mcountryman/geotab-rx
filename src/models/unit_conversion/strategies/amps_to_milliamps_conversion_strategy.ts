/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseConversionStrategy } from "../../unit_conversion/strategies/base_conversion_strategy";

/** Implementation of which converts electricity from A to mA. */
export interface IAmpsToMilliampsConversionStrategy
  extends IBaseConversionStrategy {}
