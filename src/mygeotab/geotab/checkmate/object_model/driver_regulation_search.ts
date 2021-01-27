/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from '../../../geotab/checkmate/object_model/i_search';
import { IUserSearch } from '../../../geotab/checkmate/object_model/i_user_search';



/**
* true The object used to specify the arguments when searching for {@link IDriverRegulation}
* objects.
*/
export interface IDriverRegulationSearch extends ISearch
{
  /** Gets or sets the date from which the availability is calculated. */
  fromDate?: Date;
  /** Gets or sets search for an entry based on the specific {@link IId}. */
  id: string;
  /** Gets or sets the date to which the availability is calculated. */
  toDate?: Date;
  /**
  * Gets or sets search for duty status availability objects with this {@link IUserSearch}.
  * Available UserSearch options are:. IdGroupSearch
  */
  userSearch: IUserSearch;
}
