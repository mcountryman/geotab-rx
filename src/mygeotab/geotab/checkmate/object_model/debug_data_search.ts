/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from '../../../geotab/checkmate/object_model/i_search';
import { IDeviceSearch } from '../../../geotab/checkmate/object_model/i_device_search';



/**  The object used to specify the arguments when searching . */
export interface IDebugDataSearch extends ISearch
{
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
