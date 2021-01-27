/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from '../../../geotab/checkmate/object_model/i_search';
import { IBoundingBox } from '../../../geotab/checkmate/object_model/geographical/i_bounding_box';
import { IDeviceSearch } from '../../../geotab/checkmate/object_model/i_device_search';
import { IUserSearch } from '../../../geotab/checkmate/object_model/i_user_search';



/**
*  The object used to specify the arguments when searching for<br> {@link ITrip}(s).<br>
* This search has been designed to work efficiently with these combinations of parameters:IdDeviceSearch
* + FromDate and/or ToDate (+ IncludeOverlappedTrips)UserSearch + FromDate and/or
* ToDate (+ IncludeOverlappedTrips)
*/
export interface ITripSearch extends ISearch
{
  /**
  * Gets or sets search for Trips with this {@link IDeviceSearch} Id. Available DeviceSearch
  * options are:. Id
  */
  deviceSearch: IDeviceSearch;
  /**
  * Gets or sets search for Trips recorded at this date or after. When "IncludeOverlappedTrips"
  * is set to True, search for Trips where the NextTripStartTime is at this date, after
  * or NULL.
  */
  fromDate?: Date;
  /**
  * Gets or sets a value indicating whether when OverlappedTrips is set to True; any
  * part of a trip that overlaps with the FromDate or ToDate boundary will have the
  * entire trip included in the data.
  */
  includeOverlappedTrips: boolean;
  /** Gets or sets maximum Id of the search criteria. */
  maxId: string;
  /** Gets or sets minimum Id of the search criteria. */
  minId: string;
  /**
  * Gets or sets search rectangular area for Trips; the trips being retrieved must be
  * located in this area. The {@link IBoundingBox} object should contain the bottom
  * left and top right coordinates of the searching rectangle.
  */
  searchArea: IBoundingBox;
  /**
  * Gets or sets search for Trips recorded at this date or before. When "IncludeOverlappedTrips"
  * is set to True, search for Trips where the StartDateTime is this date or before.
  */
  toDate?: Date;
  /**
  * Gets or sets search for Trips with this {@link IUserSearch} Id. Available UserSearch
  * options are:. Id
  */
  userSearch: IUserSearch;
}
