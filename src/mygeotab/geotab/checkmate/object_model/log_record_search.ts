/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from '../../../geotab/checkmate/object_model/i_search';
import { IDeviceSearch } from '../../../geotab/checkmate/object_model/i_device_search';



/**
*  The object used to specify the arguments when searching for<br> {@link ILogRecord}(s).<br>
* When searching for log records the system will return all records that match the<br>
* search criteria and interpolate the value at the provided from/to dates when there
* is no record that<br> corresponds to the date. Interpolated records are dynamically
* created when the request is made and<br> can be identified as not having the ID
* property populated. Records with an ID are stored in the<br> database.<br> This
* search has been designed to work efficiently with these combinations of parameters:IdDeviceSearch
* + FromDate and/or ToDate
*/
export interface ILogRecordSearch extends ISearch
{
  /**
  * Gets or sets search for LogRecords for this {@link IDeviceSearch} Id. Available
  * DeviceSearch options are:. Id
  */
  deviceSearch: IDeviceSearch;
  /** Gets or sets search for LogRecords at this date or after. */
  fromDate?: Date;
  /** Gets or sets a value indicating whether [observe active state]. */
  observeActiveState: boolean;
  /** Gets or sets search for LogRecords at this date or before. */
  toDate?: Date;
}
