/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from '../../../geotab/checkmate/object_model/i_search';
import { IUserSearch } from '../../../geotab/checkmate/object_model/i_user_search';
import { UserSupportType } from '../../../geotab/checkmate/object_model/user_support_type';



/**
*  The object used to specify the arguments when searching for a .
*
* @deprecated
*/
export interface IUserSupportSearch extends ISearch
{
  /** Gets or sets search for UserSupport with this {@link IUserSupportType} Id */
  type?: UserSupportType;
  /**
  * Gets or sets search for UserSupport with this {@link IUserSearch} Id Available UserSearch
  * options are:. Id
  */
  userSearch?: IUserSearch;
}
