/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from '../../../geotab/checkmate/object_model/i_search';
import { IUserSearch } from '../../../geotab/checkmate/object_model/i_user_search';



/**
*  The object used to specify the arguments when searching for {@link IDutyStatusViolation}(s).
* This search has been designed to work efficiently with these combinations of parameters:UserSearch
* + FromDate and/or ToDate
*/
export interface IDutyStatusViolationSearch extends ISearch
{
  /**
  * Gets or sets search for duty status violations that were recorded at this date or
  * after.
  */
  fromDate?: Date;
  /** Gets or sets search for an entry based on the specific {@link IId}. */
  id: string;
  /**
  * Gets or sets search for duty status violations that were recorded at this date or
  * before.
  */
  toDate?: Date;
  /**
  * Gets or sets search for duty status violations with this {@link IUserSearch}. Available
  * UserSearch options are:. IdGroupSearch
  */
  userSearch: IUserSearch;
}
