/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseConversionStrategy } from '../../../../../geotab/checkmate/object_model/unit_conversion/strategies/i_base_conversion_strategy';
import { IUnitOfMeasure } from '../../../../../geotab/checkmate/object_model/engine/i_unit_of_measure';



/** Implementation of which converts time from hours to seconds. */
export interface IHoursToSecondsConversionStrategy extends IBaseConversionStrategy
{
  /**
  * @inheritdoc
  */
  unitOfMeasure: IUnitOfMeasure;
}
