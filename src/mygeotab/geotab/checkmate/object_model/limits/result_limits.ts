/* eslint-disable @typescript-eslint/no-empty-interface */
import { LimitSource } from '../../../../geotab/checkmate/object_model/limits/limit_source';
import { ISourceResultLimits } from '../../../../geotab/checkmate/object_model/limits/i_source_result_limits';



/** Result limits to be imposed for a set of sources. */
export interface IResultLimits
{
  /** Gets or sets the limits defined for a source. */
  sourceLimits: { [key in LimitSource]: ISourceResultLimits };
}
