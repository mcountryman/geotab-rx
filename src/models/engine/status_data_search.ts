/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from '../search';
import { IDeviceSearch } from '../device_search';
import { IDiagnosticSearch } from '../engine/diagnostic_search';

/**
 *  The object used to specify the arguments when searching for<br> {@link IStatusData}.<br>
 * When searching for status data including DeviceSearch and DiagnosticSearch<br> the
 * system will return all records that match the search criteria and interpolate the
 * value at the<br> provided from/to dates when there is no record that corresponds
 * to the date. Interpolated records<br> are dynamically created when the request is
 * made and can be identified as not having the ID property<br> populated. Records
 * with an ID are stored in the database.<br> This search has been designed to work
 * efficiently with these combinations of parameters:IdDeviceSearch + DiagnosticSearch
 * + FromDate and/or ToDate
 */
export interface IStatusDataSearch extends ISearch {
  /**
   * Gets or sets search for StatusData recorded for this {@link IDeviceSearch} Id. Available
   * DeviceSearch options are:. IdGroupGroupListSearch
   */
  deviceSearch: IDeviceSearch;
  /**
   * Gets or sets search for StatusData with this {@link IDiagnosticSearch} Id. Available
   * DiagnosticSearch options are:. Id
   */
  diagnosticSearch: IDiagnosticSearch;
  /** Gets or sets search for StatusData records that were logged at this date or after. */
  fromDate?: Date;
  /** Gets or sets a value indicating whether [observe active state]. */
  observeActiveState: boolean;
  /** Gets or sets search for StatusData records that were logged at this date or before. */
  toDate?: Date;
  /**
   * Gets or sets Gets or sets the row version of the {@link IStatusData} search criteria.
   *
   * @deprecated
   */
  version?: number;
}
