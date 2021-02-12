/* eslint-disable @typescript-eslint/no-empty-interface */

/**
 * This {@link IEnum} provides additional information about the reason for a database
 * request could not succeed. or data change.
 */
export enum DbUnavailableState {
  /** The none */
  None = 'None',
  /** The database server connection failure (for any reason). */
  ConnectionFailure = 'ConnectionFailure',
  /** The unknown database */
  UnknownDatabase = 'UnknownDatabase',
  /** The database is being initialized. */
  Initializing = 'Initializing',
  /**
   * The database operation aborted (for any reason: Timeout, inconsistent transaction,
   * concurrency, cache busy, etc.
   */
  OperationAborted = 'OperationAborted',
}
