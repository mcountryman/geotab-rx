/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseConversionStrategy } from "../../unit_conversion/strategies/base_conversion_strategy";

/** Implementation of which converts fuel consumption from km/liter to MPG (Imperial). */
export interface IKilometersPerLiterToMilesPerGallonImperialConversionStrategy
  extends IBaseConversionStrategy {}
