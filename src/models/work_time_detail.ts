/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from './entity';

/**  The times during the week that are working times. */
export interface IWorkTimeDetail extends IEntity {
  /** Gets the day of the week; with Sunday being 0, Monday being 1, etc.. */
  dayOfWeek?: number;
  /** Gets the timeSpan since the start of the period. */
  fromTime: Date;
  /** Gets the timeSpan to the end of the period. */
  toTime: Date;
}
