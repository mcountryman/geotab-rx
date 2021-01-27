/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from '../../../geotab/checkmate/object_model/i_search';
import { IDeviceSearch } from '../../../geotab/checkmate/object_model/i_device_search';



/**  The object used to specify the arguments when searching for {@link IVehicleConfiguration}(s). */
export interface IVehicleConfigurationSearch extends ISearch
{
  /**
  * Gets or sets search for VehicleConfiguration for this {@link IDeviceSearch} Id.
  * Available DeviceSearch options are: IdGroupsGroupListSearch
  */
  deviceSearch: IDeviceSearch;
}
