/* eslint-disable @typescript-eslint/no-empty-interface */
import { IWorkTimeSystem } from '../../../geotab/checkmate/object_model/i_work_time_system';
import { IWorkTimeDetail } from '../../../geotab/checkmate/object_model/i_work_time_detail';



/**
*  Declaration of an invariant singleton object WorkTimesAllHours.
*
* @deprecated
*/
export interface IWorkTimeAllHours extends IWorkTimeSystem
{
  /** Sets the WorkTimesDetails collection. */
  details: IWorkTimeDetail[];
  /** Gets the singleton value. */
  value: IWorkTimeAllHours;
}
