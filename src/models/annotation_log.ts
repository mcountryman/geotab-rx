/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntityWithVersion } from "./entity_with_version";
import { IDutyStatusLog } from "./duty_status_log";
import { IUser } from "./user";

/**
 * An AnnotationLog is a comment that can be associated with a . The is the author
 * of the AnnotationLog.
 */
export interface IAnnotationLog extends IEntityWithVersion {
  /** Gets or sets the annotation text associated with the log. */
  comment: string;
  /** Gets or sets the date and time the log was created. */
  dateTime?: Date;
  /** Gets or sets the {@link IUser} who created the log. */
  driver: IUser;
  /** Gets or sets the which this log belongs to. */
  dutyStatusLog: IDutyStatusLog;
}
