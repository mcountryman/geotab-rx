/* eslint-disable @typescript-eslint/no-empty-interface */
import { ICustomDevice } from '../../../geotab/checkmate/object_model/i_custom_device';
import { HosOption } from '../../../geotab/checkmate/object_model/hos_option';



/**
* A custom third-party automotive vehicle device that is used in MyGeotab. This is
* used for extensibility and is based on the {@link ICustomDevice} object.
*/
export interface ICustomVehicleDevice extends ICustomDevice
{
  /**
  * Gets or sets a toggle that represents automatic generation of {@link IDevice}. Default
  * [null].
  */
  autoHos?: HosOption;
  /**
  * @inheritdoc
  */
  disableSleeperBerth?: boolean;
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
  * Gets or sets a toggle that determines whether or not a device is under automatic
  * vehicle management. Default [false].
  */
  pinDevice?: boolean;
  /**
  * Gets or sets the Vehicle Identification Number (VIN) of the vehicle associated with
  * the device. Maximum length [50] Default [""].
  */
  vehicleIdentificationNumber?: string;
}
