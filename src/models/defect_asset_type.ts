/* eslint-disable @typescript-eslint/no-empty-interface */

/** The type of asset for which the list applies.. */
export enum DefectAssetType {
  /** Defect list that applies to any asset. */
  All = "All",
  /** Defect list for a {@link IDevice}. */
  Device = "Device",
  /** Defect list for a {@link ITrailer}. */
  Trailer = "Trailer",
}
