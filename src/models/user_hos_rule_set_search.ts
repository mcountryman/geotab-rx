/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from "./search";
import { IUserSearch } from "./user_search";

/**
 * false The object used to specify the arguments when searching for {@link IHosRuleSet}
 * objects.
 */
export interface IUserHosRuleSetSearch extends ISearch {
  /** Gets or sets search for hos ruleset objects that were recorded at this date or after. */
  fromDate?: Date;
  /**
   * Gets or sets Search for {@link IUserHosRuleSet}s with a maximum of this version.
   *
   * @deprecated
   */
  maxVersion?: number;
  /**
   * Gets or sets Search for {@link IUserHosRuleSet}s with a minimum of this version.
   *
   * @deprecated
   */
  minVersion?: number;
  /** Gets or sets search for hos ruleset objects that were recorded at this date or before. */
  toDate?: Date;
  /**
   * Gets or sets search for hos ruleset objects with this {@link IUserSearch}. Available
   * UserSearch options are:. IdGroupSearch
   */
  userSearch: IUserSearch;
}
