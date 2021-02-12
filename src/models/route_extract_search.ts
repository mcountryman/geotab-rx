/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from './search';
import { IDeviceSearch } from './device_search';

/**
 *  The object used to specify the arguments when searching for {@link IRouteExtract}(s).
 *
 * @deprecated
 */
export interface IRouteExtractSearch extends ISearch {
  /**
   * Gets or sets search for RouteExtract with this {@link IDeviceSearch} Id. Available
   * DeviceSearch options are:. Id
   */
  deviceSearch: IDeviceSearch;
  /** Gets or sets search for {@link IRouteExtract} recorded at this date or after. */
  fromDate?: Date;
  /** Gets or sets search for {@link IRouteExtract} recorded before this date. */
  toDate?: Date;
}
