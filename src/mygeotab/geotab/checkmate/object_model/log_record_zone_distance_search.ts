/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from '../../../geotab/checkmate/object_model/i_search';
import { IDeviceSearch } from '../../../geotab/checkmate/object_model/i_device_search';
import { IZoneSearch } from '../../../geotab/checkmate/object_model/i_zone_search';



/**
*  The object used to specify the arguments when searching for {@link ILogRecord}
* from GPSZoneDistance page(s).
*/
export interface ILogRecordZoneDistanceSearch extends ISearch
{
  /**
  * Gets or sets search for {@link ILogRecordZoneDistance}s that were created for {@link
  * IDeviceSearch}(s). Available DeviceSearch options are:. Id
  */
  deviceSearch: IDeviceSearch;
  /**
  * Gets or sets search for {@link ILogRecordZoneDistance}s that were recorded at this
  * date or after.
  */
  fromDate?: Date;
  /**
  * Gets or sets search for {@link ILogRecordZoneDistance}s that were recorded at this
  * date or before.
  */
  toDate?: Date;
  /**
  * Gets or sets search for {@link ILogRecordZoneDistance}s that were created for {@link
  * IZoneSearch}(s). Available ZoneSearch options are:. Id
  */
  zoneSearch: IZoneSearch;
}
