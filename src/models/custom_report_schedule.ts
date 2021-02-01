/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from "./entity";
import { ReportDestination } from "./report_destination";
import { ReportFrequency } from "./report_frequency";
import { IGroup } from "./group";
import { IUser } from "./user";
import { ReportPeriod } from "./report_period";
import { IReportTemplate } from "./report_template";

/** Used to represent the schedule for emailed reports and dashboard graphic elements. */
export interface ICustomReportSchedule extends IEntity {
  /** Gets or sets the arguments of scheduled report. */
  arguments: any;
  /** Gets or sets argument of the report represented in Json formatted text. */
  argumentsJsonText: string;
  /** Gets or sets the {@link IReportDestination} (email or dashboard) of scheduled report. */
  destination?: ReportDestination;
  /** Gets or sets the frequency of scheduled report. */
  frequency?: ReportFrequency;
  /** Gets or sets the {@link IGroup}(s) collection. */
  groups: IGroup[];
  /** Gets or sets the {@link IId} of the scheduled report. */
  guid: string;
  /**
   * Gets or sets {@link IGroup}(s) that define the groups that dashboard/email to be
   * sent to all users under it.
   */
  includeAllChildrenGroups: IGroup[];
  /**
   * Gets or sets {@link IGroup}(s) that the groups that dashboard/email to be sent to
   * direct users under it.
   */
  includeDirectChildrenOnlyGroups: IGroup[];
  /** Gets or sets interactive dashboard settings of scheduled report. */
  interactiveSettings: string;
  /**
   * Gets or sets a value indicating whether weather the scheduled report is active or
   * not.
   */
  isActive?: boolean;
  /** Gets or sets the last modified user. */
  lastModifiedUser: IUser;
  /** Gets or sets the date of the last run of the scheduled report. */
  lastRun?: Date;
  /** Gets or sets the {@link IReportPeriod} of scheduled report. */
  period?: ReportPeriod;
  /** Gets or sets {@link IGroup}(s) that define data scope of the report schedule. */
  scopeGroups: IGroup[];
  /** Gets or sets the {@link IReportTemplate} of scheduled report. */
  template: IReportTemplate;
}
