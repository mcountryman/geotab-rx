/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from '../../../../geotab/checkmate/object_model/i_search';
import { IDeviceSearch } from '../../../../geotab/checkmate/object_model/i_device_search';
import { IRuleSearch } from '../../../../geotab/checkmate/object_model/exceptions/i_rule_search';
import { IUserSearch } from '../../../../geotab/checkmate/object_model/i_user_search';



/**
*  The object used to specify the arguments when searching for<br> {@link IExceptionEvent}.<br>
* This search has been designed to work efficiently with these combinations of parameters:IdDeviceSearch
* + RuleSearch + FromDate and/or ToDate
*/
export interface IExceptionEventSearch extends ISearch
{
  /**
  * Gets or sets filter by the {@link IDeviceSearch} options. Providing a Device ID
  * will search for any Exception Events recorded for that Device. Providing Groups
  * will search Exception Events recorded for Devices that are members of the provided
  * GroupSearch(s) or their children. Available DeviceSearch options are:. IdGroupsGroupListSearch
  */
  deviceSearch: IDeviceSearch;
  /** Gets or sets search for Exception Events that occurred at this date or after. */
  fromDate?: Date;
  /** Gets or sets the maximum row version of the {@link IExceptionEvent} search criteria. */
  maxVersion?: number;
  /**
  * Gets or sets filter by the {@link IRuleSearch} options. Providing a Rule ID will
  * search for any Exception Events recorded for that Rule. Available RuleSearch options
  * are:. Id
  */
  ruleSearch: IRuleSearch;
  /** Gets or sets search for Exception Events that occurred at this date or before. */
  toDate?: Date;
  /**
  * Gets or sets the filter by the {@link IUserSearch} options. Providing a User ID
  * will search for any Exception Events recorded for that User. Providing Groups will
  * search Exception Events recorded for Users that are members of the provided GroupSearch(s)
  * or their children. Available UserSearch options are: IdDriverGroupsDriverGroupListCompanyGroupsUserGroupListSearch
  * Cannot be used with DeviceSearch.
  */
  userSearch: IUserSearch;
  /** Gets or sets the row version of the {@link IExceptionEvent} search criteria. */
  version?: number;
}
