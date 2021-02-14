/* eslint-disable @typescript-eslint/no-empty-interface */
import { DutyStatusViolationType } from "./duty_status_violation_type";

/**
 *  The duration of time remaining for a specific {@link IDutyStatusViolationType}.
 *
 * @deprecated
 */
export interface IDutyStatusAvailabilityDuration {
  /** Gets or sets the duration of the specific {@link IDutyStatusViolationType}. */
  duration: Date;
  /** Gets or sets the specific type of {@link IDutyStatusViolationType}. */
  type?: DutyStatusViolationType;
}
