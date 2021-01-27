/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from '../../../../geotab/checkmate/object_model/i_search';
import { IDeviceSearch } from '../../../../geotab/checkmate/object_model/i_device_search';
import { IUserSearch } from '../../../../geotab/checkmate/object_model/i_user_search';



/**
* The object used to specify the arguments when searching for {@link IMediaFile}.
* This will return the data describing a file, not the actual file.
*/
export interface IMediaFileSearch extends ISearch
{
  /**
  * Gets or sets search for MediaFile recorded for this {@link IDeviceSearch} Id. Available
  * DeviceSearch options are:. IdGroupGroupListSearch
  */
  deviceSearch: IDeviceSearch;
  /**
  * Gets or sets search for MediaFile with this {@link IUserSearch} Id. Available UserSearch
  * options are:. Id
  */
  driverSearch: IUserSearch;
  /**
  * Gets or sets search for MediaFile records at this date or after. Includes overlapping
  * dates.
  */
  fromDate?: Date;
  /** Gets or sets search for MediaFile records before this version. */
  maxVersion?: number;
  /** Gets or sets search for MediaFile records at or after this version. */
  minVersion?: number;
  /**
  * Gets or sets search for MediaFile records at this date or before. Includes overlapping
  * dates.
  */
  toDate?: Date;
}
