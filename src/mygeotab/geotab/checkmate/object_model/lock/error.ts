/* eslint-disable @typescript-eslint/no-empty-interface */


/**
*  Defines the result of process locking for .
*
* @deprecated
*/
export enum Error { 
  /** No lock error */
  None = "None", 
  /** The unauthorized error */
  Unauthorized = "Unauthorized", 
  /** The database unavailable error */
  DbUnavailable = "DbUnavailable"
}
