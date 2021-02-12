/* eslint-disable @typescript-eslint/no-empty-interface */
import { IDistributionList } from './distribution_list';

/** System Distribution List. */
export interface IDistributionListSystem extends IDistributionList {
  /** Gets or sets the unique identifier for this entity. see . */
  id: string;
}
