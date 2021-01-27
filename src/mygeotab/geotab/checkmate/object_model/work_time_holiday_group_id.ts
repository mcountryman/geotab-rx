/* eslint-disable @typescript-eslint/no-empty-interface */


/**
*  Work holidays. See {@link IWorkTime}. Items can be grouped together by giving them
* all the same GroupId number.
*/
export interface IWorkTimeHolidayGroupId
{
  /** Gets or sets the Id for the Group associated with the WorkHoliday and WorkTime. */
  groupId?: number;
}
