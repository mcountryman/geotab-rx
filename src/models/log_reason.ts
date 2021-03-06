/* eslint-disable @typescript-eslint/no-empty-interface */

/** GPSData and DebugData Log Reason codes. */
export enum LogReason {
  /** Log reason undefined or custom data message */
  CustomDataOrUnknown = "CustomDataOrUnknown",
  /** Accident data */
  Accident = "Accident",
  /** Change in heading */
  Heading = "Heading",
  /** Change in speed */
  Speed = "Speed",
  /** Maximum time between logs have elapsed */
  Time = "Time",
  /** Auxiliary triggered */
  Aux = "Aux",
  /** Ignition state changed */
  Ignition = "Ignition",
  /** Power on reset occurred */
  Reset = "Reset",
  /** First valid GPS record received after the GPS turned on */
  Next = "Next",
  /** All valid GPS records logged (debug purposes) */
  All = "All",
  /** Change in antenna state */
  Antenna = "Antenna",
  /** Speeding threshold reached */
  SpeedingStart = "SpeedingStart",
  /** Speeding reset speed reached */
  SpeedingStop = "SpeedingStop",
  /** GPS Engined shutting down */
  GpsShutdown = "GpsShutdown",
  /** Hot start wake up */
  HotStartStart = "HotStartStart",
  /** Hot start valid signal acquired */
  HotStartValidSignal = "HotStartValidSignal",
  /** No valid signal acquired during hot start */
  HotStartNoValidSignal = "HotStartNoValidSignal",
  /** Too many invalid GPS messages received */
  InvalidGpsSignals = "InvalidGpsSignals",
  /** GPSQuiet */
  GpsQuiet = "GpsQuiet",
  /** Brown out reset occurred */
  BrownOut = "BrownOut",
  /** Harsh braking occurred */
  HarshBraking = "HarshBraking",
  /** Beginning of stop (speed reached 0) */
  BeginOfStop = "BeginOfStop",
  /** End of stop (speed changed from 0) */
  EndOfStop = "EndOfStop",
  /** A system reset occurred */
  SystemReset = "SystemReset",
  /** Connected to server (formerly HeartbeatSuccess) */
  ConnectedToServer = "ConnectedToServer",
  /** Failed to connect (formerly HeartbeatFailure) */
  ConnectionFailure = "ConnectionFailure",
  /** Device unplugged timestamp */
  DeviceUnplugged = "DeviceUnplugged",
  /** Point is logged based on Ramer–Douglas–Peucker algorithm */
  CurveBased = "CurveBased",
  /** Point is logged based on Ramer-Douglas-Peucker algorithm used on speed */
  CurveSpeed = "CurveSpeed",
  /** DEBUG: Multiplex Request GPS */
  MultiplexRequestGPS = "MultiplexRequestGPS",
  /** DEBUG: Multiplex Connected GPS */
  MultiplexConnectedGPS = "MultiplexConnectedGPS",
  /** DEBUG: Multiplex Request RF */
  MultiplexRequestRF = "MultiplexRequestRF",
  /** DEBUG: Multiplex Connected RF */
  MultiplexConnectedRF = "MultiplexConnectedRF",
  /** DEBUG: Restart GPS */
  RestartGPS = "RestartGPS",
  /** DEBUG: Restart RF */
  RestartRF = "RestartRF",
  /**
   * A position error estimate greater than the threshold caused curve based logging
   * to be initiated up to this point
   */
  CurvePositionEstimateError = "CurvePositionEstimateError",
  /** A timeout (200s) caused curve based logging to be initiated up to this point */
  CurveTimeOut = "CurveTimeOut",
  /**
   * A non gps log based event caused curve based logging to be initiated up to this
   * point
   */
  CurveOtherEvent = "CurveOtherEvent",
  /**
   * Point is logged based on additional zero speed logic used with the Ramer-Douglas-Peucker
   * algorithm
   */
  CurveZeroSpeed = "CurveZeroSpeed",
  /**
   * A change in the time required the curve to be run since all records in the curve
   * buffer need to be 1 second apart
   */
  CurveTimeChange = "CurveTimeChange",
  /** The rf upload complete */
  RfUploadComplete = "RfUploadComplete",
  /** The device poll */
  DevicePoll = "DevicePoll",
  /** The curve speed estimate error */
  CurveSpeedEstimateError = "CurveSpeedEstimateError",
  /** DEBUG: Wifi In Range */
  WifiInRange = "WifiInRange",
  /** DEBUG: Wifi Connected */
  WifiConnected = "WifiConnected",
  /** DEBUG: Wifi Upload Success */
  WifiUploadSuccess = "WifiUploadSuccess",
  /** Iridium: Ignition */
  IridiumIgnition = "IridiumIgnition",
  /** Iridium: Aux */
  IridiumAux = "IridiumAux",
  /** Iridium: Time */
  IridiumTime = "IridiumTime",
  /** Iridium: Poll */
  IridiumPoll = "IridiumPoll",
  /** Iridium: Emergency */
  IridiumEmergency = "IridiumEmergency",
  /** Iridium: Low Voltage */
  IridiumLowVoltage = "IridiumLowVoltage",
  /** Iridium: Accelerometer data sent over Iridium */
  IridiumAccelEvent = "IridiumAccelEvent",
  /** The iridium movement detected */
  IridiumMovementDetected = "IridiumMovementDetected",
  /** The iridium out of coverage */
  IridiumOutOfCoverage = "IridiumOutOfCoverage",
  /** The iridium power up */
  IridiumPowerUp = "IridiumPowerUp",
  /** The iridium driver change */
  IridiumDriverChange = "IridiumDriverChange",
  /** DEBUG: J1708: ICP Error ?Specific to Cummins Vehicles and UPS */
  J1708ICPError = "J1708ICPError",
  /** DEBUG: Restart GPS State Machine */
  ErrorRestartGPSStateMachine = "ErrorRestartGPSStateMachine",
  /** DEBUG: Reboot Slave */
  ErrorRebootSlave = "ErrorRebootSlave",
  /** DEBUG: Restart Rf State Machine */
  ErrorRestartRfStateMachine = "ErrorRestartRfStateMachine",
  /** DEBUG: Restart Rf Manager State Machine */
  ErrorRestartRfManagerStateMachine = "ErrorRestartRfManagerStateMachine",
  /** DEBUG: Restart Wifi State Machine */
  ErrorRestartWifiStateMachine = "ErrorRestartWifiStateMachine",
  /** DEBUG: Restart Wifi Manager State Machine */
  ErrorRestartWifiManagerStateMachine = "ErrorRestartWifiManagerStateMachine",
  /** DEBUG: Restart Modem State Machine */
  ErrorRestartModemStateMachine = "ErrorRestartModemStateMachine",
  /** DEBUG: Restart Modem Manager State Machine */
  ErrorRestartModemManagerStateMachine = "ErrorRestartModemManagerStateMachine",
  /** The software inserts these logs, not the firmware */
  SoftwareInsertedLog = "SoftwareInsertedLog",
  /** DEBUG: ClockStopped */
  ErrorClockStopped = "ErrorClockStopped",
  /** DEBUG: Error Reading from the FLASH memory */
  ErrorReadingFlash = "ErrorReadingFlash",
  /** DEBUG: Invalid Stack Pointer Error */
  InvalidStackPointer = "InvalidStackPointer",
  /** DEBUG: Interrupt Error */
  ErrorInterruptError = "ErrorInterruptError",
  /** Dummy log placed at an estimated event location. */
  EventPlaceholder = "EventPlaceholder",
}
