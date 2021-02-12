/* eslint-disable @typescript-eslint/no-empty-interface */
import { IGoDevice } from './go_device';

/**
 * A legacy Geotab device is any GO device prior to GO4v3. Additional properties can
 * be seen in {@link IGoDevice}.
 */
export interface IGoLegacy extends IGoDevice {
  /** Gets or sets an array that can get/set the AuxWarningSpeeds for the vehicle. */
  auxWarningSpeed?: number[];
  /** Gets or sets exposes the radio channels as an array of 20 bytes. */
  channel?: number[];
  /** Gets or sets the channel count. */
  channelCount?: number;
  /**
   * Gets or sets the distance to be used (in meters) to generate a log. A log will be
   * reported each time the this distance has been exceeded. Default [1000].
   */
  deltaDistance?: number;
  /** Gets or sets the delta heading. Default [48]. */
  deltaHeading?: number;
  /** Gets or sets the delta heading HS. Default [14]. */
  deltaHeadingHS?: number;
  /** Gets or sets the delta heading min speed in km/h. Default [14]. */
  deltaHeadingMinSpeed?: number;
  /** Gets or sets the delta heading min speed HS in km/h. Default [72]. */
  deltaHeadingMinSpeedHS?: number;
  /** Gets or sets the delta min speed in km/h. Default [50]. */
  deltaMinSpeed?: number;
  /** Gets or sets the delta speed in km/h. Default [9]. */
  deltaSpeed?: number;
  /** Gets or sets an array that can get/set the EnableAuxWarnings for the vehicle. */
  enableAuxWarning?: boolean[];
  /** Gets or sets the EnableControlExternalRelay value for the vehicle. */
  enableControlExternalRelay?: boolean;
  /** Gets or sets the External Device ShutDown Delay value for the vehicle. */
  externalDeviceShutDownDelay?: number;
  /**
   * Gets or sets the FrequencyOffset used on the device radio. The default is 1 and
   * should not be changed. Only has an effect on Channel Set 0 - which consists of channels
   * 0 to 15.
   */
  frequencyOffset?: number;
  /** Gets or sets the harsh break. Default [17]. */
  harshBreak?: number;
  /** Gets or sets the immobilize arming. */
  immobilizeArming?: number;
  /** Gets or sets a value indicating whether [immobilize unit]. */
  immobilizeUnit?: boolean;
  /** Gets or sets a value indicating whether this instance is aided GPS enabled. */
  isAidedGpsEnabled?: boolean;
  /** Gets or sets an array that can get/set the IsAuxIgnTriggers for the vehicle. */
  isAuxIgnTrigger?: boolean[];
  /**
   * Gets or sets an array of values indicating if a corresponding Aux signal should
   * be inverted on importing the device data.
   */
  isAuxInverted?: boolean[];
  /** Gets or sets whether to send warning on harsh brake. Default [false]. */
  isHarshBrakeWarningOn?: boolean;
  /** Gets or sets the IsRfUploadOnWhenMoving value for the vehicle. */
  isRfUploadOnWhenMoving?: boolean;
  /**
   * Gets or sets the version of this set of rf channels. Each time a change is made,
   * increment this value until it rolls over.
   */
  rfParameterVersion?: number;
}
