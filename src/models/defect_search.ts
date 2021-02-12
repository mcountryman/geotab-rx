/* eslint-disable @typescript-eslint/no-empty-interface */
import { IGroupSearch } from './group_search';
import { IDeviceSearch } from './device_search';
import { ITrailerSearch } from './trailer_search';

/** The object used to specify the arguments when searching for a {@link IDefect}. */
export interface IDefectSearch extends IGroupSearch {
  /**
   * Gets or sets search for defect lists available to this {@link IDeviceSearch} Id.
   * Available DeviceSearch options are:. Id
   */
  deviceSearch: IDeviceSearch;
  /**
   * Gets or sets search for defect lists that are members of these (s) one of it's children
   * or one of it's parents. Available GroupSearch options are:. Id
   */
  groups: IGroupSearch[];
  /**
   * Gets or sets search for defect lists available to this {@link ITrailerSearch} Id.
   * Available TrailerSearch options are:. Id
   */
  trailerSearch: ITrailerSearch;
}
