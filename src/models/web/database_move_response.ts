/* eslint-disable @typescript-eslint/no-empty-interface */
import { IDatabaseMoveFile } from '../web/database_move_file';

/**
 *  The results of initializing a database move.
 *
 * @deprecated
 */
export interface IDatabaseMoveResponse {
  /** Gets or sets the list of files. */
  files: IDatabaseMoveFile[];
  /** Gets or sets the unique key for this move. */
  key?: any;
  /** Gets or sets the total size of the files (GB). */
  totalSize: number;
}
