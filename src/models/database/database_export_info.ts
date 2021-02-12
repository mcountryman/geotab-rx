/* eslint-disable @typescript-eslint/no-empty-interface */
import { IDatabaseTransferInfo } from '../database/database_transfer_info';

/** Information related to a database export. */
export interface IDatabaseExportInfo extends IDatabaseTransferInfo {
  /** Gets or sets the name of the exported file. */
  fileName: string;
}
