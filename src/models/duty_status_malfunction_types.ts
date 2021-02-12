/* eslint-disable @typescript-eslint/no-empty-interface */

/** Malfunction or Diagnostic type of the . */
export enum DutyStatusMalfunctionTypes {
  /** No malfunction or diagnostic present or cleared. */
  None = 'None',
  /** In a diagnostic state. */
  Diagnostic = 'Diagnostic',
  /** In a malfunction state. */
  Malfunction = 'Malfunction',
  /** User has cleared the malfunction or diagnostic. */
  UserClear = 'UserClear',
  /** User has cleared the diagnostic. */
  UserDiagnosticClear = 'UserDiagnosticClear',
  /** User has cleared the malfunction. */
  UserMalfunctionClear = 'UserMalfunctionClear',
  /**
   * System has determined that the malfunction or diagnostic is cleared. Not exported
   * to FMCSA.
   */
  SystemClear = 'SystemClear',
  /** System has determined that the diagnostic is cleared. Not exported to FMCSA. */
  SystemDiagnosticClear = 'SystemDiagnosticClear',
  /**
   * System has determined that the malfunction or diagnostic is cleared and the vehicle
   * was in motion. Used for .
   */
  SystemClearDriving = 'SystemClearDriving',
  /**
   * System has determined that the diagnostic is cleared and the vehicle was in motion.
   * Used for .
   */
  SystemDiagnosticClearDriving = 'SystemDiagnosticClearDriving',
  /**
   * User has inputted a manual address for the log during a position compliance diagnostic
   * event
   */
  ManualPosition = 'ManualPosition',
  /** Combination of ManualPosition and Diagnostic */
  DiagnosticManualPosition = 'DiagnosticManualPosition',
  /** Combination of ManualPosition and Malfunction */
  MalfunctionManualPosition = 'MalfunctionManualPosition',
}
