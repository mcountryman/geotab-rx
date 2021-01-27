/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from '../../../geotab/checkmate/object_model/i_search';
import { IDeviceSearch } from '../../../geotab/checkmate/object_model/i_device_search';
import { IUserSearch } from '../../../geotab/checkmate/object_model/i_user_search';
import { DriverChangeType } from '../../../geotab/checkmate/object_model/driver_change_type';



/** The object used to specify the arguments when searching for a {@link IDriverChange}. */
export interface IDriverChangeSearch extends ISearch
{
  /**
  * Gets or sets search for DriverChanges with this Id or in the provided Groups. Available
  * DeviceSearch options are:. IdGroupsGroupListSearch
  */
  deviceSearch: IDeviceSearch;
  /** Gets or sets search for DriverChange records at this date or after. */
  fromDate?: Date;
  /**
  * Gets or sets a value indicating whether to include the next driver change after
  * the to date or the most recent driver change (if dates are not provided).
  */
  includeNextChanges: boolean;
  /**
  * Gets or sets a value indicating whether to include the last driver change before
  * the from date or the most recent driver change (if dates are not provided).
  */
  includeOverlappedChanges: boolean;
  /** Gets or sets maximum version of the search criteria. */
  maxVersion?: number;
  /** Gets or sets search for DriverChange records at this date or before. */
  toDate?: Date;
  /** Gets or sets a value indicating the {@link IDriverChangeType} to search for exclusively. */
  type?: DriverChangeType;
  /**
  * Gets or sets search for DriverChanges with this Id or DriverGroups. Available UserSearch
  * options are:. IdDriverGroupsDriverGroupListSearch
  */
  userSearch: IUserSearch;
}
