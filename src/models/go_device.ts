/* eslint-disable @typescript-eslint/no-empty-interface */
import { IDevice } from "./device";
import { IGroup } from "./group";
import { ICustomParameter } from "./custom_parameter";
import { IEngineType } from "./engine/engine_type";
import { GoTalkLanguage } from "./go_talk_language";
import { HosOption } from "./hos_option";

/**
 * The base device for all Geotab GO products. Additional properties can be seen in
 * {@link IDevice}.
 */
export interface IGoDevice extends IDevice {
  /** Gets or sets the date that the device is active from. Default [MinDate]. */
  activeFrom?: Date;
  /** Gets or sets the date that the device is active to. Default [MaxDate]. */
  activeTo?: Date;
  /**
   * Gets or sets the messaging status {@link IGroup}(s). Drivers with Garmin-equipped
   * vehicles can update their working status by choosing one from a set of common statuses.
   * This status update is shared with their team. For example, when drivers finish their
   * work, they can set their statuses to 'Available'. Their dispatcher is notified of
   * this and can begin to assign work based on both the location and availability of
   * the drivers. Default [Empty].
   */
  autoGroups?: IGroup[];
  /**
   * Gets or sets a toggle that represents automatic generation of {@link IDevice}. Default
   * [null].
   */
  autoHos?: HosOption;
  /**
   * Gets or sets the set of CustomParameter(s) associated with this device. Custom parameters
   * allow the activation of special features — limited to custom and beta firmware.
   * Custom parameters are issued only when necessary. Default [Empty].
   */
  customParameters?: ICustomParameter[];
  /**
   * Gets or sets master toggle to disable the device buzzer. When set to [true], the
   * device will not provide driver feedback of any kind. Default [false].
   */
  disableBuzzer?: boolean;
  /**
   * @inheritdoc
   */
  disableSleeperBerth?: boolean;
  /**
   * Gets or sets toggle to enable beeping when the vehicle idles for more than IdleMinutes.
   * Default [false].
   */
  enableBeepOnIdle?: boolean;
  /**
   * Gets or sets flag to force the parameters to be updated between the store and a
   * go device, the store will be updated with the parameter version of the go device
   * +1.
   */
  enableMustReprogram?: boolean;
  /**
   * Gets or sets toggle to enable speed warning value for the vehicle. When enabled
   * [true], only beep briefly (instead of continuously), when 'SpeedingOn' value is
   * exceeded. 'IsSpeedIndicator' must also be enabled. Default [false].
   */
  enableSpeedWarning?: boolean;
  /** Gets or sets the Engine Hours for the device. Default [0]. */
  engineHours?: number;
  /** Gets or sets the {@link IEngineType}. Default [EngineTypeGeneric]. */
  engineType?: IEngineType;
  /** Gets or sets the Vehicles Identity Number reported by the engine. */
  engineVehicleIdentificationNumber?: string;
  /**
   * Gets or sets a value indicating whether to wake up the GPS while the vehicle is
   * parked: this will allow for a faster GPS latch when the vehicle begins its trip.
   * Note: This will drain the vehicle's battery at a faster rate and should not be used
   * with newer devices. Default [false].
   */
  ensureHotStart?: boolean;
  /**
   * Gets or sets the capacity of all usable fuel tanks in litres. Default [0].
   *
   * @deprecated
   */
  fuelTankCapacity?: number;
  /** Gets or sets the {@link IGoTalkLanguage} of an attached GoTalk. Default [English]. */
  goTalkLanguage?: GoTalkLanguage;
  /**
   * Gets or sets the GPS off delay in minutes. When enabled this allows the device to
   * keep the GPS on for a period after the vehicle has been turned off. Normally, the
   * GPS turns off immediately. Keeping the GPS on can improve tracking on older devices
   * when many stops are made. Default [0].
   */
  gpsOffDelay?: number;
  /**
   * Gets or sets the number of minutes of allowed idling before device beeping starts.
   * EnableBeepOnIdle must be enabled. Default [3].
   */
  idleMinutes?: number;
  /**
   * Gets returns true if this device supports external device power control. Originally
   * only GO4v3 was to support this - but there are a significant number of customers
   * that had GO3V2s with this feature. As per DB: We had to support Iridium on Go4v2
   * for Oz and Garmin on GO4v2 for Toronto Hydro 78.x.x and 79.x.x supports Iridium,
   * 66.x.x (J1708 Live) and 80.x.x supports Garmin.
   */
  isExternalDevicePowerControlSupported?: boolean;
  /**
   * Gets or sets a toggle to beep constantly when the vehicle reaches the speed set
   * in 'SpeedingOn', and do not stop until the vehicle slows below the 'SpeedingOff'
   * speed. To only beep briefly (instead of continuously), enable 'EnableSpeedWarning'.
   * Default [false].
   */
  isSpeedIndicator?: boolean;
  /**
   * Gets or sets the vehicle license plate details of the vehicle associated with the
   * device. Maximum length [50] Default [""].
   */
  licensePlate?: string;
  /**
   * Gets or sets the state or province of the vehicle associated with the device. Maximum
   * length [50] Default [""].
   */
  licenseState?: string;
  /**
   * Gets or sets the device major firmware version. Newer versions have more functionality.
   * Live device firmware versions are managed automatically. Default [0].
   */
  major?: number;
  /** Gets or sets the minimum accident speed in km/h. Default [4]. */
  minAccidentSpeed?: number;
  /**
   * Gets or sets the device minor firmware version. Newer versions have more functionality.
   * Live device firmware versions are managed automatically. Default [0].
   */
  minor?: number;
  /** Gets or sets the Odometer for the device. */
  odometer?: number;
  /**
   * Gets or sets the parameter version that is stored in MyGeotab. The parameter version
   * should be increased by one when the parameters have been modified and need to be
   * synced with the physical device. Default [0].
   */
  parameterVersion?: number;
  /**
   * Gets or sets the parameter version that is on the device. Can be used to track the
   * parameter version currently on the device by comparing to ParameterVersion. Default
   * [0].
   */
  parameterVersionOnDevice?: number;
  /**
   * Gets or sets a toggle that determines whether or not a device is under automatic
   * vehicle management. Default [true]. This value is the inverse of whether automatic
   * vehicle management is enabled. A value of False means<br> that automatic vehicle
   * management is enabled in the UI.<br>
   */
  pinDevice?: boolean;
  /**
   * Gets or sets the speeding off value in km/h. When 'IsSpeedIndicator' is enabled,
   * once beeping starts, the vehicle must slow down to this speed for the beeping to
   * stop. Default [90].
   */
  speedingOff?: number;
  /**
   * Gets or sets the speeding on value in km/h. When 'IsSpeedIndicator' is enabled,
   * the device will start beeping when the vehicle exceeds this speed. Default [100].
   */
  speedingOn?: number;
  /**
   * Gets or sets the Vehicle Identification Number (VIN) of the vehicle associated with
   * the device. Maximum length [50] Default [""].
   */
  vehicleIdentificationNumber?: string;
}
