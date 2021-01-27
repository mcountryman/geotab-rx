/* eslint-disable @typescript-eslint/no-empty-interface */
import { INameEntity } from '../../../geotab/checkmate/object_model/i_name_entity';
import { IRecipient } from '../../../geotab/checkmate/object_model/i_recipient';
import { IRule } from '../../../geotab/checkmate/object_model/exceptions/i_rule';



/**  A distribution list links a set of {@link IRecipientType}. */
export interface IDistributionList extends INameEntity
{
  /**
  * Gets or sets a list of recipients that will be notified when the {@link IRule}(s)
  * are violated.
  */
  recipients: IRecipient[];
  /** Gets or sets the list of {@link IRecipient}(s) will be notified of when broken. */
  rules: IRule[];
}
