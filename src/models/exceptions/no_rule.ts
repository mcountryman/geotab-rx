/* eslint-disable @typescript-eslint/no-empty-interface */
import { IRule } from '../exceptions/rule';

/** A Exceptiopn Rule which represents DBNull database value. */
export interface INoRule extends IRule {
  /** Gets or sets the unique identifier for this entity. see {@link IId}. */
  id: string;
  /**
   * Gets or sets the name of this entity that uniquely identifies it and is used when
   * displaying this entity.
   */
  name: string;
}
