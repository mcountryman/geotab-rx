/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseConversionStrategy } from '../../../../../geotab/checkmate/object_model/unit_conversion/strategies/i_base_conversion_strategy';
import { IUnitOfMeasure } from '../../../../../geotab/checkmate/object_model/engine/i_unit_of_measure';



/** Implementation of which converts pressure from inH2O to Pa. */
export interface IInchesOfWaterToPascalsConversionStrategy extends IBaseConversionStrategy
{
  /**
  * @inheritdoc
  */
  unitOfMeasure: IUnitOfMeasure;
}
