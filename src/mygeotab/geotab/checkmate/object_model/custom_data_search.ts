/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from '../../../geotab/checkmate/object_model/i_search';
import { IDeviceSearch } from '../../../geotab/checkmate/object_model/i_device_search';



/** The object used to specify the arguments when searching for {@link ICustomData}. */
export interface ICustomDataSearch extends ISearch
{
  /**
  * Gets or sets search for CustomData recorded for this {@link IDeviceSearch} Id. Available
  * DeviceSearch options are:. Id
  */
  deviceSearch: IDeviceSearch;
  /** Gets or sets search for CustomData that was recorded at this date or after. */
  fromDate?: Date;
  /** Gets or sets the maximum Id of the search criteria. */
  maxId: string;
  /** Gets or sets the minimum Id of the search criteria. */
  minId: string;
  /** Gets or sets search for CustomData that was recorded at this date or before. */
  toDate?: Date;
}
