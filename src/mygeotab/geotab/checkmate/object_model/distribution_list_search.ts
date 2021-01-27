/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from '../../../geotab/checkmate/object_model/i_search';
import { IRecipientSearch } from '../../../geotab/checkmate/object_model/i_recipient_search';
import { IRuleSearch } from '../../../geotab/checkmate/object_model/exceptions/i_rule_search';



/**
*  The object used to specify the arguments when searching for {@link IDistributionList}(s).
*
* @deprecated
*/
export interface IDistributionListSearch extends ISearch
{
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
