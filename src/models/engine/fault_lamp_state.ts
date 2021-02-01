/* eslint-disable @typescript-eslint/no-empty-interface */

/** Represents the lamp status of a J1939 fault, see {@link IFaultData}. */
export enum FaultLampState {
  /** Fault lamp is off, no active fault state. */
  None = "None",
  /** Malfunction lamp is active. */
  Malfunction = "Malfunction",
  /** Amber warning lamp is active. */
  Warning = "Warning",
  /** Red stop lamp is active. */
  Stop = "Stop",
  /** Protect lamp is active. */
  Protect = "Protect",
}
