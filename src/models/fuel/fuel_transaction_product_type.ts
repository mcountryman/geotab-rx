/* eslint-disable @typescript-eslint/no-empty-interface */

/** Represents the type of product purchased in a {@link IFuelTransaction}. */
export enum FuelTransactionProductType {
  /** Unknown product type */
  Unknown = "Unknown",
  /** A non-fuel purchase */
  NonFuel = "NonFuel",
  /** Regular grade gasoline (86-87 Octane : 90-91 Ron) */
  Regular = "Regular",
  /** Mid grade gasoline (88-89 Octane : 92-93 Ron) */
  Midgrade = "Midgrade",
  /** Premium grade gasoline (90-91 Octane : 94-95 Ron) */
  Premium = "Premium",
  /** Super grade gasoline (92-94+ Octane : 96-99+ Ron) */
  Super = "Super",
  /** Diesel fuel */
  Diesel = "Diesel",
  /** E85 (Ethanol 85%) */
  E85 = "E85",
  /** CNG (Compressed Natural Gas) */
  CNG = "CNG",
  /** LPG (Liquid Propane Gas) */
  LPG = "LPG",
  /** Hydrogen */
  Hydrogen = "Hydrogen",
  /** Diesel exhaust fluid */
  DieselExhaustFluid = "DieselExhaustFluid",
}
