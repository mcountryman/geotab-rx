/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from "./search";
import { DeviceType } from "./device_type";
import { IGroupSearch } from "./group_search";
import { IGroupListSearch } from "./group_list_search";

/** The object used to specify the arguments when searching for a {@link IDevice}. */
export interface IDeviceSearch extends ISearch {
  /**
   * Gets or sets search for Devices with comments matching this value. Wildcard can
   * be used by prepending/appending "%" to string. Example "%comments%".
   */
  comment: string;
  /** Gets or sets search for Devices of this {@link IDeviceType}. */
  deviceType?: DeviceType;
  /**
   * Gets or sets search for a Device by Vehicle Identification Number (VIN) reported
   * by the engine. This is the unique number assigned to the vehicle during manufacturing
   * and reported through any non-legacy GO device. This differs from in that it is the
   * last VIN reported from the Device, and will be updated whether it is classified
   * as valid or invalid.
   */
  engineVehicleIdentificationNumber: string;
  /**
   * Gets or sets search for Devices that were active at this date or after. Set to UTC
   * now to search for only currently active (non-archived) devices.
   */
  fromDate?: Date;
  /** Gets or sets for devices and asset types. */
  groupListSearch: IGroupListSearch;
  /**
   * Gets or sets search for Devices that are a member of these {@link IGroupSearch}(s).
   * Each GroupSearch is an object within the array. Available GroupSearch options are:
   * Id
   */
  groups: IGroupSearch[];
  /** Gets or sets search for a Device with this unique hardware ID. */
  hardwareId?: number;
  /**
   * Gets or sets search for entities that contain specific keywords in all wildcard
   * string-searchable fields.
   */
  keywords: string[];
  /**
   * Gets or sets search for Devices with a license plate matching this value. Wildcard
   * can be used by prepending/appending "%" to string. Example "%comments%".
   */
  licensePlate: string;
  /**
   * Gets or sets search for Devices with this Name. Name is the primary description
   * of the Device. Wildcard can be used by prepending/appending "%" to string. Example
   * "%name%".
   */
  name: string;
  /** Gets or sets search for a Device by its unique serial number. */
  serialNumber: string;
  /** Gets or sets search for Devices that were active at this date or before. */
  toDate?: Date;
  /**
   * Gets or sets search for a Device by Vehicle Identification Number (VIN). This is
   * the unique number assigned to the vehicle during manufacturing. This differs from
   * in that it is the last VIN reported from the Device that was determined to be valid.
   */
  vehicleIdentificationNumber: string;
}
