/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from '../../../../../geotab/checkmate/object_model/i_search';
import { IUser } from '../../../../../geotab/checkmate/object_model/i_user';



/** The object used to specify the arguments when searching for a . */
export interface IUserDisplayProfileSearch extends ISearch
{
  /** Gets or sets the user. */
  user?: IUser;
}
