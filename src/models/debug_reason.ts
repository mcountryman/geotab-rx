/* eslint-disable @typescript-eslint/no-empty-interface */

/**
 * {@link IDebugData} reason codes. These codes are used for troubleshooting/debugging
 * purposes only and should not be used for any programming logic. It is sometimes
 * useful to understand why the Geotab GO device recorded information.
 */
export enum DebugReason {
  /** Log reason undefined */
  Unknown = "Unknown",
  /** DEBUG: Restart Rf State Machine */
  ErrorRestartRfStateMachine = "ErrorRestartRfStateMachine",
  /** DEBUG: Restart Rf Manager State Machine */
  ErrorRestartRfManagerStateMachine = "ErrorRestartRfManagerStateMachine",
  /** DEBUG: Restart Wifi State Machine */
  ErrorRestartWifiStateMachine = "ErrorRestartWifiStateMachine",
  /** DEBUG: Restart Wifi Manager State Machine */
  ErrorRestartWifiManagerStateMachine = "ErrorRestartWifiManagerStateMachine",
  /** DEBUG: Restart GSM/CDMA State Machine */
  ErrorRestartGsmcdmaStateMachine = "ErrorRestartGsmcdmaStateMachine",
  /** DEBUG: Restart Modem Manager State Machine */
  ErrorRestartModemManagerStateMachine = "ErrorRestartModemManagerStateMachine",
  /** DEBUG: Restart GPS State Machine */
  ErrorRestartGpsStateMachine = "ErrorRestartGpsStateMachine",
  /** DEBUG: Reboot Slave */
  ErrorRebootSlave = "ErrorRebootSlave",
  /** DEBUG: ClockStopped Slave */
  ErrorClockStopped = "ErrorClockStopped",
  /** Voltage Fluctuation */
  VoltageFluctuation = "VoltageFluctuation",
  /** Slave Firmware Version */
  SlaveVersionReported = "SlaveVersionReported",
  /** Bootloader Firmware Updated */
  BootloaderFirmwareUpdate = "BootloaderFirmwareUpdate",
  /** DEBUG: GPS Shutdown */
  DebugGpsShutdown = "DebugGpsShutdown",
  /** DEBUG: Hot Start – start */
  DebugHotStartAttempt = "DebugHotStartAttempt",
  /** DEBUG: Hot Start - valid signal acquired */
  DebugHotStartValid = "DebugHotStartValid",
  /** DEBUG: Hot Start - no valid signal within timeout */
  DebugHotStartFail = "DebugHotStartFail",
  /** DEBUG: Device is not receiving any GPS data */
  DebugNoGpsData = "DebugNoGpsData",
  /** DEBUG: Change in Iox relay status */
  IoxRelay = "IoxRelay",
  /** DEBUG: Change in Iox sleep status */
  IoxSleepEvent = "IoxSleepEvent",
  /** DEBUG: Iox response to poll request */
  IoxPollResult = "IoxPollResult",
  /** DEBUG: Iox for Aux auto report */
  IoxAuxAutoReport = "IoxAuxAutoReport",
  /** DEBUG: Iox debug for unit testing */
  IoxUnitTestDebug = "IoxUnitTestDebug",
  /** DEBUG: Iox debug */
  IoxDebug = "IoxDebug",
  /** DEBUG: System heartbeat succeeded */
  DebugHeartbeatSuccess = "DebugHeartbeatSuccess",
  /** DEBUG: System heartbeat failed */
  DebugHeartbeatFail = "DebugHeartbeatFail",
  /** The iox aux request report */
  IoxAuxRequestReport = "IoxAuxRequestReport",
  /** The iox aux states */
  IoxAuxStates = "IoxAuxStates",
  /** The iox aux logic status */
  IoxAuxLogicStatus = "IoxAuxLogicStatus",
  /** Third-party Update Received */
  ThirdPartyUpdate = "ThirdPartyUpdate",
  /** Excessive Engine Data Received */
  ExcessiveEngineDataReceived = "ExcessiveEngineDataReceived",
  /** Aiding Data Received */
  AidingDataReceived = "AidingDataReceived",
  /** Aiding Data Processed */
  AidingDataProcessed = "AidingDataProcessed",
  /** Engine Protocol Detect Attempt */
  EngineProtocolDetectAttempt = "EngineProtocolDetectAttempt",
  /** DEBUG: GPS Version */
  GpsVersion = "GpsVersion",
  /** DEBUG: Buzzer */
  DebugBuzzer = "DebugBuzzer",
  /** DEBUG: Led */
  DebugLed = "DebugLed",
  /** DEBUG: RPM Timeout Occurred */
  RpmTimeout = "RpmTimeout",
  /** DEBUG: RPM value 0 received */
  EngineOff = "EngineOff",
  /** DEBUG: Engine Protocol */
  DebugEngineProtocol = "DebugEngineProtocol",
  /** DEBUG: Third-party Device Detected */
  ThirdPartyDeviceDetected = "ThirdPartyDeviceDetected",
  /** DEBUG: Almanac Data Requested */
  AlmanacDataRequested = "AlmanacDataRequested",
  /** DEBUG: Almanac data allocation error */
  AlmanacAllocationError = "AlmanacAllocationError",
  /** DEBUG: Almanac invalid data in flash */
  AlmanacInvalid = "AlmanacInvalid",
  /** DEBUG: Almanac data successfully updated */
  AlmanacUpdateReceived = "AlmanacUpdateReceived",
  /** DEBUG: Calculated Gps Speed */
  CalculatedGpsSpeed = "CalculatedGpsSpeed",
  /** DEBUG: Debug log if Gps valid with lat/log 0 */
  GpsValidWithZeroLatLong = "GpsValidWithZeroLatLong",
  /** DEBUG: Can transmit error count exceeded */
  CanTransmitErrorExceeded = "CanTransmitErrorExceeded",
  /** DEBUG: Hybrid vehicle detected */
  HybridVehicleDetected = "HybridVehicleDetected",
  /** DEBUG: Device has requested active engine fault codes */
  ActiveEngineFaultsRequested = "ActiveEngineFaultsRequested",
  /** DEBUG: Device has requested pending engine fault codes */
  PendingEngineFaultsRequested = "PendingEngineFaultsRequested",
  /** DEBUG: Road speed received through GMLan broadcast */
  GmLanRoadSpeed = "GmLanRoadSpeed",
  /** DEBUG: Debug data from legacy layer */
  DebugLegacyManager = "DebugLegacyManager",
  /** DEBUG: Buffer overrun */
  MemoryAllocationError = "MemoryAllocationError",
  /** DEBUG: Memory pointer error */
  MemoryPointerErrorDebug = "MemoryPointerErrorDebug",
  /** Wi-Fi: In Range */
  WifiInRange = "WifiInRange",
  /** Wi-Fi: Connected */
  WifiConnected = "WifiConnected",
  /** Wi-Fi: Upload Success */
  WifiUploadSuccess = "WifiUploadSuccess",
  /** Wi-Fi: Out of Range */
  WifiOutofRange = "WifiOutofRange",
  /** Wi-Fi: Config Update Failed */
  WifiConfigUpdateFailed = "WifiConfigUpdateFailed",
  /** DEBUG: Log sleep events */
  SleepEvent = "SleepEvent",
  /** DEBUG: Sensomatix data received */
  SensomatixDataReceived = "SensomatixDataReceived",
  /** DEBUG: Sensomatix data uploaded */
  SensomatixDataSent = "SensomatixDataSent",
  /** DEBUG: Store and forward sensomatix acknowledge */
  SensomatixServerAcknowledge = "SensomatixServerAcknowledge",
  /** DEBUG: Sensomatix data larger than 526 bytes */
  SensomatixDataAllocationError = "SensomatixDataAllocationError",
  /** DEBUG: Rpm debug information */
  RpmDebug = "RpmDebug",
  /** DEBUG: Engine communication disabled */
  EngineCommunicationDisabled = "EngineCommunicationDisabled",
  /** DEBUG: Engine protocol detected new code */
  EngineProtocolDetectedNewCode = "EngineProtocolDetectedNewCode",
  /** DEBUG: Ignition based on 2-wire (voltage, accelerometer) */
  TwoWireBasedIgn = "TwoWireBasedIgn",
  /** DEBUG: Ignition based on engine data */
  EngineBasedIgn = "EngineBasedIgn",
  /** DEBUG: GoLive active mode */
  LiveMode = "LiveMode",
  /** DEBUG: GoLive passive mode */
  PassiveMode = "PassiveMode",
  /** DEBUG: Gsm info sent from Go device */
  GsmInfoSent = "GsmInfoSent",
  /** DEBUG: Bit masked representation of pids supported in a vehicle */
  EnginePidSupportDebug = "EnginePidSupportDebug",
  /** DEBUG: Odometer debug information */
  OdometerDebug = "OdometerDebug",
  /** DEBUG: Monitor peripheral states for dead batteries */
  PowerDebug = "PowerDebug",
  /** DEBUG: Save sensomatix parameters before sleep routine */
  SensomatixSaveParam = "SensomatixSaveParam",
  /** DEBUG: Sending third-party handshake */
  SendingThirdPartyHandshake = "SendingThirdPartyHandshake",
  /** DEBUG: Third-party sync char received while idle */
  ThirdPartySyncCharReceivedWhileIdle = "ThirdPartySyncCharReceivedWhileIdle",
  /** DEBUG: Accelerometer in-vehicle audible alert */
  AccelerometerInVehicleAudibleAlert = "AccelerometerInVehicleAudibleAlert",
  /** DEBUG: J1708 debug data */
  J1708DebugData = "J1708DebugData",
  /** DEBUG: Hours of service info message received */
  HoursOfServiceInfoMessageReceived = "HoursOfServiceInfoMessageReceived",
  /** DEBUG: Third-party message received via serial port is too long */
  ThirdPartyMessageTooLong = "ThirdPartyMessageTooLong",
  /** DEBUG: Aiding data download has started */
  AidingDataStart = "AidingDataStart",
  /** DEBUG: Gps data no longer valid */
  GpsDataNoLongerValid = "GpsDataNoLongerValid",
  /** DEBUG: Device has re-acquired gps latch */
  GpsDataNowValid = "GpsDataNowValid",
  /** DEBUG: Ignition on event due to rpm value */
  RpmBasedIgn = "RpmBasedIgn",
  /** DEBUG: Ignition on event due to run time (hybrid ignition detect) */
  RunTimeBasedIgn = "RunTimeBasedIgn",
  /** DEBUG: Ignition on event due to road speed */
  RoadSpeedBasedIgn = "RoadSpeedBasedIgn",
  /** DEBUG: Eaton Hybrid Ign On Status */
  EngineIgnOnSwitchStatus = "EngineIgnOnSwitchStatus",
  /** DEBUG: Eaton Hybrid Ign Off Status */
  EngineIgnOffSwitchStatus = "EngineIgnOffSwitchStatus",
  /** DEBUG: Excessive number of firmware update attempts */
  ExcessiveFirmwareUpdateAttempts = "ExcessiveFirmwareUpdateAttempts",
  /** DEBUG: Used to report the state of relays */
  RelayDebug = "RelayDebug",
  /** DEBUG: Used to report the current seat belt request type */
  SeatbeltDebug = "SeatbeltDebug",
  /** DEBUG: Unknown live message type received from the store and forward server */
  UnknownLiveMessageType = "UnknownLiveMessageType",
  /** DEBUG: Apn scanning restarted */
  RestartApnScanningDebug = "RestartApnScanningDebug",
  /** DEBUG: Rf device requested firmware */
  RfRequestFirmware = "RfRequestFirmware",
  /** DEBUG: Debug information to help troubleshoot GM fault codes */
  GmLanFaultCodeDebug = "GmLanFaultCodeDebug",
  /** DEBUG: Debug log to indicate movement is detected */
  MovementDetected = "MovementDetected",
  /** DEBUG: Debug log to indicate movement is no longer detected within a specified time */
  MovementTimeout = "MovementTimeout",
  /** DEBUG: Debug log to indicate position has changed while ignition is off. */
  PositionChanged = "PositionChanged",
  /** DEBUG: Iridium record created */
  IridiumRecordCreated = "IridiumRecordCreated",
  /** DEBUG: Iridium modem has been configured */
  IridiumModemConfigured = "IridiumModemConfigured",
  /** DEBUG: Iridium retry due to modem not ready */
  IridiumRetry = "IridiumRetry",
  /** DEBUG: Iridium transmit started */
  IridiumSendingData = "IridiumSendingData",
  /** DEBUG: Iridium transmit success */
  IridiumTransmitSuccess = "IridiumTransmitSuccess",
  /** DEBUG: Gm ignition status. Used for both hybrid and non-hybrid vehicles. */
  GmLanEngineStatus = "GmLanEngineStatus",
  /**
   * DEBUG: Log if CAN receive overflow interrupt flag is set during a trip. This indicates
   * potential for CAN messages to be lost
   */
  CanMessageOverFlowDebug = "CanMessageOverFlowDebug",
  /** DEBUG: Iridium poll request has been received by the Go device */
  IridiumPollReceived = "IridiumPollReceived",
  /** DEBUG: Debug information to indicate how long external crystal takes to start up */
  ClockStartDebug = "ClockStartDebug",
  /** DEBUG: Modem connect has been delayed due to poor signal strength */
  ModemConnectDelayedPoorGsmSignal = "ModemConnectDelayedPoorGsmSignal",
  /** DEBUG: Reply to Gsm info received */
  ReplyToGsmInfo = "ReplyToGsmInfo",
  /** DEBUG: Logging parameters updated */
  LoggingParametersUpdated = "LoggingParametersUpdated",
  /** DEBUG: Modem manager function pointer debug information */
  ModemManagerDebug = "ModemManagerDebug",
  /** DEBUG: Accelerometer in vehicle alert */
  AccelerometerAudibleEvent = "AccelerometerAudibleEvent",
  /** DEBUG: GPRS URL resolved */
  GprsUrlResolved = "GprsUrlResolved",
  /** DEBUG: GPRS connected to server */
  GprsConnectedToServer = "GprsConnectedToServer",
  /** DEBUG: GPRS reply to hello received */
  GprsReplyToHelloReceived = "GprsReplyToHelloReceived",
  /** DEBUG: GPRS connection dropped */
  GprsConnectionDropped = "GprsConnectionDropped",
  /** DEBUG: GPRS connection timeout */
  GprsConnectingTimeout = "GprsConnectingTimeout",
  /** DEBUG: GPRS error sending data (timeout) */
  GprsSendingDataTimeout = "GprsSendingDataTimeout",
  /** DEBUG: GPRS: Error Resolving URL */
  GprsErrorResolvingUrl = "GprsErrorResolvingUrl",
  /** DEBUG: GPRS: Error Connecting to Server */
  GprsConnectingToServer = "GprsConnectingToServer",
  /** DEBUG: GPRS: No Reply to Hello */
  GprsReplyToHello = "GprsReplyToHello",
  /** DEBUG: GPRS: Registered on the gsm/cdma network */
  CellNetworkRegistration = "CellNetworkRegistration",
  /** DEBUG: GPRS: TCP/IP Stack Started */
  GprsTcpipStackStarted = "GprsTcpipStackStarted",
  /** DEBUG: GPRS: Attached to GPRS */
  GprsAttachedToGprs = "GprsAttachedToGprs",
  /** DEBUG: GPRS: APN Set */
  GprsApnSet = "GprsApnSet",
  /** DEBUG: GPRS: APN Username Set */
  GprsApnUsernameSet = "GprsApnUsernameSet",
  /** DEBUG: GPRS: APN Password Set */
  GprsApnPasswordSet = "GprsApnPasswordSet",
  /** DEBUG: GPRS: Connection to APN Started */
  GprsConnectionToApnStarted = "GprsConnectionToApnStarted",
  /** DEBUG: GPRS: Server Port Set */
  GprsServerPortSet = "GprsServerPortSet",
  /** DEBUG: GPRS: Server Address Set */
  GprsServerAddressSet = "GprsServerAddressSet",
  /** DEBUG: GPRS: Activated GPRS Response mode */
  GprsActivatedGprsResponseMode = "GprsActivatedGprsResponseMode",
  /** DEBUG: GPRS: Modem not ready (no WIND: 4 within 4 minute timeout) */
  GprsModemNotReady = "GprsModemNotReady",
  /** DEBUG: GPRS Modem Power Off */
  GprsModemPowerOff = "GprsModemPowerOff",
  /** DEBUG: GPRS Request Params */
  GprsRequestParams = "GprsRequestParams",
  /** DEBUG: Request GSM Params */
  GprsRequestGsmParams = "GprsRequestGsmParams",
  /** DEBUG: GPRS Modem Power ON */
  GprsModemPowerOn = "GprsModemPowerOn",
  /** DEBUG: Reply to gsm hello msg */
  ReplyToGsmHello = "ReplyToGsmHello",
  /** DEBUG: GPRS: Modem Not Available */
  GprsModemNotAvailable = "GprsModemNotAvailable",
  /** DEBUG: GPRS: Modem Disconnecting */
  GprsModemDisconnecting = "GprsModemDisconnecting",
  /** DEBUG: GPRS: Modem Manager Retry */
  GprsModemManagerRetry = "GprsModemManagerRetry",
  /** DEBUG: Request Firmware */
  GprsRequestFirmware = "GprsRequestFirmware",
  /** DEBUG: Firmware Reply */
  GprsFirmwareReply = "GprsFirmwareReply",
  /** DEBUG: Firmware Update Failed */
  GprsFirmwareUpdateFailed = "GprsFirmwareUpdateFailed",
  /** DEBUG: Data Read Initialisation Failed */
  GprsDataReadInitialisationFailed = "GprsDataReadInitialisationFailed",
  /** DEBUG: Receive Buffer Overrun */
  GprsReceiveBufferOverrun = "GprsReceiveBufferOverrun",
  /** DEBUG: Firmware Update Success */
  GprsFirmwareUpdateSuccess = "GprsFirmwareUpdateSuccess",
  /** DEBUG: No Modem Detected */
  GprsNoModemDetected = "GprsNoModemDetected",
  /** DEBUG: GSM Modem Detected */
  GprsGsmModemDetected = "GprsGsmModemDetected",
  /** DEBUG: CDMA Modem Detected */
  GprsCdmaModemDetected = "GprsCdmaModemDetected",
  /** DEBUG: GSM CDMA Modem Restart */
  GsmCdmaModemRestart = "GsmCdmaModemRestart",
  /** DEBUG: GSM CDMA Modem Manager Restart */
  GsmCdmaModemManagerRestart = "GsmCdmaModemManagerRestart",
  /** DEBUG: WIND received, ready to initiate connection */
  GprsWindReceived = "GprsWindReceived",
  /** DEBUG: Live HSPA modem detected */
  LiveHspaModemDetected = "LiveHspaModemDetected",
  /** DEBUG: Wi-Fi Live modem detected */
  LiveWifiModemDetected = "LiveWifiModemDetected",
  /** DEBUG: Live Leon modem detected */
  LiveLeonModemDetected = "LiveLeonModemDetected",
  /** DEBUG: Wi-Fi Live firmware init */
  WifiLiveFirmwareInit = "WifiLiveFirmwareInit",
  /** DEBUG: Wi-Fi Live firmware upgrade */
  WifiLiveFirmwareUpdate = "WifiLiveFirmwareUpdate",
  /** DEBUG: Wi-Fi Live update success */
  WifiLiveUpdateSuccess = "WifiLiveUpdateSuccess",
  /** DEBUG: Wi-Fi Live update failed */
  WifiLiveUpdateFail = "WifiLiveUpdateFail",
  /** DEBUG: Unsolicited Response Code from GSM network */
  LiveUnsolicitedResponseCodeWhileConnected = "LiveUnsolicitedResponseCodeWhileConnected",
  /** DEBUG: Wi-Fi live open socket re-attempted */
  WifeLiveReconnect = "WifeLiveReconnect",
  /** DEBUG: Aux trigger debug information */
  AuxDebug = "AuxDebug",
  /** DEBUG: Invalid gsm parameters in flash */
  DebugInvalidGsmParameters = "DebugInvalidGsmParameters",
  /** DEBUG: Data to component message received */
  DataToComponentMessageReceived = "DataToComponentMessageReceived",
  /** DEBUG: CAN transmit buffer overrun (no-delay buffer) */
  CanNonDelayBufferOverrun = "CanNonDelayBufferOverrun",
  /**
   * DEBUG: Old intermittent issue with Ublox modem where the number of bytes returned
   * after a read is less than expected.
   */
  UbloxReadRetry = "UbloxReadRetry",
  /** DEBUG: Invalid road speed during reverse detection */
  InvalidRoadSpeedDuringReverseDetect = "InvalidRoadSpeedDuringReverseDetect",
  /** DEBUG: J1708 fault debug information */
  J1708FaultDebug = "J1708FaultDebug",
  /** DEBUG: Live modem reconnect interval debug information */
  LiveModemRetry = "LiveModemRetry",
  /** DEBUG: Rf transmit failed */
  RfTransmitFailed = "RfTransmitFailed",
  /** DEBUG: In vehicle audible alert */
  InVehicleAudibleAlert = "InVehicleAudibleAlert",
  /** DEBUG: Wi-Fi live firmware version */
  WifiLiveFirmwareVersion = "WifiLiveFirmwareVersion",
  /** DEBUG: Gps signal strength received */
  GpsSignalStrengthReceived = "GpsSignalStrengthReceived",
  /** DEBUG: Invalid message type while downloading firmware over RF 900 Mhz */
  InvalidMsgTypeDuringFirmwareUpdate = "InvalidMsgTypeDuringFirmwareUpdate",
  /** DEBUG: Invalid message type while downloading parameters over RF 900 Mhz */
  InvalidMsgTypeDuringParameterUpdate = "InvalidMsgTypeDuringParameterUpdate",
  /** DEBUG: Invalid message type while downloading third-party firmware over RF 900 Mhz */
  InvalidMsgTypeDuringThirdPartyFirmwareUpdate = "InvalidMsgTypeDuringThirdPartyFirmwareUpdate",
  /** DEBUG: Invalid message type after sending hello msg over RF 900 Mhz */
  InvalidMsgTypeAfterInitialConnect = "InvalidMsgTypeAfterInitialConnect",
  /** DEBUG: Invalid message type after sending multilog batch over RF 900 Mhz */
  InvalidMsgTypeAfterSendingMultilogBatch = "InvalidMsgTypeAfterSendingMultilogBatch",
  /** DEBUG: Invalid message type after requesting aiding data over RF 900 Mhz */
  InvalidMsgTypeAfterAidingDataRequest = "InvalidMsgTypeAfterAidingDataRequest",
  /** DEBUG: Firmware update over RF 900 Mhz failed during firmware request */
  RadioFirmwareUpdateFailedDuringRequest = "RadioFirmwareUpdateFailedDuringRequest",
  /** DEBUG: Firmware update over RF 900 Mhz failed due to insufficient data */
  RadioFirmwareUpdateFailedInsufficientData = "RadioFirmwareUpdateFailedInsufficientData",
  /** DEBUG: Firmware update over RF 900 Mhz failed due to invalid Msg Type */
  RadioFirmwareUpdateFailedInvalidMsgType = "RadioFirmwareUpdateFailedInvalidMsgType",
  /** DEBUG: Firmware update over RF 900 Mhz failed due to invalid block count */
  RadioFirmwareUpdateFailedInvalidBlockCount = "RadioFirmwareUpdateFailedInvalidBlockCount",
  /** DEBUG: IOX attached */
  IoxAdded = "IoxAdded",
  /** DEBUG: IOX info msg */
  IoxInfo = "IoxInfo",
  /** DEBUG: IOX detached */
  IoxRemoved = "IoxRemoved",
  /** DEBUG: IOX sleep */
  IoxSleep = "IoxSleep",
  /** DEBUG: IOX wake up */
  IoxWakeUp = "IoxWakeUp",
  /** DEBUG: IOX Boot load info */
  IoxBootloadInfo = "IoxBootloadInfo",
  /** DEBUG: Driver Id key disabled */
  DriverIdKeyDisabled = "DriverIdKeyDisabled",
  /** DEBUG: Reverse detect started */
  ReverseDetectionStarted = "ReverseDetectionStarted",
  /** DEBUG: Reverse movement has been confirmed (negative acceleration for 2 seconds) */
  ReverseMovementConfirmed = "ReverseMovementConfirmed",
  /** DEBUG: Vehicle no longer in reverse due to 0 speed */
  OutOfReverseZeroSpeed = "OutOfReverseZeroSpeed",
  /** DEBUG: Vehicle no longer in reverse due to speed &gt; 20 km/h */
  OutOfReverseHighSpeed = "OutOfReverseHighSpeed",
  /** DEBUG: Vehicle no longer in reverse due to excessive acceleration */
  OutOfReverseExcessiveAcceleration = "OutOfReverseExcessiveAcceleration",
  /** DEBUG: Vehicle reverse movement */
  ReverseMovementDetected = "ReverseMovementDetected",
  /** DEBUG: Vehicle no longer in reverse due to forward acceleration */
  OutOfReverseForwardAcceleration = "OutOfReverseForwardAcceleration",
  /** DEBUG: Reverse detect could not be confirmed due to forward Acceleration */
  ReverseNotConfirmedDueToForwardAcceleration = "ReverseNotConfirmedDueToForwardAcceleration",
  /** DEBUG: Reverse detect could not be confirmed due to zero speed */
  ReverseNotConfirmedDueToZeroSpeed = "ReverseNotConfirmedDueToZeroSpeed",
  /** DEBUG: Stage 1 of reverse detect has succeeded */
  ConfirmReverseDetectStage1 = "ConfirmReverseDetectStage1",
  /** DEBUG: UCDMA Modem Detected */
  UcdmaModemDetected = "UcdmaModemDetected",
  /** DEBUG: UCDMA Provisioning Debug */
  UcdmaModemProvisioningDebug = "UcdmaModemProvisioningDebug",
  /** DEBUG: Public CAN receive buffer full */
  Can1ReceiveBufferFull = "Can1ReceiveBufferFull",
  /** DEBUG: Private CAN receive buffer full */
  Can2ReceiveBufferFull = "Can2ReceiveBufferFull",
  /** DEBUG: Voltage Curve Error Increase */
  DebugVoltageCurveErrorIncrease = "DebugVoltageCurveErrorIncrease",
  /** DEBUG: GPS Jamming Warning */
  DebugGpsJammingWarning = "DebugGpsJammingWarning",
  /** DEBUG: Go Device Distance */
  DebugGoDeviceDistance = "DebugGoDeviceDistance",
  /** DEBUG: Unknown Iridium Urc */
  DebugUnknownIridiumUrc = "DebugUnknownIridiumUrc",
  /** DEBUG: ISO Initialization Data */
  DebugIsoInitData = "DebugIsoInitData",
  /** DEBUG: Increase Broadcast RPM Timeout */
  DebugIncreaseBroadcastRpmTimeout = "DebugIncreaseBroadcastRpmTimeout",
  /** DEBUG: GPS Excessive Time To First Fix */
  DebugGpsExcessiveTimeToFirstFix = "DebugGpsExcessiveTimeToFirstFix",
  /** DEBUG: Engine Ignition On Hybrid */
  DebugEngineIgnOnHybrid = "DebugEngineIgnOnHybrid",
  /** DEBUG: Clear Codes Attempt */
  DebugClearCodesAttempt = "DebugClearCodesAttempt",
  /** DEBUG: Clear Codes Success */
  DebugClearCodesSuccess = "DebugClearCodesSuccess",
  /** DEBUG: Clear Codes Mode Enabled */
  DebugClearCodesModeEnabled = "DebugClearCodesModeEnabled",
  /** DEBUG: Engine Ign Off Hybrid */
  DebugEngineIgnOffHybrid = "DebugEngineIgnOffHybrid",
  /** DEBUG: Engine Data Detected */
  DebugEngineDataDetected = "DebugEngineDataDetected",
  /** DEBUG: Wired In Auxiliary Detected */
  DebugWiredInAuxDetected = "DebugWiredInAuxDetected",
  /** DEBUG: Fuel System Status */
  DebugFuelSystemStatus = "DebugFuelSystemStatus",
  /** DEBUG: Seat Belt Response */
  DebugSeatbeltResponse = "DebugSeatbeltResponse",
  /** DEBUG: Odometer Response */
  DebugOdometerResponse = "DebugOdometerResponse",
  /** DEBUG: Reverse High Sensitivity */
  DebugInReverseHighSensitivity = "DebugInReverseHighSensitivity",
  /** DEBUG: Error Restart GPS */
  DebugErrorRestartGps = "DebugErrorRestartGps",
  /** DEBUG: Error Reboot Slave */
  DebugErrorRebootSlave = "DebugErrorRebootSlave",
  /** DEBUG: Error Restart RF */
  DebugErrorRestartRf = "DebugErrorRestartRf",
  /** DEBUG: Error Restart RF Manager */
  DebugErrorRestartRfManager = "DebugErrorRestartRfManager",
  /** DEBUG: Error Restart Wi-Fi */
  DebugErrorRestartWifi = "DebugErrorRestartWifi",
  /** DEBUG: Error Restart Wi-Fi Manager */
  DebugErrorRestartWifiManager = "DebugErrorRestartWifiManager",
  /** DEBUG: Error Restart Modem */
  DebugErrorRestartModem = "DebugErrorRestartModem",
  /** DEBUG: Error Restart Modem Manager */
  DebugErrorRestartModemManager = "DebugErrorRestartModemManager",
  /** DEBUG: Error antenna status */
  DebugGpsAntennaStatusError = "DebugGpsAntennaStatusError",
  /**
   * DEBUG: Seconds counter not running because of fault with 32k crystal (GO3 / GO4
   * only)
   */
  DebugErrorClockStopped = "DebugErrorClockStopped",
  /** DEBUG: Flash failure (new firmware will log this as a fault) */
  DebugFlashFail = "DebugFlashFail",
  /** DEBUG: stack pointer invalid, reset device (GO2 only) */
  DebugErrorStackPtrInvalid = "DebugErrorStackPtrInvalid",
  /** DEBUG: interrupt off, reset device (GO2 only) */
  DebugErrorIntOff = "DebugErrorIntOff",
  /** DEBUG: Invalid (2002) Date */
  InvalidDate = "InvalidDate",
  /** DEBUG: Reset Record */
  ResetRecord = "ResetRecord",
  /**
   * DEBUG: Deprecated reason. Used to be a reason that indicates it was a GPS record
   * (type 2 or 32) with a reason that is regarded as debug information. This has now
   * been replaced with reason 264 below. The reason it was deprecated is that it did
   * not contain the original 15 bytes of the original GPS record that created this debug
   * record in the first place.
   */
  GpsDebugDeprecated = "GpsDebugDeprecated",
  /** DEBUG: Unknown Data Record */
  UnknownData = "UnknownData",
  /** DEBUG: Invalid J1708 Data Length */
  InvalidJ1708DataLength = "InvalidJ1708DataLength",
  /** DEBUG: Unknown Data Record */
  Garbage = "Garbage",
  /** DEBUG: Invalid Status Data */
  InvalidStatusDataLength = "InvalidStatusDataLength",
  /** DEBUG: Too Many Invalid GPS Records (formerly GpsDebug) */
  TooManyInvalidGps = "TooManyInvalidGps",
  /** DEBUG: Invalid (Future) Date */
  FutureDate = "FutureDate",
  /** DEBUG: Invalid Coordinate */
  InvalidCoordinate = "InvalidCoordinate",
  /** DEBUG: Invalid FaultData */
  InvalidFaultData = "InvalidFaultData",
  /** DEBUG: Reset GO3 */
  ResetGo3 = "ResetGo3",
  /** DEBUG: Zero Diagnostic Code */
  ZeroDiagnosticCode = "ZeroDiagnosticCode",
  /** DEBUG: Invalid Vin */
  InvalidVin = "InvalidVin",
  /** DEBUG: Invalid Acceleration Data */
  InvalidAccelerationData = "InvalidAccelerationData",
  /** DEBUG: OBD-II debug code */
  ObdiiDebugCode = "ObdiiDebugCode",
  /** DEBUG: Invalid CustomRecord */
  InvalidCustomRecord = "InvalidCustomRecord",
  /** DEBUG: DuplicateMonitor removed a record */
  DuplicateMonitorRecordRemoval = "DuplicateMonitorRecordRemoval",
  /** DEBUG: Aux data from an imported GPS record. */
  AuxRecordForDebug = "AuxRecordForDebug",
  /** Modem Signal Strength Very Low */
  ModemSignalStrengthVeryLow = "ModemSignalStrengthVeryLow",
  /** ISO Protocol Initialisation Timeout */
  IsoInitTimeout = "IsoInitTimeout",
  /** ISO Protocol Timeout Waiting For Sync Character */
  IsoTimeoutWaitingForSyncChar = "IsoTimeoutWaitingForSyncChar",
  /** Duplicate Message in the OBD2 Transmit Buffer */
  Obd2DuplicateMessageInBuffer = "Obd2DuplicateMessageInBuffer",
  /** Duplicate Message in the CAN Transmit Buffer */
  CanDuplicateMessageInBuffer = "CanDuplicateMessageInBuffer",
  /**
   * If the J1708 Total Fuel increases by over 1000 gallons between transmissions then
   * it is considered invalid
   */
  InvalidJ1708TotalFuel = "InvalidJ1708TotalFuel",
  /**
   * If the J1708 Total Distance increases by 100 miles within 10 seconds then it is
   * considered invalid
   */
  InvalidJ1708TotalDistance = "InvalidJ1708TotalDistance",
  /**
   * If the J1708 Total Distance increases by 100 miles within 10 seconds then it is
   * considered invalid
   */
  FuelRateDetected = "FuelRateDetected",
  /** Transmit Errors cancels the accelerometer from triggering requests */
  LowThresholdEventsCancelled = "LowThresholdEventsCancelled",
  /** Connected to Network APN - includes 7 chars of APN name */
  ModemNetworkApn = "ModemNetworkApn",
  /**
   * Connection Success : saved after successful reply from hello message, followed by
   * the first 7 chars of the network name
   */
  ModemConnectionSuccess = "ModemConnectionSuccess",
  /** Connection to APN Failure : Followed By The First 7 Chars Of The Network Name */
  ModemApnAttachFail = "ModemApnAttachFail",
  /** Resolve URL Failure : Followed By The First 7 Chars Of The Network Name */
  ModemResolveUrlFail = "ModemResolveUrlFail",
  /** Open Socket Failure : Followed By The First 7 Chars Of The Network Name */
  ModemOpenSocketFail = "ModemOpenSocketFail",
  /**
   * High Level Modem Manager Retry, Normally Due To A Timeout / Invalid Data Being Received,
   * Followed By The First 7 Chars Of The Network Name
   */
  ModemManagerRetryFail = "ModemManagerRetryFail",
  /**
   * Unable To Get Onto The Network, Followed By The First 7 Chars Of The Last Detected
   * Network Name
   */
  ModemNetworkFail = "ModemNetworkFail",
  /** Invalid GPS Reason */
  InvalidGpsReason = "InvalidGpsReason",
  /** Seat Belt Request */
  SeatbeltRequest = "SeatbeltRequest",
  /** Odometer Request */
  OdometerRequest = "OdometerRequest",
  /** Seat Belt Confidence Level */
  SeatbeltConfidenceLevel = "SeatbeltConfidenceLevel",
  /** Seat Belt Response Changed Mid Trip */
  SeatbeltResponseChangeMidTrip = "SeatbeltResponseChangeMidTrip",
  /** Seat Belt Buckled State Trip Timers */
  SeatbeltBuckledStateTripTimers = "SeatbeltBuckledStateTripTimers",
  /** Ignition Type */
  IgnitionType = "IgnitionType",
  /** Valor ID Fault */
  ValorIdFault = "ValorIdFault",
  /** Valor TPMS Fault */
  ValorTpmsFault = "ValorTpmsFault",
  /** Mobileye Car Data */
  MobileyeCarData = "MobileyeCarData",
  /** Mobileye TSR 1 */
  MobileyeTsr1 = "MobileyeTsr1",
  /** Mobileye TSR 2 */
  MobileyeTsr2 = "MobileyeTsr2",
  /** Mobileye TSR 3 */
  MobileyeTsr3 = "MobileyeTsr3",
  /** Mobileye TSR 4 */
  MobileyeTsr4 = "MobileyeTsr4",
  /** Mobileye TSR 5 */
  MobileyeTsr5 = "MobileyeTsr5",
  /** Mobileye TSR 6 */
  MobileyeTsr6 = "MobileyeTsr6",
  /** Mobileye TSR 7 */
  MobileyeTsr7 = "MobileyeTsr7",
  /** Mobileye Vision Display 1 */
  MobileyeVisionDisplay1 = "MobileyeVisionDisplay1",
  /** Mobileye Vision Display 2 */
  MobileyeVisionDisplay2 = "MobileyeVisionDisplay2",
  /** Mobileye Vision Display 3 */
  MobileyeVisionDisplay3 = "MobileyeVisionDisplay3",
  /** Mobileye Vision Display 4 */
  MobileyeVisionDisplay4 = "MobileyeVisionDisplay4",
  /** Mode 10 Diagnostic Initiated */
  Mode10DiagnosticInitiated = "Mode10DiagnosticInitiated",
  /** Switch J1939 To CAN 3 */
  SwitchJ1939ToCan3 = "SwitchJ1939ToCan3",
  /** Active tracking mode */
  ActiveTrackingMode = "ActiveTrackingMode",
  /** Force reset */
  ForceReset = "ForceReset",
  /** Odometer units not verified */
  OdometerUnitsNotVerifiedDeprecated = "OdometerUnitsNotVerifiedDeprecated",
  /** Vin request disabled */
  VinRequestDisabled = "VinRequestDisabled",
  /** Vin request counter exceeded */
  VinRequestCounterExceeded = "VinRequestCounterExceeded",
  /** Can 3 set to 500kbps */
  Can3SetTo500K = "Can3SetTo500K",
  /** Wifi communication error. */
  WifiCommsError = "WifiCommsError",
  /** CDMA Resolve Url failure */
  CdmaResolveUrlFailure = "CdmaResolveUrlFailure",
  /** Accelerometer save first Point */
  AccelerometerSaveFirstPoint = "AccelerometerSaveFirstPoint",
  /** The J1708 invalid idle fuel */
  J1708InvaludIdleFuel = "J1708InvaludIdleFuel",
  /** The ubx checksum */
  UBXChecksum = "UBXChecksum",
  /** The three wire ign change */
  ThreeWireIgnChange = "ThreeWireIgnChange",
  /** The set server index */
  SetServerIndex = "SetServerIndex",
  /** The set next server index */
  SetNextServerIndex = "SetNextServerIndex",
  /** The ford transit electric protocol set */
  FordTransitElectricProtocolSet = "FordTransitElectricProtocolSet",
  /** The seat belt potentially flashing */
  SeatbeltPotentiallyFlashing = "SeatbeltPotentiallyFlashing",
  /** The can switch to listen only mode with no errors */
  CanSwitchToListenOnlyModeWithNoErrors = "CanSwitchToListenOnlyModeWithNoErrors",
  /** The can switch to normal mode with no errors */
  CanSwitchToNormalModeWithNoErrors = "CanSwitchToNormalModeWithNoErrors",
  /** The engine data maximum requests with no response from bus */
  EngineDataMaxRequestsWithNoResponseFromBus = "EngineDataMaxRequestsWithNoResponseFromBus",
  /** The engine data detected as broadcast */
  EngineDataDetectedAsBroadcast = "EngineDataDetectedAsBroadcast",
  /** The engine data detected as request response */
  EngineDataDetectedAsRequestResponse = "EngineDataDetectedAsRequestResponse",
  /** The engine data detected as late broadcast */
  EngineDataDetectedAsLateBroadcast = "EngineDataDetectedAsLateBroadcast",
  /** The speed detected before power off deprecated */
  SpeedDetectedBeforePowerOffDeprecated = "SpeedDetectedBeforePowerOffDeprecated",
  /** The speed detected before power off counter reset deprecated */
  SpeedDetectedBeforePowerOffCounterResetDeprecated = "SpeedDetectedBeforePowerOffCounterResetDeprecated",
  /** The speed detected before power off counter incremented deprecated */
  SpeedDetectedBeforePowerOffCounterIncrementedDeprecated = "SpeedDetectedBeforePowerOffCounterIncrementedDeprecated",
  /** The speed detected before power off requests disabled deprecated */
  SpeedDetectedBeforePowerOffRequestsDisabledDeprecated = "SpeedDetectedBeforePowerOffRequestsDisabledDeprecated",
  /** The response received after maximum retries */
  ResponseReceivedAfterMaxRetries = "ResponseReceivedAfterMaxRetries",
  /** The request response detection error */
  RequestResponseDetectionError = "RequestResponseDetectionError",
  /** The modem signal strength */
  ModemSignalStrength = "ModemSignalStrength",
  /** The modem cdma PRL identifier */
  ModemCdmaPrlId = "ModemCdmaPrlId",
  /** The send addons detected message */
  SendAddonsDetectedMessage = "SendAddonsDetectedMessage",
  /** The initialize server detai */
  InitServerDetai = "InitServerDetai",
  /** The set server unavailable */
  SetServerUnavailable = "SetServerUnavailable",
  /** The osc switch */
  OscSwitch = "OscSwitch",
  /** The inter sleep time */
  InterSleepTime = "InterSleepTime",
  /** Accelerometer Interrupt Failure */
  AccelerometerInterruptFailure = "AccelerometerInterruptFailure",
  /** CAN Buffer Overrun */
  CanBufferOverrun = "CanBufferOverrun",
  /** CAN Transmit Error Count Exceeded */
  CanTxErrorCountExceeded = "CanTxErrorCountExceeded",
  /** Engine has turned off after device requested vin */
  EngineOffAfterVinRequest = "EngineOffAfterVinRequest",
  /** Excessive accelerometer events in a single trip */
  ExcessiveAccelerometerEvents = "ExcessiveAccelerometerEvents",
  /** Excessive accelerometer log in a single event */
  ExcessiveAccelerometerLogsInEvent = "ExcessiveAccelerometerLogsInEvent",
  /** Device has reached the limit of engine data allowed in a single trip */
  ExcessiveEngineData = "ExcessiveEngineData",
  /** Legacy communication error (J1850 CRC, J1708 checksum, Iso checksum) */
  ExcessiveLegacyCommunicationErrors = "ExcessiveLegacyCommunicationErrors",
  /** Device has reached the limit data logs allowed in a single trip */
  ExcessiveLogging = "ExcessiveLogging",
  /** Slave pic has reset */
  SlaveRestart = "SlaveRestart",
  /** Unable to configure Gps module */
  GpsConfigurationFailure = "GpsConfigurationFailure",
  /** Debug log when voltage is above 13 V to indicate ignition is not being detected */
  HighVoltageWhileIgnOff = "HighVoltageWhileIgnOff",
  /** Invalid key insert */
  InvalidKeyInsert = "InvalidKeyInsert",
  /** Iso receive state invalid */
  IsoReceiveStateInvalid = "IsoReceiveStateInvalid",
  /** J1708 buffer full */
  J1708BufferFull = "J1708BufferFull",
  /** J1708 transmit already enabled (bus contention while active) */
  J1708TransmitAlreadyEnabled = "J1708TransmitAlreadyEnabled",
  /** J1708 communication error (excessive bus contention) */
  J1708CommunicationError = "J1708CommunicationError",
  /** J1708 LM317 failure */
  J1708Lm317Failure = "J1708Lm317Failure",
  /** J1708 Message Too Large */
  J1708MessageTooLarge = "J1708MessageTooLarge",
  /** J1708 Rx Buffer Out of Sync */
  J1708RxBufferOutOfSync = "J1708RxBufferOutOfSync",
  /** J1708 Rx State Fail */
  J1708RxStateFail = "J1708RxStateFail",
  /** J1708 Transmit Success */
  J1708TransmitSuccess = "J1708TransmitSuccess",
  /** J1708 Tx Active */
  J1708TransmitActive = "J1708TransmitActive",
  /** J1708 Tx Buffer Out of Sync */
  J1708TransmitBufferOutOfSync = "J1708TransmitBufferOutOfSync",
  /** J1850 Rx State Invalid */
  J1850ReceiveStateInvalid = "J1850ReceiveStateInvalid",
  /** J1850 Tx State Invalid */
  J1850TransmitStateInvalid = "J1850TransmitStateInvalid",
  /** J1850 Tx Timeout */
  J1850TransmitTimeout = "J1850TransmitTimeout",
  /** J1939 Debug */
  J1939Debug = "J1939Debug",
  /** Memory Pointer Corruption */
  MemoryPointerError = "MemoryPointerError",
  /** Obd Receive Buffer Out of Sync */
  ObdReceiveBufferOutOfSync = "ObdReceiveBufferOutOfSync",
  /** Obd Receive Buffer Full */
  ObdReceiveBufferFull = "ObdReceiveBufferFull",
  /** Obd Transmit Buffer out of sync */
  ObdTransmitBufferOutOfSync = "ObdTransmitBufferOutOfSync",
  /** Obd Transmit Buffer Full */
  ObdTransmitBufferFull = "ObdTransmitBufferFull",
  /** Restart apn scanning */
  RestartApnScanning = "RestartApnScanning",
  /** Restart modem state machine */
  RestartModemStateMachine = "RestartModemStateMachine",
  /** Scan tool cant allocate memory */
  ScantoolMemoryFull = "ScantoolMemoryFull",
  /** J1850 timeout waiting for bus to be idle */
  J1850TimeoutWaitingForIdle = "J1850TimeoutWaitingForIdle",
  /** Legacy timer off without clear to send set */
  LegacyTimerOffWithoutCts = "LegacyTimerOffWithoutCts",
  /** Too many logs packed into a single multilog */
  TooManyLogsInMultilog = "TooManyLogsInMultilog",
  /** Restart Rf state machine */
  RestartRfStateMachine = "RestartRfStateMachine",
  /** Restart Rf manager state machine. */
  RestartRfManagerStateMachine = "RestartRfManagerStateMachine",
  /** Non delay can buffer overrun */
  NonDelayCanBufferOverrun = "NonDelayCanBufferOverrun",
  /** Restart wifi state machine */
  RestartWifiStateMachine = "RestartWifiStateMachine",
  /** Restart wifi manager machine */
  RestartWifiManagerStateMachine = "RestartWifiManagerStateMachine",
  /** Request for rf firmware has failed at Aerocomm level. */
  RfFirmwareRequestFailed = "RfFirmwareRequestFailed",
  /** Rf firmware update failed due to firmware message timeout */
  RfFirmwareUpdateTimeout = "RfFirmwareUpdateTimeout",
  /** Rf firmware update failed. Expected ack firmware message. */
  RfFirmwareUpdateFailedExpectedAckMsg = "RfFirmwareUpdateFailedExpectedAckMsg",
  /** Rf firmware update failed due to invalid block count */
  RfFirmwareUpdateFailedInvalidBlockCount = "RfFirmwareUpdateFailedInvalidBlockCount",
  /** Invalid J1708 fault received */
  J1708InvalidFault = "J1708InvalidFault",
  /** J1708 message too long */
  J1708MessageTooLong = "J1708MessageTooLong",
  /** Gps streaming via can enabled (for unit test purposes) */
  GpsStreamingViaCanEnabled = "GpsStreamingViaCanEnabled",
  /** Device potentially knocked by driver */
  DevicePotentiallyKnocked = "DevicePotentiallyKnocked",
  /** Debug information to help troubleshoot Ublox Lisa 3G modem */
  UbloxModemPowerOffDebug = "UbloxModemPowerOffDebug",
  /** Ram manager cannot allocate memory to receive GPS stream through CAN for unit testing. */
  GpsStreamingCantAllocateMemory = "GpsStreamingCantAllocateMemory",
  /**
   * Device cannot save additional engine parameters due to limit set in firmware to
   * avoid using up all available RAM
   */
  MaxNumberOfEngineParametersExceeded = "MaxNumberOfEngineParametersExceeded",
  /** Ram manager cannot allocate memory for engine parameter. */
  EngineCurveCantAllocateMemory = "EngineCurveCantAllocateMemory",
  /**
   * Ram manager cannot allocate memory for the engine data priority module that handles
   * data received from more than 1 protocol.
   */
  EngineDataPriorityCantAllocateMemory = "EngineDataPriorityCantAllocateMemory",
  /** Ram manager cannot allocate memory to accept a key image */
  GeotabKeyImageCantAllocateMemory = "GeotabKeyImageCantAllocateMemory",
  /**
   * Q26 extreeme error encountered. A block size of 464 is stuck in the modem buffer.
   * As a work around, device will force a hello message to avoid multilog timeout from
   * occuring.
   */
  Q26ExtreemeDebug = "Q26ExtreemeDebug",
  /** One or more J1850 Transmit lines are active, when they shouldn't be */
  J1850TransmitActive = "J1850TransmitActive",
  /** One or more Iso Transmit lines are active, when they shouldn't be */
  IsoTransmitActive = "IsoTransmitActive",
  /**
   * Potential for generic data logging to accident data to be disabled if excessive
   * logging is detected
   */
  ExcessiveLoggingToAccidentMemory = "ExcessiveLoggingToAccidentMemory",
  /** Total fuel used data has been discarded. Value must be greater than 0. */
  InvalidTotalFuelUsedData = "InvalidTotalFuelUsedData",
  /** J1850 VPW communication errors (excessive bus contention) */
  J1850VpwCommunicationError = "J1850VpwCommunicationError",
  /** J1850 PWM communication errors (excessive bus contention) */
  J1850PwmCommunicationError = "J1850PwmCommunicationError",
  /** Invalid Almanac data stored in go device flash. */
  InvalidAlmanacDataInFlash = "InvalidAlmanacDataInFlash",
  /** Communication on the CAN bus has been disabled */
  CanDisabled = "CanDisabled",
  /** Single transmit error on the CAN bus */
  CanTransmitError = "CanTransmitError",
  /**
   * Log when a device attempts to communicate to an RF 900Mhz downloader that is busy
   * sending firmware to another device.
   */
  DeviceInterferenceDuringFirmwareUpdate = "DeviceInterferenceDuringFirmwareUpdate",
  /** Divide by zero should never occur. Contact GeoAutomotive. */
  DivideByZero = "DivideByZero",
  /** Single J1850 VPW transmit error */
  J1850VpwTransmitError = "J1850VpwTransmitError",
  /** Single J1850 PWM transmit error */
  J1850PwmTransmitError = "J1850PwmTransmitError",
  /** Single receive error on the CAN bus */
  CanReceiveError = "CanReceiveError",
  /** Fleet Management Solution (FMS) module is reporting an error */
  CanFmsError = "CanFmsError",
  /** Scan tool message discarded due to invalid msg length */
  InvalidScantoolMessageLength = "InvalidScantoolMessageLength",
  /** Internal CAN receive error counter has increased by 8. */
  CanReceiveErrorsDetected = "CanReceiveErrorsDetected",
  /** CAN Controller has received a valid message and switched to Normal mode */
  CanNormalMode = "CanNormalMode",
  /** CAN Controller has received an invalid message and switched to Listen Only mode */
  CanListenOnly = "CanListenOnly",
  /** Ram manager was unable to allocate memory that was requested */
  InsufficientRamAvailable = "InsufficientRamAvailable",
  /**
   * Transmit on the CAN bus failed. Did not receive acknowledge after trying for 50
   * ms
   */
  CanTransmitTimeout = "CanTransmitTimeout",
  /** Internal CAN transmit error counter has increased by 8. */
  CanTransmitErrorsDetected = "CanTransmitErrorsDetected",
  /** CAN Receive Error Count Exceeded */
  CanRxErrorCountExceeded = "CanRxErrorCountExceeded",
  /** Received an invalid message type while downloading parameters over RF 900 Mhz */
  RadioInvalidMsgTypeDuringParameterUpdate = "RadioInvalidMsgTypeDuringParameterUpdate",
  /**
   * Received an invalid message type while downloading third-party firmware over RF
   * 900 Mhz
   */
  RadioInvalidMsgTypeDuringThirdPartyFirmwareUpdate = "RadioInvalidMsgTypeDuringThirdPartyFirmwareUpdate",
  /** Received an invalid message type after sending hello msg over RF 900 Mhz */
  RadioInvalidMsgTypeAfterInitialConnect = "RadioInvalidMsgTypeAfterInitialConnect",
  /** Received an invalid message type after sending multilog batch over RF 900 Mhz */
  RadioInvalidMsgTypeAfterSendingMultilogBatch = "RadioInvalidMsgTypeAfterSendingMultilogBatch",
  /** Received an invalid message type after requesting aiding data over RF 900 Mhz */
  RadioInvalidMsgTypeAfterAidingDataRequest = "RadioInvalidMsgTypeAfterAidingDataRequest",
  /** The gsm parameters in flash are invalid and will not be used */
  InvalidGsmParameters = "InvalidGsmParameters",
  /** The device received J1939 data from a controller that hasn't been defined */
  UndefinedJ1939Controller = "UndefinedJ1939Controller",
  /** The device received J1708 data from a Controller(Mid) that hasn't been defined */
  UndefinedJ1708Mid = "UndefinedJ1708Mid",
  /** GM Single Wire cant allocate memory */
  GmSwcCantAllocateMemory = "GmSwcCantAllocateMemory",
  /** Excessive time to first fix */
  ExcessiveTimeToFirstFix = "ExcessiveTimeToFirstFix",
  /** The external crystal was unable to start */
  ClockFailAtStartup = "ClockFailAtStartup",
  /** The modem layer was unable to start due to timeout waiting for Rts */
  ModemTimeoutWaitingForRts = "ModemTimeoutWaitingForRts",
  /** GO7+ IOX power supply IC cut off power due to over current condition */
  IoxOverCurrent = "IoxOverCurrent",
  /** CAN controller is in a bus off state. CAN transmit will be disabled */
  CanBusOffState = "CanBusOffState",
  /** CAN controller is in an error state. CAN transmit will by delayed. */
  CanBusErrorState = "CanBusErrorState",
  /** CAN controller is in a warning state. CAN transmit will by delayed. */
  CanBusWarningState = "CanBusWarningState",
  /** Invalid speed detected based on change in latitude /longitude */
  InvalidSpeedFilter = "InvalidSpeedFilter",
  /** Speed has been reset to zero due to ignition off */
  SpeedResetToZero = "SpeedResetToZero",
  /** Something is preventing the device from going to sleep */
  DeviceNotGoingToSleep = "DeviceNotGoingToSleep",
  /** Run length encoding firmware inflate failed */
  FirmwareInflateFailed = "FirmwareInflateFailed",
  /** The vw initialization fail */
  VwInitializationFail = "VwInitializationFail",
  /** Volkswagen Initialization Failed. Response : Application type not supported */
  VwApplicationTypeNotSupported = "VwApplicationTypeNotSupported",
  /** Volkswagen Initialization Failed. Response : Application type temporarily not supported */
  VwApplicationTypeTemporarilyNotSupported = "VwApplicationTypeTemporarilyNotSupported",
  /** Volkswagen Initialization Failed. Response : No resources available */
  VwNoResourcesAvailable = "VwNoResourcesAvailable",
  /** Volkswagen communication timeout during idle state */
  VwTimeoutWhileIdle = "VwTimeoutWhileIdle",
  /** Volkswagen supports 5 consecutive keep alive requests */
  VwKeepAliveCounterExceeded = "VwKeepAliveCounterExceeded",
  /** Volkswagen transmit buffer is out of sync */
  VwTransmitBufferOutOfSync = "VwTransmitBufferOutOfSync",
  /** Volkswagen receive buffer is out of sync */
  VwReceiveBufferOutOfSync = "VwReceiveBufferOutOfSync",
  /** Volkswagen invalid response after sending start communication request */
  VwStartCommunicationInvalidResponse = "VwStartCommunicationInvalidResponse",
  /** Volkswagen receive buffer is full */
  VwReceiveBufferFull = "VwReceiveBufferFull",
  /** Volkswagen transmit buffer is full */
  VwTransmitBufferFull = "VwTransmitBufferFull",
  /** Volkswagen transmit buffer is full */
  VwInitializationFailedStage2Failed = "VwInitializationFailedStage2Failed",
  /** Volkswagen timeout waiting for ECU to reply during transmit state */
  VwTransmitTimeout = "VwTransmitTimeout",
  /** Unable to allocate ram required to start Volkswagen initialization */
  VwCantAllocateMemory = "VwCantAllocateMemory",
  /**
   * Device will not longer attempt Volkswagen Protocol initialization due to excessive
   * number of failed attempts
   */
  VwInitRetryCounterExceeded = "VwInitRetryCounterExceeded",
  /**
   * Device has marked the current seat belt response as invalid due to excessive seat
   * belt state change events
   */
  SeatbeltStateCounterExceeded = "SeatbeltStateCounterExceeded",
  /** CAN Transmit buffer full */
  CanTransmitBufferFull = "CanTransmitBufferFull",
  /** CAN transmit buffer out of sync */
  CanTransmitBufferOutOfSync = "CanTransmitBufferOutOfSync",
  /** Ublox invalid response to read command */
  UbloxInvalidReadResponse = "UbloxInvalidReadResponse",
  /** Insufficient RAM for J1708 receive buffer */
  J1708CantAllocateMemory = "J1708CantAllocateMemory",
  /** Invalid logging parameters */
  InvalidLoggingParameters = "InvalidLoggingParameters",
  /** Log Data Checksum Failure */
  LogDataChecksumFailure = "LogDataChecksumFailure",
  /** J1708 transmit error triggered by collision detection algorithm */
  J1708TransmitError = "J1708TransmitError",
  /** Stage 1 flash error - the device will attempt to reset the flash and recover */
  FlashErrorStage1 = "FlashErrorStage1",
  /** Odometer not detected */
  OdometerNotDetected = "OdometerNotDetected",
  /** J1708 transmit buffer - invalid length */
  InvalidJ1708TxLength = "InvalidJ1708TxLength",
  /** OBD-II Rx buffer out of sync */
  Obd2RxBufferOutOfSync = "Obd2RxBufferOutOfSync",
  /** OBD-II negative response received (0x7F) */
  Obd2NegativeResponse = "Obd2NegativeResponse",
  /** Seat Belt request / response mismatch */
  Obd2SeatbeltRequestResponseMismatch = "Obd2SeatbeltRequestResponseMismatch",
  /** Odometer request / response mismatch */
  Obd2OdometerRequestResponseMismatch = "Obd2OdometerRequestResponseMismatch",
  /** OBD-II seat belt reporting error (ECU is no longer responding to seat belt requests) */
  Obd2SeatbeltReportingError = "Obd2SeatbeltReportingError",
  /** OBD-II Odometer reporting error (ECU is no longer responding to odometer requests) */
  Obd2OdometerReportingError = "Obd2OdometerReportingError",
  /** Two wire ignition disabled */
  TwoWireIgnDetectDisabled = "TwoWireIgnDetectDisabled",
  /** Invalid sensomatix length */
  InvalidSensomatixLength = "InvalidSensomatixLength",
  /** GPS jamming detected */
  GpsJammingDetected = "GpsJammingDetected",
  /** Iso timeout waiting to initialize */
  IsoTimeoutWaitingToInitialize = "IsoTimeoutWaitingToInitialize",
  /** Iso address byte tx error */
  IsoAddressByteTxError = "IsoAddressByteTxError",
  /** Iso timeout waiting for sync character - moved to the 50000 range (info debug) */
  IsoTimeoutWaitingForSyncCharDeprecated = "IsoTimeoutWaitingForSyncCharDeprecated",
  /** Iso timeout waiting for sync character */
  IsoTimeoutWaitingForKeywords = "IsoTimeoutWaitingForKeywords",
  /** Iso transmit error */
  IsoTransmitError = "IsoTransmitError",
  /** Iso unsupported keywords */
  IsoUnsupportedKeywords = "IsoUnsupportedKeywords",
  /** Iso unsupported keywords */
  IsoTimeoutWaitingForInverseAddressByte = "IsoTimeoutWaitingForInverseAddressByte",
  /** Iso fast initialization error */
  IsoFastInitError = "IsoFastInitError",
  /** Iso initialization not defined */
  IsoInitializationNotDefined = "IsoInitializationNotDefined",
  /** No response to iso start communication request */
  IsoNoResponseToStartComm = "IsoNoResponseToStartComm",
  /** Invalid response to iso start communication request */
  IsoInvalidResponseToStartComm = "IsoInvalidResponseToStartComm",
  /** Legacy J1850 tx active - protocol not set */
  J1850TxActiveProtocolNotSet = "J1850TxActiveProtocolNotSet",
  /** Seat Belt not changing state */
  SeatbeltNotChangingState = "SeatbeltNotChangingState",
  /** Modem signal strength low */
  ModemSignalStrengthLow = "ModemSignalStrengthLow",
  /** Iso init timeout */
  IsoInitializationTimeout = "IsoInitializationTimeout",
  /** Invalid Sensomatix Hardware id */
  InvalidSensomatixHardwareid = "InvalidSensomatixHardwareid",
  /** OBD-II Rx Pointer Invalid */
  Obd2RxPointerInvalid = "Obd2RxPointerInvalid",
  /** OBD-II Tx Pointer Invalid */
  Obd2TxPointerInvalid = "Obd2TxPointerInvalid",
  /** OBD-II Duplicate Message In Buffer - moved to the 50000 range (info debug) */
  Obd2DuplicateMessageInBufferDeprecated = "Obd2DuplicateMessageInBufferDeprecated",
  /** Can Duplicate Message In Buffer - moved to the 50000 range (info debug) */
  CanDuplicateMessageInBufferDeprecated = "CanDuplicateMessageInBufferDeprecated",
  /** Curve Engine Incorrect Datetime Logic */
  CurveEngineIncorrectDatetimeLogic = "CurveEngineIncorrectDatetimeLogic",
  /** Iox Reset Fault */
  IoxResetFault = "IoxResetFault",
  /** Accelerometer Communication Recovered */
  AccelerometerCommunicationRecovered = "AccelerometerCommunicationRecovered",
  /** Accelerometer Communication Failure */
  AccelerometerCommunicationFailure = "AccelerometerCommunicationFailure",
  /** J1708 Excessive Idle Hours */
  J1708ExcessiveIdleHours = "J1708ExcessiveIdleHours",
  /** The J1939 excessive idle hours */
  J1939ExcessiveIdleHours = "J1939ExcessiveIdleHours",
  /** Scan tool Detected */
  ScantoolDetected = "ScantoolDetected",
  /** Curve Data Ratio Zero */
  CurveDataRatioZero = "CurveDataRatioZero",
  /** Curve Time Ratio Zero */
  CurveTimeRatioZero = "CurveTimeRatioZero",
  /** Almanac Data Offset Too Large */
  AlmanacDataOffsetTooLarge = "AlmanacDataOffsetTooLarge",
  /** Iox Boot load Fault */
  IoxBootloadFault = "IoxBootloadFault",
  /** Iso Init Timer Off */
  IsoInitTimerOff = "IsoInitTimerOff",
  /** Stack Overflow Protection */
  StackOverflowProtection = "StackOverflowProtection",
  /** Subscribe To Event Fail */
  SubscribeToEventFail = "SubscribeToEventFail",
  /** Attempt To Raise Event From Event */
  AttemptToRaiseEventFromEvent = "AttemptToRaiseEventFromEvent",
  /** Device Has Ram Errors */
  DeviceHasRamErrors = "DeviceHasRamErrors",
  /** Excessive Seat Belt Changes */
  ExcessiveSeatbeltChanges = "ExcessiveSeatbeltChanges",
  /** Unsubscribe From Event Fail */
  UnsubscribeFromEventFail = "UnsubscribeFromEventFail",
  /** Sensomatix Length Exceed Cdma Tx Limit */
  SensomatixLengthExceedCdmaTxLimit = "SensomatixLengthExceedCdmaTxLimit",
  /** Single OBD-II Ecu Only */
  SingleObd2EcuOnly = "SingleObd2EcuOnly",
  /** J1708 Tx Pointer Invalid */
  J1708TxPointerInvalid = "J1708TxPointerInvalid",
  /** J1708 Tx Buffer Error */
  J1708TxBufferError = "J1708TxBufferError",
  /** J1708 Tx Timeout */
  J1708TxTimeout = "J1708TxTimeout",
  /** J1708 Tx Invalid Length */
  J1708TxInvalidLength = "J1708TxInvalidLength",
  /** J1708 Tx Buffer Full */
  J1708TxBufferFull = "J1708TxBufferFull",
  /** Iox Bootloader Found */
  IoxBootloaderFound = "IoxBootloaderFound",
  /** Communication with the current measuring module has recovered */
  CurrentCommunicationRecovered = "CurrentCommunicationRecovered",
  /** Communication with the current measuring module has failed */
  CurrentCommunicationFailure = "CurrentCommunicationFailure",
  /** OBD2 has been detect with J1939 */
  ObdWithJ1939 = "ObdWithJ1939",
  /** Data overrun has occurred into the unallocated section of the RAM manager */
  RamManagerDataOverrun = "RamManagerDataOverrun",
  /** Invalid PID Support Data Received from a vehicle */
  InvalidPidSupportData = "InvalidPidSupportData",
  /** IOX Firmware too large for the V1 bootloader */
  IoxFirmwareTooLargeForBootloaderV1 = "IoxFirmwareTooLargeForBootloaderV1",
  /** Invalid CAN Mode requested */
  CanRequestedModeIsInvalid = "CanRequestedModeIsInvalid",
  /** CAN Tx State is invalid */
  CanTxStateUnknown = "CanTxStateUnknown",
  /** A New CAN Mode has been requested before previous one has been set */
  NextCanModeOverwritten = "NextCanModeOverwritten",
  /** Can't allocate memory for a connected external IOX device */
  ExternalDeviceInfoCantAllocateMemory = "ExternalDeviceInfoCantAllocateMemory",
  /** Can't allocate memory for seat belt detection */
  Obd2SeatbeltCantAllocateMemory = "Obd2SeatbeltCantAllocateMemory",
  /** Can't allocate memory for the J1708 Rx buffer on GO4V3 */
  J1708SlaveTxCantAllocateMemory = "J1708SlaveTxCantAllocateMemory",
  /** Can't allocate memory for the J1708 Tx buffer */
  J1708TxCantAllocateMemory = "J1708TxCantAllocateMemory",
  /** Accelerometer communication re-enable count exceeded */
  AccelerometerExcessiveReEnable = "AccelerometerExcessiveReEnable",
  /** GPS Ignition Off Buffer Overflowed */
  GpsIgnOffBufferOverflow = "GpsIgnOffBufferOverflow",
  /** Accelerometer Purging Buffers */
  AccelPurgingBuffers = "AccelPurgingBuffers",
  /** Volkswagen Fuel Rate */
  VwFuelRate = "VwFuelRate",
  /** Odometer deemed to be invalid */
  OdometerInvalid = "OdometerInvalid",
  /** Odometer In Metric Verified */
  OdometerInMetricVerified = "OdometerInMetricVerified",
  /** Odometer In Imperial Verified */
  OdometerInImperialVerified = "OdometerInImperialVerified",
  /** GO Device ID does not match on consecutive reads from device DataFlash, may be corrupt */
  GoDeviceIdPotentiallyInvalid = "GoDeviceIdPotentiallyInvalid",
  /** Counter of MAF messages missed for the trip */
  MafMessagesMissedCount = "MafMessagesMissedCount",
  /** Stack required to run the curve algorithm as iteration has filled */
  CurveIterationStackFull = "CurveIterationStackFull",
  /** Ublox Special Ud Config */
  UbloxSpecialUdConfig = "UbloxSpecialUdConfig",
  /** CDMA Carrier Detection Error */
  CdmaCarrierDetectionError = "CdmaCarrierDetectionError",
  /** Modem Registration Denied */
  ModemRegistrationDenied = "ModemRegistrationDenied",
  /** Modem Hello Message Reply */
  ModemHelloMessageReply = "ModemHelloMessageReply",
  /** Modem APN Failed */
  ModemApnFailed = "ModemApnFailed",
  /** Modem APN Index From Geozone */
  ModemApnIndexFromGeozone = "ModemApnIndexFromGeozone",
  /** CAN Switch To Listen Only Mode */
  CanSwitchToListenOnlyMode = "CanSwitchToListenOnlyMode",
  /** Ext CAN Errors Detected */
  ExtCanErrorsDetected = "ExtCanErrorsDetected",
  /** Ext CAN Overrun Errors Detected */
  ExtCanOverrunErrorsDetected = "ExtCanOverrunErrorsDetected",
  /** Engine Based Road Speed Disabled */
  EngineBasedRoadSpeedDisabled = "EngineBasedRoadSpeedDisabled",
  /** Potentially seat belt falsely detected */
  PotentialFalseSeatBeltDetect = "PotentialFalseSeatBeltDetect",
  /** The unknown intelligent harness */
  UnknownIntelligentHarness = "UnknownIntelligentHarness",
  /** Vin count not supported */
  VinCountNotSupported = "VinCountNotSupported",
  /** The caterpillar vehicle detected */
  CaterpillarVehicleDetected = "CaterpillarVehicleDetected",
  /** The excessive odometer variance */
  ExcessiveOdometerVariance = "ExcessiveOdometerVariance",
  /** The obd2 VPW invalid RPM */
  Obd2VpwInvalidRpm = "Obd2VpwInvalidRpm",
  /** The can speed locked */
  CanSpeedLocked = "CanSpeedLocked",
  /** The firmware validated */
  FirmwareValidated = "FirmwareValidated",
  /** The firmware validation failed */
  FirmwareValidationFailed = "FirmwareValidationFailed",
  /** The caterpillar data parse error */
  CaterpillarDataParseError = "CaterpillarDataParseError",
  /** The caterpillar state machine error */
  CaterpillarStateMachineError = "CaterpillarStateMachineError",
  /** The caterpillar rx error */
  CaterpillarRxError = "CaterpillarRxError",
  /** The caterpillar data invalid */
  CaterpillarDataInvalid = "CaterpillarDataInvalid",
  /** The caterpillar disabled */
  CaterpillarDisabled = "CaterpillarDisabled",
  /** The caterpillar engine hours detected */
  CaterpillarEngineHoursDetected = "CaterpillarEngineHoursDetected",
  /** The ext can off */
  ExtCanOff = "ExtCanOff",
  /** The can broadcast address */
  CanBroadcastAddress = "CanBroadcastAddress",
  /** The invalid GPS date time */
  InvalidGpsDateTime = "InvalidGpsDateTime",
  /** The scan tool ids from engine */
  ScanToolIdsFromEngine = "ScanToolIdsFromEngine",
  /** The geo zone detected */
  GeoZoneDetected = "GeoZoneDetected",
  /** The fuel type unknown */
  FuelTypeUnknown = "FuelTypeUnknown",
  /** The debug fuel */
  DebugFuel = "DebugFuel",
  /** The can2 boot process initiated */
  Can2BootProcessInitiated = "Can2BootProcessInitiated",
  /** The can2 boot process completed */
  Can2BootProcessCompleted = "Can2BootProcessCompleted",
  /** The developer debug trap error */
  DeveloperDebugTrapError = "DeveloperDebugTrapError",
  /** The caterpillar data bus idle timeout */
  CaterpillarDataBusIdleTimeout = "CaterpillarDataBusIdleTimeout",
  /** The invalid coolant level */
  InvalidCoolantLevel = "InvalidCoolantLevel",
  /** The modem power off state */
  ModemPowerOffState = "ModemPowerOffState",
  /** The caterpillar diagnostic code */
  CaterpillarDiagnosticCode = "CaterpillarDiagnosticCode",
  /** The excessive voltage data */
  ExcessiveVoltageData = "ExcessiveVoltageData",
  /** The excessive debug data */
  ExcessiveDebugData = "ExcessiveDebugData",
  /** The valid J1708 data detected */
  ValidJ1708DataDetected = "ValidJ1708DataDetected",
  /** The intelligent harness detect invalid harness */
  IntelligentHarnessDetectInvalidHarness = "IntelligentHarnessDetectInvalidHarness",
  /** The GPS invalid checksum count */
  GpsInvalidChecksumCount = "GpsInvalidChecksumCount",
  /** The map missed message count */
  MapMissedMessageCount = "MapMissedMessageCount",
  /** The iox firmware checksum failed */
  IoxFirmwareChecksumFailed = "IoxFirmwareChecksumFailed",
  /** The excessive third-party data */
  ExcessiveThirdPartyData = "ExcessiveThirdPartyData",
  /** The ca n1 in listen only mode */
  CAN1InListenOnlyMode = "CAN1InListenOnlyMode",
  /** The fuel pulse invalid */
  FuelPulseInvalid = "FuelPulseInvalid",
  /** The BMW fuel air ratio */
  BmwFuelAirRatio = "BmwFuelAirRatio",
  /** The results from mode6 test */
  ResultsFromMode6Test = "ResultsFromMode6Test",
  /** The minimum maximum values from mode6 test */
  MinMaxValuesFromMode6Test = "MinMaxValuesFromMode6Test",
  /** The mode6 mid support */
  Mode6MidSupport = "Mode6MidSupport",
  /** The valor trailer tracking cant allocate memory */
  ValorTrailerTrackingCantAllocateMemory = "ValorTrailerTrackingCantAllocateMemory",
  /** The excessive valor trailer tracking identifier */
  ExcessiveValorTrailerTrackingId = "ExcessiveValorTrailerTrackingId",
  /** The fuel consumption ignored due to buffer limit */
  FuelConsumptionIgnoredDueToBufferLimit = "FuelConsumptionIgnoredDueToBufferLimit",
  /** The invalid fuel consumption detected */
  InvalidFuelConsumptionDetected = "InvalidFuelConsumptionDetected",
  /** The mode6 initial timestamp */
  Mode6InitialTimestamp = "Mode6InitialTimestamp",
  /** The mode6 current timestamp */
  Mode6CurrentTimestamp = "Mode6CurrentTimestamp",
  /** The engine data source */
  EngineDataSource = "EngineDataSource",
  /** The MTK modem unexpected reset */
  MtkModemUnexpectedReset = "MtkModemUnexpectedReset",
  /** The null vin saved with no engine protocol */
  NullVinSavedWithNoEngineProtocol = "NullVinSavedWithNoEngineProtocol",
  /** The too many rx errors in short period normal mode */
  TooManyRxErrorsInShortPeriodNormalMode = "TooManyRxErrorsInShortPeriodNormalMode",
  /** The too many rx errors in short period listen only mode */
  TooManyRxErrorsInShortPeriodListenOnlyMode = "TooManyRxErrorsInShortPeriodListenOnlyMode",
  /** The odometer response pending */
  OdometerResponsePending = "OdometerResponsePending",
  /** The SWC tx buffer full */
  SwcTxBufferFull = "SwcTxBufferFull",
  /** The SWC tx buffer out of synchronize */
  SwcTxBufferOutOfSync = "SwcTxBufferOutOfSync",
  /** The current curve error increase */
  CurrentCurveErrorIncrease = "CurrentCurveErrorIncrease",
  /** The multiline response timeout */
  MultilineResponseTimeout = "MultilineResponseTimeout",
  /** The can3 failed going into normal mode for tx */
  Can3FailedGoingIntoNormalModeForTx = "Can3FailedGoingIntoNormalModeForTx",
  /** The can3 tx failed */
  Can3TxFailed = "Can3TxFailed",
  /** The can3 excessive errors */
  Can3ExcessiveErrors = "Can3ExcessiveErrors",
  /** The SWC tx failed */
  SwcTxFailed = "SwcTxFailed",
  /** The multiline response busy */
  MultilineResponseBusy = "MultilineResponseBusy",
  /** The J1939 multiline packed out of synchronize */
  J1939MultilinePackedOutofSync = "J1939MultilinePackedOutofSync",
  /** The cant allocate new parameter for generic timestamp */
  CantAllocateNewParameterForGenericTimestamp = "CantAllocateNewParameterForGenericTimestamp",
  /** The intermittent connection test protocol can obd */
  IntermittentConnectionTestProtocolCanObd = "IntermittentConnectionTestProtocolCanObd",
  /** The intermittent connection test protocol can J1939 */
  IntermittentConnectionTestProtocolCanJ1939 = "IntermittentConnectionTestProtocolCanJ1939",
  /** The intermittent connection test protocol J1708 */
  IntermittentConnectionTestProtocolJ1708 = "IntermittentConnectionTestProtocolJ1708",
  /** The intermittent connection test protocol J1850 */
  IntermittentConnectionTestProtocolJ1850 = "IntermittentConnectionTestProtocolJ1850",
  /** The intermittent connection test protocol SWC */
  IntermittentConnectionTestProtocolSwc = "IntermittentConnectionTestProtocolSwc",
  /** The intermittent connection test protocol fiat50 k */
  IntermittentConnectionTestProtocolFiat50K = "IntermittentConnectionTestProtocolFiat50K",
  /** The intermittent connection test protocol undefined */
  IntermittentConnectionTestProtocolUndefined = "IntermittentConnectionTestProtocolUndefined",
  /** The intermittent connection detected severe */
  IntermittentConnectionDetectedSevere = "IntermittentConnectionDetectedSevere",
  /** The intermittent connection detected warning */
  IntermittentConnectionDetectedWarning = "IntermittentConnectionDetectedWarning",
  /** The intermittent connection detected notification */
  IntermittentConnectionDetectedNotification = "IntermittentConnectionDetectedNotification",
  /** The intermittent connection test address used */
  IntermittentConnectionTestAddressUsed = "IntermittentConnectionTestAddressUsed",
  /** The unknown third-party message type */
  UnknownThirdPartyMessageType = "UnknownThirdPartyMessageType",
  /** The third-party iox can ack failed */
  ThirdPartyIoxCanAckFailed = "ThirdPartyIoxCanAckFailed",
  /** The incorrect third-party message length */
  IncorrectThirdPartyMessageLength = "IncorrectThirdPartyMessageLength",
  /** The fuel type not available */
  FuelTypeNotAvailable = "FuelTypeNotAvailable",
  /** The standard engine detected */
  StandardEngineDetected = "StandardEngineDetected",
  /** The turbocharged engine detected */
  TurbochargedEngineDetected = "TurbochargedEngineDetected",
  /** The supercharged engine detected */
  SuperchargedEngineDetected = "SuperchargedEngineDetected",
  /** The j193911bit requests stopped */
  J193911bitRequestsStopped = "J193911bitRequestsStopped",
  /** The fuel debug */
  FuelDebug = "FuelDebug",
  /** The J1708 poor connection quality */
  J1708PoorConnectionQuality = "J1708PoorConnectionQuality",
  /** The hardware tester iox debug */
  HardwareTesterIoxDebug = "HardwareTesterIoxDebug",
  /** The base mode fault code */
  BaseModeFaultCode = "BaseModeFaultCode",
  /** The can bus status at ignition on */
  CanBusStatusAtIgnitionOn = "CanBusStatusAtIgnitionOn",
  /** The can bus status during trip */
  CanBusStatusDuringTrip = "CanBusStatusDuringTrip",
  /** The can bus status at ignition off */
  CanBusStatusAtIgnitionOff = "CanBusStatusAtIgnitionOff",
  /** The can bus status between trips */
  CanBusStatusBetweenTrips = "CanBusStatusBetweenTrips",
  /** The can bus status state unknown */
  CanBusStatusStateUnknown = "CanBusStatusStateUnknown",
  /** The can lines potentially floating without can speed locked */
  CanLinesPotentiallyFloatingWithoutCanSpeedLocked = "CanLinesPotentiallyFloatingWithoutCanSpeedLocked",
  /** The hw tester iox data record lost */
  HwTesterIoxDataRecordLost = "HwTesterIoxDataRecordLost",
  /** The SWC tx message too long */
  SwcTxMessageTooLong = "SwcTxMessageTooLong",
  /** The engine data not being requested */
  EngineDataNotBeingRequested = "EngineDataNotBeingRequested",
  /** The J1708 bus busy error count */
  J1708BusBusyErrorCount = "J1708BusBusyErrorCount",
  /** The ram manager overwritten */
  RamManagerOverwritten = "RamManagerOverwritten",
  /** The odometer units not verified */
  OdometerUnitsNotVerified = "OdometerUnitsNotVerified",
  /** The excessive rx can errors in long period of time */
  ExcessiveRxCanErrorsInLongPeriodOfTime = "ExcessiveRxCanErrorsInLongPeriodOfTime",
  /** The excessive tx can errors in long period of time */
  ExcessiveTxCanErrorsInLongPeriodOfTime = "ExcessiveTxCanErrorsInLongPeriodOfTime",
  /** The excessive rx can errors in short period of time */
  ExcessiveRxCanErrorsInShortPeriodOfTime = "ExcessiveRxCanErrorsInShortPeriodOfTime",
  /** The excessive tx can errors in short period of time */
  ExcessiveTxCanErrorsInShortPeriodOfTime = "ExcessiveTxCanErrorsInShortPeriodOfTime",
  /** The can lines potentially floating with can speed locked */
  CanLinesPotentiallyFloatingWithCanSpeedLocked = "CanLinesPotentiallyFloatingWithCanSpeedLocked",
  /** The invalid J1708 engine road speed */
  InvalidJ1708EngineRoadSpeed = "InvalidJ1708EngineRoadSpeed",
  /** The unknown SWC protocol */
  UnknownSwcProtocol = "UnknownSwcProtocol",
  /** The legacy manager tried a SWC protocol */
  LegacyManagerTriedASwcProtocol = "LegacyManagerTriedASwcProtocol",
  /** The SWC too long of a message */
  SwcTooLongOfAMessage = "SwcTooLongOfAMessage",
  /** The remote scan tool message from server */
  RemoteScanToolMessageFromServer = "RemoteScanToolMessageFromServer",
  /** The extended CAN bus correct */
  ExtcanBusCorrect = "ExtcanBusCorrect",
  /** The extended CAN errors during initialization */
  ExtcanErrorsDuringIntialization = "ExtcanErrorsDuringIntialization",
  /** The extended CAN bus off */
  ExtcanBusOff = "ExtcanBusOff",
  /** The scan tool session expired */
  ScantoolSessionExpired = "ScantoolSessionExpired",
  /** The scan tool session connected */
  ScantoolSessionConnected = "ScantoolSessionConnected",
  /** The unable to use requested scan tool protocol */
  UnableToUseRequestedScantoolProtocol = "UnableToUseRequestedScantoolProtocol",
  /** The possible can transceiver failure in normal mode */
  PossibleCanTransceiverFailureInNormalMode = "PossibleCanTransceiverFailureInNormalMode",
  /** The possible can transceiver failure in listen only mode */
  PossibleCanTransceiverFailureInListenOnlyMode = "PossibleCanTransceiverFailureInListenOnlyMode",
  /** The speed detected before power off */
  SpeedDetectedBeforePowerOff = "SpeedDetectedBeforePowerOff",
  /** The speed before power off counter reset */
  SpeedBeforePowerOffCounterReset = "SpeedBeforePowerOffCounterReset",
  /** The speed detected before power off counter incremented */
  SpeedDetectedBeforePowerOffCounterIncremented = "SpeedDetectedBeforePowerOffCounterIncremented",
  /** The speed detected before power off requests disabled */
  SpeedDetectedBeforePowerOffRequestsDisabled = "SpeedDetectedBeforePowerOffRequestsDisabled",
  /** The stopped receiving request response */
  StoppedReceivingRequestResponse = "StoppedReceivingRequestResponse",
  /** The maximum engine data type limit exceeded */
  MaxEngineDataTypeLimitExceeded = "MaxEngineDataTypeLimitExceeded",
  /** The engine data type disabled */
  EngineDataTypeDisabled = "EngineDataTypeDisabled",
  /** The extended CAN mode failure during initialize */
  ExtcanModeFailureDuringInit = "ExtcanModeFailureDuringInit",
  /** The extended CAN unknown initialization state */
  ExtcanUnknownInitializationState = "ExtcanUnknownInitializationState",
  /** The extended CAN waiting on message to initialize */
  ExtcanWaitingOnMessageToInitialize = "ExtcanWaitingOnMessageToInitialize",
  /** The scan tool timeout trying to initialize */
  ScantoolTimeoutTryingToInitialize = "ScantoolTimeoutTryingToInitialize",
  /** The duplicate SWC message */
  DuplicateSwcMessage = "DuplicateSwcMessage",
  /** The duplicate can3 message */
  DuplicateCan3Message = "DuplicateCan3Message",
  /** The potential false6 pin harness detect */
  PotentialFalse6PinHarnessDetect = "PotentialFalse6PinHarnessDetect",
  /** The hardware identifier corruption after memory read */
  HardwareIdCorruptionAfterMemoryRead = "HardwareIdCorruptionAfterMemoryRead",
  /** The spi2 timeout extended CAN off */
  Spi2TimeoutExtcanOff = "Spi2TimeoutExtcanOff",
  /** The extended CAN too many interrupt errors extended CAN off */
  ExtcanTooManyInterruptErrorsExtcanOff = "ExtcanTooManyInterruptErrorsExtcanOff",
  /** The extended CAN failed waking up */
  ExtcanFailedWakingUp = "ExtcanFailedWakingUp",
  /** The extended CAN internal rx buffer overrun */
  ExtcanInternalRxBufferOverrun = "ExtcanInternalRxBufferOverrun",
  /** The extended CAN internal rx buffer corruption */
  ExtcanInternalRxBufferCorruption = "ExtcanInternalRxBufferCorruption",
  /** The legacy checksum failure count */
  LegacyChecksumFailureCount = "LegacyChecksumFailureCount",
  /** The hardware identifier corruption firmware */
  HardwareIdCorruptionFirmware = "HardwareIdCorruptionFirmware",
  /** The can3 function pointer null */
  Can3FunctionPointerNull = "Can3FunctionPointerNull",
  /** The osc not switching */
  OscNotSwitching = "OscNotSwitching",
  /** The proprietary data seen but not requested by us */
  ProprietaryDataSeenButNotRequestedByUs = "ProprietaryDataSeenButNotRequestedByUs",
  /** The can2 flash page extraction */
  Can2FlashPageExtraction = "Can2FlashPageExtraction",
  /** The flash erase command received */
  FlashEraseCommandReceived = "FlashEraseCommandReceived",
  /** The J1708 duplicate message in buffer */
  J1708DuplicateMessageInBuffer = "J1708DuplicateMessageInBuffer",
  /** The reporting previous vin due to intermittent connection */
  ReportingPreviousVinDueToIntermittentConnection = "ReportingPreviousVinDueToIntermittentConnection",
  /** The rx can errors exceeded extreme threshold */
  RxCanErrorsExceededExtremeThreshold = "RxCanErrorsExceededExtremeThreshold",
  /** The tx can errors exceeded extreme threshold */
  TxCanErrorsExceededExtremeThreshold = "TxCanErrorsExceededExtremeThreshold",
  /** The invalid accelerometer calibration */
  InvalidAcclerometerCalibration = "InvalidAcclerometerCalibration",
  /** The excessive single debug data logging */
  ExcessiveSingleDebugDataLogging = "ExcessiveSingleDebugDataLogging",
  /** The debug dump */
  DebugDataDump = "DebugDataDump",
  /** The maximum value */
  MaxValue = "MaxValue",
}
