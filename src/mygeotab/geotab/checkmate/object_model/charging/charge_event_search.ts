/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from '../../../../geotab/checkmate/object_model/i_search';
import { IDeviceSearch } from '../../../../geotab/checkmate/object_model/i_device_search';



/** The object used to specify the arguments when searching for a {@link IChargeEvent}. */
export interface IChargeEventSearch extends ISearch
{
  /**
  * Gets or sets the device search criteria for the ChargeEvent with this {@link DeviceSearch}
  * Id. Available DeviceSearch options are:. IdGroupsGroupListSearch
  */
  deviceSearch: IDeviceSearch;
  /**
  * Gets or sets the from date, which is used to search for ChargeEvent(s) recorded
  * on or after this date.
  */
  fromDate?: Date;
  /**
  * Gets or sets the id, which is used to search for a Event record. Id cannot be used
  * with any other search properties.
  */
  id: string;
  /**
  * Gets or sets the to date, which is used to search for ChargeEvent(s) recorded on
  * or before this date.
  */
  toDate?: Date;
}
