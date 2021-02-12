/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from './search';
import { IDeviceSearch } from './device_search';

/**  The object used to specify the arguments when searching for {@link IVehicleConfiguration}(s). */
export interface IVehicleConfigurationSearch extends ISearch {
  /**
   * Gets or sets search for VehicleConfiguration for this {@link IDeviceSearch} Id.
   * Available DeviceSearch options are: IdGroupsGroupListSearch
   */
  deviceSearch: IDeviceSearch;
}
