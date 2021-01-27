/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBaseConversionStrategy } from '../../../../../geotab/checkmate/object_model/unit_conversion/strategies/i_base_conversion_strategy';
import { IUnitOfMeasure } from '../../../../../geotab/checkmate/object_model/engine/i_unit_of_measure';



/** Implementation of which converts frequency from GHz to Hz. */
export interface IGigahertzToHertzConversionStrategy extends IBaseConversionStrategy
{
  /**
  * @inheritdoc
  */
  unitOfMeasure: IUnitOfMeasure;
}
