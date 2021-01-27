/* eslint-disable @typescript-eslint/no-empty-interface */
import { IExceptionsSummary } from '../../../../geotab/checkmate/object_model/exceptions/i_exceptions_summary';



/**
*  The trip exceptions summary class.
*
* @deprecated
*/
export interface ITripExceptionsSummary extends IExceptionsSummary
{
  /** Gets the Start Utc for the trip. */
  tripId: string;
}
