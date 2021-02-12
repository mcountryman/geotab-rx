/* eslint-disable @typescript-eslint/no-empty-interface */
import { DbUnavailableState } from './db_unavailable_state';

/**
 * This exception occurs if the system makes a database request that could not succeed
 * because of connection failure or data change.
 */
export interface IDbUnavailableException {
  /** Gets the message associated with the DbUnavailableException. */
  message: string;
  /** Gets the {@link IDbUnavailableState}. */
  state: DbUnavailableState;
}
