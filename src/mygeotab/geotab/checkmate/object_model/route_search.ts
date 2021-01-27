/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from '../../../geotab/checkmate/object_model/i_search';
import { IDeviceSearch } from '../../../geotab/checkmate/object_model/i_device_search';
import { RouteType } from '../../../geotab/checkmate/object_model/route_type';
import { IZoneSearch } from '../../../geotab/checkmate/object_model/i_zone_search';



/**  The object used to specify the arguments when searching for {@link IRoute}(s). */
export interface IRouteSearch extends ISearch
{
  /**
  * Gets or sets filter by the {@link IDeviceSearch} options. Providing a device ID
  * will search for any Routes that are assigned to that Device. Providing the Groups
  * will search for Routes for that have Devices in that group. Available DeviceSearch
  * options are:. IdGroupsGroupListSearchOnly {@link IRouteType} "Plan" have a Device
  * assigned.
  */
  deviceSearch: IDeviceSearch;
  /** Gets or sets search for Routes that were active at this date or after. */
  fromDate?: Date;
  /** Gets or sets maximum version of the search criteria. */
  maxVersion?: number;
  /** Gets or sets minimum version of the search criteria. */
  minVersion?: number;
  /**
  * Gets or sets search for Routes with this Name. Wildcard can be used by prepending/appending
  * "%" to string. Example "%comments%".
  */
  name: string;
  /** Gets or sets search for Routes with this {@link IRouteType}. */
  routeType?: RouteType;
  /** Gets or sets search for Routes that were active at this date or before. */
  toDate?: Date;
  /**
  * Gets or sets filter by the {@link IZoneSearch} options. Providing a zone ID will
  * search for any Routes that have that Zone as a planned stop. Providing the Groups
  * or GroupListSearch will search for Routes that have a Zone (planned stop) that is
  * in both that group and its' children or its' parent tree. Available ZoneSearch options
  * are:. IdGroupsGroupListSearch
  */
  zoneSearch: IZoneSearch;
}
