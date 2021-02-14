/* eslint-disable @typescript-eslint/no-empty-interface */
import { INameEntity } from "./name_entity";
import { WidgetType } from "./widget_type";
import { ReportPeriod } from "./report_period";
import { IUser } from "./user";

/**
 * Widget class represents a single widget that is a part of dashboard displayed on
 * dashboard page.
 */
export interface IWidget extends INameEntity {
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
