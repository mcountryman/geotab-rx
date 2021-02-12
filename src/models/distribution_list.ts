/* eslint-disable @typescript-eslint/no-empty-interface */
import { INameEntity } from './name_entity';
import { IRecipient } from './recipient';
import { IRule } from './exceptions/rule';

/**  A distribution list links a set of {@link IRecipientType}. */
export interface IDistributionList extends INameEntity {
  /**
   * Gets or sets a list of recipients that will be notified when the {@link IRule}(s)
   * are violated.
   */
  recipients: IRecipient[];
  /** Gets or sets the list of {@link IRecipient}(s) will be notified of when broken. */
  rules: IRule[];
}
