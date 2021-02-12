/* eslint-disable @typescript-eslint/no-empty-interface */
import { ILock } from '../lock/lock';

/**
 *  The Lock record.
 *
 * @deprecated
 */
export interface ILockStateChangeNotify {
  /** Gets or sets the Lock record. */
  lock: ILock;
  /** Gets or sets the LockStatusChange value. */
  notify: any;
}
