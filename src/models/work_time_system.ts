/* eslint-disable @typescript-eslint/no-empty-interface */
import { IWorkTime } from "./work_time";
import { IWorkTimeHolidayGroupId } from "./work_time_holiday_group_id";

/** A work time that is a system supplied work time. */
export interface IWorkTimeSystem extends IWorkTime {
  /**
   * Gets or sets free text field where any user information can be stored and referenced
   * for this entity.
   */
  comment: string;
  /** Gets or sets the . */
  holidayGroup: IWorkTimeHolidayGroupId;
  /** Gets or sets the unique identifier for this entity. see . */
  id: string;
  /**
   * Gets or sets the name of this entity that uniquely identifies it and is used when
   * displaying this entity.
   */
  name: string;
}
