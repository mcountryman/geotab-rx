/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from '../../../geotab/checkmate/object_model/i_search';
import { GroupSearchRelation } from '../../../geotab/checkmate/object_model/group_search_relation';



/** Group search list */
export interface IGroupListSearch extends ISearch
{
  /** Gets or sets group id */
  groupId?: string;
  /** Gets or sets the groups */
  groupListSearches?: IGroupListSearch[];
  /** Gets or sets how to search the group relations */
  relation?: GroupSearchRelation;
}
