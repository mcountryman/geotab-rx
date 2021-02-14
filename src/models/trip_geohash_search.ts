/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from "./search";
import { IDeviceSearch } from "./device_search";

/** The object used to specify the arguments when searching for a {@link ITripGeohash}. */
export interface ITripGeohashSearch extends ISearch {
  /**
   * Gets or sets search for TripGeohashes with a {@link IDeviceSearch} Id. Available
   * DeviceSearch options are: Id
   */
  deviceSearch?: IDeviceSearch;
  /** Gets or sets search for TripGeohashes recorded from this date onwards. */
  startDateTime?: Date;
}
