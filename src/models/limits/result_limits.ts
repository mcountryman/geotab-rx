/* eslint-disable @typescript-eslint/no-empty-interface */
import { LimitSource } from "../limits/limit_source";
import { ISourceResultLimits } from "../limits/source_result_limits";

/** Result limits to be imposed for a set of sources. */
export interface IResultLimits {
  /** Gets or sets the limits defined for a source. */
  sourceLimits: { [key in LimitSource]: ISourceResultLimits };
}
