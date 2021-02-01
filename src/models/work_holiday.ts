/* eslint-disable @typescript-eslint/no-empty-interface */
import { INameEntity } from "./name_entity";
import { IDateTimeWithTimeZone } from "./date_time_with_time_zone";
import { IWorkTimeHolidayGroupId } from "./work_time_holiday_group_id";

/**  Day that is specified as not being a regular working day. */
export interface IWorkHoliday extends INameEntity {
  /** Gets or sets the midnight of the work holiday. */
  date: IDateTimeWithTimeZone;
  /** Gets or sets the holiday group for this holiday day. See . */
  holidayGroup: IWorkTimeHolidayGroupId;
}
