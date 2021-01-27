/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseConversionStrategy } from '../../../../../geotab/checkmate/object_model/unit_conversion/strategies/i_base_conversion_strategy';
import { IUnitOfMeasure } from '../../../../../geotab/checkmate/object_model/engine/i_unit_of_measure';



/** Implementation of which converts force from lbf to N. */
export interface IPoundsOfForceToNewtonsConversionStrategy extends IBaseConversionStrategy
{
  /** Gets which unit of measure the converted value now references. */
  unitOfMeasure: IUnitOfMeasure;
}
