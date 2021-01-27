/* eslint-disable @typescript-eslint/no-empty-interface */


/** Represents size limits of file based on extension. */
export interface IFileSizeLimits
{
  /** Gets or sets the maximum image size in bytes. */
  maxImageSizeBytes: number;
  /** Gets or sets the maximum video size in bytes. */
  maxVideoSizeBytes: number;
}
