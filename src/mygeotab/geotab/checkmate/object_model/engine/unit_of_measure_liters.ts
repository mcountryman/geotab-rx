/* eslint-disable @typescript-eslint/no-empty-interface */
import { IUnitOfMeasureSystem } from '../../../../geotab/checkmate/object_model/engine/i_unit_of_measure_system';



/** Represents the unit of measure for the volume of a liquid. */
export interface IUnitOfMeasureLiters extends IUnitOfMeasureSystem
{
  /** Gets the singleton instance. */
  value: IUnitOfMeasureLiters;
}
