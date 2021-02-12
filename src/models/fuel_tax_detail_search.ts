/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from './search';
import { IDeviceSearch } from './device_search';

/**
 *  The object used to specify the arguments when searching for {@link IFuelTaxDetail}
 * elements.<br> This search has been designed to work efficiently with these parameters:DeviceSearchFromDateToDate
 */
export interface IFuelTaxDetailSearch extends ISearch {
  /** Gets or sets the device search. IdGroupsGroupListSearch */
  deviceSearch: IDeviceSearch;
  /**
   * Gets or sets the beginning of the time interval. The search will adjust it to the
   * nearest hour on or before this time. For instance, 8:20 AM will become 8 AM.
   */
  fromDate?: Date;
  /**
   * Gets or sets a value indicating whether to include any parts of boundary details
   * that fall outside the time interval.
   */
  includeBoundaries: boolean;
  /** Gets or sets a value indicating whether to include hourly data. */
  includeHourlyData: boolean;
  /** Gets or sets the max row version of the {@link IFuelTaxDetail} search criteria. */
  maxVersion?: number;
  /**
   * Gets or sets the end of the time interval. The search will adjust it to the nearest
   * hour on or after this time. For instance, 5:40 PM will become 6 PM.
   */
  toDate?: Date;
  /** Gets or sets the row version of the {@link IFuelTaxDetail} search criteria. */
  version?: number;
}
