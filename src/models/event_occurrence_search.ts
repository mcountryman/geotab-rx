/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from './search';
import { IDeviceSearch } from './device_search';

/**
 *  The object used to specify the arguments when searching for {@link IEventOccurrence}(s).
 *
 * @deprecated
 */
export interface IEventOccurrenceSearch extends ISearch {
  /**
   * Gets or sets a value indicating whether gets or sets search for active {@link IEventOccurrence}s
   * recorded Only.
   */
  activeOnly: boolean;
  /**
   * Gets or sets search for {@link IEventOccurrence}s with this {@link IDeviceSearch}
   * Id. Filter by the {@link IDeviceSearch} options. Providing a device ID will search
   * for any EventOccurrences that are assigned to that Device. Providing the Groups
   * will search for EventOccurrences for that have Devices in that group. Available
   * DeviceSearch options are:. IdGroupsGroupListSearch
   */
  deviceSearch: IDeviceSearch;
  /** Gets or sets search for {@link IEventOccurrence}s recorded at this date or after. */
  fromDate?: Date;
  /** Gets or sets gets maximum Id of the search criteria. */
  maxId: string;
  /** Gets or sets gets minimum Id of the search criteria. */
  minId: string;
  /** Gets or sets search for {@link IEventOccurrence}s recorded at this date or before. */
  toDate?: Date;
}
