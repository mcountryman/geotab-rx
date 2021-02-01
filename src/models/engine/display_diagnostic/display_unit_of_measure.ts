/* eslint-disable @typescript-eslint/no-empty-interface */
import { INameEntityWithVersion } from "../../name_entity_with_version";

/**
 *  Contains the conversion between the base UnitOfMeasure to the DisplayUnitOfMeasure.
 *
 * @deprecated
 */
export interface IDisplayUnitOfMeasure extends INameEntityWithVersion {
  /** Gets or sets the Identifier of the base unit of measure. */
  baseId: string;
  /** Gets or sets the conversion factor from base units to the current unit. */
  factorFromBase: number;
  /**
   * Gets or sets a value indicating whether gets or sets whether or not an inversion
   * operation is performed on unit conversion.
   */
  inversionOperation: boolean;
  /** Gets or sets the offset to convert from base unit to current unit. */
  offsetFromBase: number;
}
