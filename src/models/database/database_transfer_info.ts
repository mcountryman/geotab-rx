/* eslint-disable @typescript-eslint/no-empty-interface */
import { DatabaseTransferStatus } from "../database/database_transfer_status";

/** Information related to a database transfer. */
export interface IDatabaseTransferInfo {
  /** Gets the database. */
  databaseName: string;
  /** Gets or sets details about the current state. */
  details: string;
  /** Gets or sets the current status of the move. */
  status: DatabaseTransferStatus;
}
