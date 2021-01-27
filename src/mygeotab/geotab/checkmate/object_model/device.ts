/* eslint-disable @typescript-eslint/no-empty-interface */
import { INameEntityWithVersion } from '../../../geotab/checkmate/object_model/i_name_entity_with_version';
import { IGroup } from '../../../geotab/checkmate/object_model/i_group';
import { IDeviceFlags } from '../../../geotab/checkmate/object_model/i_device_flags';
import { DeviceType } from '../../../geotab/checkmate/object_model/device_type';
import { IWorkTime } from '../../../geotab/checkmate/object_model/i_work_time';
import { DevicePlan } from '../../../geotab/checkmate/object_model/device_plan';
import { DeviceCustomFeature } from '../../../geotab/checkmate/object_model/device_custom_feature';



/**
*  A Device represents the physical tracking device installed in the vehicle. A device
* and vehicle is typically synonymous since the GO tracking device is installed in
* a vehicle. In the case where there is no device; this is represented by "NoDeviceId".
* The device types that are supported are:. {@link ICustomDevice}
*/
export interface IDevice extends Partial<INameEntityWithVersion>
{
  /** Gets or sets the date the device is active from. Default [MinDate]. */
  activeFrom?: Date;
  /** Gets or sets the date that the device is active to. Default [MaxDate]. */
  activeTo?: Date;
  /**
  * Gets or sets free text field where any user information can be stored and referenced
  * for this entity.
  */
  comment?: string;
  /** Gets or sets a list of {@link IDevice} and their values. */
  customFeatures?: { [key in DeviceCustomFeature]: any };
  /**
  * Gets or sets the device features which have been enabled whether the feature is
  * in use (e.g. HOS, Iridium).
  */
  deviceFlags?: IDeviceFlags;
  /** Gets or sets the Geotab DevicePlan that has been purchased for this device. */
  devicePlans?: DevicePlan[];
  /** Gets specifies the GO or Custom {@link IDeviceType}. */
  deviceType?: DeviceType;
  /** Gets or sets the list of {@link IGroup}(s) the device belongs to. */
  groups?: IGroup[];
  /**
  * Gets or sets the unique hardware identifier for the Device. This is a 4 byte unique
  * number to identify devices in the system.
  */
  hardwareId?: number;
  /** Gets or sets the unique identifier for this entity. See {@link IId}. */
  id?: string;
  /**
  * Gets or sets The date that tells the system at what moment should it start checking
  * the device status and warn if there is no new data. Used when a new device is just
  * installed or the vehicle undergoes a lengthy service. Default [MinDate].
  */
  ignoreDownloadsUntil?: Date;
  /**
  * Gets or sets the maximum allowed time between logs when the ignition is on in seconds.
  * When the value is exceeded, data is considered to be missing. Default [200].
  */
  maxSecondsBetweenLogs?: number;
  /**
  * Gets or sets the name of this entity that uniquely identifies it and is used when
  * displaying this entity. Maximum length [50].
  */
  name?: string;
  /** Gets or sets the product id. Each device is assigned a unique hardware product id. */
  productId?: number;
  /** Gets or sets the Serial Number of the device. Maximum length [12]. */
  serialNumber?: string;
  /**
  * Gets or sets the expected time between downloads, i.e. how frequently the device
  * is expected to produce new data. For passive devices this might range from 1 to
  * a few days. For live devices this should be maximum 24h unless vehicles travel out
  * of coverage frequently. This is used to check if the device is in good state.
  */
  timeToDownload?: Date;
  /**
  * Gets or sets the IANA time zone Id of the device used to determine local work times.
  * This is typically the "home location" of the device. Default ["America/New\_York"].
  */
  timeZoneId?: string;
  /** Gets or sets the {@link IWorkTime} rules to apply to the device. Default [WorkTimeStandardHours]. */
  workTime?: IWorkTime;
}
