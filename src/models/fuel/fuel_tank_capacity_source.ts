/* eslint-disable @typescript-eslint/no-empty-interface */

/** The source from which tank capacity was derived. */
export enum FuelTankCapacitySource {
  /** Unknown */
  Unknown = 'Unknown',
  /** Engine reported tank capacity diagnostic */
  DiagnosticTankCapacity = 'DiagnosticTankCapacity',
  /** Estimate derived from fuel level (percent) and fuel used diagnostics */
  EstimateFuelLevel = 'EstimateFuelLevel',
  /** Estimate derived from fuel level (volume) */
  EstimateFuelUnits = 'EstimateFuelUnits',
  /** Manually entered tank capacity as stored. */
  DeviceTankCapacity = 'DeviceTankCapacity',
}
