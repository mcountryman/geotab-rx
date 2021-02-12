/* eslint-disable @typescript-eslint/no-empty-interface */
import { IDevice } from './device';

/**
 * An untracked asset that is used in MyGeotab without a serial number. This is used
 * for extensibility and is based on the {@link IDevice} object.
 */
export interface IUntrackedAsset extends IDevice {
  /**
   * Gets or sets the offset to be applied engine hours data reported by the engine computer.
   * Default [0].
   */
  engineHourOffset?: number;
  /** Gets or sets the Engine Hours for the device. Default [0]. */
  engineHours?: number;
  /**
   * Gets or sets the Engine Vehicle Identification Number from the engine of the vehicle
   * associated with the device.
   */
  engineVehicleIdentificationNumber?: string;
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
  /** Gets or sets the Odometer for the device. */
  odometer?: number;
  /**
   * Gets or sets a value used to correct the odometer value received from the engine.
   * Default [1].
   */
  odometerFactor?: number;
  /**
   * Gets or sets the offset to be applied odometer reported by the engine computer.
   * Default [0].
   */
  odometerOffset?: number;
  /**
   * Gets or sets the Vehicle Identification Number (VIN) of the vehicle associated with
   * the device. Maximum length [50] Default [""].
   */
  vehicleIdentificationNumber?: string;
}
