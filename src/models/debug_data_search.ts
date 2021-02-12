/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from './search';
import { IDeviceSearch } from './device_search';

/**  The object used to specify the arguments when searching . */
export interface IDebugDataSearch extends ISearch {
  /**
   * Gets or sets the search for DebugData recorded for this Id. Available DeviceSearch
   * options are:. Id
   */
  deviceSearch: IDeviceSearch;
  /** Gets or sets the date after which DebugData was recorded. */
  fromDate?: Date;
  /** Gets or sets the date before which DebugData was recorded. */
  toDate?: Date;
}
