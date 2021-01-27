/* eslint-disable @typescript-eslint/no-empty-interface */


/** Represents a severity/class code from the engine system of the specific {@link IDevice}. */
export enum DtcSeverity { 
  /** This value indicates that the failure requests maintenance only. */
  MaintenanceOnly = "MaintenanceOnly", 
  /**
  * This value indicates to the failure that a check of the vehicle is required at next
  * halt.
  */
  CheckAtNextHalt = "CheckAtNextHalt", 
  /** This value indicates to the failure that an immediate check of the vehicle is required. */
  CheckImmediately = "CheckImmediately"
}
