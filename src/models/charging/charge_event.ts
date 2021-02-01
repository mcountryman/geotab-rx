/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntityWithVersion } from "../entity_with_version";
import { ChargeType } from "../charging/charge_type";
import { IDevice } from "../device";

/** Record of a charge event */
export interface IChargeEvent extends IEntityWithVersion {
  /** Gets or sets a value indicating whether the charge values were estimated. */
  chargeIsEstimated?: boolean;
  /** Gets or sets the charging type provided by the external power source. */
  chargeType?: ChargeType;
  /** Gets or sets the device which created the charge event. */
  device: IDevice;
  /** Gets or sets the length of time the vehicle was charging in seconds. */
  duration?: Date;
  /** Gets or sets the distance traveled since the previous charge event. */
  electricDistanceSinceLastChargeKm?: number;
  /** Gets or sets the ending state of charge for this charge event. */
  endStateOfCharge?: number;
  /** Gets or sets the energy consumed during the charge event. */
  energyConsumedKwh?: number;
  /** Gets or sets the amount of energy drawn from the battery since the last charge event. */
  energyUsedSinceLastChargeKwh?: number;
  /** Gets or sets the location where the charge event occurred. */
  location: any;
  /** Gets or sets the maximum AC Voltage over the charge event. */
  maxACVoltage?: number;
  /** Gets or sets the peak power used during the charge event. */
  peakPowerKw?: number;
  /** Gets or sets the starting state of charge for this charge event. */
  startStateOfCharge?: number;
  /** Gets or sets the time the charge event started. */
  startTime?: Date;
  /** Gets or sets the time of the from the trip this charge event occurred in. */
  tripStop?: Date;
}
