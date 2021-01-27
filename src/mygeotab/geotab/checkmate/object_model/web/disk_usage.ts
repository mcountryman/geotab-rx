/* eslint-disable @typescript-eslint/no-empty-interface */


/** Class for getting disk usage. */
export interface IDiskUsage
{
  /** Gets or sets the free disk space in GB. */
  freeDiskSpaceGb: number;
  /** Gets or sets the free disk space in KB. */
  freeDiskSpaceKb: number;
  /** Gets or sets the percentage disk space. */
  percentageDiskSpace: number;
}
