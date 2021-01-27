/* eslint-disable @typescript-eslint/no-empty-interface */
import { ITimeZoneInfoAdjustmentRule } from '../../../geotab/checkmate/object_model/i_time_zone_info_adjustment_rule';
import { ITimeZoneInfo } from '../../../geotab/checkmate/object_model/i_time_zone_info';



/**  TimeZone info with its day light saving rules. */
export interface ITimeZoneInfoWithRules
{
  /** Gets or sets daylight saving Adjustment rules. */
  adjustmentRules: ITimeZoneInfoAdjustmentRule[];
  /**
  * Gets or sets the time zone identifier. This is the timeZoneId that was requested.
  * Important because there are many timeZoneId that fall under a single TimeZoneInfo.id.
  */
  timeZoneId: string;
  /** Gets or sets TimeZoneInfo. */
  timeZoneInfo: ITimeZoneInfo;
}
