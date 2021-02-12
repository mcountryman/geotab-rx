/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from './search';

/** The object used to specify the arguments when searching for a {@link IGroup}. */
export interface IGroupSearch extends ISearch {
  /**
   * Gets or sets include Groups from all trees, for example "Security Groups" and "Private
   * User Groups". The"Company Group" tree is included by default.
   */
  includeAllTrees?: boolean;
  /** Gets or sets gets maximum Id of the search criteria. */
  maxId: string;
  /**
   * Gets or sets search for Groups with this Name. Wildcard can be used by prepending/appending
   * "%" to string. Example "%name%".
   */
  name: string;
  /**
   * Gets or sets search for Groups with this Reference. Wildcard can be used by prepending/appending
   * "%" to string. Example "%reference%".
   */
  reference: string;
}
