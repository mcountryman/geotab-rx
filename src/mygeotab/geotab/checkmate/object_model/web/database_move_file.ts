/* eslint-disable @typescript-eslint/no-empty-interface */


/**
*  Info about a file to be moved in a database move.
*
* @deprecated
*/
export interface IDatabaseMoveFile
{
  /** Gets the name of the file. */
  name: string;
  /** Gets the size of the file in bytes. */
  size: number;
}
