/* eslint-disable @typescript-eslint/no-empty-interface */
import { INameEntity } from '../../../geotab/checkmate/object_model/i_name_entity';
import { WidgetType } from '../../../geotab/checkmate/object_model/widget_type';
import { ReportPeriod } from '../../../geotab/checkmate/object_model/report_period';
import { IUser } from '../../../geotab/checkmate/object_model/i_user';



/**
* Widget class represents a single widget that is a part of dashboard displayed on
* dashboard page.
*/
export interface IWidget extends INameEntity
{
  /** Gets or sets the date the widget is active from. Default [UtcNow]. */
  activeFrom?: Date;
  /** Gets or sets the date the widget is active to. Default [MaxDate]. */
  activeTo?: Date;
  /**
  * Gets or sets the details of the widget. The details are in json format. Default
  * [""].
  */
  jsonDetails: string;
  /** Gets or sets the {@link IUser} who created the widget. */
  owner: IUser;
  /** Gets or sets the {@link IReportPeriod} of scheduled report. */
  period?: ReportPeriod;
  /** Gets or sets the widget type. */
  type?: WidgetType;
}
