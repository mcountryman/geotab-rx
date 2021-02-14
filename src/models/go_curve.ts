/* eslint-disable @typescript-eslint/no-empty-interface */
import { IGoDevice } from "./go_device";

/** A GoCurve device. Additional properties can be seen in {@link IGoDevice}. */
export interface IGoCurve extends IGoDevice {
  /**
   * Gets or sets the acceleration warning accelerometer threshold (y axis) value for
   * the vehicle. A positive value that when exceeded will trigger device beeping. Threshold
   * value to mS2 conversion (threshold \* 18 = milli-g / 1000 = g / 1.0197162 = mS2).
   * Default [22].
   */
  accelerationWarningThreshold?: number;
  /**
   * Gets or sets the accelerometer threshold warning factor value for this vehicle.
   * Default [0].
   */
  accelerometerThresholdWarningFactor?: number;
  /**
   * Gets or sets the braking warning accelerometer threshold (y axis) value for the
   * vehicle. A negative value that when exceeded will trigger device beeping. Threshold
   * value to mS2 conversion (threshold \* 18 = milli-g / 1000 = g / 1.0197162 = mS2).
   * Default [-34].
   */
  brakingWarningThreshold?: number;
  /**
   * Gets or sets the cornering warning threshold (x axis) value for the vehicle. A positive
   * value that when exceeded will trigger device beeping (the additive inverse is automatically
   * applied: 26/-26). Threshold value to mS2 conversion (threshold \* 18 = milli-g /
   * 1000 = g / 1.0197162 = mS2). Default [26].
   */
  corneringWarningThreshold?: number;
  /**
   * Gets or sets toggle to enable beeping when any of the acceleration thresholds are
   * exceeded by device accelerometer readings. Default [false].
   */
  enableBeepOnDangerousDriving?: boolean;
  /**
   * Gets or sets toggle to enable beeping when the vehicle's RPM exceeds the 'RpmValue'.
   * Default [false].
   */
  enableBeepOnRpm?: boolean;
  /**
   * Gets or sets the offset to be applied engine hours data reported by the engine computer.
   * Default [0].
   */
  engineHourOffset?: number;
  /**
   * Gets or sets toggle to enable active tracking on the device. enables Active Tracking
   * which triggers the device to transmit data more frequently. This allows for continuously
   * up-to-date vehicle positions animated on the live map. It also enables live server-side
   * driver alerts. Default [false].
   */
  isActiveTrackingEnabled?: boolean;
  /**
   * Gets or sets value which toggles beeping if an unbuckled seat belt is detected.
   * This will only work if the device is able to obtain seat belt information from the
   * vehicle. Default [false].
   */
  isDriverSeatbeltWarningOn?: boolean;
  /** Gets or sets value which toggles device IOX USB connection. Default [true]. */
  isIoxConnectionEnabled?: boolean;
  /**
   * Gets or sets value which toggles monitoring both passenger and driver unbuckled
   * seat belt, otherwise only the driver is monitored. Default [false].
   */
  isPassengerSeatbeltWarningOn?: boolean;
  /**
   * Gets or sets value which toggles device beeping when the vehicle is reversing. Default
   * [false].
   */
  isReverseDetectOn?: boolean;
  /**
   * Gets or sets a {@link ISingle} used to correct the odometer value received from
   * the engine. Default [1].
   */
  odometerFactor?: number;
  /**
   * Gets or sets the offset to be applied odometer reported by the engine computer.
   * Default [0].
   */
  odometerOffset?: number;
  /** Gets or sets the RPM value that when exceeded triggers device beeping. Default [3500]. */
  rpmValue?: number;
  /**
   * Gets or sets the value in km/h that below will not trigger 'Seat belt Warning'.
   * Default [10].
   */
  seatbeltWarningSpeed?: number;
}
