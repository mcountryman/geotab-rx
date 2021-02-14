/* eslint-disable @typescript-eslint/no-empty-interface */

/**  data providers. */
export enum FuelTransactionProvider {
  /** The FuelTransactionProvider is not known. */
  Unknown = "Unknown",
  /** Wex Fuel Card Provider, legacy file format. */
  WexLegacy = "WexLegacy",
  /** Wex Fuel Card Provider, customer file format. */
  WexCustomer = "WexCustomer",
  /** Drive Add-in. */
  Drive = "Drive",
  /** Fuel Tracker App. */
  FuelTracker = "FuelTracker",
  /** Comdata Fuel Card Provider. */
  Comdata = "Comdata",
  /** Fuelman Fuel Card Provider. */
  Fuelman = "Fuelman",
  /** Wex Fuel Card Provider. */
  Wex = "Wex",
  /** Voyager Fuel Card provider */
  Voyager = "Voyager",
  /** Ultramar CST Fuel Card provider */
  UltramarCST = "UltramarCST",
  /** GFN Fuel Card provider */
  GFN = "GFN",
}
