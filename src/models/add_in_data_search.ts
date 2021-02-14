/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from "./search";
import { IGroupSearch } from "./group_search";

/** The object used to specify the arguments when searching for {@link IAddInData}. */
export interface IAddInDataSearch extends ISearch {
  /** Gets or sets the add-in identifier. */
  addInId: string;
  /**
   * Gets or sets search for Devices that are a member of these {@link IGroupSearch}(s).
   * Available GroupSearch options are:. Id
   */
  groups: IGroupSearch[];
  /**
   * Gets or sets the select clause which decides which properties of the stored objects
   * are returned.
   */
  selectClause: string;
  /** Gets or sets the where clause which filters the data that is returned. */
  whereClause: string;
}
