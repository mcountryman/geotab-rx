/* eslint-disable @typescript-eslint/no-empty-interface */

/** The status of an uploaded file. */
export enum Status {
  /** The status is unknown. */
  Unknown = "Unknown",
  /** The file is being processed. */
  Processing = "Processing",
  /** The file is ready. */
  Ready = "Ready",
  /** Media file has not been upload. */
  NoFile = "NoFile",
}
