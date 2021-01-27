/* eslint-disable @typescript-eslint/no-empty-interface */


/**
*  The type of .
*
* @deprecated
*/
export enum EldTransferMode { 
  /** Email ELD agency to transfer HOS data securely for drivers */
  Email = "Email", 
  /** ELD agency web services to transfer HOS data securely */
  WebServices = "WebServices", 
  /** Ping the ELD agency web services to test connectivity */
  Ping = "Ping"
}
