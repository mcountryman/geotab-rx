/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from './search';
import { IDeviceSearch } from './device_search';
import { ICoordinate } from './coordinate';
import { IUserSearch } from './user_search';

/**  The object used to specify the arguments when searching for {@link IDeviceStatusInfo}(s). */
export interface IDeviceStatusInfoSearch extends ISearch {
  /** Gets or sets the maximum number of Devices to search for when specifying a "Position". */
  closestAssetLimit?: number;
  /**
   * Gets or sets search for {@link IDeviceStatusInfo}(s) from a device that matches
   * the {@link IDeviceSearch} Id or in the Groups specified. This includes archived
   * and deleted devices. Available DeviceSearch options are:. IdGroupsGroupListSearch
   */
  deviceSearch: IDeviceSearch;
  /** Gets or sets a value indicating whether to exclude exception events. Default [false]. */
  excludeExceptionEvents: boolean;
  /**
   * Gets or sets Gets or sets {@link IId} search criteria.
   *
   * @deprecated
   */
  id: string;
  /** Gets or sets the maximum Id of the search criteria. */
  maxId: string;
  /**
   * Gets or sets search for Status Info for Devices in the vicinity of the provided
   * {@link ICoordinate}. Starting from this position, an outward search for Devices
   * will continue until the number of devices found matches the number defined in the
   * "ClosestAssetLimit" property.
   */
  position: ICoordinate;
  /**
   * Gets or sets search for Device Status Info associated with this {@link IUserSearch}
   * Id. Available UserSearch options are:. Id
   */
  userSearch: IUserSearch;
}
