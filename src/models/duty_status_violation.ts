/* eslint-disable @typescript-eslint/no-empty-interface */
import { IUser } from './user';
import { DutyStatusViolationType } from './duty_status_violation_type';

/**  A {@link IUser}. */
export interface IDutyStatusViolation {
  /** Gets or sets the maximum or minimum days limit of the duty status violation. */
  daysLimit?: number;
  /** Gets or sets the {@link IUser} associated with the duty status violation. */
  driver: IUser;
  /** Gets or sets the driving duration of the duty status violation. */
  drivingDuration: Date;
  /** Gets or sets the date and time that the duty status violation started. */
  fromDate?: Date;
  /** Gets or sets the maximum or minimum hours limit of the duty status violation. */
  hoursLimit?: number;
  /** Gets or sets the unique identifier for the specific {@link IId}. */
  id: string;
  /** Gets or sets the log Id. */
  logId: string;
  /** Gets or sets the stated reason why the duty status violation occurred. */
  reason: string;
  /** Gets or sets the date and time that the duty status violation ended. */
  toDate?: Date;
  /** Gets or sets the {@link IDutyStatusViolationType} of the duty status violation. */
  type?: DutyStatusViolationType;
}
