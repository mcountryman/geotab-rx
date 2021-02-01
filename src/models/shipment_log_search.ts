/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from "./search";
import { IDeviceSearch } from "./device_search";
import { IUserSearch } from "./user_search";

/**  The object used to specify the arguments when searching for {@link IShipmentLog}(s). */
export interface IShipmentLogSearch extends ISearch {
  /**
   * Gets or sets search for ShipmentLogs with this commodity. Wildcard can be used by
   * prepending/appending "%" to string.
   */
  commodity: string;
  /**
   * Gets or sets search for ShipmentLogs for this {@link IDeviceSearch} Id. Available
   * DeviceSearch options are:. Id
   */
  deviceSearch: IDeviceSearch;
  /**
   * Gets or sets search for ShipmentLogs with this document number. Wildcard can be
   * used by prepending/appending "%" to string.
   */
  documentNumber: string;
  /**
   * Gets or sets search for ShipmentLogs that were active at this date or after. Set
   * to UTC now to search for only currently active ShipmentLogs.
   */
  fromDate?: Date;
  /**
   * Gets or sets search for entities that contain specific keywords in all wildcard
   * string-searchable fields.
   */
  keywords: string[];
  /**
   * Gets or sets Search for {@link IShipmentLog}s with a maximum of this version.
   *
   * @deprecated
   */
  maxVersion?: number;
  /**
   * Gets or sets Search for {@link IShipmentLog}s with a minimum of this version.
   *
   * @deprecated
   */
  minVersion?: number;
  /**
   * Gets or sets search for ShipmentLogs with this shipper name. Wildcard can be used
   * by prepending/appending "%" to string.
   */
  shipperName: string;
  /** Gets or sets search for ShipmentLogs that were active at this date or before. */
  toDate?: Date;
  /**
   * Gets or sets search for ShipmentLogs with this {@link IUserSearch} Id. Available
   * UserSearch options are:. Id
   */
  userSearch: IUserSearch;
}
