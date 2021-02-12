/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from '../entity';
import { ILockType } from '../lock/lock_type';

/**
 *  A Process lock record.
 *
 * @deprecated
 */
export interface ILock extends IEntity {
  /** Gets or sets the UTC time of the last lock update. */
  dateTime?: Date;
  /** Gets default lock update interval. */
  defaultUpdateInterval: Date;
  /** Gets or sets the Holder of the lock. */
  holderName?: string;
  /** Gets or sets the subject. */
  subject?: string;
  /** Gets or sets the LockType of the lock. */
  type?: ILockType;
}
