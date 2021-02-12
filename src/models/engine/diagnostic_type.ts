/* eslint-disable @typescript-eslint/no-empty-interface */

/** Diagnostic source type of the diagnostic. */
export enum DiagnosticType {
  /** No diagnostic. */
  None = 'None',
  /** SID (Subsystem Identifier). */
  Sid = 'Sid',
  /** PID (Parameter Identifier). */
  Pid = 'Pid',
  /** Go Diagnostic. */
  GoDiagnostic = 'GoDiagnostic',
  /** Data Diagnostic. */
  DataDiagnostic = 'DataDiagnostic',
  /** SPN (Suspect Parameter Number). */
  SuspectParameter = 'SuspectParameter',
  /** OBD-II (On-board Diagnostic) Fault. */
  ObdFault = 'ObdFault',
  /** Go Device Fault. */
  GoFault = 'GoFault',
  /** OBD-II (On-board Diagnostic) WWH Fault. */
  ObdWwhFault = 'ObdWwhFault',
  /** Proprietary Fault. */
  ProprietaryFault = 'ProprietaryFault',
  /** Legacy Proprietary Fault. */
  LegacyFault = 'LegacyFault',
  /** GMCCC Fault. */
  GmcccFault = 'GmcccFault',
  /** BRP Fault. */
  BrpFault = 'BrpFault',
  /** AI Model. */
  AiModel = 'AiModel',
}
