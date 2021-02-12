/* eslint-disable @typescript-eslint/no-empty-interface */
import { IRestInfo } from './rest_info';
import { IDeferralInfo } from './deferral_info';

/**
 *  DaySummary.
 *
 * @deprecated
 */
export interface IDaySummary {
  /** Gets or sets the DateTime. */
  dateTime: Date;
  /** Gets or sets the deferral info. */
  deferralInfo: IDeferralInfo;
  /** Gets or sets the time spent in D status. */
  driveTotal?: Date;
  /** Gets or sets the time spent in OFF status. */
  offTotal?: Date;
  /** Gets or sets the time spent in ON status. */
  onTotal?: Date;
  /** Gets or sets the time spent in PC status. */
  personalConveyanceTotal?: Date;
  /** Gets or sets the rest info. */
  restInfos: IRestInfo[];
  /** Gets or sets the time spent in SB status. */
  sleeperBerthTotal?: Date;
  /** Gets or sets the time spent in WT status. */
  waitTimeTotal?: Date;
  /** Gets or sets the time spent in YM status. */
  yardMoveTotal?: Date;
}
