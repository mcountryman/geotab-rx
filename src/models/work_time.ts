/* eslint-disable @typescript-eslint/no-empty-interface */
import { INameEntity } from "./name_entity";
import { IWorkTimeDetail } from "./work_time_detail";
import { IWorkTimeHolidayGroupId } from "./work_time_holiday_group_id";

/**
 * The set of (s) defining periods during the week that are considered as part of regular
 * working hours. Work times that apply to all times are represented by "WorkTimeAllHoursId".
 */
export interface IWorkTime extends INameEntity {
  /**
   * Gets or sets free text field where any user information can be stored and referenced
   * for this entity. Default [""].
   */
  comment: string;
  /** Gets or sets the list of (s). */
  details: IWorkTimeDetail[];
  /** Gets or sets the . */
  holidayGroup: IWorkTimeHolidayGroupId;
  /**
   * Gets or sets the name of this entity that uniquely identifies it and is used when
   * displaying this entity. Maximum length [50].
   */
  name: string;
}
