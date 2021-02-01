/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from "../search";
import { IDeviceSearch } from "../device_search";

/** The object used to specify the arguments when searching for a {@link IFuelUpEvent}. */
export interface IFuelUpEventSearch extends ISearch {
  /**
   * Gets or sets the device search criteria for the FuelUpEvent with this {@link DeviceSearch}
   * Id. Available DeviceSearch options are:. Id
   */
  deviceSearch: IDeviceSearch;
  /**
   * Gets or sets the from date, which is used to search for FuelUpEvent(s) recorded
   * on or after this date.
   */
  fromDate?: Date;
  /**
   * Gets or sets the to date, which is used to search for FuelUpEvent(s) recorded on
   * or before this date.
   */
  toDate?: Date;
}
