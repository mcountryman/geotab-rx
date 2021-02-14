/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseConversionStrategy } from "../../unit_conversion/strategies/base_conversion_strategy";

/** Implementation of which converts acceleration from m/s^2 to ft/s^2. */
export interface IMetersPerSecondSquaredToFeetPerSecondSquaredConversionStrategy
  extends IBaseConversionStrategy {}
