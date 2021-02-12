/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from './search';
import { IDeviceSearch } from './device_search';
import { DutyStatusLogType } from './duty_status_log_type';
import { IUserSearch } from './user_search';
import { DutyStatusMalfunctionTypes } from './duty_status_malfunction_types';
import { DutyStatusOrigin } from './duty_status_origin';

/**  The object used to specify the arguments when searching for {@link IDutyStatusLog}(s). */
export interface IDutyStatusLogSearch extends ISearch {
  /**
   * Gets or sets search for DutyStatusLogs for this {@link IDeviceSearch} Id. Available
   * DeviceSearch options are:. IdGroupsGroupListSearchUserSearch is always applied first
   * if both DeviceSearch and UserSearch are provided.
   */
  deviceSearch: IDeviceSearch;
  /** Gets or sets search for DutyStatusLogs that were recorded at this date or after. */
  fromDate?: Date;
  /**
   * Gets or sets search for DutyStatusLogs and include boundary logs outside the from
   * and to dates (for example, the log immediately preceding the from date).
   */
  includeBoundaryLogs?: boolean;
  /**
   * Gets or sets search for DutyStatusLogs and include compliance properties (e.g. Odometer,
   * EngineHours).
   */
  includeCompliance?: boolean;
  /** Gets or sets whether to populate locations for DutyStatusLogs. This can be expensive. */
  includeLocations?: boolean;
  /** Gets or sets include modification history of the {@link IDutyStatusLog} results. */
  includeModifications?: boolean;
  /** Gets or sets search for DutyStatusLogs based on {@link IDutyStatusMalfunctionTypes}. */
  malfunction: DutyStatusMalfunctionTypes[];
  /** Gets or sets search for {@link IDutyStatusLog}s with a maximum of this version. */
  maxVersion?: number;
  /** Gets or sets search for {@link IDutyStatusLog}s with a minimum of this version. */
  minVersion?: number;
  /** Gets or sets search for DutyStatusLogs based on {@link IDutyStatusOrigin}. */
  origin: DutyStatusOrigin[];
  /** Gets or sets search for DutyStatusLogs with the provided {@link IDutyStatusLogType}s. */
  statuses: DutyStatusLogType[];
  /** Gets or sets search for DutyStatusLogs that were recorded at this date or before. */
  toDate?: Date;
  /**
   * Gets or sets search for DutyStatusLogs with this {@link IUserSearch} Id. Available
   * UserSearch options are:. IdGroupSearch
   */
  userSearch: IUserSearch;
}
