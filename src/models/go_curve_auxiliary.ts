/* eslint-disable @typescript-eslint/no-empty-interface */
import { IGoCurve } from './go_curve';

/**
 * Device that supports curve logging and auxiliaries. Additional properties can be
 * seen in {@link IGoCurve}.
 */
export interface IGoCurveAuxiliary extends IGoCurve {
  /**
   * Gets or sets an array of the auxiliary warning speeds for the vehicle. The auxiliary
   * is triggered when the speed is greater than or equal to this value. Maximum length
   * [8] Default [0,0,0,0,0,0,0,0].
   */
  auxWarningSpeed?: number[];
  /** Gets or sets toggle to enable auxiliary warnings. Maximum length [8] Default [false,false,false,false,false,false,false,false]. */
  enableAuxWarning?: boolean[];
  /**
   * Gets or sets toggle to enable control external relay value for the vehicle. Default
   * [false].
   */
  enableControlExternalRelay?: boolean;
  /**
   * Gets or sets the option which controls how long any attached external devices (Garmin,
   * Iridium, HOS, RFID, RS232, CAN, and USB) are kept on after the vehicle is turned
   * off in minutes. Default [0].
   */
  externalDeviceShutDownDelay?: number;
  /**
   * Gets or sets with being true, it is used to define the delay before the driver identification
   * reminder is sent out if the driver key has not been not swiped. The maximum value
   * of this property is 255. When it is less or equal to 180, it indicates the number
   * of seconds of the delay. When it is greater than 180, the delay increases 30 seconds
   * for every increment of one of this property. For example, 180 indicates 180 seconds,
   * 181 indicates 210 seconds, and 182 indicates 240 seconds. Maximum [255] Default
   * [30].
   */
  immobilizeArming?: number;
  /**
   * Gets or sets a value mainly used for enable or disable driver identification reminder.
   * If it is used in conjunction with vehicle relay circuits, it can force the driver
   * to swipe the driver key before starting the vehicle. Default [false].
   */
  immobilizeUnit?: boolean;
  /** Gets or sets an array of the IsAuxIgnTriggers for the vehicle. */
  isAuxIgnTrigger?: boolean[];
  /**
   * Gets or sets an array of {@link IBoolean}(s) indicating if a corresponding Aux signal
   * should be inverted on importing the device data. Maximum length [8] Default [false,false,false,false,false,false,false,false].
   */
  isAuxInverted?: boolean[];
}
