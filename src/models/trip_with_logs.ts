/* eslint-disable @typescript-eslint/no-empty-interface */
import { ILogRecord } from './log_record';
import { ITrip } from './trip';

/**
 *  A device trip.
 *
 * @deprecated
 */
export interface ITripWithLogs {
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
