/* eslint-disable @typescript-eslint/no-empty-interface */


/** An enum that indicates the uploader status. */
export enum ProcessingStatus { 
  /** Regular processing during daylight hours. */
  DaylightHoursProcessing = "DaylightHoursProcessing", 
  /** Regular processing after hours. */
  AfterHoursProcessing = "AfterHoursProcessing", 
  /** Reprocessing during daylight hours. */
  DaylightHoursReprocessing = "DaylightHoursReprocessing", 
  /** Reprocessing after hours. */
  AfterHoursReprocessing = "AfterHoursReprocessing", 
  /** Waiting for files to process. */
  Idle = "Idle", 
  /** Processing is unavailable. */
  Unavailable = "Unavailable"
}
