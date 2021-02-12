/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from './search';
import { IRecipientSearch } from './recipient_search';
import { IRuleSearch } from './exceptions/rule_search';

/**
 *  The object used to specify the arguments when searching for {@link IDistributionList}(s).
 *
 * @deprecated
 */
export interface IDistributionListSearch extends ISearch {
  /** Gets or sets the maximum Id of the search criteria. */
  maxId: string;
  /**
   * Gets or sets search for DistributionLists with these full {@link IRecipient} objects.
   * Available RuleSearch options are:. Id
   */
  recipientSearch: IRecipientSearch;
  /**
   * Gets or sets search for DistributionLists with this {@link IRuleSearch} Id. Available
   * RuleSearch options are:. Id
   */
  ruleSearch: IRuleSearch;
}
