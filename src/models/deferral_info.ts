/* eslint-disable @typescript-eslint/no-empty-interface */
import { DutyStatusDeferralType } from './duty_status_deferral_type';

/**
 *  RestInfo.
 *
 * @deprecated
 */
export interface IDeferralInfo {
  /**
   * Gets or sets a value indicating whether the day two log required. Tells the driver
   * if they are required to add another deferral exemption log today.
   */
  dayTwoLogRequired: boolean;
  /** Gets or sets the Deferral Status, DayOne or DayTwo. */
  status: DutyStatusDeferralType;
  /** Gets or sets the amount of time deferred. */
  time: Date;
}
