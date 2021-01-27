/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from '../../../geotab/checkmate/object_model/i_search';
import { IUserSearch } from '../../../geotab/checkmate/object_model/i_user_search';



/**
*  The object used to specify the arguments when searching for a .
*
* @deprecated
*/
export interface IUserLoginStatusSearch extends ISearch
{
  /** Gets or sets a value indicating whether the users are locked at this moment. */
  onlyCurrentyLockedOut: boolean;
  /**
  * Gets or sets search for UserloginStatus with this {@link IUserSearch} Id Available
  * UserSearch options are:. Id
  */
  userSearch: IUserSearch;
}
