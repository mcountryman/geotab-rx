/* eslint-disable @typescript-eslint/no-empty-interface */
import { IDateRange } from '../../../geotab/checkmate/object_model/i_date_range';



/**
* Provides the instance of {@link IIEntity} - derived class, "From" Date and "To"
* Date.
*/
export interface IEntityDateRange extends IDateRange
{
  /** Gets or sets the {@link IIEntity} - derived class instance. */
  entity: any;
}
