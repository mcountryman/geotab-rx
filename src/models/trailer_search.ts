/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from './search';
import { IGroupSearch } from './group_search';

/**  The object used to specify the arguments when searching for {@link ITrailer}(s). */
export interface ITrailerSearch extends ISearch {
  /**
   * Gets or sets search for Trailers that are members of these (s) one of it's children
   * or one of it's parents. Available GroupSearch options are:. Id
   */
  groups: IGroupSearch[];
  /**
   * Gets or sets search for Trailers with a name containing this {@link IString}. Wildcard
   * can be used by prepending/appending "%" to string.
   */
  name: string;
}
