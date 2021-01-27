/* eslint-disable @typescript-eslint/no-empty-interface */
import { VehicleFeatureCategory } from '../../../geotab/checkmate/object_model/vehicle_feature_category';



/** The plan a device is on. */
export interface IDeviceFlags
{
  /** Gets a list of features currently active on the device. */
  activeFeatures: VehicleFeatureCategory[];
  /** Gets a value indicating whether the device has access to the active tracking functionality. */
  isActiveTrackingAllowed: boolean;
  /**
  * Gets a value indicating whether a {@link IBoolean} indicating if the device has
  * access to engine functionality.
  */
  isEngineAllowed: boolean;
  /** Gets a value indicating whether the device has access to Garmin functionality. */
  isGarminAllowed: boolean;
  /** Gets a value indicating whether the device has access to HOS functionality. */
  isHOSAllowed: boolean;
  /** Gets a value indicating whether the device has access to Iridium functionality. */
  isIridiumAllowed: boolean;
  /** Gets a value indicating whether the device has access to odometer functionality. */
  isOdometerAllowed: boolean;
  /** Gets a value indicating whether the device has access to trip detail functionality. */
  isTripDetailAllowed: boolean;
  /** Gets a value indicating whether the device can be viewed in MyGeotab. */
  isUIAllowed: boolean;
  /** Gets a value indicating whether the device has access to VIN functionality. */
  isVINAllowed: boolean;
  /**
  * Gets the rate plans. Has been replaced by ActiveFeatures. Kept around for legacy
  * serializers. See case 143314.
  */
  ratePlans: string[];
}
