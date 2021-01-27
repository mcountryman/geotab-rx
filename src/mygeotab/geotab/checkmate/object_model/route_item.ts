/* eslint-disable @typescript-eslint/no-empty-interface */
import { IRoutePlanItem } from '../../../geotab/checkmate/object_model/i_route_plan_item';
import { ILogRecord } from '../../../geotab/checkmate/object_model/i_log_record';



/** Represents a {@link ILogRecord} in proximity of a particular. {@link IRoutePlanItem} */
export interface IRouteItem extends IRoutePlanItem
{
  /** Gets or sets the distance of the log record from the route plan. */
  distance?: number;
  /** Gets or sets the {@link ILogRecord}. */
  logRecord: ILogRecord;
}
