/* eslint-disable @typescript-eslint/no-empty-interface */
import { INameEntity } from '../../../geotab/checkmate/object_model/i_name_entity';
import { ReportPeriod } from '../../../geotab/checkmate/object_model/report_period';
import { IUser } from '../../../geotab/checkmate/object_model/i_user';



/**
* Dashboard class represents a single dashboard that has widgets and reports that
* are an Excel file, displayed on dashboard page.
*/
export interface IDashboard extends INameEntity
{
  /** Gets or sets the date the dashboard is active from. Default [UtcNow]. */
  activeFrom?: Date;
  /** Gets or sets the date the dashboard is active to. Default [MaxDate]. */
  activeTo?: Date;
  /** Gets or sets the comment of the dashboard. Default [""]. */
  comment: string;
  /**
  * Gets or sets the details of the dashboard. The details are in json format. Default
  * [""].
  */
  jsonDetails: string;
  /** Gets or sets the {@link IUser} who is the owner of the dashboard. */
  owner: IUser;
  /** Gets or sets the {@link IReportPeriod} of scheduled report. */
  period?: ReportPeriod;
  /** Gets or sets the date from when the dashboard data starts. */
  rangeFrom?: Date;
  /** Gets or sets the date to when the dashboard data ends. */
  rangeTo?: Date;
}
