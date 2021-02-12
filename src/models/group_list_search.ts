/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from './search';
import { GroupSearchRelation } from './group_search_relation';

/** Group search list */
export interface IGroupListSearch extends ISearch {
  /** Gets or sets group id */
  groupId?: string;
  /** Gets or sets the groups */
  groupListSearches?: IGroupListSearch[];
  /** Gets or sets how to search the group relations */
  relation?: GroupSearchRelation;
}
