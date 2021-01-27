/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from '../../../geotab/checkmate/object_model/i_search';
import { IUserSearch } from '../../../geotab/checkmate/object_model/i_user_search';
import { IGroupSearch } from '../../../geotab/checkmate/object_model/i_group_search';
import { IDeviceSearch } from '../../../geotab/checkmate/object_model/i_device_search';
import { ITrailerSearch } from '../../../geotab/checkmate/object_model/i_trailer_search';
import { DVIRLogType } from '../../../geotab/checkmate/object_model/d_v_i_r_log_type';



/**
*  The object used to specify the arguments when searching for {@link IDVIRLog}(s).
* A trailerSearch and deviceSearch cannot be used at the same time because a DVIR
* log entry is only ever associated with one asset type (for instance, if the "device"
* is set, "trailer" is always null and vice versa).
*/
export interface IDVIRLogSearch extends ISearch
{
  /**
  * Gets or sets search for DVIRLogs certified by a {@link IUser}. Available {@link
  * IUserSearch} options are:. Id
  */
  certifiedBySearch: IUserSearch;
  /**
  * Gets or sets search for DVIRLogs that are a member of these defect {@link IGroup}(s).
  * Available {@link IGroupSearch} options are:. Id
  */
  defectSearch: IGroupSearch[];
  /**
  * Gets or sets search for DVIRLogs for this {@link IDeviceSearch} Id. Available DeviceSearch
  * options are:. IdGroupsGroupListSearch
  */
  deviceSearch: IDeviceSearch;
  /** Gets or sets search for DVIRLogs that were recorded at this date or after. */
  fromDate?: Date;
  /**
  * Gets or sets search for DVIRLogs and include boundary logs outside the from and
  * to dates (for example, the log immediately preceding the from date).
  */
  includeBoundaryLogs?: boolean;
  /**
  * Gets or sets search for DVIRLogs and include logs that have been marked as rejected
  * by the driver.
  */
  includeRejected?: boolean;
  /** Gets or sets search for DVIRLogs that have been certified ( is not null). */
  isCertified?: boolean;
  /** Gets or sets search for DVIRLogs that have.  */
  isDefective?: boolean;
  /** Gets or sets search for DVIRLogs that have been repaired ( is not null). */
  isRepaired?: boolean;
  /** Gets or sets search for DVIRLogs which are safe or are not safe to operate. */
  isSafeToOperate?: boolean;
  /** Gets or sets search for DVIRLogs that match the specified {@link IDVIRLogType} */
  logTypes: DVIRLogType[];
  /**
  * Gets or sets Search for {@link IDVIRLog}s with a maximum of this version.
  *
  * @deprecated
  */
  maxVersion?: number;
  /**
  * Gets or sets Search for {@link IDVIRLog}s with a minimum of this version.
  *
  * @deprecated
  */
  minVersion?: number;
  /**
  * Gets or sets search to populate. {@link IDVIRLogType}
  *
  * @deprecated
  */
  populateLogType?: boolean;
  /**
  * Gets or sets search for DVIRLogs repaired by a {@link IUser}. Available {@link IUserSearch}
  * options are:. Id
  */
  repairedBySearch: IUserSearch;
  /** Gets or sets search for DVIRLogs have a match to this. {@link IDefectRemark} */
  searchByRemark: string;
  /** Gets or sets search for DVIRLogs that were recorded at this date or before. */
  toDate?: Date;
  /**
  * Gets or sets search for DVIRLogs with this {@link ITrailerSearch} Id. Available
  * TrailerSearch options are:. IdGroupsGroupListSearch
  */
  trailerSearch: ITrailerSearch;
  /**
  * Gets or sets search for DVIRLogs with this {@link IUserSearch} Id. Available UserSearch
  * options are:. Id
  */
  userSearch: IUserSearch;
}
