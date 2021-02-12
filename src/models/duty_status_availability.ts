/* eslint-disable @typescript-eslint/no-empty-interface */
import { IDutyStatusAvailabilityDuration } from './duty_status_availability_duration';
import { IUser } from './user';
import { IDutyStatusRecap } from './duty_status_recap';
import { IDutyStatusCycleAvailability } from './duty_status_cycle_availability';

/**  Driver Availability for Hours of Service regulations. */
export interface IDutyStatusAvailability {
  /** Gets a list of {@link IDutyStatusAvailabilityDuration}(s) for a driver. */
  availabilities: IDutyStatusAvailabilityDuration[];
  /** Gets or sets the duration of cycle hours left. */
  cycle?: Date;
  /** Gets or sets cycle available to the driver in the future. */
  cycleAvailabilities: IDutyStatusCycleAvailability[];
  /** Gets or sets the duration left before cycle rest must be taken. */
  cycleRest?: Date;
  /** Gets or sets the {@link IUser} associated with the duty status availability. */
  driver: IUser;
  /** Gets or sets the duration left for driving. */
  driving?: Date;
  /** Gets or sets the duration of total on-duty time left in a day. */
  duty?: Date;
  /** Gets or sets the duty hours left since Cycle Rest. */
  dutySinceCycleRest?: Date;
  /** Gets or sets the unique identifier for the specific {@link IId}. */
  id: string;
  /** Gets or sets if 16 hour exemption is available. */
  is16HourExemptionAvailable?: boolean;
  /** Gets or sets if adverse driving exemption is available. */
  isAdverseDrivingExemptionAvailable?: boolean;
  /** Gets or sets if off-duty deferral exemption is available. */
  isOffDutyDeferralExemptionAvailable?: boolean;
  /**
   * Gets or sets chronological array representing each day's On-duty time since beginning
   * of cycle.
   */
  recap: IDutyStatusRecap[];
  /** Gets or sets the duration left before rest break must be taken. */
  rest?: Date;
  /**
   * Gets or sets the duration of workday left in a day. Workday is a consecutive window
   * that begins with first on-duty.
   */
  workday?: Date;
}
