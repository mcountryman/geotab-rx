/* eslint-disable @typescript-eslint/no-empty-interface */
import { IWorkTimeSystem } from './work_time_system';
import { IWorkTimeDetail } from './work_time_detail';

/**
 *  Declaration of an invariant singleton object WorkTimesAllHours.
 *
 * @deprecated
 */
export interface IWorkTimeAllHours extends IWorkTimeSystem {
  /** Sets the WorkTimesDetails collection. */
  details: IWorkTimeDetail[];
  /** Gets the singleton value. */
  value: IWorkTimeAllHours;
}
