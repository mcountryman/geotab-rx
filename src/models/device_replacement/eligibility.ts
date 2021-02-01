/* eslint-disable @typescript-eslint/no-empty-interface */

/** Class to store eligibility details to be sent to UI. */
export interface IEligibility {
  /** Gets or sets end date of eligibility of the device. */
  eligibleEndDate?: Date;
  /** Gets or sets start date of eligibility of the device. */
  eligibleStartDate?: Date;
}
