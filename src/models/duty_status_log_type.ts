/* eslint-disable @typescript-eslint/no-empty-interface */

/**  The type of . */
export enum DutyStatusLogType {
  /** On-duty status. */
  ON = "ON",
  /** Off-duty status. */
  OFF = "OFF",
  /** Drive status. */
  D = "D",
  /** Sleeper berth status. */
  SB = "SB",
  /** Exemption 16 hour. */
  Exemption16H = "Exemption16H",
  /** Adverse weather and driving conditions exemption. */
  AdverseWeather = "AdverseWeather",
  /** System log for device power connection. */
  Connected = "Connected",
  /** System log for device power disconnection. */
  Disconnected = "Disconnected",
  /** Personal conveyance driver status. */
  PC = "PC",
  /** Yard move driver status. */
  YM = "YM",
  /** Wait time oil well driver status. */
  WT = "WT",
  /** Authority status. */
  Authority = "Authority",
  /** User login record. */
  Login = "Login",
  /** User logout record. */
  Logoff = "Logoff",
  /** Daily certify record. */
  Certify = "Certify",
  /** Engine power up record. */
  EnginePowerup = "EnginePowerup",
  /** Engine shutdown record. */
  EngineShutdown = "EngineShutdown",
  /** Engine power up in PC record. */
  EnginePowerupPC = "EnginePowerupPC",
  /** Engine shutdown in PC record. */
  EngineShutdownPC = "EngineShutdownPC",
  /** Engine power status engages ELD within 1 minute. Applies to or . */
  PowerCompliance = "PowerCompliance",
  /**
   * Occurs when engine information (power, motion, miles, and hours) cannot be obtained
   * by ELD. Applies to or .
   */
  EngineSyncCompliance = "EngineSyncCompliance",
  /** When ELD date and time exceeds 10 minute offset from UTC. Applies to . */
  TimingCompliance = "TimingCompliance",
  /** ELD continually fails to acquire valid position measurement. Applies to . */
  PositioningCompliance = "PositioningCompliance",
  /** Storage capacity is reached, or missing data elements exist. Applies to or . */
  DataRecordingCompliance = "DataRecordingCompliance",
  /** Transfer of data fails to complete. Applies to or . */
  DataTransferCompliance = "DataTransferCompliance",
  /** Other instances of or . */
  OtherCompliance = "OtherCompliance",
  /** Missing data elements. Applies to or . */
  MissingElementCompliance = "MissingElementCompliance",
  /** More than 30 minutes of driving with unidentified driving. Applies to . */
  UnidentifiedDrivingCompliance = "UnidentifiedDrivingCompliance",
  /** Intermediate Personal Conveyance Event. */
  INT_PC = "INT_PC",
  /** Intermediate Drive Event. */
  INT_D = "INT_D",
  /** YM, PC, or WT clearing event. */
  SituationalDrivingClear = "SituationalDrivingClear",
  /** Exemption off duty deferral. */
  ExemptionOffDutyDeferral = "ExemptionOffDutyDeferral",
  /** Hos Enabled. */
  HosEnabled = "HosEnabled",
  /** Hos Disabled. */
  HosDisabled = "HosDisabled",
  /** Special type of PC, will not be interrupted by automatic logs */
  PC_Exempted = "PC_Exempted",
}
