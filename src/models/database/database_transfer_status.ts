/* eslint-disable @typescript-eslint/no-empty-interface */

/** The current database transfer status. */
export enum DatabaseTransferStatus {
  /** No transfer for this database */
  None = "None",
  /** The transfer object has been created. */
  Idle = "Idle",
  /** A database transfer is progress for this datastore */
  InProgress = "InProgress",
  /** The current datastore has a transfer already in progress */
  AlreadyInProgress = "AlreadyInProgress",
  /** The maximum allowed transfers per server has been reached */
  LimitExceeded = "LimitExceeded",
}
