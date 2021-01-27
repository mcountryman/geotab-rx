/* eslint-disable @typescript-eslint/no-empty-interface */
import { ILogRecord } from '../../../geotab/checkmate/object_model/i_log_record';
import { ITrip } from '../../../geotab/checkmate/object_model/i_trip';



/**
*  A device trip.
*
* @deprecated
*/
export interface ITripWithLogs
{
  /**
  * @inheritdoc
  */
  from?: Date;
  /** Gets the . */
  logs: ILogRecord[];
  /**
  * @inheritdoc
  */
  to?: Date;
  /** Gets the . */
  trip: ITrip;
}
