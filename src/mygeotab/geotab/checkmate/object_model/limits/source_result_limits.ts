/* eslint-disable @typescript-eslint/no-empty-interface */
import { LimitSource } from '../../../../geotab/checkmate/object_model/limits/limit_source';
import { IResultLimitOverride } from '../../../../geotab/checkmate/object_model/limits/i_result_limit_override';



/** Result limits for a given source. */
export interface ISourceResultLimits
{
  /** Gets or sets the default limit. */
  defaultLimit: number;
  /** Gets or sets the type specific limit overrides. */
  overrides: IResultLimitOverride[];
  /** Gets or sets the Source. */
  source: LimitSource;
}
