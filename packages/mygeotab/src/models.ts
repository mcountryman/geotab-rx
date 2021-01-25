/* eslint-disable @typescript-eslint/no-empty-interface */


/**
*  Represents the specific binary format of data being stored in the {@link IBinaryData}
* object.
*/
export enum BinaryDataType { 
  /** No data. */
  None = "None", 
  /** Jpeg image. */
  Jpeg = "Jpeg", 
  /** ASCII text data. */
  Ascii = "Ascii", 
  /** Engine Serial Number. */
  EngineSerialNumber = "EngineSerialNumber", 
  /** Software Version. */
  SoftwareVersion = "SoftwareVersion", 
  /** Calibration Id. */
  CalibrationId = "CalibrationId", 
  /** ECU Make. */
  EcuMake = "EcuMake", 
  /** ECU Model. */
  EcuModel = "EcuModel", 
  /** Data reported by the manufacturer. */
  ManufacturerData = "ManufacturerData", 
  /** Data about the manufacturer part number reported by the ECU. */
  EcuManufacturerPartNumber = "EcuManufacturerPartNumber", 
  /** SData about the manufacturer serial number reported by the ECU. */
  EcuManufacturerSerialNumber = "EcuManufacturerSerialNumber", 
  /** Software Version 1. */
  SoftwareVersionSection1 = "SoftwareVersionSection1", 
  /** Software Version 2. */
  SoftwareVersionSection2 = "SoftwareVersionSection2", 
  /** Software Version 3. */
  SoftwareVersionSection3 = "SoftwareVersionSection3", 
  /** Software Version Full. */
  SoftwareVersionFull = "SoftwareVersionFull", 
  /** A grouping of OBD-II data that forms a snapshot of the state of the vehicle. */
  VariableEngineDataSnapshot = "VariableEngineDataSnapshot", 
  /** Third Party Data. */
  ThirdPartyData = "ThirdPartyData"
}


/** The {@link IBinaryPayload} type. */
export enum BinaryPayloadType { 
  /** BinaryPayload has no type. */
  None = "None", 
  /** Represents a payload of type {@link IRequestLocation}. */
  RequestLocation = "RequestLocation"
}


/** Continents list. */
export enum Continent { 
  /** Unknown */
  Unknown = "Unknown", 
  /** Asia */
  Asia = "Asia", 
  /** Africa */
  Africa = "Africa", 
  /** North America */
  NorthAmerica = "NorthAmerica", 
  /** South America */
  SouthAmerica = "SouthAmerica", 
  /** Antarctica */
  Antarctica = "Antarctica", 
  /** Europe */
  Europe = "Europe", 
  /** Australia */
  Australia = "Australia"
}


/** The type of . */
export enum CubeType { 
  /** No cube type is specified */
  None = "None", 
  /** ExceptionEvent Cube for Device */
  ExceptionEventByDevice = "ExceptionEventByDevice", 
  /** ExceptionEvent Cube for Driver */
  ExceptionEventByDriver = "ExceptionEventByDriver", 
  /** Trip Cube for Device */
  TripSummaryByDevice = "TripSummaryByDevice", 
  /** Trip Cube for Driver */
  TripSummaryByDriver = "TripSummaryByDriver"
}


/**
* The Custom Data Section enumeration. Custom data can be made up of three separate
* messages. This enumeration is used internally to identify which part(s) of the {@link
* ICustomData} is being used.
*/
export enum CustomDataSections { 
  /** No value provided */
  None = "None", 
  /** Section A */
  A = "A", 
  /** Section B */
  B = "B", 
  /** Section C */
  C = "C", 
  /** The header */
  Header = "Header", 
  /** All the sections */
  All = "All"
}


/** The classifier for customers */
export enum CustomerClassifier { 
  /** None or unknown. */
  None = "None", 
  /** Government customer type */
  Government = "Government"
}


/**
* This {@link IEnum} provides additional information about the reason for a database
* request could not succeed. or data change.
*/
export enum DbUnavailableState { 
  /** The none */
  None = "None", 
  /** The database server connection failure (for any reason). */
  ConnectionFailure = "ConnectionFailure", 
  /** The unknown database */
  UnknownDatabase = "UnknownDatabase", 
  /** The database is being initialized. */
  Initializing = "Initializing", 
  /**
  * The database operation aborted (for any reason: Timeout, inconsistent transaction,
  * concurrency, cache busy, etc.
  */
  OperationAborted = "OperationAborted"
}


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
  MaxValue = "MaxValue"
}


/** The type of asset for which the list applies.. */
export enum DefectAssetType { 
  /** Defect list that applies to any asset. */
  All = "All", 
  /** Defect list for a {@link IDevice}. */
  Device = "Device", 
  /** Defect list for a {@link ITrailer}. */
  Trailer = "Trailer"
}


/**  The severity of a defect for a . */
export enum DefectSeverity { 
  /** Normal defect severity */
  Normal = "Normal", 
  /** Critical defect severity (vehicle or trailer is unsafe to operate) */
  Critical = "Critical", 
  /** Severity level for Unregulated Defects (vehicle or trailer is safe to operate) */
  Unregulated = "Unregulated"
}


/** The state of the. {@link IDeviceConnection} */
export enum DeviceConnectionStatus { 
  /** The device is currently connected and active */
  Active = "Active", 
  /** The connection is inactive and was terminated normally */
  Disconnected = "Disconnected", 
  /** The device is currently connected but not active */
  Inactive = "Inactive"
}


/**
* Features that can be toggled for {@link IDevice}s that trigger different behaviour
* in MyGeotab.
*/
export enum DeviceCustomFeature { 
  /** Represents automatic generation of {@link IDevice}. */
  AutoHos = "AutoHos"
}


/** The Plans for Devices. */
export enum DevicePlan { 
  /** Unknown Plan */
  Unknown = "Unknown", 
  /** The Pro Plan */
  Pro = "Pro", 
  /** The Passive Plan */
  Passive = "Passive", 
  /** The Base Plan */
  Base = "Base", 
  /** The vin-odometer plan */
  VinOdometer = "VinOdometer", 
  /** The HOS plan */
  HOS = "HOS", 
  /** The base + engine plan */
  BaseEngine = "BaseEngine", 
  /** The Pro Plus Plan */
  ProPlus = "ProPlus", 
  /** The pro no gps plan */
  ProNoGps = "ProNoGps", 
  /** The Enterprise Standard Plan */
  EnterpriseStandard = "EnterpriseStandard", 
  /** The rental mode 1 plan */
  RentalMode1 = "RentalMode1", 
  /** The api safety plan */
  ApiSafety = "ApiSafety", 
  /** The api maintenance plan */
  ApiMaintenance = "ApiMaintenance", 
  /** The api base plan */
  ApiBase = "ApiBase", 
  /** The api pro plan */
  ApiPro = "ApiPro", 
  /** The safety + ODO plan */
  SafetyOdo = "SafetyOdo", 
  /** The maintenance plan. */
  Maintenance = "Maintenance", 
  /** The base + fuel plan */
  BaseFuel = "BaseFuel", 
  /** The pro plus + winter ops plan */
  ProPlusWinterOps = "ProPlusWinterOps", 
  /** The pro plus + car share plan */
  ProPlusCarShare = "ProPlusCarShare", 
  /** The ProPlus + Wifi plan. */
  ProPlusWifi = "ProPlusWifi", 
  /** The Base + Engine DTC plan. */
  BaseEngineDtc = "BaseEngineDtc", 
  /** The safety plan. */
  Safety = "Safety", 
  /** The Suspend Plan */
  Suspend = "Suspend", 
  /** The Terminate Plan */
  Terminate = "Terminate", 
  /** Fuel BI Standard plan */
  FuelBIStandard = "FuelBIStandard", 
  /** Zendu Maintenance plan */
  ZenduMaint = "ZenduMaint", 
  /** D2GO Driver Challenge plan */
  D2GODriverChallengeStandard = "D2GODriverChallengeStandard", 
  /** Optimum Fleet Health rate plan */
  OFHMaintTriage = "OFHMaintTriage", 
  /** Optimum Fleet Health rate plan */
  OFHMaintStayfit = "OFHMaintStayfit", 
  /** R4Me Notify4Me Base rate plan */
  R4MeNotify4MeBase = "R4MeNotify4MeBase", 
  /** R4Me Notify4Me Pro rate plan */
  R4MeNotify4MePro = "R4MeNotify4MePro", 
  /** R4Me Dispatch4 Me Base rate plan */
  R4MeDispatch4MeBase = "R4MeDispatch4MeBase", 
  /** R4Me Dispatch4Me Pro rate plan */
  R4MeDispatch4MePro = "R4MeDispatch4MePro", 
  /** R4Me Optimization4Me Base rate plan */
  R4MeOptimization4MeBase = "R4MeOptimization4MeBase", 
  /** R4Me Optimization4Me Pro rate plan */
  R4MeOptimization4MePro = "R4MeOptimization4MePro", 
  /** Zendu Maintenance Basic rate plan */
  ZenduMaintBasic = "ZenduMaintBasic", 
  /** Zendu Maintenance Pro rate plan */
  ZenduMaintPro = "ZenduMaintPro", 
  /** R4Me Basic */
  R4MeBasic = "R4MeBasic", 
  /** Geotab Data Science Package */
  GeotabDataSciencePackage = "GeotabDataSciencePackage", 
  /** Sawatchez EV */
  SawatchezEV = "SawatchezEV", 
  /** SurfsightON1 */
  SurfsightON1 = "SurfsightON1"
}


/** The master flags for Devices. */
export enum DevicePlanMasterFlag { 
  /** Unknown Plan */
  Unknown = "Unknown", 
  /** Enable accelerometer */
  EnableAccelerometer = "EnableAccelerometer", 
  /** Enable almanac data */
  EnableAlmanacData = "EnableAlmanacData", 
  /** Enable analog */
  EnableAnalog = "EnableAnalog", 
  /** Enable auxiliaries */
  EnableAuxiliaries = "EnableAuxiliaries", 
  /** Enable bluetooth */
  EnableBluetooth = "EnableBluetooth", 
  /** Enable coolant */
  EnableCoolant = "EnableCoolant", 
  /** Enable device */
  EnableDevice = "EnableDevice", 
  /** Enable driver key */
  EnableDriverKey = "EnableDriverKey", 
  /** Enable engine communication */
  EnableEngineCommunications = "EnableEngineCommunications", 
  /** Enable engine hours */
  EnableEngineHours = "EnableEngineHours", 
  /** Enable engine management */
  EnableEngineManagement = "EnableEngineManagement", 
  /** Enable engine road speed */
  EnableEngineRoadSpeed = "EnableEngineRoadSpeed", 
  /** Enable engine snapshot */
  EnableEngineSnapshot = "EnableEngineSnapshot", 
  /** Enable fuel */
  EnableFuel = "EnableFuel", 
  /** Enable gps logging */
  EnableGpsLogging = "EnableGpsLogging", 
  /** Enable high res logging */
  EnableHighResLogging = "EnableHighResLogging", 
  /** Enable hos data */
  EnableHosData = "EnableHosData", 
  /** Enable live */
  EnableLive = "EnableLive", 
  /** Enable mobileye */
  EnableMobileye = "EnableMobileye", 
  /** Enable odometer */
  EnableOdometer = "EnableOdometer", 
  /** Enable oil */
  EnableOil = "EnableOil", 
  /** Enable output */
  EnableOutput = "EnableOutput", 
  /** Enable passthrough */
  EnablePassthrough = "EnablePassthrough", 
  /** Enable rpm logging */
  EnableRpmLogging = "EnableRpmLogging", 
  /** Enable salt spreader */
  EnableSaltSpreader = "EnableSaltSpreader", 
  /** Enable satellite */
  EnableSatellite = "EnableSatellite", 
  /** Enable scan tool */
  EnableScanTool = "EnableScanTool", 
  /** Enable seatbelt */
  EnableSeatbelt = "EnableSeatbelt", 
  /** Enable tachograph log */
  EnableTachographLog = "EnableTachographLog", 
  /** Enable text to speech */
  EnableTextToSpeech = "EnableTextToSpeech", 
  /** Enable third party */
  EnableThirdParty = "EnableThirdParty", 
  /** Enable valor data */
  EnableValorData = "EnableValorData", 
  /** Enable vehicle faults */
  EnableVehicleFaults = "EnableVehicleFaults", 
  /** Enable voltage reading */
  EnableVoltageReading = "EnableVoltageReading", 
  /** Enable wifi */
  EnableWiFi = "EnableWiFi", 
  /** Engine retarder selection */
  EngineRetarderSelection = "EngineRetarderSelection", 
  /** Reduce engine data logging */
  ReduceEngineDataLogging = "ReduceEngineDataLogging", 
  /** Reduce fuel level logging */
  ReduceFuelLevelLogging = "ReduceFuelLevelLogging", 
  /** Reduce gps logging */
  ReduceGpsLogging = "ReduceGpsLogging", 
  /** Save clutch pedal state */
  SaveClutchPedalState = "SaveClutchPedalState", 
  /** Save engine load */
  SaveEngineLoad = "SaveEngineLoad"
}


/**
* The device status level. Used to indicate the "level" of severity for a device's
* status.
*/
export enum DeviceStatusLevel { 
  /** The device has a critical problem. */
  Critical = "Critical", 
  /** The device has a problem. */
  Warning = "Warning", 
  /** The device status is OK. */
  Good = "Good", 
  /** The device is disabled. */
  Disabled = "Disabled", 
  /** The device status is currently unknown. */
  Unknown = "Unknown"
}


/**
* The Geotab GO device type enumeration. Geotab has produced various types of tracking
* devices and this device type enumeration can be used to determine which type of
* hardware a particular device is.
*/
export enum DeviceType { 
  /** Unknown device type. */
  None = "None", 
  /** GEOTAB unit (unsupported). */
  OldGeotab = "OldGeotab", 
  /** GO Device. */
  GO2 = "GO2", 
  /** GO3 Tracking Device. */
  GO3 = "GO3", 
  /** GO4 Tracking Device. */
  GO4 = "GO4", 
  /** GO4v3 Tracking Device - like GO4 but with larger memory and some new functionality. */
  GO4v3 = "GO4v3", 
  /** GO5 Tracking Device. */
  GO5 = "GO5", 
  /** GO6 Tracking Device. */
  GO6 = "GO6", 
  /** GO7 Tracking Device. */
  GO7 = "GO7", 
  /** GO8 Tracking Device. */
  GO8 = "GO8", 
  /** GO9 Tracking Device. */
  GO9 = "GO9", 
  /** Custom (third-party) device. */
  CustomDevice = "CustomDevice", 
  /** GoDrive Mobile Device. */
  GoDriveDevice = "GoDriveDevice", 
  /** Custom (third-party) automotive vehicle tracking device. */
  CustomVehicleDevice = "CustomVehicleDevice"
}


/** Supported Driver Change Types. */
export enum DriverChangeType { 
  /** Unknown key type. */
  None = "None", 
  /**
  * Driver Key - based Driver. Drivers use this key type to identify themselves. This
  * will typically be used when the driver ID relay is enabled. Makes a {@link IDriver}
  * until a different driver ID is assigned to the same device.
  */
  DriverKey = "DriverKey", 
  /**
  * DriverVehicleChange log - based Driver. Auto-generated by the system to support
  * the driver ID relay feature.
  */
  DriverVehicleChange = "DriverVehicleChange", 
  /** User-based Driver that is only active for the duration of a single trip. */
  TripDriver = "TripDriver", 
  /**
  * User-based Driver. Makes a {@link IDriver} until a different driver id is assigned
  * to the same device. First record in a trip overrides any other record encountered
  * during the trip it was added to, except "TripDriver".
  */
  Driver = "Driver", 
  /**
  * System-detected Driver reset (to UnknownDriver). Makes a {@link IDriver} due to
  * concurrent permanent registration of the same Driver for a different device.
  */
  ResetDriver = "ResetDriver"
}


/** The types of identification keys that can be assigned to a. {@link IKey} */
export enum DriverKeyType { 
  /** USB blue driver ID Key */
  Usb = "Usb", 
  /** NFC driver ID Key */
  Nfc = "Nfc", 
  /** CustomNfc driver ID Key */
  CustomNfc = "CustomNfc", 
  /** Tachograph driver ID Key */
  Tachograph = "Tachograph", 
  /** Custom driver ID Key */
  Custom = "Custom"
}


/** The current driving state of a vehicle. */
export enum DrivingState { 
  /** There is no status */
  None = "None", 
  /** The vehicle is driving */
  Driving = "Driving", 
  /** The vehicle is idling or driving slowly */
  IdlingOrDrivingSlowly = "IdlingOrDrivingSlowly", 
  /** The vehicle is stopped */
  Stopped = "Stopped", 
  /** The vehicle is idling */
  Idling = "Idling", 
  /** The vehicle is parked */
  Parked = "Parked"
}


/**
*  The type of .
*
* @deprecated
*/
export enum DutyStatusDeferralType { 
  /** No deferral applied. */
  None = "None", 
  /** Day one of deferral. */
  DayOne = "DayOne", 
  /** Day two of deferral. */
  DayTwo = "DayTwo"
}


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
  PC_Exempted = "PC_Exempted"
}


/** Malfunction or Diagnostic type of the . */
export enum DutyStatusMalfunctionTypes { 
  /** No malfunction or diagnostic present or cleared. */
  None = "None", 
  /** In a diagnostic state. */
  Diagnostic = "Diagnostic", 
  /** In a malfunction state. */
  Malfunction = "Malfunction", 
  /** User has cleared the malfunction or diagnostic. */
  UserClear = "UserClear", 
  /** User has cleared the diagnostic. */
  UserDiagnosticClear = "UserDiagnosticClear", 
  /** User has cleared the malfunction. */
  UserMalfunctionClear = "UserMalfunctionClear", 
  /**
  * System has determined that the malfunction or diagnostic is cleared. Not exported
  * to FMCSA.
  */
  SystemClear = "SystemClear", 
  /** System has determined that the diagnostic is cleared. Not exported to FMCSA. */
  SystemDiagnosticClear = "SystemDiagnosticClear", 
  /**
  * System has determined that the malfunction or diagnostic is cleared and the vehicle
  * was in motion. Used for .
  */
  SystemClearDriving = "SystemClearDriving", 
  /**
  * System has determined that the diagnostic is cleared and the vehicle was in motion.
  * Used for .
  */
  SystemDiagnosticClearDriving = "SystemDiagnosticClearDriving", 
  /**
  * User has inputted a manual address for the log during a position compliance diagnostic
  * event
  */
  ManualPosition = "ManualPosition", 
  /** Combination of ManualPosition and Diagnostic */
  DiagnosticManualPosition = "DiagnosticManualPosition", 
  /** Combination of ManualPosition and Malfunction */
  MalfunctionManualPosition = "MalfunctionManualPosition"
}


/**  The origin of a . */
export enum DutyStatusOrigin { 
  /** Automatic recorded by device */
  Automatic = "Automatic", 
  /** Manual entry by driver. */
  Manual = "Manual", 
  /** Other authenticated user. */
  OtherUser = "OtherUser", 
  /** Unassigned driver. */
  Unassigned = "Unassigned"
}


/**  The state of the record. */
export enum DutyStatusState { 
  /** The log is active and has been accepted by the driver. */
  Active = "Active", 
  /**
  * The log is inactive. It has been removed or it is the modification history of a
  * log.
  */
  Inactive = "Inactive", 
  /** The log is a pending edit request from another user. */
  Requested = "Requested", 
  /** The log is a rejected edit request from another user. */
  Rejected = "Rejected"
}


/**  The different types of {@link IDutyStatusViolation}. */
export enum DutyStatusViolationType { 
  /** Driving limits. */
  Driving = "Driving", 
  /** Rest requirements. */
  Rest = "Rest", 
  /** On-duty limits. */
  Duty = "Duty", 
  /** Work day limits */
  Workday = "Workday", 
  /** Cycle limits. */
  Cycle = "Cycle", 
  /** Daily driving limits. */
  DailyDriving = "DailyDriving", 
  /** Daily rest requirements. */
  DailyRest = "DailyRest", 
  /** Daily duty limits. */
  DailyDuty = "DailyDuty", 
  /** Daily off-duty requirements. */
  DailyOff = "DailyOff", 
  /** Cycle rest requirements. */
  CycleRest = "CycleRest", 
  /** On-duty since cycle rest limit. */
  DutySinceCycleRest = "DutySinceCycleRest"
}


/**  The type of . */
export enum DVIRLogType { 
  /** Unknown log type */
  Unknown = "Unknown", 
  /** Pre-trip log type */
  PreTrip = "PreTrip", 
  /** Post-trip log type */
  PostTrip = "PostTrip", 
  /** In-trip log type */
  InTrip = "InTrip"
}


/**
*  The type of .
*
* @deprecated
*/
export enum EldTransferMode { 
  /** Email ELD agency to transfer HOS data securely for drivers */
  Email = "Email", 
  /** ELD agency web services to transfer HOS data securely */
  WebServices = "WebServices", 
  /** Ping the ELD agency web services to test connectivity */
  Ping = "Ping"
}


/** The type of firmware. */
export enum FirmwareType { 
  /** The firmware is used for Ethernet Radio Downloaders */
  EthernetRadioDownloader = "EthernetRadioDownloader", 
  /** The firmware is used for USB Radio Downloaders */
  UsbRadioDownloader = "UsbRadioDownloader"
}


/** Fuel tax road type. */
export enum FuelTaxRoadType { 
  /** Unknown road type. */
  Unknown = "Unknown", 
  /** Offroad road type. */
  OffRoad = "OffRoad", 
  /** Public road type. */
  Public = "Public", 
  /** Private road type. */
  Private = "Private", 
  /** Toll road type. */
  Toll = "Toll", 
  /** Rail road type. */
  Rail = "Rail"
}


/** The language used by a GoTalk attached to a. {@link IGoDevice} */
export enum GoTalkLanguage { 
  /** English */
  English = "English", 
  /** French */
  French = "French", 
  /** Spanish */
  Spanish = "Spanish", 
  /** German */
  German = "German", 
  /** Italian */
  Italian = "Italian"
}


/** Search the groups */
export enum GroupSearchRelation { 
  /** Must belong to all the groups */
  And = "And", 
  /** Belongs to any of the groups */
  Or = "Or"
}


/** The HOS log generation options. */
export enum HosOption { 
  /** HOS is disabled and generation of {@link IDutyStatusLog} is disabled. */
  OFF = "OFF", 
  /** HOS is enabled and generation of {@link IDutyStatusLog} is enabled. */
  ON = "ON", 
  /**
  * If set to AUTO, {@link IDutyStatusLog} will be automatically generated when the
  * system determines the vehicle is using HOS features.
  */
  AUTO = "AUTO"
}


/**
* The IncludeGroups enum provides a method of querying for entities relative to the
* entity's position in the hierarchy of (s). Some entity types (such as (s)) have
* implications to entities in their child groups. For example; on a map, it may be
* useful to include (s) that are above the user's data scope groups. These (s) will
* also apply to vehicles that are at or below the selected (s) of the .
*/
export enum IncludeGroups { 
  /** Include Children groups in the query results. */
  Child = "Child", 
  /** Include Parent groups in the query results. */
  Parent = "Parent", 
  /** Include Parent and Children groups in the query results. */
  ParentAndChild = "ParentAndChild", 
  /** Directly related groups only in the query results. */
  Direct = "Direct"
}


/** An enum representing invalid user exception types. */
export enum InvalidUserType { 
  /** User session is expired. */
  Default = "Default", 
  /** User session is expired. */
  SessionExpired = "SessionExpired", 
  /** User is locked out. */
  UserLockout = "UserLockout", 
  /** User session is invalid. */
  SessionInvalid = "SessionInvalid"
}


/**
*  Supported Legacy Key Types.
*
* @deprecated
*/
export enum KeyType { 
  /** The unknown key type */
  Unknown = "Unknown", 
  /** The driver identifier key type */
  DriverId = "DriverId", 
  /** The driver identifier and data key type */
  DriverIdAndData = "DriverIdAndData", 
  /** The accident data key type */
  AccidentData = "AccidentData", 
  /** The logging parameters key type */
  LoggingParameters = "LoggingParameters", 
  /** The go firmware key type */
  GoFirmware = "GoFirmware", 
  /** The toggle debug key type */
  ToggleDebug = "ToggleDebug", 
  /** The reset pointers key type */
  ResetPointers = "ResetPointers", 
  /** The reset product identifier key type */
  ResetProductId = "ResetProductId", 
  /** The latest trip data key type */
  LatestTripData = "LatestTripData", 
  /** The toggle rf ping key type */
  ToggleRFPing = "ToggleRFPing", 
  /** The GSM parameters key type */
  GSMParameters = "GSMParameters", 
  /** The toggle J1708 ignition key type */
  ToggleJ1708Ignition = "ToggleJ1708Ignition", 
  /** The go3 firmware key type */
  Go3Firmware = "Go3Firmware", 
  /** The wifi parameters key type */
  WifiParameters = "WifiParameters", 
  /** The wi fi security key type */
  WiFiSecurity = "WiFiSecurity", 
  /** The go5 firmware key type */
  Go5Firmware = "Go5Firmware", 
  /** The wifi live key type */
  WifiLive = "WifiLive", 
  /** The NFC driver identifier key type */
  NFCDriverId = "NFCDriverId", 
  /** The NFC cdma reset key type */
  NFCCdmaReset = "NFCCdmaReset", 
  /** The NFC debug mode key type */
  NFCDebugMode = "NFCDebugMode", 
  /** The NFC passenger identifier key type */
  NFCPassengerId = "NFCPassengerId", 
  /** The generic NFC driver identifier key type */
  GenericNFCDriverId = "GenericNFCDriverId", 
  /** The custom NFC driver identifier key type */
  CustomNFCDriverId = "CustomNFCDriverId", 
  /** The tachograph driver identifier key type */
  TachographDriverId = "TachographDriverId", 
  /** The tachograph driver identifier key type */
  TachographPassengerId = "TachographPassengerId", 
  /** The custom driver identifier key type */
  CustomDriverId = "CustomDriverId"
}


/**
*  Target app for SSO authentication redirect.
*
* @deprecated
*/
export enum LoginRedirectTarget { 
  /** MyGeotab, or the white-labeled equivalent */
  Manage = "Manage", 
  /** Geotab Drive, or the white-labeled equivalent */
  Drive = "Drive", 
  /** Logs in a co-driver to Geotab Drive, or the white-labeled equivalent */
  DriveCoDriver = "DriveCoDriver"
}


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
  EventPlaceholder = "EventPlaceholder"
}


/** Defines options for a map server request. */
export enum MapRequestOption { 
  /** No special options, use all available road data. */
  None = "None", 
  /** Do not use any road data that is defined as an "estimate". */
  NoEstimates = "NoEstimates", 
  /** Use community data only. */
  Community = "Community", 
  /** Use community that are not "estimates" */
  CommunityNoEstimates = "CommunityNoEstimates", 
  /** Use commercial data only. */
  Commercial = "Commercial", 
  /** Use commercial that are not "estimates" */
  CommercialNoEstimates = "CommercialNoEstimates"
}


/** The type of the media file. */
export enum MediaFileType { 
  /** .wav file (sound file) */
  Wav = "Wav", 
  /** User template for format of exception notification emails */
  NotificationEmailTemplate = "NotificationEmailTemplate", 
  /** User template for format of notification web requests */
  WebRequestTemplate = "WebRequestTemplate", 
  /** User template for format of notification web requests */
  TextTemplate = "TextTemplate"
}


/** The type of {@link ITextMessage} content. */
export enum MessageContentType { 
  /** Basic text message. See {@link ITextContent}. */
  Normal = "Normal", 
  /** Text message that also includes response options. See {@link ICannedResponseContent}. */
  CannedResponse = "CannedResponse", 
  /** Text message that includes a location. See {@link ILocationContent}. */
  Location = "Location", 
  /** Content Type for sending data to a component */
  DataToComponent = "DataToComponent", 
  /** Content Type for a status data request */
  StatusDataRequest = "StatusDataRequest", 
  /** Content Type for immobilization */
  Immobilization = "Immobilization", 
  /** Text message that is converted to speech. Must have GOTalk. */
  GoTalk = "GoTalk", 
  /**
  * Text message that includes instructions to open or close an IOX-OUTPUT relay. See
  * {@link IIoxOutputContent}.
  */
  IoxOutput = "IoxOutput", 
  /** for Iox devices. Text message that causes the GoDevice to beep. See {@link IBeepContent}. */
  Beep = "Beep", 
  /**
  * Text message that contains bytes to give to a third-party IOX Add-On. See {@link
  * ISerialIoxContent}.
  */
  SerialIox = "SerialIox", 
  /** Text message with information to add/remove a driver from a {@link IDriverWhiteListContent}. */
  DriverWhiteList = "DriverWhiteList", 
  /**
  * Text message that contains bytes in a predefined format that describes the MimeType
  * to a third-party IOX Add-On over an RS232 connection. See .
  */
  MimeContent = "MimeContent", 
  /**
  * Text message that contains bytes to give to a third-party IOX Add-On. See {@link
  * ICANMessageContent}.
  */
  CAN = "CAN", 
  /**
  * Text message that contains bytes to give to a third-party IOX Add-On. See {@link
  * ICANMessageContent}.
  */
  PassthroughEnabledMessage = "PassthroughEnabledMessage", 
  /** Content used to issue commands to a vehicle (for example locking doors). */
  VehicleCommand = "VehicleCommand"
}


/** The type of the data stored in NotificationBinary. */
export enum NotificationBinaryFileType { 
  /** Notification binary file type. None. */
  None = "None", 
  /** The Audio Alarm Binary file type. */
  AudioAlarmFile = "AudioAlarmFile", 
  /** The email template binary file type. */
  EmailTemplate = "EmailTemplate", 
  /** The Web request template binary file type. */
  WebRequestTemplate = "WebRequestTemplate", 
  /** The text message template */
  TextTemplate = "TextTemplate"
}


/** The status of the notification. */
export enum NotificationStatus { 
  /** Status is unknown until first attempt to open downloader */
  StatusUnknown = "StatusUnknown", 
  /** User has disabled Radio Downloader */
  StatusDisabled = "StatusDisabled", 
  /** Enabled but no device found */
  StatusDisconnected = "StatusDisconnected", 
  /** Enabled and connected */
  StatusConnected = "StatusConnected", 
  /** Debug status */
  StatusDebug = "StatusDebug", 
  /** Idle */
  StatusIdle = "StatusIdle", 
  /** Stop */
  StatusStopped = "StatusStopped", 
  /** Unlocked */
  StatusUnlocked = "StatusUnlocked", 
  /** Running without available aiding data */
  StatusRunningNoAidingDataAvailable = "StatusRunningNoAidingDataAvailable", 
  /** Running */
  StatusRunning = "StatusRunning", 
  /** FTDI not installed */
  StatusFTDINotInstalled = "StatusFTDINotInstalled", 
  /** Trying to lock */
  StatusTryingToLock = "StatusTryingToLock", 
  /** Authentication failed */
  StatusAuthenticationFailed = "StatusAuthenticationFailed", 
  /** Authentication not supported */
  StatusAuthenticationNotSupported = "StatusAuthenticationNotSupported", 
  /** Authentication scheme not provided */
  StatusAuthenticationSchemeNotProvided = "StatusAuthenticationSchemeNotProvided", 
  /** Unknown response from server */
  StatusUnknownResponseFromServer = "StatusUnknownResponseFromServer", 
  /** Server not found */
  StatusServerNotFound = "StatusServerNotFound", 
  /** Proxy server not found */
  StatusProxyServerNotFound = "StatusProxyServerNotFound", 
  /** Timeout */
  StatusTimeout = "StatusTimeout", 
  /** Proxy timeout */
  StatusProxyTimeout = "StatusProxyTimeout", 
  /** Device registration failed. */
  StatusDeviceRegistrationFailed = "StatusDeviceRegistrationFailed", 
  /** Connecting */
  StatusConnecting = "StatusConnecting", 
  /** Update message count failed */
  UpdateMessageCountsFailed = "UpdateMessageCountsFailed", 
  /** Invalid Orbcomm Customer */
  InvalidOrbcommCustomer = "InvalidOrbcommCustomer", 
  /** Thread finish timeout */
  ThreadFinishTimeout = "ThreadFinishTimeout", 
  /** Waiting for database upgrade */
  StatusWaitingForUpgrade = "StatusWaitingForUpgrade", 
  /** User cleared status */
  StatusUserCleared = "StatusUserCleared", 
  /** Status missing */
  StatusMissing = "StatusMissing", 
  /** Service Manager connected */
  StatusServiceManagerConnected = "StatusServiceManagerConnected", 
  /** Cache Cleared */
  CacheCleared = "CacheCleared", 
  /** Cache Busy */
  CacheBusy = "CacheBusy", 
  /** An Exception occurred */
  StatusExceptionOccurred = "StatusExceptionOccurred", 
  /** An Exception occurred */
  StatusDeviceDeleted = "StatusDeviceDeleted", 
  /** Status delayed */
  StatusDelayed = "StatusDelayed"
}


/** Current available tokens to use in templates such as email template */
export enum NotificationTokenType { 
  /** The street address at time the exception occurred  */
  Address = "Address", 
  /** The database for this device  */
  Database = "Database", 
  /** The date the exception occurred  */
  Date = "Date", 
  /** The name and serial number of the device that triggered the exception  */
  Device = "Device", 
  /** The comment field for the device  */
  DeviceComments = "DeviceComments", 
  /** The groups to which the device belongs  */
  DeviceGroups = "DeviceGroups", 
  /** The identifier for the device  */
  DeviceId = "DeviceId", 
  /** The device and driver name  */
  DeviceWithDriverName = "DeviceWithDriverName", 
  /** The diagnostic names and values associated with the exception  */
  Diagnostic = "Diagnostic", 
  /** The diagnostic code associated with the exception  */
  DiagnosticCode = "DiagnosticCode", 
  /** The driver's comments  */
  DriverComment = "DriverComment", 
  /** The name of the driver  */
  DriverName = "DriverName", 
  /** The first name of the driver  */
  DriverFirstName = "DriverFirstName", 
  /** The groups to which the driver belongs  */
  DriverGroups = "DriverGroups", 
  /** The last name of the driver  */
  DriverLastName = "DriverLastName", 
  /** The vehicle's DVIR defects when the exception occurred  */
  DVIRDefect = "DVIRDefect", 
  /** The latitude where the exception occurred  */
  Latitude = "Latitude", 
  /** The longitude where the exception occurred  */
  Longitude = "Longitude", 
  /** The map view of the location where the exception occurred  */
  Map = "Map", 
  /** The odometer value of the device  */
  Odometer = "Odometer", 
  /** The exception rule that was broken  */
  Rule = "Rule", 
  /** The device serial number  */
  SerialNumber = "SerialNumber", 
  /** The max speed of the vehicle during the exception  */
  Speed = "Speed", 
  /** The speed limit when the exception occurred  */
  SpeedLimit = "SpeedLimit", 
  /** The time the exception occurred  */
  Time = "Time", 
  /** The timezone for the exception date and time  */
  Timezone = "Timezone", 
  /** The vehicle's identification number  */
  Vin = "Vin", 
  /**
  * The name of the zone in which the vehicle was located at the time of the exception
  */
  Zone = "Zone", 
  /**
  * The comment for the zone in which the vehicle was located at the time of the exception
  */
  ZoneComment = "ZoneComment", 
  /**
  * The identifier for the zone in which the vehicle was located at the time of the
  * exception 
  */
  ZoneId = "ZoneId"
}


/** The type of {@link INotification}. */
export enum NotificationType { 
  /** Notification is info or status data */
  Info = "Info", 
  /**
  * Notification is an application exception (server and client errors) that are due
  * to factors outside of user control. NotificationApplicationExceptionData is being
  * deprecated, send errors directly to FogBugz instead.
  */
  ApplicationException = "ApplicationException", 
  /** Notification is due to an exception rule being triggered */
  Exception = "Exception", 
  /** Notification is System News */
  News = "News", 
  /** Notification will be processed and have it's Info updated. */
  ExceptionToBeProcessed = "ExceptionToBeProcessed", 
  /**
  * Notification is an application exception (server and/or client errors) that are
  * due to user inputs/actions that the user can fix.
  */
  ApplicationExceptionForUsers = "ApplicationExceptionForUsers", 
  /** Notification is user account settings changed. */
  MessageForUser = "MessageForUser", 
  /**
  * Notification that a user was modified (created, removed, modified, etc.) for administrators
  * (SystemNotice subscribers) with appropriate permissions. Related: {@link IUserModifiedValueInfo}.<br>
  */
  UserModified = "UserModified", 
  /**
  * Notification for administrators (SystemNotice subscribers) that are due to user
  * inputs/actions. Related: {@link INotificationForAdminUsersData}.<br> 
  */
  ApplicationNotificationForAdmins = "ApplicationNotificationForAdmins"
}


/** The status of the radio connection. */
export enum RadioConnectionStatus { 
  /** Failed status. */
  Failed = "Failed", 
  /** Success status. */
  Success = "Success"
}


/** The type of radio connection data. */
export enum RadioConnectionType { 
  /** Unknown type. */
  Unknown = "Unknown", 
  /** gps data. */
  GpsData = "GpsData", 
  /** firmware update data. */
  Firmware = "Firmware", 
  /** parameter data. */
  Parameters = "Parameters", 
  /** aiding data. */
  AidingData = "AidingData", 
  /** Third-party firmware update */
  ThirdPartyFirmware = "ThirdPartyFirmware", 
  /** 802.11 security parameter update */
  WifiConfiguration = "WifiConfiguration"
}


/**
* The current radio downloader status. This keeps track of the stage of configuring
* the Ethernet Downloader.
*/
export enum RadioDownloaderStatus { 
  /**
  * The system is currently searching for this Ethernet Downloader and will try configure
  * it once found.
  */
  ConfigurationPending = "ConfigurationPending", 
  /**
  * This Ethernet Downloader has been discovered and programmed but has not yet connected
  * back.
  */
  Discovered = "Discovered", 
  /** The Ethernet Downloader has been configured and connected back to the server successfully. */
  Configured = "Configured", 
  /** The Ethernet Downloader could not be found. */
  NotFound = "NotFound"
}


/** The type of Radio Downloader. */
export enum RadioDownloaderType { 
  /** Connects to Checkmate via USB cable */
  Usb = "Usb", 
  /** Connects to Checkmate via Ethernet cable */
  Ethernet = "Ethernet"
}


/** The type of notification message that is generated for a . */
export enum RecipientType { 
  /**
  * Recipient will be notified via a normal priority log that will appear in their Notifications.
  * A is required.
  */
  LogOnly = "LogOnly", 
  /**
  * Recipient will be notified via either a simple email. A or valid Address is required.
  * Optionally includes an EmailTemplate (NotificationBinaryFile).
  */
  Email = "Email", 
  /**
  * Recipient will be notified with a popup notification in the MyGeotab application
  * that will also appear in their Notifications. A is required.
  */
  LogPopup = "LogPopup", 
  /**
  * Recipient will be notified with an urgent popup in the MyGeotab application that
  * will also appear in their Notifications. A is required.
  */
  LogUrgentPopup = "LogUrgentPopup", 
  /**
  * Recipient will be notified with an alarm sound in the MyGeotab application. A and
  * are required.
  */
  Alarm = "Alarm", 
  /** Recipient will be notified via the related Address. */
  WebService = "WebService", 
  /** Recipient will be notified via a text message in the vehicle (for example, Garmin). */
  TextMessage = "TextMessage", 
  /**
  * Recipient must be prompted via a text message in the vehicle (for example, Garmin)
  * to select their status.
  */
  ChangeStatus = "ChangeStatus", 
  /** Beep three times rapidly using the GO device buzzer. */
  BeepThreeTimesRapidly = "BeepThreeTimesRapidly", 
  /** Beep three times using the GO device buzzer. */
  BeepThreeTimes = "BeepThreeTimes", 
  /** Beep ten times rapidly using the GO device buzzer. */
  BeepTenTimesRapidly = "BeepTenTimesRapidly", 
  /**
  * Recipient will be notified with a popup notification in the MyGeotab application
  * that will also appear in their Notifications.
  */
  LogPopupInfo = "LogPopupInfo", 
  /**
  * Recipient will be notified via the related WebRequestTemplate (NotificationBinaryFile).
  * A WebRequestTemplate is required.
  */
  WebRequest = "WebRequest", 
  /**
  * The vehicle associate with the will be assigned to the designated group (removed
  * from sibling groups). A is required.
  */
  AssignToGroup = "AssignToGroup", 
  /**
  * Recipient will be notified via audio from a text to speech application connected
  * to the .
  */
  TextToSpeech = "TextToSpeech", 
  /**
  * Recipient will be notified with a popup notification in the MyGeotab application
  * that will also appear in their Notifications. A is required.
  */
  LogNewsPopup = "LogNewsPopup", 
  /**
  * Beep three times rapidly using the GO device buzzer. The device will beep even if
  * there is a delay in the data and may beep after the event causing the exception
  * has ended.
  */
  BeepThreeTimesRapidlyAllowDelay = "BeepThreeTimesRapidlyAllowDelay", 
  /**
  * Beep three times using the GO device buzzer. The device will beep even if there
  * is a delay in the data and may beep after the event causing the exception has ended.
  */
  BeepThreeTimesAllowDelay = "BeepThreeTimesAllowDelay", 
  /**
  * Beep ten times rapidly using the GO device buzzer. The device will beep even if
  * there is a delay in the data and may beep after the event causing the exception
  * has ended.
  */
  BeepTenTimesRapidlyAllowDelay = "BeepTenTimesRapidlyAllowDelay", 
  /**
  * Recipient will be notified via audio from a GoTalk IOX. The GoTalk will speak even
  * if there is a delay in the data and may beep after the event causing the exception
  * has ended.
  */
  TextToSpeechAllowDelay = "TextToSpeechAllowDelay", 
  /** TripType change will be added. */
  TripTypeChange = "TripTypeChange", 
  /**
  * Recipients within a group will be notified via simple email. A valid group name
  * is required. Optionally includes an EmailTemplate (NotificationBinaryFile).
  */
  EmailToGroup = "EmailToGroup", 
  /** Hos will be enabled. */
  HosEnabled = "HosEnabled", 
  /** Hos will be disabled. */
  HosDisabled = "HosDisabled"
}


/** Enum for the possible relay states. */
export enum RelayState { 
  /** Off. */
  Off = "Off", 
  /** On. */
  On = "On", 
  /** Driver key controlled. */
  DriverKey = "DriverKey"
}


/**  The Repair Status for . */
export enum RepairStatusType { 
  /** Defect has not been repaired yet */
  NotRepaired = "NotRepaired", 
  /** Defect has been Repaired */
  Repaired = "Repaired", 
  /** Defect has identified as Not Necessary to repair */
  NotNecessary = "NotNecessary"
}


/** Used to specify the type of the report template. */
export enum ReportDataSource { 
  /** Trips detail report */
  TripsDetail = "TripsDetail", 
  /** Risk management report */
  RiskManagement = "RiskManagement", 
  /** Exceptions Details report */
  ExceptionsDetail = "ExceptionsDetail", 
  /** Debug report */
  Debug = "Debug", 
  /** Exceptions Summary report */
  ExceptionsSummary = "ExceptionsSummary", 
  /** Trips Summary report */
  TripsSummary = "TripsSummary", 
  /** Time card report */
  TimeCard = "TimeCard", 
  /** Audit Log list */
  AuditLog = "AuditLog", 
  /** Users List */
  UserList = "UserList", 
  /** Diagnostic list */
  DiagnosticList = "DiagnosticList", 
  /** Customer visit detail report */
  CustomerVisitsDetail = "CustomerVisitsDetail", 
  /** Customer visit summary report */
  CustomerVisitsSummary = "CustomerVisitsSummary", 
  /** Route summary report */
  RouteSummary = "RouteSummary", 
  /** Unassigned route report */
  UnassignedRoute = "UnassignedRoute", 
  /** Notification list */
  Notification = "Notification", 
  /** Fuel tax report */
  FuelTax = "FuelTax", 
  /** Zones List */
  ZoneList = "ZoneList", 
  /** Congregation report */
  Congregation = "Congregation", 
  /** Engine summary report */
  EngineSummary = "EngineSummary", 
  /** Engine fault summary report */
  EngineFault = "EngineFault", 
  /** Engine status summary report */
  EngineStatus = "EngineStatus", 
  /** Device report */
  Device = "Device", 
  /** Route direction report */
  RouteDirections = "RouteDirections", 
  /** Reminder report */
  Reminder = "Reminder", 
  /** EventRule device report */
  EventRuleDevice = "EventRuleDevice", 
  /** Event history report */
  EventHistory = "EventHistory", 
  /** Groups list */
  GroupsList = "GroupsList", 
  /** Key usage report (DEPRECATED) */
  DeviceInstallHistory = "DeviceInstallHistory", 
  /** Time performance report (DEPRECATED) */
  EngineStatusStatistics = "EngineStatusStatistics", 
  /** Text Message. */
  TextMessage = "TextMessage", 
  /** Route Comparison report. */
  RouteComparisonDetail = "RouteComparisonDetail", 
  /** HOS drivers log report. */
  HosLog = "HosLog", 
  /** Driver Vehicle Inspection Report. */
  DVIRLog = "DVIRLog", 
  /** HOS violation */
  HosViolation = "HosViolation", 
  /** Exceptions Summary Graph */
  ExceptionsSummaryGraph = "ExceptionsSummaryGraph", 
  /** Trips Idling Summary Graph */
  TripsIdlingSummaryGraph = "TripsIdlingSummaryGraph", 
  /** Fleet Summary Graph */
  FleetSummaryGraph = "FleetSummaryGraph", 
  /** Customer Stop Graph */
  CustomerStopGraph = "CustomerStopGraph", 
  /** Trips Density Summary Graph. */
  TripsDensitySummaryGraph = "TripsDensitySummaryGraph", 
  /** Fill-ups report */
  FillUps = "FillUps", 
  /** HOS availability */
  HosAvailability = "HosAvailability", 
  /** Charging events */
  ChargeEvent = "ChargeEvent", 
  /** Material management report */
  MaterialManagement = "MaterialManagement"
}


/** Used to specify where the destination of the scheduled report. */
export enum ReportDestination { 
  /** None destination */
  None = "None", 
  /** Email destination in Excel format */
  EmailExcel = "EmailExcel", 
  /** Dashboard destination */
  Dashboard = "Dashboard", 
  /** Normal report destination */
  NormalReport = "NormalReport", 
  /** Email destination in pdf format */
  EmailPdf = "EmailPdf", 
  /** Email destination in interactive dashboard format */
  InteractiveDashboard = "InteractiveDashboard"
}


/** The frequency with which reports can be generated. */
export enum ReportFrequency { 
  /** The default frequency, none. */
  None = "None", 
  /** Every 5 minutes. */
  FiveMinutes = "FiveMinutes", 
  /** Every 30 minutes. */
  ThirtyMinutes = "ThirtyMinutes", 
  /** Every hour. */
  Hourly = "Hourly", 
  /** Daily */
  Daily = "Daily", 
  /** Weekly */
  Weekly = "Weekly", 
  /** Monthly */
  Monthly = "Monthly", 
  /** Add hoc - when ever needed. */
  WhenNeed = "WhenNeed", 
  /** Every minute */
  Minute = "Minute", 
  /** Every two weeks */
  BiWeekly = "BiWeekly", 
  /** Every four weeks */
  FourWeeks = "FourWeeks", 
  /** Every quarter */
  Quarterly = "Quarterly"
}


/** Used to represent the duration for which the report is generated. */
export enum ReportPeriod { 
  /** None period */
  None = "None", 
  /** For the previous hour */
  PreviousHour = "PreviousHour", 
  /** For today. */
  Today = "Today", 
  /** For yesterday */
  Yesterday = "Yesterday", 
  /** For this week */
  ThisWeek = "ThisWeek", 
  /** For previous week */
  LastWeek = "LastWeek", 
  /** For this month */
  ThisMonth = "ThisMonth", 
  /** For previous month */
  LastMonth = "LastMonth", 
  /** Previous 24 hours */
  PreviousDay = "PreviousDay", 
  /** Previous 7 days */
  PreviousWeek = "PreviousWeek", 
  /** Last three months */
  LastThreeMonths = "LastThreeMonths", 
  /** Previous four weeks */
  PreviousFourWeeks = "PreviousFourWeeks", 
  /** Last six months */
  LastSixMonths = "LastSixMonths", 
  /** Last twelve months */
  LastTwelveMonths = "LastTwelveMonths", 
  /** Year to date. */
  YearToDate = "YearToDate", 
  /** Previous two weeks */
  PreviousTwoWeeks = "PreviousTwoWeeks", 
  /** Custom time period, not available through user interface */
  Custom = "Custom", 
  /** The this working week */
  ThisWorkingWeek = "ThisWorkingWeek", 
  /** The last working week */
  LastWorkingWeek = "LastWorkingWeek", 
  /** The previous thirty days */
  PreviousThirtyDays = "PreviousThirtyDays", 
  /** The last quarter */
  LastQuarter = "LastQuarter"
}


/** The way to treat nodes in report schedule. */
export enum ReportScheduleGroupType { 
  /** Data scope only */
  DataScope = "DataScope", 
  /** Include all children */
  IncludeAllChildren = "IncludeAllChildren", 
  /** Only direct children */
  IncludeDirectChildrenOnly = "IncludeDirectChildrenOnly"
}


/** Report template type for {@link IReportTemplate}. */
export enum ReportTemplateType { 
  /** Uploaded user reports */
  Custom = "Custom", 
  /** Exportable report view with simplified columns */
  Report = "Report", 
  /** Exportable report views with all columns */
  Advanced = "Advanced", 
  /** Default dashboard */
  Dashboard = "Dashboard", 
  /** Used for other preloaded templates */
  Preloaded = "Preloaded"
}


/** A type of {@link IRoute}. Route is either Basic or Plan. */
export enum RouteType { 
  /** A basic route. Does not have a {@link IDevice} associated. */
  Basic = "Basic", 
  /**
  * A route with a plan of the time/distance it is expected to take from stop to stop.
  * A plan route has a {@link IDevice} associated.
  */
  Plan = "Plan"
}


/**
* The list of identifiers that gives a security identity to something whose access
* can be controlled.
*/
export enum SecurityIdentifier { 
  /**
  * The Unknown identifier is not used for security purposes. It's used internally to
  * indicate a particular type could not be translated into a security identifier. This
  * always yields in access denied.
  */
  Unknown = "Unknown", 
  /** Access to Everything. */
  Everything = "Everything", 
  /**  Access to SystemSettings. */
  SystemSettings = "SystemSettings", 
  /** Access to ImportFromOtherDatabase. */
  ImportFromOtherDatabase = "ImportFromOtherDatabase", 
  /** Access to AuditLog. */
  AuditLog = "AuditLog", 
  /** Access to User/Driver List. */
  UserList = "UserList", 
  /** Administer Users/Drivers. */
  UserAdmin = "UserAdmin", 
  /** Access to PurgeData. */
  PurgeData = "PurgeData", 
  /** Access to Device List. */
  DeviceList = "DeviceList", 
  /** Access to EngineManagementReport. */
  EngineManagementReport = "EngineManagementReport", 
  /** Access to List of ZoneType's. */
  ZoneTypeList = "ZoneTypeList", 
  /** Access to ReprocessData. */
  ReprocessData = "ReprocessData", 
  /** Access to WorkTimeList. */
  WorkTimeList = "WorkTimeList", 
  /** Access to WorkHolidayList. */
  WorkHolidayList = "WorkHolidayList", 
  /** Access to ZoneList. */
  ZoneList = "ZoneList", 
  /** Access to ZoneAdmin. */
  ZoneAdmin = "ZoneAdmin", 
  /** Access to ExceptionsList. */
  ExceptionsList = "ExceptionsList", 
  /** Access to ReminderReport. */
  ReminderReport = "ReminderReport", 
  /** Access to EventOccurrenceList. */
  EventOccurrenceList = "EventOccurrenceList", 
  /** Access to NodesList. */
  NodesList = "NodesList", 
  /** Access to ReminderRuleList. */
  ReminderRuleList = "ReminderRuleList", 
  /** Access to ChangePassword. */
  ChangePassword = "ChangePassword", 
  /** Access to CreateExtractKey. */
  CreateExtractKey = "CreateExtractKey", 
  /** Access to CreateTestKey. */
  CreateTestKey = "CreateTestKey", 
  /** Access to CreateFirmwareKey. */
  CreateFirmwareKey = "CreateFirmwareKey", 
  /** Access to CreateProgrammingKey. */
  CreateProgrammingKey = "CreateProgrammingKey", 
  /** Access to CreateKeyBackup. */
  CreateKeyBackup = "CreateKeyBackup", 
  /** Access to RestoreKeyBackup. */
  RestoreKeyBackup = "RestoreKeyBackup", 
  /** Access to CreateWifiKey. */
  CreateWifiKey = "CreateWifiKey", 
  /** Access to ImportZones. */
  ImportZones = "ImportZones", 
  /** Access to RadioDownloaderList. */
  RadioDownloaderList = "RadioDownloaderList", 
  /** Access to NotificationList. */
  NotificationList = "NotificationList", 
  /** Access to OrganizeViews. */
  OrganizeViews = "OrganizeViews", 
  /** Access to RouteList. */
  RouteList = "RouteList", 
  /** Access to UserSettings. */
  UserSettings = "UserSettings", 
  /** Access to EngineDiagnosticList. */
  EngineDiagnosticList = "EngineDiagnosticList", 
  /** Access to EngineTypeList. */
  EngineTypeList = "EngineTypeList", 
  /** Access to EngineFailureModeList. */
  EngineFailureModeList = "EngineFailureModeList", 
  /** Access to EngineFlashCodelist. */
  EngineFlashCodelist = "EngineFlashCodelist", 
  /** Access to EngineUnitOfMeasureList. */
  EngineUnitOfMeasureList = "EngineUnitOfMeasureList", 
  /** Access to TripsActivityReport. */
  TripsActivityReport = "TripsActivityReport", 
  /** Access to CongregationReport. */
  CongregationReport = "CongregationReport", 
  /** Access to CustomerVisitsReport. */
  CustomerVisitsReport = "CustomerVisitsReport", 
  /** Access to SpeedProfileReport. */
  SpeedProfileReport = "SpeedProfileReport", 
  /** Access to TimeCardReport. */
  TimeCardReport = "TimeCardReport", 
  /** Access to EngineStatusDataGraph. */
  EngineStatusDataGraph = "EngineStatusDataGraph", 
  /** Access to ExceptionsReport. */
  ExceptionsReport = "ExceptionsReport", 
  /** Access to RiskManagementReport. */
  RiskManagementReport = "RiskManagementReport", 
  /** Access to RouteSummaryReport. */
  RouteSummaryReport = "RouteSummaryReport", 
  /** Access to UnassignedRouteReport. */
  UnassignedRouteReport = "UnassignedRouteReport", 
  /** Access to AccidentDebugReport. */
  AccidentDebugReport = "AccidentDebugReport", 
  /** Access to DeviceInstallHistoryReport. */
  DeviceInstallHistoryReport = "DeviceInstallHistoryReport", 
  /** Access to PerformanceReport (DEPRECATED) */
  LaunchAddIn = "LaunchAddIn", 
  /** Access to DeviceAdmin. */
  DeviceAdmin = "DeviceAdmin", 
  /** Access to removing vehicle, unpluging device, and replacing device. */
  DeviceAdminDeleteUnplugReplace = "DeviceAdminDeleteUnplugReplace", 
  /** Access to KeyInformation. */
  KeyInformation = "KeyInformation", 
  /** Access to SecurityClearanceList. */
  SecurityClearanceList = "SecurityClearanceList", 
  /**
  * This security identifier is required to support WATERMARK and is only applicable
  * if their custom code has been configured.
  */
  TrackHistoricData = "TrackHistoricData", 
  /** The "Services" settings tab. */
  ServicesSettings = "ServicesSettings", 
  /**
  * This is dashboard security. Allow access to dashboard and CustomReportSchedule.
  */
  MileageSummaryDashboard = "MileageSummaryDashboard", 
  /** Allow access to create or download accident keys. */
  AccidentWizard = "AccidentWizard", 
  /** Allow access to the Fuel Tax Report. */
  FuelTax = "FuelTax", 
  /** Allow access to managing report templates. */
  ManageReportTemplates = "ManageReportTemplates", 
  /** Allow viewing data using report template. */
  ViewReportTemplate = "ViewReportTemplate", 
  /** Access to ExportFromOtherDatabase. */
  ExportFromOtherDatabase = "ExportFromOtherDatabase", 
  /** Allow viewing sent and received GPS Text Messages. */
  ViewGpsTextMessage = "ViewGpsTextMessage", 
  /** Allow sending GPS Text Message, Routes and Addresses. */
  SendGpsTextMessage = "SendGpsTextMessage", 
  /** Allow deleting GPS Text Message. */
  DeleteGpsTextMessage = "DeleteGpsTextMessage", 
  /**
  * Requests the current GPS location from a GO device. Typical implementation is for
  * Iridium network.
  */
  RequestDeviceLocation = "RequestDeviceLocation", 
  /** Display devices on a map. */
  DisplayMap = "DisplayMap", 
  /** Allow starting full version of MyGeotab from a web page. */
  StartFullVersion = "StartFullVersion", 
  /** Allow changing exception email templates. */
  EditNotificationEmailTemplate = "EditNotificationEmailTemplate", 
  /** Allow user to see advanced device settings. */
  DeviceAdminAdvanced = "DeviceAdminAdvanced", 
  /** Allow use to configure driver feedback settings. */
  DeviceAdminDriverFeedback = "DeviceAdminDriverFeedback", 
  /** Allow user to edit the odometer reading associated with the device. */
  EditDeviceOdometer = "EditDeviceOdometer", 
  /** Allow external relay instruction to be send to the vehicle. */
  SendExternalRelayInstruction = "SendExternalRelayInstruction", 
  /** Allow viewing the about checkmate page. */
  AboutCheckmate = "AboutCheckmate", 
  /** Access to Fuel Usage Report. */
  FuelUsageReport = "FuelUsageReport", 
  /**
  * This security identifier is required to support ENGCO and is only applicable if
  * their custom code has been configured. Allow user to configure driver blacklist
  * on devices.
  */
  DriverBlacklist = "DriverBlacklist", 
  /** Allow user to edit an exception rule using the wizard. */
  EditException = "EditException", 
  /** Allow user to edit a distribution list. */
  EditDistributionList = "EditDistributionList", 
  /** Allow user to run Route Comparison Report. */
  RouteComparisonReport = "RouteComparisonReport", 
  /** Allow user to edit HOS driver logs. */
  ManageHOSLogs = "ManageHOSLogs", 
  /** Allow user to view HOS driver logs. */
  ViewHOSLogs = "ViewHOSLogs", 
  /** Allow user to view DVIR logs. */
  ViewDVIRLogs = "ViewDVIRLogs", 
  /** Allow user to edit DVIR logs. */
  ManageDVIRLogs = "ManageDVIRLogs", 
  /** Allow user to view existing trailers. */
  ViewTrailers = "ViewTrailers", 
  /** All user to add/edit/remove trailers. */
  ManageTrailers = "ManageTrailers", 
  /** Allow user to view the advanced help items. */
  ViewAdvancedHelp = "ViewAdvancedHelp", 
  /** Allow user to edit OSM road speeds. */
  EditRoadSpeeds = "EditRoadSpeeds", 
  /** Access to FuelTransactionList. */
  FuelTransactionList = "FuelTransactionList", 
  /** Access to FuelTransactionAdmin. */
  FuelTransactionAdmin = "FuelTransactionAdmin", 
  /** Allow user to see paid Marketplace items. */
  ViewMarketplacePaidItems = "ViewMarketplacePaidItems", 
  /** Allow user to view certificates. */
  ViewCertificates = "ViewCertificates", 
  /** Allow user to manage certificates. */
  ManageCertificates = "ManageCertificates", 
  /** Access to repair DVIR. */
  RepairDVIR = "RepairDVIR", 
  /** Allow user to purchase paid items on the Marketplace. */
  PurchaseMarketplacePaidItems = "PurchaseMarketplacePaidItems", 
  /** Allow user to add, edit, or remove AddInData objects. */
  ManageAddInData = "ManageAddInData", 
  /** Allow user to view AddInData objects. */
  ViewAddInData = "ViewAddInData", 
  /** Allow user to view BinaryData. */
  ViewBinaryData = "ViewBinaryData", 
  /** Allow user to view driver identification (keys). */
  DriverIdentificationClearance = "DriverIdentificationClearance", 
  /** Allow user to view and edit accelerometer stock rules and device settings. */
  AccelerometerDataClearance = "AccelerometerDataClearance", 
  /** Allow user to view device service plans. */
  ServicePlansClearance = "ServicePlansClearance", 
  /** Allow user to view auxiliary settings. */
  AuxiliaryClearance = "AuxiliaryClearance", 
  /** Allow user to view and edit engine status stock rules. */
  EngineStatusDataClearance = "EngineStatusDataClearance", 
  /** Allow user to view reseller data. */
  ResellerControlClearance = "ResellerControlClearance", 
  /** Allow user to view GoTalk settings and version. */
  GoTalkClearance = "GoTalkClearance", 
  /** Allow user to view and edit status groups. */
  StatusGroupsClearance = "StatusGroupsClearance", 
  /** Allow user to view product guide. */
  ProductGuideClearance = "ProductGuideClearance", 
  /** Allow user to view feature preview switcher. */
  FeaturePreviewClearance = "FeaturePreviewClearance", 
  /** Allow user to view news notifications switcher. */
  NewsNotificationsClearance = "NewsNotificationsClearance", 
  /** Allow user to view and edit addins. */
  ManageAddinsClearance = "ManageAddinsClearance", 
  /** Allow user to view device current status link. */
  DeviceCurrentStatusClearance = "DeviceCurrentStatusClearance", 
  /** Allow user to view TripType Change Data. */
  ViewTripTypeChangeData = "ViewTripTypeChangeData", 
  /** Allow user to view and edit TripType Change Data. */
  EditTripTypeChangeData = "EditTripTypeChangeData", 
  /** Allow user to view and edit DirectSupport tickets */
  DirectSupportAdmin = "DirectSupportAdmin", 
  /** Allow user to view Business Intelligence data (Fleet Industry Trends and etc.) */
  ViewBusinessIntelligence = "ViewBusinessIntelligence", 
  /** Allow user to view turn on/off Active tracking feature */
  ActiveTrackingClearance = "ActiveTrackingClearance", 
  /** Access to certify DVIR. */
  CertifyDVIR = "CertifyDVIR", 
  /** Access to inspect DVIR. */
  InspectDVIR = "InspectDVIR", 
  /** Allow user to view media files. */
  ViewMedia = "ViewMedia", 
  /** Allow user to add, set or remove media files. */
  ManageMedia = "ManageMedia", 
  /** Allow user only to view groups. */
  ViewGroups = "ViewGroups", 
  /**
  * Allow user to view the wifi settings tab and view/modify the wifi hotspot SSID and
  * password.
  */
  AdministerWiFiHotspotSettings = "AdministerWiFiHotspotSettings", 
  /** Allow user to view the wifi hotspot SSID and password. */
  ViewWiFiHotspotSettings = "ViewWiFiHotspotSettings", 
  /** Access to Material Management report */
  MaterialManagementReport = "MaterialManagementReport"
}


/**
* The security rights a user has. These are also used in {@link IAudit}(s) as the
* action being audited.
*/
export enum SecurityRole { 
  /** The unknown role */
  Unknown = "Unknown", 
  /** The user view role */
  UserView = "UserView", 
  /** The user removal role */
  UserRemove = "UserRemove", 
  /** The user set role */
  UserSet = "UserSet", 
  /** The user insertion role */
  UserInsert = "UserInsert", 
  /** The device view role */
  DeviceView = "DeviceView", 
  /** The device removal role */
  DeviceRemove = "DeviceRemove", 
  /** The device insertion role */
  DeviceInsert = "DeviceInsert", 
  /** The device set role */
  DeviceSet = "DeviceSet", 
  /** The zone view role */
  ZoneView = "ZoneView", 
  /** The zone removal role */
  ZoneRemove = "ZoneRemove", 
  /** The zone insertion role */
  ZoneInsert = "ZoneInsert", 
  /** The zone set role */
  ZoneSet = "ZoneSet", 
  /** The zone type view role */
  ZoneTypeView = "ZoneTypeView", 
  /** The zone type removal role */
  ZoneTypeRemove = "ZoneTypeRemove", 
  /** The zone type insertion role */
  ZoneTypeInsert = "ZoneTypeInsert", 
  /** The zone type set role */
  ZoneTypeSet = "ZoneTypeSet", 
  /** The route view role */
  RouteView = "RouteView", 
  /** The route removal role */
  RouteRemove = "RouteRemove", 
  /** The route insertion role */
  RouteInsert = "RouteInsert", 
  /** The route set role */
  RouteSet = "RouteSet", 
  /** The database upgrade */
  DatabaseUpgrade = "DatabaseUpgrade", 
  /** The database migrate */
  DatabaseMigrate = "DatabaseMigrate", 
  /** The export database role */
  ExportDatabase = "ExportDatabase", 
  /** The import database role */
  ImportDatabase = "ImportDatabase", 
  /** The server upgrade role */
  ServerUpgrade = "ServerUpgrade", 
  /** The set company Guid role */
  SysSetCompanyGUID = "SysSetCompanyGUID", 
  /** The system settings set role */
  SysSettingsSetAll = "SysSettingsSetAll", 
  /** The event removal role */
  EventRemove = "EventRemove", 
  /** The event insertion role */
  EventInsert = "EventInsert", 
  /** The event set role */
  EventSet = "EventSet", 
  /** The event rule removal role */
  EventRuleRemove = "EventRuleRemove", 
  /** The event rule insertion role */
  EventRuleInsert = "EventRuleInsert", 
  /** The event ruleset role */
  EventRuleSet = "EventRuleSet", 
  /** The event rule view role */
  EventRuleView = "EventRuleView", 
  /** The event type removal role */
  EventTypeRemove = "EventTypeRemove", 
  /** The event type insertion role */
  EventTypeInsert = "EventTypeInsert", 
  /** The event type set role */
  EventTypeSet = "EventTypeSet", 
  /** The exception rule view role */
  ExceptionRuleView = "ExceptionRuleView", 
  /** The exception rule removal role */
  ExceptionRuleRemove = "ExceptionRuleRemove", 
  /** The exception rule insertion role */
  ExceptionRuleInsert = "ExceptionRuleInsert", 
  /** The exception ruleset role */
  ExceptionRuleSet = "ExceptionRuleSet", 
  /** The distribution ListView */
  DistributionListView = "DistributionListView", 
  /** The distribution list removal role */
  DistributionListRemove = "DistributionListRemove", 
  /** The distribution list insertion role */
  DistributionListInsert = "DistributionListInsert", 
  /** The distribution list set role */
  DistributionListSet = "DistributionListSet", 
  /** The uom removal role */
  UomRemove = "UomRemove", 
  /** The uom insertion role */
  UomInsert = "UomInsert", 
  /** The uom set role */
  UomSet = "UomSet", 
  /** The diagnostic view role */
  DiagnosticView = "DiagnosticView", 
  /** The diagnostic removal role */
  DiagnosticRemove = "DiagnosticRemove", 
  /** The diagnostic insertion role */
  DiagnosticInsert = "DiagnosticInsert", 
  /** The diagnostic set role */
  DiagnosticSet = "DiagnosticSet", 
  /** The failure mode view role */
  FailureModeView = "FailureModeView", 
  /** The failure mode removal role */
  FailureModeRemove = "FailureModeRemove", 
  /** The failure mode insertion role */
  FailureModeInsert = "FailureModeInsert", 
  /** The failure mode set role */
  FailureModeSet = "FailureModeSet", 
  /** The work times view role */
  WorkTimesView = "WorkTimesView", 
  /** The work times removal role */
  WorkTimesRemove = "WorkTimesRemove", 
  /** The work times insertion role */
  WorkTimesInsert = "WorkTimesInsert", 
  /** The work times set role */
  WorkTimesSet = "WorkTimesSet", 
  /** The work holidays view role */
  WorkHolidaysView = "WorkHolidaysView", 
  /** The work holidays removal role */
  WorkHolidaysRemove = "WorkHolidaysRemove", 
  /** The work holidays insertion role */
  WorkHolidaysInsert = "WorkHolidaysInsert", 
  /** The work holidays set role */
  WorkHolidaysSet = "WorkHolidaysSet", 
  /** The engine type view role */
  EngineTypeView = "EngineTypeView", 
  /** The engine type removal role */
  EngineTypeRemove = "EngineTypeRemove", 
  /** The engine type insertion role */
  EngineTypeInsert = "EngineTypeInsert", 
  /** The engine type set role */
  EngineTypeSet = "EngineTypeSet", 
  /** The flash code removal role */
  FlashCodeRemove = "FlashCodeRemove", 
  /** The flash code insertion role */
  FlashCodeInsert = "FlashCodeInsert", 
  /** The flash code set role */
  FlashCodeSet = "FlashCodeSet", 
  /** The archived device removal role */
  HistoricDeviceRemove = "HistoricDeviceRemove", 
  /** The archived device insertion role */
  HistoricDeviceInsert = "HistoricDeviceInsert", 
  /** The archived device set role */
  HistoricDeviceSet = "HistoricDeviceSet", 
  /** The archived device make archived */
  HistoricDeviceMakeHistoric = "HistoricDeviceMakeHistoric", 
  /** The archived device un make archived */
  HistoricDeviceUnMakeHistoric = "HistoricDeviceUnMakeHistoric", 
  /** The edl set role */
  EdlSet = "EdlSet", 
  /** The edl insertion role */
  EdlInsert = "EdlInsert", 
  /** The edl removal role */
  EdlRemove = "EdlRemove", 
  /** The hos log removal role */
  HosLogRemove = "HosLogRemove", 
  /** The hos log add */
  HosLogAdd = "HosLogAdd", 
  /** The hos log edit */
  HosLogEdit = "HosLogEdit", 
  /** The dvir log add */
  DvirLogAdd = "DvirLogAdd", 
  /** The dvir log set role */
  DvirLogSet = "DvirLogSet", 
  /** The dvir log removal role */
  DvirLogRemove = "DvirLogRemove", 
  /** The process manual update */
  ProcessManualUpdate = "ProcessManualUpdate", 
  /** The radio set role */
  RadioSet = "RadioSet", 
  /** The Report Audit Log role */
  ReportAuditLog = "ReportAuditLog", 
  /** The Report Speed Profile role */
  ReportSpeedProfile = "ReportSpeedProfile", 
  /** The Report Congregation role */
  ReportCongregation = "ReportCongregation", 
  /** The Report Customer Visits Detail role */
  ReportCustomerVisitsDetail = "ReportCustomerVisitsDetail", 
  /** The Report Customer Visits Summary role */
  ReportCustomerVisitsSummary = "ReportCustomerVisitsSummary", 
  /** The Report DVIR Log role */
  ReportDVIRLog = "ReportDVIRLog", 
  /** The Report Debug role */
  ReportDebug = "ReportDebug", 
  /** The Report Device Install History role */
  ReportDeviceInstallHistory = "ReportDeviceInstallHistory", 
  /** The Report Device role */
  ReportDevice = "ReportDevice", 
  /** The Report Diagnostic List role */
  ReportDiagnosticList = "ReportDiagnosticList", 
  /** The Report Engine Fault role */
  ReportEngineFault = "ReportEngineFault", 
  /** The Report Engine Status role */
  ReportEngineStatus = "ReportEngineStatus", 
  /** The Report Engine Summary role */
  ReportEngineSummary = "ReportEngineSummary", 
  /** The Report Engine History role */
  ReportEventHistory = "ReportEventHistory", 
  /** The Report Event Rule Device role */
  ReportEventRuleDevice = "ReportEventRuleDevice", 
  /** The Report Exceptions Detail role */
  ReportExceptionsDetail = "ReportExceptionsDetail", 
  /** The Report Exceptions Summary role */
  ReportExceptionsSummary = "ReportExceptionsSummary", 
  /** The Report Fill Ups role */
  ReportFillUps = "ReportFillUps", 
  /** The Report Fuel Tax role */
  ReportFuelTax = "ReportFuelTax", 
  /** The Report Engine Status Statistics role */
  ReportEngineStatusStatistics = "ReportEngineStatusStatistics", 
  /** The Report Groups List role */
  ReportGroupsList = "ReportGroupsList", 
  /** The Report HOS Logs role */
  ReportHosLogs = "ReportHosLogs", 
  /** The Report HOS Violation role */
  ReportHosViolation = "ReportHosViolation", 
  /** The Report Notification role */
  ReportNotification = "ReportNotification", 
  /** The Report Reminders role */
  ReportReminders = "ReportReminders", 
  /** The Report Risk Management role */
  ReportRiskManagement = "ReportRiskManagement", 
  /** The Report Route Comparison Detail role */
  ReportRouteComparisonDetail = "ReportRouteComparisonDetail", 
  /** The Report Route Direction role */
  ReportRouteDirection = "ReportRouteDirection", 
  /** The Report Route Summary role */
  ReportRouteSummary = "ReportRouteSummary", 
  /** The Report Text Message role */
  ReportTextMessage = "ReportTextMessage", 
  /** The Report Time Card role */
  ReportTimeCard = "ReportTimeCard", 
  /** The Report Trips Detail role */
  ReportTripsDetail = "ReportTripsDetail", 
  /** The Report Trips Summary role */
  ReportTripsSummary = "ReportTripsSummary", 
  /** The Report Unassigned Route role */
  ReportUnassignedRoute = "ReportUnassignedRoute", 
  /** The Report User List role */
  ReportUserList = "ReportUserList", 
  /** The Report Zone List role */
  ReportZoneList = "ReportZoneList", 
  /** The Report Exceptions Summary Graph role */
  ReportExceptionsSummaryGraph = "ReportExceptionsSummaryGraph", 
  /** The Report TripsIdling Summary Graph role */
  ReportTripsIdlingSummaryGraph = "ReportTripsIdlingSummaryGraph", 
  /** The Report Fleet Summary Graph role */
  ReportFleetSummaryGraph = "ReportFleetSummaryGraph", 
  /** The Report Customer Stop Graph role */
  ReportCustomerStopGraph = "ReportCustomerStopGraph", 
  /** The ReportTrips Density Summary Graph role */
  ReportTripsDensitySummaryGraph = "ReportTripsDensitySummaryGraph", 
  /** The map view role */
  ShowMap = "ShowMap", 
  /** The purge role */
  Purge = "Purge", 
  /** The usb radio downloader removal role */
  UsbRadioDownloaderRemove = "UsbRadioDownloaderRemove", 
  /** The excel report view role */
  ExcelReportView = "ExcelReportView", 
  /** The excel report removal role */
  ExcelReportRemove = "ExcelReportRemove", 
  /** The excel report edit role */
  ExcelReportEdit = "ExcelReportEdit", 
  /** The excel report insertion role */
  ExcelReportInsert = "ExcelReportInsert", 
  /** The key creation role */
  KeyCreate = "KeyCreate", 
  /** The key backup role */
  KeyBackup = "KeyBackup", 
  /** The key restore role */
  KeyRestore = "KeyRestore", 
  /** The key data download role */
  KeyDataDownload = "KeyDataDownload", 
  /** The user login role */
  UserLogin = "UserLogin", 
  /** The user logout role */
  UserLogoff = "UserLogoff", 
  /** The user login failure role */
  UserLoginFailure = "UserLoginFailure", 
  /** The user lock out role */
  UserLockout = "UserLockout", 
  /** The user unlocked role */
  UserUnlocked = "UserUnlocked", 
  /** The request location */
  RequestLocation = "RequestLocation", 
  /** The GPS text message send role */
  GpsTextMessageSend = "GpsTextMessageSend", 
  /** The GPS text message deletion role */
  GpsTextMessageDelete = "GpsTextMessageDelete", 
  /** The GPS text message view role */
  GpsTextMessageView = "GpsTextMessageView", 
  /** The notification view role */
  NotificationView = "NotificationView", 
  /** The notifications dismiss */
  NotificationsDismiss = "NotificationsDismiss", 
  /** The notification template view role */
  NotificationTemplateView = "NotificationTemplateView", 
  /** The notification template removal role */
  NotificationTemplateRemove = "NotificationTemplateRemove", 
  /** The notification template set role */
  NotificationTemplateSet = "NotificationTemplateSet", 
  /** The notification template insertion role */
  NotificationTemplateInsert = "NotificationTemplateInsert", 
  /** The node view role */
  NodeView = "NodeView", 
  /** The node removal role */
  NodeRemove = "NodeRemove", 
  /** The node set role */
  NodeSet = "NodeSet", 
  /** The node insertion role */
  NodeInsert = "NodeInsert", 
  /** The security group view role */
  SecurityGroupView = "SecurityGroupView", 
  /** The key insertion role */
  KeyInsert = "KeyInsert", 
  /** The trailer view role */
  TrailerView = "TrailerView", 
  /** The trailer removal role */
  TrailerRemove = "TrailerRemove", 
  /** The trailer set role */
  TrailerSet = "TrailerSet", 
  /** The trailer insertion role */
  TrailerInsert = "TrailerInsert", 
  /** The driver change removal role */
  DriverChangeRemove = "DriverChangeRemove", 
  /** The driver change insertion role */
  DriverChangeInsert = "DriverChangeInsert", 
  /** The custom report schedule insertion role */
  CustomReportScheduleInsert = "CustomReportScheduleInsert", 
  /** The custom report schedule set role */
  CustomReportScheduleSet = "CustomReportScheduleSet", 
  /** The custom report schedule removal role */
  CustomReportScheduleRemove = "CustomReportScheduleRemove", 
  /** The custom report send error */
  CustomReportSendError = "CustomReportSendError", 
  /** The fuel transaction view role */
  FuelTransactionView = "FuelTransactionView", 
  /** The fuel transaction removal role */
  FuelTransactionRemove = "FuelTransactionRemove", 
  /** The fuel transaction insertion role */
  FuelTransactionInsert = "FuelTransactionInsert", 
  /** The fuel transaction set role */
  FuelTransactionSet = "FuelTransactionSet", 
  /** The posted road speed set role */
  PostedRoadSpeedSet = "PostedRoadSpeedSet", 
  /** The fill ups graph */
  FillUpsGraph = "FillUpsGraph", 
  /** The misc page view role */
  MiscPageView = "MiscPageView", 
  /** The about view role */
  AboutView = "AboutView", 
  /** The dashboard view role */
  DashboardView = "DashboardView", 
  /** The radio downloader view role */
  RadioDownloaderView = "RadioDownloaderView", 
  /** The fuel transaction import */
  FuelTransactionImport = "FuelTransactionImport", 
  /** The drive lock user cleared */
  DriveLockUserCleared = "DriveLockUserCleared", 
  /** Password reset request */
  PasswordResetRequest = "PasswordResetRequest", 
  /** The defect group view role */
  DefectGroupView = "DefectGroupView", 
  /** The {@link ICertificate} insertion role */
  CertificateInsert = "CertificateInsert", 
  /** The {@link ICertificate} removal role */
  CertificateRemove = "CertificateRemove", 
  /** The {@link ICertificate} set role */
  CertificateSet = "CertificateSet", 
  /** The {@link IDutyStatusAvailability} reporting role */
  ReportHosAvailability = "ReportHosAvailability", 
  /** The {@link ITripTypeChange} insertion role */
  TripTypeChangeInsert = "TripTypeChangeInsert", 
  /** The {@link ITripTypeChange} removal role */
  TripTypeChangeRemove = "TripTypeChangeRemove", 
  /** The reassign data view role */
  ReassignData = "ReassignData", 
  /** The {@link IShipmentLog} insertion role */
  ShipmentLogInsert = "ShipmentLogInsert", 
  /** The {@link IShipmentLog} set role */
  ShipmentLogSet = "ShipmentLogSet", 
  /** The {@link IShipmentLog} removal role */
  ShipmentLogRemove = "ShipmentLogRemove", 
  /** The {@link ITrailerAttachment} attachment role */
  TrailerAttachmentInsert = "TrailerAttachmentInsert", 
  /** The {@link ITrailerAttachment} set role */
  TrailerAttachmentSet = "TrailerAttachmentSet", 
  /** The {@link ITrailerAttachment} removal role */
  TrailerAttachmentRemove = "TrailerAttachmentRemove", 
  /** The SupportTicket insert role */
  SupportTicketInsert = "SupportTicketInsert", 
  /** The TrainingTicket insert role */
  TrainingTicketInsert = "TrainingTicketInsert", 
  /** The SupportTicket update role */
  SupportTicketSet = "SupportTicketSet", 
  /** The TrainingTicket update role */
  TrainingTicketSet = "TrainingTicketSet", 
  /** The EmailSent role */
  EmailSent = "EmailSent", 
  /** The skip verify {@link IDutyStatusLog} role */
  SkipHosVerify = "SkipHosVerify", 
  /** The skip claim unassigned {@link IDutyStatusLog} role */
  SkipHosClaimUnassigned = "SkipHosClaimUnassigned", 
  /** The skip {@link IDVIRLog} inspection role */
  SkipDvirInspect = "SkipDvirInspect", 
  /** The ELD Data Transfer role */
  ELDDataTransfer = "ELDDataTransfer", 
  /** The credits view role */
  CreditsView = "CreditsView", 
  /** The charging events report role */
  ReportchargeEvent = "ReportchargeEvent", 
  /** Hardware purchase role. */
  HardwarePurchase = "HardwarePurchase", 
  /** The Media File view role */
  MediaFileView = "MediaFileView", 
  /** The Media File removal role */
  MediaFileRemove = "MediaFileRemove", 
  /** The Media File insertion role */
  MediaFileInsert = "MediaFileInsert", 
  /** The Media File set role */
  MediaFileSet = "MediaFileSet", 
  /** The Media File upload role */
  MediaFileUpload = "MediaFileUpload", 
  /** The wifi view role */
  WiFiView = "WiFiView", 
  /** The wifi removal role */
  WiFiRemove = "WiFiRemove", 
  /** The wifi set role */
  WiFiSet = "WiFiSet", 
  /** The wifi insertion role */
  WiFiInsert = "WiFiInsert", 
  /** The UserSupport insertion role */
  UserSupportInsert = "UserSupportInsert", 
  /** The UserSupport removal role */
  UserSupportRemove = "UserSupportRemove", 
  /** The Material Management report role */
  MaterialManagement = "MaterialManagement"
}


export enum SpeedLimitRequestOptions { 
  None = "None", 
  NoEstimates = "NoEstimates", 
  NoCommunity = "NoCommunity", 
  NoCommercial = "NoCommercial", 
  NoSnapping = "NoSnapping", 
  Truck = "Truck"
}


/** An enum indicating the type of a trip. */
export enum TripType { 
  /** The device does not have a specific {@link ITripType} assigned. */
  Unknown = "Unknown", 
  /** The device is in private mode and will have it's GPS data hidden. */
  Private = "Private", 
  /** The device is a special NoGPS device. This device will report speed but not position. */
  NoGpsDevice = "NoGpsDevice", 
  /**
  * While a device has this {@link ITripType} it will not send any positional or speed
  * data.
  */
  NoGpsOrSpeedDevice = "NoGpsOrSpeedDevice"
}


/**
* The user authentication type. User types are XOR'd, so each type must be 2\*\*X
* so that no type is a combination of two others.
*/
export enum UserAuthenticationType { 
  /** None or unknown. */
  None = "None", 
  /** Authentication using passwords. */
  BasicAuthentication = "BasicAuthentication", 
  /** Authentication using Windows Domains. */
  WindowsAuthentication = "WindowsAuthentication", 
  /** MyAdmin global user */
  MyAdmin = "MyAdmin", 
  /** Authentication using SAML. */
  SAML = "SAML", 
  /** Authentication using Certificate. */
  ClientCertificate = "ClientCertificate"
}


/** the user categories */
export enum UserCategory { 
  /** User category not defined */
  NotDefined = "NotDefined", 
  /** Active user */
  Active = "Active", 
  /** Suspended user */
  Suspended = "Suspended", 
  /** Archived user */
  Historical = "Historical"
}


/**
* An enum that describes possible types of {@link INotificationUserModifiedData} to
* be created.
*/
export enum UserModification { 
  /** A {@link IUser} was created. */
  Created = "Created", 
  /** A {@link IUser} was removed. */
  Removed = "Removed", 
  /** A {@link IUser} was enabled (moved from archived mode back to regular/active mode). */
  Enabled = "Enabled", 
  /** A {@link IUser} was disabled (moved from regular/active mode to archived mode). */
  Disabled = "Disabled", 
  /** A {@link IGroup} properties changed. */
  GroupsChanged = "GroupsChanged", 
  /** A {@link ISecurityClearance} properties changed. */
  ClearancesChanged = "ClearancesChanged", 
  /** A {@link IUser} was modified. */
  ModifiedGeneral = "ModifiedGeneral"
}


/**
* A type of {@link IUser} support contact. User contact can be call, training or procurement
* support
*/
export enum UserSupportType { 
  /** A {@link IUser} support contact whom will be redirected all calls. */
  Call = "Call", 
  /** A {@link IUser} as a training support contact. */
  Training = "Training", 
  /** A {@link IUser} as a procurement support contact. */
  Procurement = "Procurement"
}


/**
* The interval in which a {@link IDiagnostic} reading is monitored, may be logged
* and the slope can be drawn between values and interpolated according to the slope
* of the line.
*/
export enum ValidLoggingPeriod { 
  /** No period in which it is valid to interpolate. */
  None = "None", 
  /** May be logged within the active state of the device. */
  Active = "Active", 
  /** May be logged within the power state of the device. */
  Power = "Power"
}


/** An enum with a list of commands that can be sent to a vehicle via a {@link IVehicleCommandContent}. */
export enum VehicleCommand { 
  /** Lock everything. */
  LockAll = "LockAll", 
  /** Unlock the driver door. */
  UnlockDriver = "UnlockDriver", 
  /** Unlock everything. */
  UnlockAll = "UnlockAll", 
  /** Open the trunk. */
  OpenTrunk = "OpenTrunk", 
  /** Close the trunk. */
  CloseTrunk = "CloseTrunk", 
  /** Not sure. */
  Locate = "Locate", 
  /** Immobilize the vehicle. */
  Immobilize = "Immobilize", 
  /** Remove vehicle immobilization. */
  Mobilize = "Mobilize", 
  /** Set off the alarm. */
  PanicAlarmOn = "PanicAlarmOn", 
  /** Stop the alarm once started. */
  PanicAlarmOff = "PanicAlarmOff", 
  /** Check in to the vehicle. */
  CheckIn = "CheckIn", 
  /** Check out of the vehicle. */
  CheckOut = "CheckOut", 
  /** Connect. */
  Connect = "Connect", 
  /** Stop the alarm once started. */
  Disconnect = "Disconnect", 
  /** Stop the alarm once started. */
  Observe = "Observe", 
  /** Stop the alarm once started. */
  CreateReservation = "CreateReservation", 
  /** Stop the alarm once started. */
  ReadReservation = "ReadReservation", 
  /** Stop the alarm once started. */
  ModifyReservation = "ModifyReservation", 
  /** Stop the alarm once started. */
  DeleteReservation = "DeleteReservation", 
  /** Stop the alarm once started. */
  ServiceModeRequest = "ServiceModeRequest", 
  /** Stop the alarm once started. */
  BlacklistUser = "BlacklistUser", 
  /** Stop the alarm once started. */
  RemoteStart = "RemoteStart"
}


/** The type of encryption of . */
export enum VehicleConfigurationEncryptionType { 
  /** No encryption */
  NoEncryption = "NoEncryption", 
  /** AES-256. Encrypted by key from credentials.xml */
  AES256CredentialsKey = "AES256CredentialsKey"
}


/** The type of . */
export enum VehicleConfigurationType { 
  /** WiFi Hotspot */
  Hotspot = "Hotspot"
}


/**
* The names of vehicle feature categories, including external devices detected by
* the device and features that are manually activated by the server.
*/
export enum VehicleFeatureCategory { 
  /** An unknown device. */
  UnknownDevice = "UnknownDevice", 
  /** Third-party Garmin device. */
  Garmin = "Garmin", 
  /** Third-party Iridium device. */
  Iridium = "Iridium", 
  /** Legacy hours of service device. */
  Hos = "Hos", 
  /** External NFC device. */
  Nfc = "Nfc", 
  /** External GoTalk device. */
  GoTalk = "GoTalk", 
  /** Third-party Mobileye device. */
  Mobileye = "Mobileye", 
  /** Third-party Valor device. */
  Valor = "Valor", 
  /** External Wi-Fi device. */
  WiFi = "WiFi", 
  /** Third-party salt spreader device. */
  SaltSpreader = "SaltSpreader", 
  /** Active tracking. */
  GoActive = "GoActive", 
  /** OBD Alert setting present. */
  OBDPresent = "OBDPresent", 
  /** OBD Alert setting enabled. */
  OBDEnabled = "OBDEnabled", 
  /** Garmin hours of service. */
  GarminHos = "GarminHos", 
  /** Geotab Drive hours of service. */
  GeotabDriveHos = "GeotabDriveHos"
}


/** WebRequest Template Http Verb. */
export enum WebRequestTemplateHttpVerb { 
  /** The get http verb */
  Get = "Get", 
  /** The post http verb */
  Post = "Post"
}


/** An enum indicating the type of a widget. */
export enum WidgetType { 
  /** The widget does not have a specific {@link IWidgetType} assigned. */
  Unknown = "Unknown", 
  /** The widget is a text widget. */
  Text = "Text", 
  /** The widget is an image widget. */
  Image = "Image"
}


/** A helper class for validating users emails and creating emails. */
export interface IEmailHelper
{
}


/** A class that holds data stored by an add-in. */
export interface IAddInData extends IEntity
{
  /** Gets or sets the add-in identifier. */
  addInId: string;
  /** Gets or sets the data. */
  data: string;
  /**
  * @inheritdoc
  */
  groups: IGroup[];
}


/** The object used to specify the arguments when searching for {@link IAddInData}. */
export interface IAddInDataSearch extends ISearch
{
  /** Gets or sets the add-in identifier. */
  addInId: string;
  /**
  * Gets or sets search for Devices that are a member of these {@link IGroupSearch}(s).
  * Available GroupSearch options are:. Id
  */
  groups: IGroupSearch[];
  /**
  * Gets or sets the select clause which decides which properties of the stored objects
  * are returned.
  */
  selectClause: string;
  /** Gets or sets the where clause which filters the data that is returned. */
  whereClause: string;
}


/** The address data looked up on the server. */
export interface IAddressLookupData
{
  /** Gets or sets the address. */
  address?: IReverseGeocodeAddress;
  /** Gets or sets the geocoder name. */
  dataSource?: string;
  /** Gets or sets the exception. */
  exception?: any;
  /** Gets or sets the location. */
  location?: any;
  /** Gets or sets the owner. */
  owner?: any;
  /** Gets the zone external references. */
  zoneExternalReferences?: string;
  /** Gets or sets gets the zones. */
  zones?: IZone[];
  /** Gets the zone types. */
  zoneTypes?: IZoneType[];
}


/** AddressZone */
export interface IAddressZone extends INameEntity
{
  /** Gets or sets the lower bound of latitude of the AddressZone. */
  minLat: number;
  /** Gets or sets the lower bound of longitude of the AddressZone. */
  minLong: number;
}


/**
* An AnnotationLog is a comment that can be associated with a . The is the author
* of the AnnotationLog.
*/
export interface IAnnotationLog extends IEntityWithVersion
{
  /** Gets or sets the annotation text associated with the log. */
  comment: string;
  /** Gets or sets the date and time the log was created. */
  dateTime?: Date;
  /** Gets or sets the {@link IUser} who created the log. */
  driver: IUser;
  /** Gets or sets the which this log belongs to. */
  dutyStatusLog: IDutyStatusLog;
}


/** The object used to specify the arguments when searching for (s). */
export interface IAnnotationLogSearch extends ISearch
{
  /**
  * Gets or sets search for AnnotationLogs which have a comment that contains this .
  * Wildcard can be used by prepending/appending "%" to string.
  */
  comment: string;
  /** Gets or sets search for AnnotationLogs that were recorded at this date or after. */
  fromDate?: Date;
  /** Gets or sets search for s with a maximum of this version. */
  maxVersion?: number;
  /** Gets or sets search for AnnotationLogs that were recorded at this date or before. */
  toDate?: Date;
  /**
  * Gets or sets search for AnnotationLogs with this Id. Available UserSearch options
  * are:. Id
  */
  userSearch: IUserSearch;
  /** Gets or sets the row version of the AnnotationLog search criteria. */
  version?: number;
}


/** The inner object for the ApplicationInformation information in VersionInformation. */
export interface IApplicationVersionInformation
{
  /** Gets the branch. */
  branch: string;
  /** Gets the build. */
  build: string;
  /** Gets the commit. */
  commit: string;
  /** Gets the build and commit together. */
  full: string;
}


/**
* Entry of events, operations and issues for tracking purposes. Entries can be added
* and read but cannot be edited.
*/
export interface IAudit extends INameEntityWithVersion
{
  /**
  * Gets or sets free text field where any user information can be stored and referenced
  * for this entity.
  */
  comment: string;
  /** Gets or sets the date and time the audit was logged. */
  dateTime?: Date;
  /** Gets or sets the audit type name. */
  name: string;
  /** Gets or sets the {@link IUser} the audit is in reference to. */
  user: IUser;
  /** Gets or sets the name of the user associated with the audit entry. */
  userName: string;
}


/** The object used to specify the arguments when searching entries. */
export interface IAuditSearch extends ISearch
{
  /** Gets or sets search for audit entries that were recorded at this date or after. */
  fromDate?: Date;
  /**
  * Gets or sets search for entities that contain specific keywords in all wildcard
  * string-searchable fields.
  */
  keywords: string[];
  /**
  * Gets or sets search for audit entries with this Name. Wildcard can be used by prepending/appending
  * "%" to string. Example "%name%".
  */
  name: string;
  /** Gets or sets search for audit entries that were recorded before this date. */
  toDate?: Date;
  /**
  * Gets or sets search for audit entries with this User Name. Wildcard can be used
  * by prepending/appending "%" to string. Example "%name%".
  */
  userName: string;
  /** Gets or sets the row version of the search criteria. */
  version?: number;
}


/** Message content to make the device beep. */
export interface IBeepContent extends IDataToComponentContent
{
  /** Gets or sets the length of each beep (in multiples of 100ms). */
  beepDuration: number;
  /** Gets or sets the number of beeps. */
  numberOfBeeps: number;
  /** Gets or sets the time between beeps (in multiples of 100ms). */
  timeBetweenBeeps: number;
}


/** The big data API result. */
export interface IBigDataApiResult<T>
{
  /** Gets or sets the big data API errors. */
  errors?: IBigDataError[];
  /** Gets or sets the big data API results. */
  results?: T[];
  /**
  * Gets or sets the last version of the data returned by the feed call. If this parameter
  * is passed back into the feed call, then returned data will be the changes that occurred
  * after the last feed call was made. In this way the feed can return a continuous
  * stream of data.
  */
  toVersion?: string;
}


/** The big data average road speed API result. */
export interface IBigDataAverageRoadSpeed
{
  /** Gets or sets the median speed during morning rush hour. */
  medianSpeedAmRush?: number;
  /** Gets or sets the median speed on off peak hours. */
  medianSpeedOffPeak?: number;
  /** Gets or sets the median speed during evening rush hour. */
  medianSpeedPmRush?: number;
  /** Gets or sets the median speed on the weekend. */
  medianSpeedWeekend?: number;
  /** Gets or sets the way Id. */
  wayId?: number;
}


/** The big data error. */
export interface IBigDataError
{
  /** Gets or sets the error code. */
  code?: string;
  /** Gets or sets the error domain. */
  domain?: string;
  /** Gets or sets the error message. */
  message?: string;
  /** Gets or sets the error reason. */
  reason?: string;
}


/** The big data result. */
export interface IBigDataResult<T>
{
  /** Gets or sets the big data result, including errors and toVersion. */
  apiResult?: IBigDataApiResult<T>;
  /** Gets or sets the big data errors. */
  errors?: IBigDataError[];
}


/**
* This is binary data representing anything that can be stored. BinaryData can use
* this to store images but the data can be any custom data, including custom engine
* information types. The type of the data is defined by the {@link IBinaryDataType}.
*/
export interface IBinaryData extends IEntityWithVersion
{
  /** Gets or sets the {@link IBinaryDataType}. */
  binaryType?: BinaryDataType;
  /** Gets or sets the {@link IBinaryData} specified. */
  controller: IController;
  /** Gets the binary data for the {@link IBinaryData} object. */
  data: number[];
  /** Gets or sets the date and time of the logging of the data. */
  dateTime?: Date;
  /** Gets or sets the on which the binary data was recorded. */
  device: IDevice;
}


/**  The object used to specify the arguments when searching for {@link IBinaryData}. */
export interface IBinaryDataSearch extends ISearch
{
  /** Gets or sets search for BinaryData that has this {@link IBinaryDataType}. */
  binaryDataType?: BinaryDataType;
  /**
  * Gets or sets search for BinaryData recorded for this {@link IDeviceSearch} Id. Available
  * DeviceSearch options are:. IdGroupGroupListSearch
  */
  deviceSearch: IDeviceSearch;
  /** Gets or sets search for BinaryData records that were logged at this date or after. */
  fromDate?: Date;
  /** Gets or sets search for BinaryData records that were logged at this date or before. */
  toDate?: Date;
  /** Gets or sets the row version of the {@link IBinaryData} search criteria. */
  version?: number;
}


/**  A message containing a binary payload which is usually forwarded to a target device. */
export interface IBinaryPayload extends IEntity
{
  /**
  * Gets or sets The Id..
  *
  * @deprecated
  */
  id: string;
  /** Gets the raw binary data contained in the message. */
  payload: number[];
  /** Gets or sets the . */
  payloadType?: BinaryPayloadType;
}


/**
* The contents of a {@link ITextMessage} containing data to give to a device connected
* to a CAN-IOX. The CANMessageContent is a 'dumb pipe' type of message. Whatever data
* is put in the data property will be delivered, as is, to the system on the other
* end of the device connected to a CAN-IOX.<br> 
*/
export interface ICANMessageContent extends IDataToComponentContent
{
  /** Gets or sets the ArbitrationId. Length is 4 bytes. */
  arbitrationId: number;
  /**
  * Gets or sets the channel the {@link IIoxAddOn} is communicating over. 0 means the
  * Add-On is not attached.
  */
  channel: number;
  /** Gets or sets the data. Up to 8 bytes can be sent. */
  data: number[];
  /** Gets or sets a value indicating whether ExtendedFrameFlag is enabled. */
  extendedFrameFlag: boolean;
}


/** Represents a canned response to a text message for a device. Used by Garmin service. */
export interface ICannedDeviceResponse extends IEntity
{
  /**
  * Gets or sets the date when this {@link ICannedDeviceResponse} has been configured
  * on the device that needs to display it.
  */
  configurationDateTime?: Date;
  /** Gets or sets the {@link IDevice} this response is associated with. */
  device: IDevice;
  /** Gets or sets the text that is displayed to the user. */
  response: string;
  /** Gets or sets a unique id for this response. The unique ID is by device. */
  responseId?: number;
}


/** The object used to specify the arguments when searching for a {@link ICannedDeviceResponse}. */
export interface ICannedDeviceResponseSearch extends ISearch
{
}


/**
* Text message content including a list of predetermined responses. Derived from {@link
* ITextContent}.
*/
export interface ICannedResponseContent extends ITextContent
{
  /** Gets or sets the list of predetermined responses to a text message. See {@link ICannedResponseOption}. */
  cannedResponseOptions: ICannedResponseOption[];
  /** Gets or sets get the predetermined responses options that are serialized. */
  cannedResponseOptionsSerialized: ICannedResponseOption[];
}


/** Specifies the allowed responses to a {@link ITextMessage}. */
export interface ICannedResponseOption
{
  /** Gets or sets the id number of the reply or null. */
  id: number;
  /** Gets or sets the text options provided for the CannedResponse message reply. */
  text: string;
}


/**
* An object representing a {@link IX509Certificate2} used to check if a message came
* from the correct external source.
*/
export interface ICertificate extends IEntity
{
  /**
  * Gets or sets a value indicating whether certificate is a root certificate that is
  * used for validating all client certificate.
  */
  isRoot: boolean;
  /** Gets or sets the issuer of the {@link ICertificate}. */
  issuer: string;
  /** Gets or sets the public key of the {@link ICertificate}. */
  key: any;
  /** Gets or sets the {@link ICertificate} logs in. */
  logInUrl: any;
  /** Gets or sets the {@link ICertificate} logs off. */
  logOffUrl: any;
}


/** An object used to search for {@link ICertificate}s. */
export interface ICertificateSearch extends ISearch
{
  /**
  * Gets or sets the boolean indicating if {@link ICertificate} is root, used for searching
  * the root certificate.
  */
  isRoot?: boolean;
  /** Gets or sets the issuer of the {@link ICertificate}. */
  issuer: string;
}


/**
* This is a system group see {@link IGroupCompanyId} and is the root group of the
* organization structure. The entire sub tree of this group is user defined.
*/
export interface ICompanyGroup extends ISystemGroupBase
{
  /** Gets the unique identifier for this entity. see . */
  id: string;
  /** Gets the name of this system group. Cannot be set. */
  name: string;
}


/** A coordinate on the earth's surface. "x" is longitude and "y" is latitude. */
export interface ICoordinate
{
  /** Gets or sets specify x for the longitude. */
  x: number;
  /** Gets or sets specify y for the latitude. */
  y: number;
}


/** The authentication credentials for a {@link IUser} used when making calls to MyGeotab. */
export interface ICredentials
{
  /** Gets or sets the database name. */
  database: string;
  /**
  * Gets or sets the users login password. This can be used instead of providing a session
  * Id. It is mutually exclusive with SessionId.
  */
  password: string;
  /**
  * Gets or sets the session Id is a token which is generated from an authentication
  * call and can be used instead of providing the password each time. It is mutually
  * exclusive with Password.
  */
  sessionId: string;
  /** Gets or sets the MyGeotab username. */
  userName: string;
}


/** The object model for containing the data related to change log for cube data */
export interface ICubeDataChangeLog extends IEntity
{
  /** Gets or sets the date time for which the fact table data has changed */
  dateTime: Date;
  /** Gets or sets the name of the fact table */
  factTableName: string;
  logTime: Date;
}


/** Contains the dimension columns of the cube along with its type */
export interface ICubeDefinition
{
  /** Gets or sets the CubeType  */
  cubeType: CubeType;
  /** Gets or sets the dimension columns */
  dimensions: string[];
}


/** The object model for containing the data related to generated cube metadata */
export interface ICubeInfo extends INameEntity
{
  /** Gets or sets the cube created date time */
  createStartTime: Date;
  /** Gets or sets the type of the cube */
  cubeType: CubeType;
  /** Gets or sets the lower bound of the date range used to create the cube */
  fromDate: Date;
  /** Gets or sets a value indicating whether the cube is outdated or not */
  isOutdated: boolean;
  /** Gets or sets the last date time when the cube has marked as outdated */
  outdatedTime: Date;
  /** Gets or sets the time zone Id which is used to create the cube */
  timeZoneId: string;
  /** Gets or sets the upper bound of the date range used to create the cube */
  toDate: Date;
}


/**
* Generic Custom Data from a GO unit that was sent through from a third-party device
* that is attached to the serial port.
*/
export interface ICustomData extends IEntity
{
  /** Gets or sets the custom data in binary format. Default [empty]. */
  data: number[];
  /** Gets or sets the date and time the log was created. */
  dateTime?: Date;
  /** Gets or sets the {@link IDevice} for which the data was recorded. */
  device: IDevice;
}


/** The object used to specify the arguments when searching for {@link ICustomData}. */
export interface ICustomDataSearch extends ISearch
{
  /**
  * Gets or sets search for CustomData recorded for this {@link IDeviceSearch} Id. Available
  * DeviceSearch options are:. Id
  */
  deviceSearch: IDeviceSearch;
  /** Gets or sets search for CustomData that was recorded at this date or after. */
  fromDate?: Date;
  /** Gets or sets the maximum Id of the search criteria. */
  maxId: string;
  /** Gets or sets the minimum Id of the search criteria. */
  minId: string;
  /** Gets or sets search for CustomData that was recorded at this date or before. */
  toDate?: Date;
}


/**
* A custom third-party device that is used in MyGeotab. This is used for extensibility
* and is based on the {@link IDevice} object.
*/
export interface ICustomDevice extends IDevice
{
}


/** The class that represents Custom type key. */
export interface ICustomKey extends IKey
{
}


/** The class that represents NFC type key. */
export interface ICustomNfcKey extends IKey
{
}


/**
* A custom parameter extends the parameters already supported by MyGeotab. This enables
* one to add a parameter to MyGeotab that is not explicitly supported in the user
* interface.
*/
export interface ICustomParameter
{
  /** Gets or sets the byte values of the parameter starting at offset. */
  bytes: number[];
  /**
  * Gets or sets the description of {@link ICustomParameter} that is displayed to the
  * user. It does not in any way relate to the data that is actually stored in the parameter
  * itself.
  */
  description: string;
  /**
  * Gets or sets a value indicating whether enables or disables this parameter. If disabled,
  * the parameter won't be sent and the values 0 will be sent in the buffer.
  */
  isEnabled: boolean;
  /**
  * Gets or sets the offset into the parameter area where this {@link ICustomParameter}
  * will be written to.
  */
  offset: number;
}


/** Used to represent the schedule for emailed reports and dashboard graphic elements. */
export interface ICustomReportSchedule extends IEntity
{
  /** Gets or sets the arguments of scheduled report. */
  arguments: any;
  /** Gets or sets argument of the report represented in Json formatted text. */
  argumentsJsonText: string;
  /** Gets or sets the {@link IReportDestination} (email or dashboard) of scheduled report. */
  destination?: ReportDestination;
  /** Gets or sets the frequency of scheduled report. */
  frequency?: ReportFrequency;
  /** Gets or sets the {@link IGroup}(s) collection. */
  groups: IGroup[];
  /** Gets or sets the {@link IId} of the scheduled report. */
  guid: string;
  /**
  * Gets or sets {@link IGroup}(s) that define the groups that dashboard/email to be
  * sent to all users under it.
  */
  includeAllChildrenGroups: IGroup[];
  /**
  * Gets or sets {@link IGroup}(s) that the groups that dashboard/email to be sent to
  * direct users under it.
  */
  includeDirectChildrenOnlyGroups: IGroup[];
  /** Gets or sets interactive dashboard settings of scheduled report. */
  interactiveSettings: string;
  /**
  * Gets or sets a value indicating whether weather the scheduled report is active or
  * not.
  */
  isActive?: boolean;
  /** Gets or sets the last modified user. */
  lastModifiedUser: IUser;
  /** Gets or sets the date of the last run of the scheduled report. */
  lastRun?: Date;
  /** Gets or sets the {@link IReportPeriod} of scheduled report. */
  period?: ReportPeriod;
  /** Gets or sets {@link IGroup}(s) that define data scope of the report schedule. */
  scopeGroups: IGroup[];
  /** Gets or sets the {@link IReportTemplate} of scheduled report. */
  template: IReportTemplate;
}


/**
* A custom third-party automotive vehicle device that is used in MyGeotab. This is
* used for extensibility and is based on the {@link ICustomDevice} object.
*/
export interface ICustomVehicleDevice extends ICustomDevice
{
  /**
  * Gets or sets a toggle that represents automatic generation of {@link IDevice}. Default
  * [null].
  */
  autoHos?: HosOption;
  /**
  * @inheritdoc
  */
  disableSleeperBerth?: boolean;
  /**
  * Gets or sets the offset to be applied engine hours data reported by the engine computer.
  * Default [0].
  */
  engineHourOffset?: number;
  /** Gets or sets the Engine Hours for the device. Default [0]. */
  engineHours?: number;
  /**
  * Gets or sets the Engine Vehicle Identification Number from the engine of the vehicle
  * associated with the device.
  */
  engineVehicleIdentificationNumber?: string;
  /**
  * Gets or sets the vehicle license plate details of the vehicle associated with the
  * device. Maximum length [50] Default [""].
  */
  licensePlate?: string;
  /**
  * Gets or sets the state or province of the vehicle associated with the device. Maximum
  * length [50] Default [""].
  */
  licenseState?: string;
  /** Gets or sets the Odometer for the device. */
  odometer?: number;
  /**
  * Gets or sets a value used to correct the odometer value received from the engine.
  * Default [1].
  */
  odometerFactor?: number;
  /**
  * Gets or sets the offset to be applied odometer reported by the engine computer.
  * Default [0].
  */
  odometerOffset?: number;
  /**
  * Gets or sets a toggle that determines whether or not a device is under automatic
  * vehicle management. Default [false].
  */
  pinDevice?: boolean;
  /**
  * Gets or sets the Vehicle Identification Number (VIN) of the vehicle associated with
  * the device. Maximum length [50] Default [""].
  */
  vehicleIdentificationNumber?: string;
}


/** Custom web map providers. */
export interface ICustomWebMapProvider
{
  /** Gets or sets the create layers dictionary. */
  createLayersDictionary: string;
  /** Gets or sets the create map options. */
  createMapOptions: string;
  /** Gets or sets the identifier. */
  id: string;
  /** Gets or sets the name. */
  name: string;
}


/**
*  CycleSummary.
*
* @deprecated
*/
export interface ICycleSummary
{
  /** Gets or sets the amount the consecutive off time. */
  consecutiveRest: Date;
  /** Gets or sets the start date. */
  dateTime: Date;
}


/**
* Dashboard class represents a single dashboard that has widgets and reports that
* are an Excel file, displayed on dashboard page.
*/
export interface IDashboard extends INameEntity
{
  /** Gets or sets the date the dashboard is active from. Default [UtcNow]. */
  activeFrom?: Date;
  /** Gets or sets the date the dashboard is active to. Default [MaxDate]. */
  activeTo?: Date;
  /** Gets or sets the comment of the dashboard. Default [""]. */
  comment: string;
  /**
  * Gets or sets the details of the dashboard. The details are in json format. Default
  * [""].
  */
  jsonDetails: string;
  /** Gets or sets the {@link IUser} who is the owner of the dashboard. */
  owner: IUser;
  /** Gets or sets the {@link IReportPeriod} of scheduled report. */
  period?: ReportPeriod;
  /** Gets or sets the date from when the dashboard data starts. */
  rangeFrom?: Date;
  /** Gets or sets the date to when the dashboard data ends. */
  rangeTo?: Date;
}


/**  The object used to specify the arguments when searching for a . */
export interface IDashboardSearch extends ISearch
{
  /**
  * Gets or sets search for Dashboard with this Name. Wildcard can be used by prepending/appending
  * "%" to string. Example "%name%".
  */
  name: string;
}


/**
* Represents an estimate location for any data implementing interface based on previous/next
* {@link ILogRecord} and the &lt;see cref="DateTime}.
*/
export interface IDataLog extends ILogRecordInterpolated
{
}


/**  Message that can deliver data to a component of a GO device. */
export interface IDataToComponentContent extends ITextMessageContentType
{
  /**
  * Gets a value indicating whether get true if the recipient device is required to
  * respond with an acknowledge. false]otherwise.
  */
  isAcknowledgeRequired: boolean;
  /**
  * Gets method to get raw binary. NOTE: The endianness of IDs and other numbers inside
  * of the payload are reversed to keep the C# format.
  */
  payload: number[];
}


/** A date range. */
export interface IDateRange
{
  /**
  * @inheritdoc
  */
  from?: Date;
  /**
  * @inheritdoc
  */
  to?: Date;
}


/**
* This class that intersects a record with the (s). The {@link IDateRange}(s) and
* each next record in sequence of the tested records have to be Date ordered in the
* same order, and the ranges must not intersect with each other.
*/
export interface IDateRangeIntersect
{
}


/**
*  Reusable class to compare {@link IIDateTimeProvider}s.
*
* @deprecated
*/
export interface IDateTimeComparer
{
  /** Gets or sets a value indicating whether reorder the IDateTimeProvider comparison. */
  isChronological: boolean;
}


/** collection of methods to check if an entity is active in a given DateTime range. */
export interface IDateTimeEffectivityCheck
{
}


/** An object with {@link ITimeZoneInfo} */
export interface IDateTimeWithTimeZone
{
  /** Gets the local. {@link IDateTime} */
  localDateTime: Date;
  /** Gets the {@link ITimeZoneInfo}. */
  timeZone: any;
}


/**
*  DaySummary.
*
* @deprecated
*/
export interface IDaySummary
{
  /** Gets or sets the DateTime. */
  dateTime: Date;
  /** Gets or sets the deferral info. */
  deferralInfo: IDeferralInfo;
  /** Gets or sets the time spent in D status. */
  driveTotal?: Date;
  /** Gets or sets the time spent in OFF status. */
  offTotal?: Date;
  /** Gets or sets the time spent in ON status. */
  onTotal?: Date;
  /** Gets or sets the time spent in PC status. */
  personalConveyanceTotal?: Date;
  /** Gets or sets the rest info. */
  restInfos: IRestInfo[];
  /** Gets or sets the time spent in SB status. */
  sleeperBerthTotal?: Date;
  /** Gets or sets the time spent in WT status. */
  waitTimeTotal?: Date;
  /** Gets or sets the time spent in YM status. */
  yardMoveTotal?: Date;
}


/**
* This exception occurs if the system makes a database request that could not succeed
* because of connection failure or data change.
*/
export interface IDbUnavailableException
{
  /** Gets the message associated with the DbUnavailableException. */
  message: string;
  /** Gets the {@link IDbUnavailableState}. */
  state: DbUnavailableState;
}


/**
*  DebugData is generated by Geotab GO devices for internal debugging or troubleshooting
* purposes. This may include information regarding the state of the modem, firmware
* or conditions that the device is experiencing.
*/
export interface IDebugData extends IEntity
{
  /** Gets or sets the binary data. */
  data: number[];
  /** Gets or sets the date and time the DebugData log was created. */
  dateTime?: Date;
  /** Gets or sets the DebugReason; used for troubleshooting/debugging purposes only. */
  debugReason?: DebugReason;
  /** Gets or sets the {@link IDevice} associated with the vehicle. */
  device: IDevice;
  /**
  * Gets or sets the {@link IDriver} of the vehicle at the time the DebugData log entry
  * was created.
  */
  driver: IDriver;
}


/**  The object used to specify the arguments when searching . */
export interface IDebugDataSearch extends ISearch
{
  /**
  * Gets or sets the search for DebugData recorded for this Id. Available DeviceSearch
  * options are:. Id
  */
  deviceSearch: IDeviceSearch;
  /** Gets or sets the date after which DebugData was recorded. */
  fromDate?: Date;
  /** Gets or sets the date before which DebugData was recorded. */
  toDate?: Date;
}


/** The default application exception email template. */
export interface IDefaultApplicationExceptionEmailTemplate extends ISystemEmailTemplate
{
  /** Gets the.  */
  value: IDefaultApplicationExceptionEmailTemplate;
}


/** The default rule exception email template. */
export interface IDefaultExceptionRuleEmailTemplate extends ISystemEmailTemplate
{
  /** Gets the.  */
  value: IDefaultExceptionRuleEmailTemplate;
}


/** Default exception rule popup text. */
export interface IDefaultExceptionRulePopupTextTemplate extends ITextTemplate
{
  /**
  * Gets or sets the unique identifier for the specific object in the Geotab system.
  * See .
  */
  id: string;
  /**
  * Gets or sets the name of this entity that uniquely identifies it and is used when
  * displaying this entity.
  */
  name: string;
  /** Gets or sets the text. */
  text: string;
}


/** Default exception rule text. */
export interface IDefaultExceptionRuleTextTemplate extends ITextTemplate
{
  /** Gets or sets the unique identifier for this entity. See . */
  id: string;
  /**
  * Gets or sets the name of this entity that uniquely identifies it and is used when
  * displaying this entity.
  */
  name: string;
  /** Gets or sets the text. */
  text: string;
}


/**
*  Represents a Defect entity. This defines the one to one relationship between a
* and .
*/
export interface IDefect extends IGroup
{
  /** Gets or sets the of the defect. */
  assetType?: DefectAssetType;
  /** Gets or sets the color used to render assets belonging to this defect. */
  color: any;
  /** Gets or sets the list of Defect groups. */
  groups: IGroup[];
  /** Gets a value indicating whether this is a list of defects. */
  isDefectList: boolean;
  /** Gets or sets the of the Defect. */
  severity?: DefectSeverity;
}


/**  An DefectRemark is a remark that can be associated with a . */
export interface IDefectRemark extends IEntity
{
  /** Gets or sets the date and time the log was created. */
  dateTime?: Date;
  /** Gets or sets the which this DefectRemark belongs to. */
  dvirDefect: IDVIRDefect;
  /** Gets or sets the list of {@link IMediaFile} for a defect remark. */
  mediaFiles: IMediaFile[];
  /** Gets or sets the DVIR text associated with the log. */
  remark: string;
  /** Gets or sets the {@link IUser} who created the log. */
  user: IUser;
}


/** The object used to specify the arguments when searching for (s). */
export interface IDefectRemarkSearch extends ISearch
{
  /**
  * Gets or sets search for DefectRemark with this Id. Available DVIRDefectSearch options
  * are:. Id
  */
  dvirDefectSearch: IDVIRDefectSearch;
  /** Gets or sets search for DefectRemark that were recorded at this date or after. */
  fromDate?: Date;
  /** Gets or sets search for DefectRemarks with this remark as part of it. */
  remarkSearch: string;
  /** Gets or sets search for DefectRemark that were recorded at this date or before. */
  toDate?: Date;
  /**
  * Gets or sets search for DefectRemarks with this Id. Available UserSearch options
  * are:. Id
  */
  userSearch: IUserSearch;
}


/** The object used to specify the arguments when searching for a {@link IDefect}. */
export interface IDefectSearch extends IGroupSearch
{
  /**
  * Gets or sets search for defect lists available to this {@link IDeviceSearch} Id.
  * Available DeviceSearch options are:. Id
  */
  deviceSearch: IDeviceSearch;
  /**
  * Gets or sets search for defect lists that are members of these (s) one of it's children
  * or one of it's parents. Available GroupSearch options are:. Id
  */
  groups: IGroupSearch[];
  /**
  * Gets or sets search for defect lists available to this {@link ITrailerSearch} Id.
  * Available TrailerSearch options are:. Id
  */
  trailerSearch: ITrailerSearch;
}


/**
* This is a with an Id of . This is the root defect group for vehicle and trailer
* defects. The children of this group are not user defined.
*/
export interface IDefectsGroup extends IDefect
{
  /** Gets or sets color used to render assets belonging to this group. */
  color: any;
  /** Gets or sets the unique identifier for this entity. see . */
  id: string;
  /**
  * Gets or sets the name of this entity that uniquely identifies it and is used when
  * displaying this entity.
  */
  name: string;
}


/**
*  RestInfo.
*
* @deprecated
*/
export interface IDeferralInfo
{
  /**
  * Gets or sets a value indicating whether the day two log required. Tells the driver
  * if they are required to add another deferral exemption log today.
  */
  dayTwoLogRequired: boolean;
  /** Gets or sets the Deferral Status, DayOne or DayTwo. */
  status: DutyStatusDeferralType;
  /** Gets or sets the amount of time deferred. */
  time: Date;
}


/**
*  A Device represents the physical tracking device installed in the vehicle. A device
* and vehicle is typically synonymous since the GO tracking device is installed in
* a vehicle. In the case where there is no device; this is represented by "NoDeviceId".
* The device types that are supported are:. {@link ICustomDevice}
*/
export interface IDevice extends Partial<INameEntityWithVersion>
{
  /** Gets or sets the date the device is active from. Default [MinDate]. */
  activeFrom?: Date;
  /** Gets or sets the date that the device is active to. Default [MaxDate]. */
  activeTo?: Date;
  /**
  * Gets or sets free text field where any user information can be stored and referenced
  * for this entity.
  */
  comment?: string;
  /** Gets or sets a list of {@link IDevice} and their values. */
  customFeatures?: { [key in DeviceCustomFeature]: any };
  /**
  * Gets or sets the device features which have been enabled whether the feature is
  * in use (e.g. HOS, Iridium).
  */
  deviceFlags?: IDeviceFlags;
  /** Gets or sets the Geotab DevicePlan that has been purchased for this device. */
  devicePlans?: DevicePlan[];
  /** Gets specifies the GO or Custom {@link IDeviceType}. */
  deviceType?: DeviceType;
  /** Gets or sets the list of {@link IGroup}(s) the device belongs to. */
  groups?: IGroup[];
  /**
  * Gets or sets the unique hardware identifier for the Device. This is a 4 byte unique
  * number to identify devices in the system.
  */
  hardwareId?: number;
  /** Gets or sets the unique identifier for this entity. See {@link IId}. */
  id?: string;
  /**
  * Gets or sets The date that tells the system at what moment should it start checking
  * the device status and warn if there is no new data. Used when a new device is just
  * installed or the vehicle undergoes a lengthy service. Default [MinDate].
  */
  ignoreDownloadsUntil?: Date;
  /**
  * Gets or sets the maximum allowed time between logs when the ignition is on in seconds.
  * When the value is exceeded, data is considered to be missing. Default [200].
  */
  maxSecondsBetweenLogs?: number;
  /**
  * Gets or sets the name of this entity that uniquely identifies it and is used when
  * displaying this entity. Maximum length [50].
  */
  name?: string;
  /** Gets or sets the product id. Each device is assigned a unique hardware product id. */
  productId?: number;
  /** Gets or sets the Serial Number of the device. Maximum length [12]. */
  serialNumber?: string;
  /**
  * Gets or sets the expected time between downloads, i.e. how frequently the device
  * is expected to produce new data. For passive devices this might range from 1 to
  * a few days. For live devices this should be maximum 24h unless vehicles travel out
  * of coverage frequently. This is used to check if the device is in good state.
  */
  timeToDownload?: Date;
  /**
  * Gets or sets the IANA time zone Id of the device used to determine local work times.
  * This is typically the "home location" of the device. Default ["America/New\_York"].
  */
  timeZoneId?: string;
  /** Gets or sets the {@link IWorkTime} rules to apply to the device. Default [WorkTimeStandardHours]. */
  workTime?: IWorkTime;
}


/** Represents a connection from a GO device. */
export interface IDeviceConnection
{
  /** Gets or sets gets the {@link IDevice}. */
  device: IDevice;
  /** Gets or sets the state of the connection. */
  deviceConnectionStatus: DeviceConnectionStatus;
  /** Gets or sets the date and time the connected was ended in UTC. */
  endDate?: Date;
  /** Gets or sets the date and time the connection was started in UTC. */
  startDate?: Date;
}


/**
* A helper class where all device defaults are contained. This allows us to reuse
* some of the defaults for non-related device objects. For example, and both have
* auxiliaries but are not in the same lineage.
*/
export interface IDeviceDefaults
{
}


/** The plan a device is on. */
export interface IDeviceFlags
{
  /** Gets a list of features currently active on the device. */
  activeFeatures: VehicleFeatureCategory[];
  /** Gets a value indicating whether the device has access to the active tracking functionality. */
  isActiveTrackingAllowed: boolean;
  /**
  * Gets a value indicating whether a {@link IBoolean} indicating if the device has
  * access to engine functionality.
  */
  isEngineAllowed: boolean;
  /** Gets a value indicating whether the device has access to Garmin functionality. */
  isGarminAllowed: boolean;
  /** Gets a value indicating whether the device has access to HOS functionality. */
  isHOSAllowed: boolean;
  /** Gets a value indicating whether the device has access to Iridium functionality. */
  isIridiumAllowed: boolean;
  /** Gets a value indicating whether the device has access to odometer functionality. */
  isOdometerAllowed: boolean;
  /** Gets a value indicating whether the device has access to trip detail functionality. */
  isTripDetailAllowed: boolean;
  /** Gets a value indicating whether the device can be viewed in MyGeotab. */
  isUIAllowed: boolean;
  /** Gets a value indicating whether the device has access to VIN functionality. */
  isVINAllowed: boolean;
  /**
  * Gets the rate plans. Has been replaced by ActiveFeatures. Kept around for legacy
  * serializers. See case 143314.
  */
  ratePlans: string[];
}


/**
* This class contains helper methods related to encoding and parsing device serial
* numbers and hardware IDs.
*/
export interface IDeviceHelper
{
}


/** The master flag of a device. */
export interface IDeviceMasterFlag extends IEntity
{
  /** Gets a value indicating the timestamp of master flag. */
  dateTime?: Date;
  /**
  * @inheritdoc
  */
  device?: IDevice;
  /** Gets device id. */
  deviceId?: string;
  /** Gets a value indicating whether master flag is enabled. */
  enabled?: boolean;
  /** Gets a value indicating device master flag. */
  masterFlag?: DevicePlanMasterFlag;
}


/**
*  The object used to specify the arguments when searching for {@link IDeviceMasterFlag}(s).<br>
*/
export interface IDeviceMasterFlagSearch extends ISearch
{
  /** Gets or sets search for {@link IDevicePlanMasterFlag}. */
  devicePlanMasterFlag?: DevicePlanMasterFlag;
  /** Gets or sets search for {@link IDeviceSearch}. */
  deviceSearch?: IDeviceSearch;
  /** Gets or sets search for {@link IDeviceMasterFlag}s recorded at this date or after. */
  fromDate?: Date;
  /**
  * Gets or sets a value indicating whether gets or sets a value to include the first
  * {@link IFromDate} is null this has no effect.
  */
  includeFromDateOverlap: boolean;
  /** Gets or sets search for {@link IDeviceMasterFlag}s recorded at this date or before. */
  toDate?: Date;
}


/**
* Attribute to decorate device properties, when changed, should trigger parameter
* version increment and send to GO device.
*/
export interface IDeviceParameterAttribute
{
}


/** The object used to specify the arguments when searching for a {@link IDevice}. */
export interface IDeviceSearch extends ISearch
{
  /**
  * Gets or sets search for Devices with comments matching this value. Wildcard can
  * be used by prepending/appending "%" to string. Example "%comments%".
  */
  comment: string;
  /** Gets or sets search for Devices of this {@link IDeviceType}. */
  deviceType?: DeviceType;
  /**
  * Gets or sets search for a Device by Vehicle Identification Number (VIN) reported
  * by the engine. This is the unique number assigned to the vehicle during manufacturing
  * and reported through any non-legacy GO device. This differs from in that it is the
  * last VIN reported from the Device, and will be updated whether it is classified
  * as valid or invalid.
  */
  engineVehicleIdentificationNumber: string;
  /**
  * Gets or sets search for Devices that were active at this date or after. Set to UTC
  * now to search for only currently active (non-archived) devices.
  */
  fromDate?: Date;
  /** Gets or sets for devices and asset types. */
  groupListSearch: IGroupListSearch;
  /**
  * Gets or sets search for Devices that are a member of these {@link IGroupSearch}(s).
  * Each GroupSearch is an object within the array. Available GroupSearch options are:
  * Id
  */
  groups: IGroupSearch[];
  /** Gets or sets search for a Device with this unique hardware ID. */
  hardwareId?: number;
  /**
  * Gets or sets search for entities that contain specific keywords in all wildcard
  * string-searchable fields.
  */
  keywords: string[];
  /**
  * Gets or sets search for Devices with a license plate matching this value. Wildcard
  * can be used by prepending/appending "%" to string. Example "%comments%".
  */
  licensePlate: string;
  /**
  * Gets or sets search for Devices with this Name. Name is the primary description
  * of the Device. Wildcard can be used by prepending/appending "%" to string. Example
  * "%name%".
  */
  name: string;
  /** Gets or sets search for a Device by its unique serial number. */
  serialNumber: string;
  /** Gets or sets search for Devices that were active at this date or before. */
  toDate?: Date;
  /**
  * Gets or sets search for a Device by Vehicle Identification Number (VIN). This is
  * the unique number assigned to the vehicle during manufacturing. This differs from
  * in that it is the last VIN reported from the Device that was determined to be valid.
  */
  vehicleIdentificationNumber: string;
}


/**
* A class that represents the current status for a {@link IDevice}, including last
* known {@link ITrip}, last known {@link IStatusData} and / or {@link IFaultData}
* data, and last known {@link IRadioData} entry, where applicable.
*/
export interface IDeviceStatus extends IEntity
{
  /**
  * Gets or sets The last {@link ILogRecord} location (see {@link IAddressLookupData}
  * for more info).
  *
  * @deprecated
  */
  addressLookupData: IAddressLookupData;
  /** Gets returns the number of days since the last engine {@link IStatusData} was received. */
  daysSinceLastEngineData: number;
  /** Gets returns the number of days since the last engine {@link IFaultData} was received. */
  daysSinceLastFaultData: number;
  /** Gets returns the number of days since the last radio communications. */
  daysSinceLastRadioComms: number;
  /** Gets returns the number of days since the last {@link ITrip}. */
  daysSinceLastTrip: number;
  /** Gets or sets gets the {@link IDevice}. */
  device: IDevice;
  /** Gets or sets the last {@link ICustomData} date for the {@link IDevice} in the system. */
  lastCustomData?: Date;
  /** Gets or sets the last {@link IDebugData} date for the {@link IDevice} in the system. */
  lastDebugData?: Date;
  /** Gets or sets the last {@link IStatusData} date for the {@link IDevice} in the system. */
  lastEngineData?: Date;
  /** Gets or sets the last {@link IFaultData} date for the {@link IDevice} in the system. */
  lastFaultData?: Date;
  /** Gets or sets the last {@link ILogRecord} received from the {@link IDevice}. */
  lastGpsRecord?: Date;
  /** Gets last known record of any sort received from this {@link IDevice}. */
  lastHeartBeat?: Date;
  /**
  * Gets or sets the last {@link IDriverChange} date for the {@link IDevice} in the
  * system.
  */
  lastKeyInsertData?: Date;
  /** Gets or sets the last {@link IRadioData} date for the {@link IDevice} in the system. */
  lastRadioData?: Date;
  /** Gets or sets the last download of aided GPS data for the {@link IDevice}. */
  lastRFAidedGpsUpload?: Date;
  /** Gets or sets the last download of firmware for the {@link IDevice}. */
  lastRFFirmwareUpload?: Date;
  /** Gets or sets the last download of parameters for the {@link IDevice}. */
  lastRFParameterUpload?: Date;
  /** Gets or sets the last upload for standard GPS data for the {@link IDevice}. */
  lastRFTripDataUpload?: Date;
  /** Gets or sets the last {@link ITrip} date for the {@link IDevice}. */
  lastTrip?: Date;
  /** Gets or sets the last general vehicle light. */
  lastVehicleLight?: Date;
  /** Gets the status level. */
  statusLevel: DeviceStatusLevel;
  /** Gets or sets the total possible tamper signs for the {@link IDevice}. */
  tamperSigns: number;
}


/**
* Represents the current state of a vehicle by providing information such as the vehicle
* bearing location and speed, active exception events and whether the device is currently
* communicating.
*/
export interface IDeviceStatusInfo extends IEntityWithVersion
{
  /**
  * Gets or sets the bearing (heading) in integer degrees. Valued between 0 and 359
  * inclusive. 0 represents North, 90 represents East, and so on. -1 represents unknown
  * bearing.<br> 
  */
  bearing?: number;
  /**
  * Gets or sets the duration between the last Trip state change (i.e. driving or stop),
  * and the most recent date of location information.
  */
  currentStateDuration?: Date;
  /** Gets or sets the most recent date of location information. */
  dateTime?: Date;
  /** Gets or sets the {@link IDevice} this DeviceStatusInfo belongs to. */
  device: IDevice;
  /** Gets or sets the {@link IDevice}. */
  driver: IDriver;
  /** Gets or sets the {@link IExceptionEvent}(s) that are currently active. */
  exceptionEvents: IExceptionEvent[];
  /** Gets or sets the {@link IDevice} currently belongs to. */
  groups: IGroup[];
  /** Gets or sets a value indicating whether the {@link IDevice} is communicating. */
  isDeviceCommunicating: boolean;
  /**
  * Gets or sets a value indicating whether the current {@link IDevice} state. If set
  * true, is driving. Otherwise, it is stopped.
  */
  isDriving: boolean;
  /** Gets or sets a value indicating whether the {@link IDriver} is returned. */
  isHistoricLastDriver: boolean;
  /** Gets or sets the current latitude of the {@link IDevice}. */
  latitude?: number;
  /** Gets or sets the current longitude of the {@link IDevice}. */
  longitude?: number;
  /** Gets or sets the current vehicle speed. */
  speed?: number;
}


/**  The object used to specify the arguments when searching for {@link IDeviceStatusInfo}(s). */
export interface IDeviceStatusInfoSearch extends ISearch
{
  /** Gets or sets the maximum number of Devices to search for when specifying a "Position". */
  closestAssetLimit?: number;
  /**
  * Gets or sets search for {@link IDeviceStatusInfo}(s) from a device that matches
  * the {@link IDeviceSearch} Id or in the Groups specified. This includes archived
  * and deleted devices. Available DeviceSearch options are:. IdGroupsGroupListSearch
  */
  deviceSearch: IDeviceSearch;
  /** Gets or sets a value indicating whether to exclude exception events. Default [false]. */
  excludeExceptionEvents: boolean;
  /**
  * Gets or sets Gets or sets {@link IId} search criteria.
  *
  * @deprecated
  */
  id: string;
  /** Gets or sets the maximum Id of the search criteria. */
  maxId: string;
  /**
  * Gets or sets search for Status Info for Devices in the vicinity of the provided
  * {@link ICoordinate}. Starting from this position, an outward search for Devices
  * will continue until the number of devices found matches the number defined in the
  * "ClosestAssetLimit" property.
  */
  position: ICoordinate;
  /**
  * Gets or sets search for Device Status Info associated with this {@link IUserSearch}
  * Id. Available UserSearch options are:. Id
  */
  userSearch: IUserSearch;
}


/** This exception is thrown when MyAdmin needs to throw a friendly error message. */
export interface IDirectSupportException
{
}


/**
*  Used for converting distances between metric and imperial.
*
* @deprecated
*/
export interface IDistance
{
}


/**  A distribution list links a set of {@link IRecipientType}. */
export interface IDistributionList extends INameEntity
{
  /**
  * Gets or sets a list of recipients that will be notified when the {@link IRule}(s)
  * are violated.
  */
  recipients: IRecipient[];
  /** Gets or sets the list of {@link IRecipient}(s) will be notified of when broken. */
  rules: IRule[];
}


/**
*  The object used to specify the arguments when searching for {@link IDistributionList}(s).
*
* @deprecated
*/
export interface IDistributionListSearch extends ISearch
{
  /** Gets or sets the maximum Id of the search criteria. */
  maxId: string;
  /**
  * Gets or sets search for DistributionLists with these full {@link IRecipient} objects.
  * Available RuleSearch options are:. Id
  */
  recipientSearch: IRecipientSearch;
  /**
  * Gets or sets search for DistributionLists with this {@link IRuleSearch} Id. Available
  * RuleSearch options are:. Id
  */
  ruleSearch: IRuleSearch;
}


/** System Distribution List. */
export interface IDistributionListSystem extends IDistributionList
{
  /** Gets or sets the unique identifier for this entity. see . */
  id: string;
}


/**
*  A driver in the system, and it is derived from {@link IUser}, with key ids and
* driver groups. If the driver is unknown then the driver is represented by "UnknownDriver".
*/
export interface IDriver extends IUser
{
  /** Gets or sets the home {@link IGroup}(s) for the driver. */
  driverGroups: IGroup[];
  /** Gets or sets the NFC Key's serial number associated with the driver. */
  keys: IKey[];
  /** Gets or sets the driver license number of the user. Default [""]. */
  licenseNumber: string;
  /** Gets or sets the driver license province or state of the user. Default [""]. */
  licenseProvince: string;
  /** Gets or sets a value indicating whether the driver can view their own data. */
  viewDriversOwnDataOnly?: boolean;
}


/**  Information about timing of a {@link IDriver} change. */
export interface IDriverChange extends IEntityWithVersion
{
  /** Gets or sets the date and time of the driver change. */
  dateTime?: Date;
  /** Gets or sets the {@link IDevice} that had the driver change. */
  device?: IDevice;
  /** Gets or sets the {@link IDriver} associated with the change. */
  driver?: IDriver;
  /** Gets or sets the {@link IDriverChangeType}. */
  type?: DriverChangeType;
}


/** The object used to specify the arguments when searching for a {@link IDriverChange}. */
export interface IDriverChangeSearch extends ISearch
{
  /**
  * Gets or sets search for DriverChanges with this Id or in the provided Groups. Available
  * DeviceSearch options are:. IdGroupsGroupListSearch
  */
  deviceSearch: IDeviceSearch;
  /** Gets or sets search for DriverChange records at this date or after. */
  fromDate?: Date;
  /**
  * Gets or sets a value indicating whether to include the next driver change after
  * the to date or the most recent driver change (if dates are not provided).
  */
  includeNextChanges: boolean;
  /**
  * Gets or sets a value indicating whether to include the last driver change before
  * the from date or the most recent driver change (if dates are not provided).
  */
  includeOverlappedChanges: boolean;
  /** Gets or sets maximum version of the search criteria. */
  maxVersion?: number;
  /** Gets or sets search for DriverChange records at this date or before. */
  toDate?: Date;
  /** Gets or sets a value indicating the {@link IDriverChangeType} to search for exclusively. */
  type?: DriverChangeType;
  /**
  * Gets or sets search for DriverChanges with this Id or DriverGroups. Available UserSearch
  * options are:. IdDriverGroupsDriverGroupListSearch
  */
  userSearch: IUserSearch;
}


/** Detailed information for Hours of Service regulation for a driver. */
export interface IDriverRegulation extends IEntity
{
  /** Gets or sets the {@link IDutyStatusAvailability}. */
  availability: IDutyStatusAvailability;
  /** Gets or sets the cycle summaries. */
  cycleSummaries: ICycleSummary[];
  /** Gets or sets the day summaries. */
  daySummaries: IDaySummary[];
  /** Gets or sets the . */
  driver: IUser;
  /** Gets or sets when off duty is needed. */
  offDutyNeeded: Date;
  /** Gets or sets when rest break is needed. */
  restBreakNeeded: Date;
  /** Gets or sets rulesets that cannot be changed currently. */
  rulesetsThatCannotChange: IUserHosRuleSet[];
  /** Gets or sets the {@link IDutyStatusViolation}. */
  violations: IDutyStatusViolation[];
  /** Gets or sets the workday summaries. */
  workdaySummaries: IWorkdaySummary[];
}


/**
* true The object used to specify the arguments when searching for {@link IDriverRegulation}
* objects.
*/
export interface IDriverRegulationSearch extends ISearch
{
  /** Gets or sets the date from which the availability is calculated. */
  fromDate?: Date;
  /** Gets or sets search for an entry based on the specific {@link IId}. */
  id: string;
  /** Gets or sets the date to which the availability is calculated. */
  toDate?: Date;
  /**
  * Gets or sets search for duty status availability objects with this {@link IUserSearch}.
  * Available UserSearch options are:. IdGroupSearch
  */
  userSearch: IUserSearch;
}


/** A driver that is a system driver. */
export interface IDriverSystem extends IDriver
{
  /** Gets or sets the list of organization {@link IGroup}(s) that the user belongs to. */
  companyGroups: IGroup[];
  /** Gets or sets the home {@link IGroup}(s) for the driver. */
  driverGroups: IGroup[];
  /** Gets or sets the unique identifier for this entity. see {@link IId}. */
  id: string;
  /**
  * Gets or sets the name of this entity that uniquely identifies it and is used when
  * displaying this entity. The name cannot be changed for this Driver.
  */
  name: string;
  /** Gets or sets the private {@link IGroup}(s) that the user belongs to. */
  privateUserGroups: IGroup[];
  /** Gets or sets the {@link IGroup}(s) for reporting that this user belongs to. */
  reportGroups: IGroup[];
  /**
  * Gets or sets the security {@link IGroup}(s) this user belongs to defining the users
  * access.
  */
  securityGroups: IGroup[];
}


/** Message content to control a {@link IDriver} white list. */
export interface IDriverWhiteListContent extends IDataToComponentContent
{
  /**
  * Gets a value indicating whether to add to or remove from the white list. If [true]
  * "ClearWhiteList" will be set to [false] and the driver will be added to the white
  * list. If [false] the driver will be removed from the white list.
  */
  addToWhiteList: boolean;
  /**
  * Gets a value indicating whether to clear the white list. If [true] "AddToWhiteList"
  * will be set to [false] and "DriverKey" will be set to [null].
  */
  clearWhiteList: boolean;
  /** Gets the {@link IKey}. */
  driverKey: IKey;
}


/**
* This is a with an Id of . A user see that has this group assigned to its security
* groups will have access to all features of the Geotab Drive app.
*/
export interface IDriveUserSecurityGroup extends ISystemSecurityClearance
{
  /** Gets the unique identifier for this entity. see . */
  id: string;
  /** Gets the name of this system group. Cannot be set. */
  name: string;
}


/**
* An exception that occurs when adding a new object or when updating an existing object
* that would cause a duplicate entry to occur.
*/
export interface IDuplicateException
{
  /** Gets the message of the exception. */
  message: string;
}


/**
*  An exception that occurs when adding a key to a user that is assigned to another
* user.
*
* @deprecated
*/
export interface IDuplicateKeyException extends IDuplicateException
{
  /** Gets the message of the exception. */
  message: string;
}


/**
* An exception that occurs when adding a new user or when updating an existing user
* would cause a duplicate.
*/
export interface IDuplicateUserException extends IDuplicateException
{
  /** Gets message of the exception. */
  message: string;
}


/**  Driver Availability for Hours of Service regulations. */
export interface IDutyStatusAvailability
{
  /** Gets a list of {@link IDutyStatusAvailabilityDuration}(s) for a driver. */
  availabilities: IDutyStatusAvailabilityDuration[];
  /** Gets or sets the duration of cycle hours left. */
  cycle?: Date;
  /** Gets or sets cycle available to the driver in the future. */
  cycleAvailabilities: IDutyStatusCycleAvailability[];
  /** Gets or sets the duration left before cycle rest must be taken. */
  cycleRest?: Date;
  /** Gets or sets the {@link IUser} associated with the duty status availability. */
  driver: IUser;
  /** Gets or sets the duration left for driving. */
  driving?: Date;
  /** Gets or sets the duration of total on-duty time left in a day. */
  duty?: Date;
  /** Gets or sets the duty hours left since Cycle Rest. */
  dutySinceCycleRest?: Date;
  /** Gets or sets the unique identifier for the specific {@link IId}. */
  id: string;
  /** Gets or sets if 16 hour exemption is available. */
  is16HourExemptionAvailable?: boolean;
  /** Gets or sets if adverse driving exemption is available. */
  isAdverseDrivingExemptionAvailable?: boolean;
  /** Gets or sets if off-duty deferral exemption is available. */
  isOffDutyDeferralExemptionAvailable?: boolean;
  /**
  * Gets or sets chronological array representing each day's On-duty time since beginning
  * of cycle.
  */
  recap: IDutyStatusRecap[];
  /** Gets or sets the duration left before rest break must be taken. */
  rest?: Date;
  /**
  * Gets or sets the duration of workday left in a day. Workday is a consecutive window
  * that begins with first on-duty.
  */
  workday?: Date;
}


/**
*  The duration of time remaining for a specific {@link IDutyStatusViolationType}.
*
* @deprecated
*/
export interface IDutyStatusAvailabilityDuration
{
  /** Gets or sets the duration of the specific {@link IDutyStatusViolationType}. */
  duration: Date;
  /** Gets or sets the specific type of {@link IDutyStatusViolationType}. */
  type?: DutyStatusViolationType;
}


/**
*  The object used to specify the arguments when searching for {@link IDutyStatusAvailability}
* objects.
*/
export interface IDutyStatusAvailabilitySearch extends ISearch
{
  /** Gets or sets the date from which the availability is calculated. */
  fromDate?: Date;
  /** Gets or sets search for an entry based on the specific {@link IId}. */
  id: string;
  /** Gets or sets the date to which the availability is calculated. */
  toDate?: Date;
  /**
  * Gets or sets search for duty status availability objects with this {@link IUserSearch}.
  * Available UserSearch options are:. IdDriverGroupsDriverGroupListSearch
  */
  userSearch: IUserSearch;
}


/** Represents total cycle hours that will be available in the up coming days. */
export interface IDutyStatusCycleAvailability
{
  /** Gets the amount of cycle time available. */
  available: Date;
  /** Gets the cycle gain date. */
  dateTime: Date;
}


/**
*  A DutyStatusLog is a record of duty status for Hours of Service regulations. The
* log is first required to have a driver, dateTime, status, and device. Location is
* not required and will be calculated from the device's data.
*/
export interface IDutyStatusLog extends IEntityWithVersion
{
  /**
  * Gets or sets the list of {@link IAnnotationLog}(s) which are associated with this
  * log.
  */
  annotations: IAnnotationLog[];
  /** Gets or sets the list of the co-driver {@link IUser}(s) for this log. */
  coDrivers: IUser[];
  /** Gets or sets the date and time the log was created. */
  dateTime?: Date;
  /** Gets or sets the deferral minutes. */
  deferralMinutes?: number;
  /** Gets or sets the deferral status. */
  deferralStatus?: DutyStatusDeferralType;
  /** Gets or sets the {@link IDevice} associated with this log. */
  device: IDevice;
  /** Gets or sets the distance since last valid coordinate measurement. */
  distanceSinceValidCoordinates?: number;
  /** Gets or sets the {@link IUser} who created this log. */
  driver: IUser;
  /**
  * Gets or sets the date and time the log was edited. If the log has not been edited,
  * this will not be set.
  */
  editDateTime?: Date;
  /** Gets or sets the {@link IUser} that requested an edit to this log. */
  editRequestedByUser: IUser;
  /** Gets or sets the engine hours for the at the of this log. */
  engineHours?: number;
  /** Gets or sets the event checksum of this log. */
  eventCheckSum?: number;
  /** Gets or sets the event code of this log (Table 6; 7.20 of the ELD Final Rule). */
  eventCode?: number;
  /**
  * Gets the record status number of this log 1 = active 2 = inactive - changed 3 =
  * inactive - change requested 4 = inactive - change rejected.
  */
  eventRecordStatus?: number;
  /**
  * Gets or sets the event type number of this log 1 = A change in driver's duty-status
  * 2 = An intermediate log 3 = A change in driver's indication of authorized personal
  * use of CMV or yard moves 4 = A driver's certification/re-certification of records
  * 5 = A driver's login/logout activity 6 = CMV's engine power up / shut down activity
  * 7 = A malfunction or data diagnostic detection occurrence (Table 6; 7.25 of the
  * ELD Final Rule).
  */
  eventType?: number;
  /** Gets or sets the unique identifier for this entity. See {@link IId}. */
  id: string;
  /**
  * Gets or sets if the log is ignored. True means it will not affect the Driver's HOS
  * availability.
  */
  isIgnored?: boolean;
  /** Gets or sets an object with the location information for the log data. */
  location: IAddressLookupData;
  /**
  * Gets or sets the {@link IDutyStatusLog} record. As a flag it can be both a diagnostic
  * and malfunction state which is used to mark status based records (e.g. "D", "SB")
  * as having a diagnostic or malfunction present at time of recording.
  */
  malfunction?: DutyStatusMalfunctionTypes;
  /** Gets or sets the odometer in meters for the at the of this log. */
  odometer?: number;
  /** Gets or sets the {@link IDutyStatusOrigin} from where this log originated. */
  origin?: DutyStatusOrigin;
  /**
  * Gets or sets the of the parent {@link IDutyStatusLog}. Used when a DutyStatusLog
  * is edited. When returning history, this field will be populated.
  */
  parentId: string;
  /** Gets or sets the sequence number, which is used to generate the sequence ID. */
  sequence?: number;
  /** Gets or sets the {@link IDutyStatusLog} record. */
  state?: DutyStatusState;
  /** Gets or sets the {@link IDutyStatusLogType} representing the driver's duty status. */
  status?: DutyStatusLogType;
  /**
  * Gets or sets the date and time the log was verified. If the log is unverified, this
  * will not be set.
  */
  verifyDateTime?: Date;
  /**
  * @inheritdoc
  */
  version?: number;
}


/**  The object used to specify the arguments when searching for {@link IDutyStatusLog}(s). */
export interface IDutyStatusLogSearch extends ISearch
{
  /**
  * Gets or sets search for DutyStatusLogs for this {@link IDeviceSearch} Id. Available
  * DeviceSearch options are:. IdGroupsGroupListSearchUserSearch is always applied first
  * if both DeviceSearch and UserSearch are provided.
  */
  deviceSearch: IDeviceSearch;
  /** Gets or sets search for DutyStatusLogs that were recorded at this date or after. */
  fromDate?: Date;
  /**
  * Gets or sets search for DutyStatusLogs and include boundary logs outside the from
  * and to dates (for example, the log immediately preceding the from date).
  */
  includeBoundaryLogs?: boolean;
  /**
  * Gets or sets search for DutyStatusLogs and include compliance properties (e.g. Odometer,
  * EngineHours).
  */
  includeCompliance?: boolean;
  /** Gets or sets whether to populate locations for DutyStatusLogs. This can be expensive. */
  includeLocations?: boolean;
  /** Gets or sets include modification history of the {@link IDutyStatusLog} results. */
  includeModifications?: boolean;
  /** Gets or sets search for DutyStatusLogs based on {@link IDutyStatusMalfunctionTypes}. */
  malfunction: DutyStatusMalfunctionTypes[];
  /** Gets or sets search for {@link IDutyStatusLog}s with a maximum of this version. */
  maxVersion?: number;
  /** Gets or sets search for {@link IDutyStatusLog}s with a minimum of this version. */
  minVersion?: number;
  /** Gets or sets search for DutyStatusLogs based on {@link IDutyStatusOrigin}. */
  origin: DutyStatusOrigin[];
  /** Gets or sets search for DutyStatusLogs with the provided {@link IDutyStatusLogType}s. */
  statuses: DutyStatusLogType[];
  /** Gets or sets search for DutyStatusLogs that were recorded at this date or before. */
  toDate?: Date;
  /**
  * Gets or sets search for DutyStatusLogs with this {@link IUserSearch} Id. Available
  * UserSearch options are:. IdGroupSearch
  */
  userSearch: IUserSearch;
}


/** Represents a single days total hours that count towards the cycle limit. */
export interface IDutyStatusRecap
{
  /** Gets the recap date. */
  dateTime: Date;
  /** Gets the duration of time counting towards cycle. */
  duration: Date;
}


/**  A {@link IUser}. */
export interface IDutyStatusViolation
{
  /** Gets or sets the maximum or minimum days limit of the duty status violation. */
  daysLimit?: number;
  /** Gets or sets the {@link IUser} associated with the duty status violation. */
  driver: IUser;
  /** Gets or sets the driving duration of the duty status violation. */
  drivingDuration: Date;
  /** Gets or sets the date and time that the duty status violation started. */
  fromDate?: Date;
  /** Gets or sets the maximum or minimum hours limit of the duty status violation. */
  hoursLimit?: number;
  /** Gets or sets the unique identifier for the specific {@link IId}. */
  id: string;
  /** Gets or sets the log Id. */
  logId: string;
  /** Gets or sets the stated reason why the duty status violation occurred. */
  reason: string;
  /** Gets or sets the date and time that the duty status violation ended. */
  toDate?: Date;
  /** Gets or sets the {@link IDutyStatusViolationType} of the duty status violation. */
  type?: DutyStatusViolationType;
}


/**
*  The object used to specify the arguments when searching for {@link IDutyStatusViolation}(s).
* This search has been designed to work efficiently with these combinations of parameters:UserSearch
* + FromDate and/or ToDate
*/
export interface IDutyStatusViolationSearch extends ISearch
{
  /**
  * Gets or sets search for duty status violations that were recorded at this date or
  * after.
  */
  fromDate?: Date;
  /** Gets or sets search for an entry based on the specific {@link IId}. */
  id: string;
  /**
  * Gets or sets search for duty status violations that were recorded at this date or
  * before.
  */
  toDate?: Date;
  /**
  * Gets or sets search for duty status violations with this {@link IUserSearch}. Available
  * UserSearch options are:. IdGroupSearch
  */
  userSearch: IUserSearch;
}


/**
*  A DVIRDefect is a Defect that can be associated with a . It contains repair information
* such as repair , repair , and .<br> DVIRDefect also consists a list of {@link IDefectRemark}
* which can be used to store additional information for the defect.
*/
export interface IDVIRDefect extends IEntity
{
  /** Gets or sets the which this DVIRDefect belongs to. */
  defect: IDefect;
  /** Gets or sets the {@link IDefectRemark}s which this DVIRDefect has. */
  defectRemarks: IDefectRemark[];
  /** Gets or sets the date and time the DVIRDefect was repaired. */
  repairDateTime?: Date;
  /** Gets or sets the {@link IRepairStatusType} of this DVIRDefect. */
  repairStatus?: RepairStatusType;
  /** Gets or sets the {@link IUser} who repaired the DVIRDefect. */
  repairUser: IUser;
}


/** The object used to specify the arguments when searching for (s). */
export interface IDVIRDefectSearch extends ISearch
{
  /**
  * Gets or sets search for DVIRDefect that are a member of these defect {@link IGroup}(s).
  * Available {@link IGroupSearch} options are:. Id
  */
  defectSearch: IGroupSearch;
  /**
  * Gets or sets search for DVIRDefect with this Id. Available DVIRLogSearch options
  * are:. Id
  */
  dvirLogSearch: IDVIRLogSearch;
  /** Gets or sets search for DVIRDefect that were recorded at this date or after. */
  fromDate?: Date;
  /** Gets or sets search for DVIRDefect that were recorded at this date or before. */
  toDate?: Date;
  /**
  * Gets or sets search for DVIRDefects with this Id. Available UserSearch options are:.
  * Id
  */
  userSearch: IUserSearch;
}


/**
*  A DVIRLog is a Driver Vehicle Inspection Report which is prepared by a driver regarding
* defects in parts of a vehicle associated with a {@link IDevice} or {@link ITrailer}.
* Once the report is completed with optional driver remarks, the DVIR log will be
* acted upon, and marked as repairs made or not necessary (usually by another {@link
* IUser}). The driver then will mark the log as certified for being safe or unsafe
* to operate based on the effectiveness of any repairs made or comments for repairs
* not performed.
*/
export interface IDVIRLog extends IEntityWithVersion
{
  /**
  * Gets or sets the authority address for the driver at the time of this log. Maximum
  * length [255] Default [""].
  */
  authorityAddress: string;
  /**
  * Gets or sets the authority name for the driver at the time of this log. Maximum
  * length [255] Default [""].
  */
  authorityName: string;
  /**
  * Gets or sets the {@link IUser} who certified the repairs (or comments if no repairs
  * were made) to the {@link IDevice} or {@link ITrailer}.
  */
  certifiedBy: IUser;
  /** Gets or sets the date the {@link IDevice} or {@link ITrailer} was certified. */
  certifyDate?: Date;
  /**
  * Gets or sets the remark recorded by the {@link IUser} who certified the repairs
  * (or no repairs made) to the {@link IDevice} or {@link ITrailer}.
  */
  certifyRemark: string;
  /** Gets or sets the date and time the log was created. */
  dateTime?: Date;
  /** Gets or sets the defect list {@link IGroup} of the log. */
  defectList: IGroup;
  /** Gets or sets the list of defect {@link IGroup}(s) for this log. */
  defects: IGroup[];
  /**
  * Gets or sets the {@link IDevice} associated with this log. Either a Device or a
  * {@link ITrailer} is defined for a log, not both (if the device is set, trailer must
  * be null).
  */
  device: IDevice;
  /** Gets or sets the {@link IUser} who created the log. */
  driver: IUser;
  /** Gets or sets the remark recorded by the driver for this log. */
  driverRemark: string;
  /** Gets or sets the list of DVIRDefects {@link IDVIRDefect}(s) for this log. */
  dvirDefects: IDVIRDefect[];
  /** Gets or sets the unique identifier for this entity. See {@link IId}. */
  id: string;
  /**
  * Gets or sets a value indicating whether the DVIR log was inspected by the driver.
  * If false, the log was inspected by an inspector. Default [true].
  */
  isInspectedByDriver?: boolean;
  /**
  * Gets or sets a value indicating whether the DVIR log was marked as rejected by the
  * driver. Default [false].
  */
  isRejected?: boolean;
  /**
  * Gets or sets identifier for whether or not the {@link IDevice} or {@link ITrailer}
  * was certified as safe to operate.
  */
  isSafeToOperate?: boolean;
  /**
  * Gets or sets the load height, if it was manually recorded by the driver. Default
  * [null].
  */
  loadHeight?: number;
  /**
  * Gets or sets the load width, if it was manually recorded by the driver. Default
  * [null].
  */
  loadWidth?: number;
  /** Gets or sets an object with the location information of the log. */
  location: IAddressLookupData;
  /** Gets or sets the {@link IDVIRLogType} of the log. Default [Unknown]. */
  logType?: DVIRLogType;
  /**
  * Gets or sets the odometer or hubometer of the vehicle or trailer, respectively,
  * if it was manually recorded by the driver. Default [null].
  */
  odometer?: number;
  /** Gets or sets the date the {@link IDevice} or {@link ITrailer} was repaired. */
  repairDate?: Date;
  /** Gets or sets the {@link IUser} who repaired the {@link IDevice} or {@link ITrailer}. */
  repairedBy: IUser;
  /**
  * Gets or sets the remark recorded by the {@link IUser} who repaired the {@link IDevice}
  * or {@link ITrailer}.
  */
  repairRemark: string;
  /**
  * Gets or sets the {@link ITrailer} associated with this log. Either a {@link IDevice}
  * or a Trailer is defined for a log, not both (if the trailer is set, device must
  * be null).
  */
  trailer: ITrailer;
}


/**
*  The object used to specify the arguments when searching for {@link IDVIRLog}(s).
* A trailerSearch and deviceSearch cannot be used at the same time because a DVIR
* log entry is only ever associated with one asset type (for instance, if the "device"
* is set, "trailer" is always null and vice versa).
*/
export interface IDVIRLogSearch extends ISearch
{
  /**
  * Gets or sets search for DVIRLogs certified by a {@link IUser}. Available {@link
  * IUserSearch} options are:. Id
  */
  certifiedBySearch: IUserSearch;
  /**
  * Gets or sets search for DVIRLogs that are a member of these defect {@link IGroup}(s).
  * Available {@link IGroupSearch} options are:. Id
  */
  defectSearch: IGroupSearch[];
  /**
  * Gets or sets search for DVIRLogs for this {@link IDeviceSearch} Id. Available DeviceSearch
  * options are:. IdGroupsGroupListSearch
  */
  deviceSearch: IDeviceSearch;
  /** Gets or sets search for DVIRLogs that were recorded at this date or after. */
  fromDate?: Date;
  /**
  * Gets or sets search for DVIRLogs and include boundary logs outside the from and
  * to dates (for example, the log immediately preceding the from date).
  */
  includeBoundaryLogs?: boolean;
  /**
  * Gets or sets search for DVIRLogs and include logs that have been marked as rejected
  * by the driver.
  */
  includeRejected?: boolean;
  /** Gets or sets search for DVIRLogs that have been certified ( is not null). */
  isCertified?: boolean;
  /** Gets or sets search for DVIRLogs that have.  */
  isDefective?: boolean;
  /** Gets or sets search for DVIRLogs that have been repaired ( is not null). */
  isRepaired?: boolean;
  /** Gets or sets search for DVIRLogs which are safe or are not safe to operate. */
  isSafeToOperate?: boolean;
  /** Gets or sets search for DVIRLogs that match the specified {@link IDVIRLogType} */
  logTypes: DVIRLogType[];
  /**
  * Gets or sets Search for {@link IDVIRLog}s with a maximum of this version.
  *
  * @deprecated
  */
  maxVersion?: number;
  /**
  * Gets or sets Search for {@link IDVIRLog}s with a minimum of this version.
  *
  * @deprecated
  */
  minVersion?: number;
  /**
  * Gets or sets search to populate. {@link IDVIRLogType}
  *
  * @deprecated
  */
  populateLogType?: boolean;
  /**
  * Gets or sets search for DVIRLogs repaired by a {@link IUser}. Available {@link IUserSearch}
  * options are:. Id
  */
  repairedBySearch: IUserSearch;
  /** Gets or sets search for DVIRLogs have a match to this. {@link IDefectRemark} */
  searchByRemark: string;
  /** Gets or sets search for DVIRLogs that were recorded at this date or before. */
  toDate?: Date;
  /**
  * Gets or sets search for DVIRLogs with this {@link ITrailerSearch} Id. Available
  * TrailerSearch options are:. IdGroupsGroupListSearch
  */
  trailerSearch: ITrailerSearch;
  /**
  * Gets or sets search for DVIRLogs with this {@link IUserSearch} Id. Available UserSearch
  * options are:. Id
  */
  userSearch: IUserSearch;
}


/** Models an Email. */
export interface IEmail
{
  /** Gets or sets the email body in HTML format. */
  bodyHtml: string;
  /** Gets or sets the email body in plain text format. */
  bodyText: string;
  /** Gets or sets the sender email address. */
  from: string;
  /** Gets or sets the email subject. */
  subject: string;
  /** Gets or sets the recipient email address. */
  to: string;
}


/** Stores custom email notifications. */
export interface IEmailTemplate extends INotificationBinaryFile
{
  /** Gets or sets body of email. */
  body: string;
  /** Gets or sets report template. */
  exceptionsDetailTemplate: IReportTemplate;
  /** Gets or sets subject line of email. */
  subject: string;
  /** Gets or sets get the type of the binary data for notifications. */
  type: NotificationBinaryFileType;
}


/** The class representing an Employee. */
export interface IEmployee extends IEntity
{
  /** Gets or sets the {@link IEmployee} first name. */
  firstName: string;
  /** Gets or sets the {@link IEmployee} identification reference. */
  identification: string;
  /** Gets or sets the {@link IEmployee} last name. */
  lastName: string;
}


/**
*  The {@link IEmployee} / {@link IRoute} association.
*
* @deprecated
*/
export interface IEmployeeRoutePlan extends IEntity
{
  /** Gets or sets the associated {@link IEmployee}. */
  employee?: IEmployee;
  /** Gets or sets the end date for the plan item. */
  endDate?: Date;
  /** Gets or sets the external (custom) reference. */
  externalReference?: string;
  /** Gets or sets the associated {@link IRoute}. */
  route?: IRoute;
  /** Gets or sets the start date for the plan item. */
  startDate?: Date;
}


/**
*  The object used to specify the arguments when searching for {@link IEmployeeRoutePlan}(s).
*
* @deprecated
*/
export interface IEmployeeRoutePlanSearch extends ISearch
{
  /** Gets or sets search for Employee Route Plan(s) recorded at this date or after. */
  fromDate?: Date;
  /**
  * Gets or sets search for Employee Route Plans with this {@link IRouteSearch} Id.
  * Available RouteSearch options are:. Id
  */
  routeSearch: IRouteSearch;
  /** Gets or sets search for Employee Route Plans recorded at this date or before. */
  toDate?: Date;
}


/**
*  An extended version of {@link IDeviceStatus} that includes a count of active {@link
* IFaultData} and {@link IExceptionEvent}(s).
*
* @deprecated
*/
export interface IEngineDeviceStatus extends IDeviceStatus
{
  /** Gets or sets the active fault data count. */
  activeFaultDataCount: number;
  /** Gets or sets the fault data count. */
  faultDataCount: number;
}


/** The count of entities by Group Id. */
export interface IEntitiesPerGroupResult
{
}


/**
*  All objects that are stored in the database are entities. They are uniquely identified
* by their {@link IId} which is used later to Get, modify (Set) or Remove that object.
* The following entities are supported: {@link IEntityLinkRule}
*/
export interface IEntity
{
  /** Gets or sets the unique identifier for the specific {@link IId}. */
  id: string;
}


/**
* Provides the instance of {@link IIEntity} - derived class, "From" Date and "To"
* Date.
*/
export interface IEntityDateRange extends IDateRange
{
  /** Gets or sets the {@link IIEntity} - derived class instance. */
  entity: any;
}


/** An Entity with a version. */
export interface IEntityWithVersion extends IEntity
{
  /** Gets or sets the version of the entity. */
  version?: number;
}


/** Represents a 900MHz downloader that has an Ethernet port (as opposed to a USB) port. */
export interface IEthernetRadioDownloader extends IRadioDownloader
{
  /** Gets or sets the DNS server configured for the Ethernet Downloader. */
  dns: any;
  /** Gets or sets the gateway address for the Ethernet Downloader. */
  gateway: any;
  /** Gets or sets the IP address for the Ethernet Downloader. */
  ipAddress: any;
  /** Gets or sets toggles Dhcp on or off. */
  isDhcp?: boolean;
  /**
  * Gets or sets the server IP address or DNS name that the Ethernet Downloader connects
  * to.
  */
  serverAddress: string;
  /** Gets or sets the subnet configured for the Ethernet Downloader. */
  subnet: any;
}


/**
*  A particular occurrence of an {@link IEventRule}.
*
* @deprecated
*/
export interface IEventOccurrence extends IEntity
{
  /** Gets or sets a value indicating whether this {@link IEventOccurrence} is active. */
  active?: boolean;
  /** Gets or sets the adjusted engine horus. */
  adjustedEngineHours?: Date;
  /** Gets or sets the adjusted odometer. */
  adjustedOdometer?: number;
  /**
  * Gets or sets free text field where any user information can be stored and referenced
  * for this entity.
  */
  comment: string;
  /** Gets or sets the current engine hours. */
  currentEngineHours?: Date;
  /** Gets or sets the current odometer. */
  currentOdometer?: number;
  /** Gets or sets gets the {@link IDevice}. */
  device: IDevice;
  /** Gets or sets the event date. */
  eventDate?: Date;
  /** Gets or sets the event rule. */
  eventRule: IEventRule;
}


/**
*  The object used to specify the arguments when searching for {@link IEventOccurrence}(s).
*
* @deprecated
*/
export interface IEventOccurrenceSearch extends ISearch
{
  /**
  * Gets or sets a value indicating whether gets or sets search for active {@link IEventOccurrence}s
  * recorded Only.
  */
  activeOnly: boolean;
  /**
  * Gets or sets search for {@link IEventOccurrence}s with this {@link IDeviceSearch}
  * Id. Filter by the {@link IDeviceSearch} options. Providing a device ID will search
  * for any EventOccurrences that are assigned to that Device. Providing the Groups
  * will search for EventOccurrences for that have Devices in that group. Available
  * DeviceSearch options are:. IdGroupsGroupListSearch
  */
  deviceSearch: IDeviceSearch;
  /** Gets or sets search for {@link IEventOccurrence}s recorded at this date or after. */
  fromDate?: Date;
  /** Gets or sets gets maximum Id of the search criteria. */
  maxId: string;
  /** Gets or sets gets minimum Id of the search criteria. */
  minId: string;
  /** Gets or sets search for {@link IEventOccurrence}s recorded at this date or before. */
  toDate?: Date;
}


/** The rule describing an event. */
export interface IEventRule extends INameEntity
{
  /**
  * Gets or sets free text field where any user information can be stored and referenced
  * for this entity.
  */
  comment: string;
  /** Gets or sets the of the event. */
  dateTime?: Date;
  /** Gets or sets the engine hours. */
  engineHours?: Date;
  /** Gets or sets the event date. */
  eventDate?: Date;
  /** Gets or sets the type of the event. */
  eventType: IEventType;
  /** Gets or sets gets the unique identifier for this entity. See {@link IId}. */
  id: string;
  /** Gets or sets the kilometers. */
  kilometers?: number;
  /** Gets or sets the months. */
  months?: number;
  /**
  * Gets or sets the name of this entity that uniquely identifies it and is used when
  * displaying this entity.
  */
  name: string;
}


/** EventRule and Device. */
export interface IEventRuleDevice
{
  /** Gets or sets the device. */
  device: IDevice;
  /** Gets or sets the event rule. */
  eventRule: IEventRule;
}


/** The type of an event. */
export interface IEventType extends INameEntity
{
}


/** An event that occurs when the lease expires. */
export interface IEventTypeLeaseExpiry extends IEventType
{
  /** Gets or sets gets the unique identifier for this entity. See {@link IId}. */
  id: string;
  /**
  * @inheritdoc
  */
  name: string;
}


/** An Event that occurs when the license plate expires. */
export interface IEventTypeLicensePlateExpiry extends IEventType
{
  /**
  * @inheritdoc
  */
  id: string;
  /**
  * @inheritdoc
  */
  name: string;
}


/** An event that occurs when the oil needs to be changed. */
export interface IEventTypeOilChange extends IEventType
{
  /**
  * @inheritdoc
  */
  id: string;
  /**
  * @inheritdoc
  */
  name: string;
}


/** An event that occurs when the tires need to be rotated. */
export interface IEventTypeTireRotation extends IEventType
{
  /**
  * @inheritdoc
  */
  id: string;
  /**
  * @inheritdoc
  */
  name: string;
}


/**
* This is a {@link ISystemSecurityClearance} with an Id of . {@link IUser}(s) that
* have this group assigned to their security groups means they have access to everything
* in the system.
*/
export interface IEverythingSecurityGroup extends ISystemSecurityClearance
{
  /** Gets the unique identifier for this entity. see . */
  id: string;
  /** Gets the name of this system group. Cannot be set. */
  name: string;
}


/**
* This exception is thrown if a user makes a request while their ChangePassword flag
* is true. The user must change their password before they are able to successfully
* make further requests.
*/
export interface IExpiredPasswordException
{
}


/**  An object containing the result of a feed method. */
export interface IFeedResult<T>
{
  /** Gets or sets a list of data returned by the feed. */
  data?: T[];
  /**
  * Gets or sets the last version of the data returned by the feed call. If this parameter
  * is passed back into the feed call, then returned data will be the changes that occurred
  * after the last feed call was made. In this way the feed can return a continuous
  * stream of data.
  */
  toVersion?: number;
}


/**
* Represents the most recent records inserted into each table. This is used to ensure
* that the feed pulls the newest data possible without missing data.
*/
export interface IFeedVersionTrackingData extends IEntity
{
  /** Gets or sets specify when this log was taken. */
  dateTime?: Date;
  /** Gets or sets specify the table name that this record belongs to. */
  tableName: string;
  /** Gets or sets specify the latest row version for this table. */
  trackedRowVersion: number;
}


/**
*  The object used to specify the arguments when searching for {@link IFeedVersionTrackingData}(s).
*
* @deprecated
*/
export interface IFeedVersionTrackingDataSearch extends ISearch
{
  /**
  * @inheritdoc
  */
  id: string;
  /** Gets or sets search for the table name of the record. */
  tableName: string;
}


/**
*  Exception for file type mismatch.
*
* @deprecated
*/
export interface IFileTypeException
{
}


/**
* Represents a binary firmware image of a particular type and version. Various items
* can utilize a reference to this firmware object - for example, a go device's firmware
* or the firmware loaded on an Ethernet Downloader.
*/
export interface IFirmware extends IEntity
{
  /** Gets or sets the byte array containing the firmware data. */
  data: number[];
  /**
  * Gets or sets the version indicator for this Firmware. This can be in any distinct
  * format depending on the type of Firmware we're dealing with. For example, GO devices
  * use a three byte scheme as follows productid.major.minor.
  */
  firmwareVersion: string;
  /** Gets or sets the type of firmware. This differentiates firmware for different devices. */
  type?: FirmwareType;
}


/** Information about a firmware. */
export interface IFirmwareInfo extends IEntity
{
  /** Gets or sets the firmware channel. */
  channel?: number;
  /**
  * Gets or sets any additional information about this firmware. Used for informational
  * purposes only.
  */
  comments: string;
  /** Gets or sets a byte array representing the binary firmware image. */
  firmware: number[];
  /** Gets or sets a value indicating if this firmware is active. */
  isActive?: boolean;
  /**
  * Gets or sets a value indicating whether this is the default for the current product
  * ID.
  */
  isDefault?: boolean;
  /** Gets or sets major revision number. */
  major?: number;
  /** Gets or sets minor revision number. */
  minor?: number;
  /** Gets or sets product ID. */
  productId?: number;
}


/**
*  Converts fuel/electric volumes/totals/economies between to and from different units.
* Volumes/totals are always returned even if 0. Economies will return 0 if the input
* is 0 to prevent divide by 0 exceptions.
*
* @deprecated
*/
export interface IFuelAndElectricConverter
{
}


/** Fuel tax attributes. */
export interface IFuelTaxAttributes
{
  /** Gets or sets the road type. */
  roadType?: FuelTaxRoadType;
  /** Gets or sets a value indicating whether updates are available to this detail. */
  updatesAvailable?: boolean;
}


/**
* Fuel tax reporting element. The available driving history for a is stored as a sequence
* of such details. Each next detail starts when and where the previous detail ended.
* A detail is identified by its parameters (enter and exit time, odometer, GPS odometer,
* latitude and longitude) and its attributes (jurisdiction, , toll road, authority).
* When any of the attributes changes, the current detail ends and a new detail begins.
* For more information, see IFTA Guide.
*/
export interface IFuelTaxDetail extends IEntity
{
  /** Gets or sets the attributes. */
  attributes: string;
  /** Gets or sets the authority. 'None' by default. */
  authority: string;
  /** Gets or sets the . */
  device: IDevice;
  /** Gets or sets the . */
  driver: IDriver;
  /** Gets or sets the GPS odometer, in km, at the enter time. */
  enterGpsOdometer: number;
  /** Gets or sets the latitude at the enter time. */
  enterLatitude: number;
  /** Gets or sets the longitude at the enter time. */
  enterLongitude: number;
  /** Gets or sets the odometer, in km, at the enter time. */
  enterOdometer: number;
  /** Gets or sets the time at which the detail begins. */
  enterTime: Date;
  /** Gets or sets the GPS odometer, in km, at the exit time. */
  exitGpsOdometer: number;
  /** Gets or sets the latitude at the exit time. */
  exitLatitude: number;
  /** Gets or sets the longitude at the exit time. */
  exitLongitude: number;
  /** Gets or sets the odometer, in km, at the exit time. */
  exitOdometer: number;
  /** Gets or sets the time at which the detail ends. */
  exitTime: Date;
  /** Gets or sets the attributes. */
  fuelTaxAttributes: IFuelTaxAttributes;
  /** Gets a value indicating whether the details has hourly data. */
  hasHourlyData: boolean;
  /**
  * Gets or sets the GPS odometer values, in km, at each hour within the detail's time
  * interval.
  */
  hourlyGpsOdometer: number[];
  /**
  * Gets or sets a list of values indicating whether the odometer at the corresponding
  * hour is interpolated.
  */
  hourlyIsOdometerInterpolated: boolean[];
  /** Gets or sets the latitude values at each hour within the detail's time interval. */
  hourlyLatitude: number[];
  /** Gets or sets the longitude values at each hour within the detail's time interval. */
  hourlyLongitude: number[];
  /** Gets or sets the odometer values, in km, at each hour within the detail's time interval. */
  hourlyOdometer: number[];
  /**
  * Gets or sets a value indicating whether the odometer values are based on engine
  * odometer records and/or odometer adjustment records, as opposed to GPS distances
  * alone.
  */
  isClusterOdometer: boolean;
  /** Gets or sets a value indicating whether the odometer at enter time is interpolated. */
  isEnterOdometerInterpolated: boolean;
  /** Gets or sets a value indicating whether the odometer at exit time is interpolated. */
  isExitOdometerInterpolated: boolean;
  /** Gets a value indicating whether the detail is negligible by time or distance. */
  isNegligible: boolean;
  /** Gets or sets the jurisdiction, such as a U.S. state or a Canadian province. */
  jurisdiction: string;
  /** Gets or sets the toll road name. null by default. */
  tollRoad: string;
  /** Gets or sets the last processed record versions. */
  versions: number[];
}


/**
*  The object used to specify the arguments when searching for {@link IFuelTaxDetail}
* elements.<br> This search has been designed to work efficiently with these parameters:DeviceSearchFromDateToDate
*/
export interface IFuelTaxDetailSearch extends ISearch
{
  /** Gets or sets the device search. IdGroupsGroupListSearch */
  deviceSearch: IDeviceSearch;
  /**
  * Gets or sets the beginning of the time interval. The search will adjust it to the
  * nearest hour on or before this time. For instance, 8:20 AM will become 8 AM.
  */
  fromDate?: Date;
  /**
  * Gets or sets a value indicating whether to include any parts of boundary details
  * that fall outside the time interval.
  */
  includeBoundaries: boolean;
  /** Gets or sets a value indicating whether to include hourly data. */
  includeHourlyData: boolean;
  /** Gets or sets the max row version of the {@link IFuelTaxDetail} search criteria. */
  maxVersion?: number;
  /**
  * Gets or sets the end of the time interval. The search will adjust it to the nearest
  * hour on or after this time. For instance, 5:40 PM will become 6 PM.
  */
  toDate?: Date;
  /** Gets or sets the row version of the {@link IFuelTaxDetail} search criteria. */
  version?: number;
}


/** A Geotab GO4V3 device. Additional properties can be seen in {@link IGoCurveAuxiliary}. */
export interface IGo4v3 extends IGoCurveAuxiliary
{
  /** Gets or sets the radio channels as an array of 20 bytes. [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]. */
  channel?: number[];
  /** Gets or sets the channel count. Default [1]. */
  channelCount?: number;
  /**
  * Gets or sets the FrequencyOffset used on the device radio. The default is 1 and
  * should not be changed. Only has an effect on Channel Set 0 - which consists of channels
  * 0 to 15. Default [1].
  */
  frequencyOffset?: number;
  /**
  * Gets or sets a value indicating whether this device has aided GPS enabled. This
  * feature only applies to devices that use RF communication in very large installations
  * where an aiding data server has been configured. Default [false].
  */
  isAidedGpsEnabled?: boolean;
  /** Gets or sets the toggle to enable RF upload while driving. Default [false]. */
  isRfUploadOnWhenMoving?: boolean;
  /** Gets or sets the RF parameter version. Default [0]. */
  rfParameterVersion?: number;
}


/** The Geotab GO5 device. Additional properties can be seen in . */
export interface IGo5 extends IGoCurve
{
}


/** The Geotab GO6 device. Additional properties can be seen in . */
export interface IGo6 extends IGoCurveAuxiliary
{
}


/** The Geotab GO7 device. Additional properties can be seen in . */
export interface IGo7 extends IGoCurveAuxiliary
{
}


/** The Geotab GO8 device. Additional properties can be seen in . */
export interface IGo8 extends IGoCurveAuxiliary
{
}


/** The Geotab GO9 device. Additional properties can be seen in . */
export interface IGo9 extends IGoCurveAuxiliary
{
  /**
  * Gets or sets value which enables or disables OBD alerts for the device. Default
  * [False].
  */
  obdAlertEnabled?: boolean;
}


/** A GoCurve device. Additional properties can be seen in {@link IGoDevice}. */
export interface IGoCurve extends IGoDevice
{
  /**
  * Gets or sets the acceleration warning accelerometer threshold (y axis) value for
  * the vehicle. A positive value that when exceeded will trigger device beeping. Threshold
  * value to mS2 conversion (threshold \* 18 = milli-g / 1000 = g / 1.0197162 = mS2).
  * Default [22].
  */
  accelerationWarningThreshold?: number;
  /**
  * Gets or sets the accelerometer threshold warning factor value for this vehicle.
  * Default [0].
  */
  accelerometerThresholdWarningFactor?: number;
  /**
  * Gets or sets the braking warning accelerometer threshold (y axis) value for the
  * vehicle. A negative value that when exceeded will trigger device beeping. Threshold
  * value to mS2 conversion (threshold \* 18 = milli-g / 1000 = g / 1.0197162 = mS2).
  * Default [-34].
  */
  brakingWarningThreshold?: number;
  /**
  * Gets or sets the cornering warning threshold (x axis) value for the vehicle. A positive
  * value that when exceeded will trigger device beeping (the additive inverse is automatically
  * applied: 26/-26). Threshold value to mS2 conversion (threshold \* 18 = milli-g /
  * 1000 = g / 1.0197162 = mS2). Default [26].
  */
  corneringWarningThreshold?: number;
  /**
  * Gets or sets toggle to enable beeping when any of the acceleration thresholds are
  * exceeded by device accelerometer readings. Default [false].
  */
  enableBeepOnDangerousDriving?: boolean;
  /**
  * Gets or sets toggle to enable beeping when the vehicle's RPM exceeds the 'RpmValue'.
  * Default [false].
  */
  enableBeepOnRpm?: boolean;
  /**
  * Gets or sets the offset to be applied engine hours data reported by the engine computer.
  * Default [0].
  */
  engineHourOffset?: number;
  /**
  * Gets or sets toggle to enable active tracking on the device. enables Active Tracking
  * which triggers the device to transmit data more frequently. This allows for continuously
  * up-to-date vehicle positions animated on the live map. It also enables live server-side
  * driver alerts. Default [false].
  */
  isActiveTrackingEnabled?: boolean;
  /**
  * Gets or sets value which toggles beeping if an unbuckled seat belt is detected.
  * This will only work if the device is able to obtain seat belt information from the
  * vehicle. Default [false].
  */
  isDriverSeatbeltWarningOn?: boolean;
  /** Gets or sets value which toggles device IOX USB connection. Default [true]. */
  isIoxConnectionEnabled?: boolean;
  /**
  * Gets or sets value which toggles monitoring both passenger and driver unbuckled
  * seat belt, otherwise only the driver is monitored. Default [false].
  */
  isPassengerSeatbeltWarningOn?: boolean;
  /**
  * Gets or sets value which toggles device beeping when the vehicle is reversing. Default
  * [false].
  */
  isReverseDetectOn?: boolean;
  /**
  * Gets or sets a {@link ISingle} used to correct the odometer value received from
  * the engine. Default [1].
  */
  odometerFactor?: number;
  /**
  * Gets or sets the offset to be applied odometer reported by the engine computer.
  * Default [0].
  */
  odometerOffset?: number;
  /** Gets or sets the RPM value that when exceeded triggers device beeping. Default [3500]. */
  rpmValue?: number;
  /**
  * Gets or sets the value in km/h that below will not trigger 'Seat belt Warning'.
  * Default [10].
  */
  seatbeltWarningSpeed?: number;
}


/**
* Device that supports curve logging and auxiliaries. Additional properties can be
* seen in {@link IGoCurve}.
*/
export interface IGoCurveAuxiliary extends IGoCurve
{
  /**
  * Gets or sets an array of the auxiliary warning speeds for the vehicle. The auxiliary
  * is triggered when the speed is greater than or equal to this value. Maximum length
  * [8] Default [0,0,0,0,0,0,0,0].
  */
  auxWarningSpeed?: number[];
  /** Gets or sets toggle to enable auxiliary warnings. Maximum length [8] Default [false,false,false,false,false,false,false,false]. */
  enableAuxWarning?: boolean[];
  /**
  * Gets or sets toggle to enable control external relay value for the vehicle. Default
  * [false].
  */
  enableControlExternalRelay?: boolean;
  /**
  * Gets or sets the option which controls how long any attached external devices (Garmin,
  * Iridium, HOS, RFID, RS232, CAN, and USB) are kept on after the vehicle is turned
  * off in minutes. Default [0].
  */
  externalDeviceShutDownDelay?: number;
  /**
  * Gets or sets with being true, it is used to define the delay before the driver identification
  * reminder is sent out if the driver key has not been not swiped. The maximum value
  * of this property is 255. When it is less or equal to 180, it indicates the number
  * of seconds of the delay. When it is greater than 180, the delay increases 30 seconds
  * for every increment of one of this property. For example, 180 indicates 180 seconds,
  * 181 indicates 210 seconds, and 182 indicates 240 seconds. Maximum [255] Default
  * [30].
  */
  immobilizeArming?: number;
  /**
  * Gets or sets a value mainly used for enable or disable driver identification reminder.
  * If it is used in conjunction with vehicle relay circuits, it can force the driver
  * to swipe the driver key before starting the vehicle. Default [false].
  */
  immobilizeUnit?: boolean;
  /** Gets or sets an array of the IsAuxIgnTriggers for the vehicle. */
  isAuxIgnTrigger?: boolean[];
  /**
  * Gets or sets an array of {@link IBoolean}(s) indicating if a corresponding Aux signal
  * should be inverted on importing the device data. Maximum length [8] Default [false,false,false,false,false,false,false,false].
  */
  isAuxInverted?: boolean[];
}


/**
* The base device for all Geotab GO products. Additional properties can be seen in
* {@link IDevice}.
*/
export interface IGoDevice extends IDevice
{
  /** Gets or sets the date that the device is active from. Default [MinDate]. */
  activeFrom?: Date;
  /** Gets or sets the date that the device is active to. Default [MaxDate]. */
  activeTo?: Date;
  /**
  * Gets or sets the messaging status {@link IGroup}(s). Drivers with Garmin-equipped
  * vehicles can update their working status by choosing one from a set of common statuses.
  * This status update is shared with their team. For example, when drivers finish their
  * work, they can set their statuses to 'Available'. Their dispatcher is notified of
  * this and can begin to assign work based on both the location and availability of
  * the drivers. Default [Empty].
  */
  autoGroups?: IGroup[];
  /**
  * Gets or sets a toggle that represents automatic generation of {@link IDevice}. Default
  * [null].
  */
  autoHos?: HosOption;
  /**
  * Gets or sets the set of CustomParameter(s) associated with this device. Custom parameters
  * allow the activation of special features — limited to custom and beta firmware.
  * Custom parameters are issued only when necessary. Default [Empty].
  */
  customParameters?: ICustomParameter[];
  /**
  * Gets or sets master toggle to disable the device buzzer. When set to [true], the
  * device will not provide driver feedback of any kind. Default [false].
  */
  disableBuzzer?: boolean;
  /**
  * @inheritdoc
  */
  disableSleeperBerth?: boolean;
  /**
  * Gets or sets toggle to enable beeping when the vehicle idles for more than IdleMinutes.
  * Default [false].
  */
  enableBeepOnIdle?: boolean;
  /**
  * Gets or sets flag to force the parameters to be updated between the store and a
  * go device, the store will be updated with the parameter version of the go device
  * +1.
  */
  enableMustReprogram?: boolean;
  /**
  * Gets or sets toggle to enable speed warning value for the vehicle. When enabled
  * [true], only beep briefly (instead of continuously), when 'SpeedingOn' value is
  * exceeded. 'IsSpeedIndicator' must also be enabled. Default [false].
  */
  enableSpeedWarning?: boolean;
  /** Gets or sets the Engine Hours for the device. Default [0]. */
  engineHours?: number;
  /** Gets or sets the {@link IEngineType}. Default [EngineTypeGeneric]. */
  engineType?: IEngineType;
  /** Gets or sets the Vehicles Identity Number reported by the engine. */
  engineVehicleIdentificationNumber?: string;
  /**
  * Gets or sets a value indicating whether to wake up the GPS while the vehicle is
  * parked: this will allow for a faster GPS latch when the vehicle begins its trip.
  * Note: This will drain the vehicle's battery at a faster rate and should not be used
  * with newer devices. Default [false].
  */
  ensureHotStart?: boolean;
  /**
  * Gets or sets the capacity of all usable fuel tanks in litres. Default [0]. 
  *
  * @deprecated
  */
  fuelTankCapacity?: number;
  /** Gets or sets the {@link IGoTalkLanguage} of an attached GoTalk. Default [English]. */
  goTalkLanguage?: GoTalkLanguage;
  /**
  * Gets or sets the GPS off delay in minutes. When enabled this allows the device to
  * keep the GPS on for a period after the vehicle has been turned off. Normally, the
  * GPS turns off immediately. Keeping the GPS on can improve tracking on older devices
  * when many stops are made. Default [0].
  */
  gpsOffDelay?: number;
  /**
  * Gets or sets the number of minutes of allowed idling before device beeping starts.
  * EnableBeepOnIdle must be enabled. Default [3].
  */
  idleMinutes?: number;
  /**
  * Gets returns true if this device supports external device power control. Originally
  * only GO4v3 was to support this - but there are a significant number of customers
  * that had GO3V2s with this feature. As per DB: We had to support Iridium on Go4v2
  * for Oz and Garmin on GO4v2 for Toronto Hydro 78.x.x and 79.x.x supports Iridium,
  * 66.x.x (J1708 Live) and 80.x.x supports Garmin.
  */
  isExternalDevicePowerControlSupported?: boolean;
  /**
  * Gets or sets a toggle to beep constantly when the vehicle reaches the speed set
  * in 'SpeedingOn', and do not stop until the vehicle slows below the 'SpeedingOff'
  * speed. To only beep briefly (instead of continuously), enable 'EnableSpeedWarning'.
  * Default [false].
  */
  isSpeedIndicator?: boolean;
  /**
  * Gets or sets the vehicle license plate details of the vehicle associated with the
  * device. Maximum length [50] Default [""].
  */
  licensePlate?: string;
  /**
  * Gets or sets the state or province of the vehicle associated with the device. Maximum
  * length [50] Default [""].
  */
  licenseState?: string;
  /**
  * Gets or sets the device major firmware version. Newer versions have more functionality.
  * Live device firmware versions are managed automatically. Default [0].
  */
  major?: number;
  /** Gets or sets the minimum accident speed in km/h. Default [4]. */
  minAccidentSpeed?: number;
  /**
  * Gets or sets the device minor firmware version. Newer versions have more functionality.
  * Live device firmware versions are managed automatically. Default [0].
  */
  minor?: number;
  /** Gets or sets the Odometer for the device. */
  odometer?: number;
  /**
  * Gets or sets the parameter version that is stored in MyGeotab. The parameter version
  * should be increased by one when the parameters have been modified and need to be
  * synced with the physical device. Default [0].
  */
  parameterVersion?: number;
  /**
  * Gets or sets the parameter version that is on the device. Can be used to track the
  * parameter version currently on the device by comparing to ParameterVersion. Default
  * [0].
  */
  parameterVersionOnDevice?: number;
  /**
  * Gets or sets a toggle that determines whether or not a device is under automatic
  * vehicle management. Default [true]. This value is the inverse of whether automatic
  * vehicle management is enabled. A value of False means<br> that automatic vehicle
  * management is enabled in the UI.<br> 
  */
  pinDevice?: boolean;
  /**
  * Gets or sets the speeding off value in km/h. When 'IsSpeedIndicator' is enabled,
  * once beeping starts, the vehicle must slow down to this speed for the beeping to
  * stop. Default [90].
  */
  speedingOff?: number;
  /**
  * Gets or sets the speeding on value in km/h. When 'IsSpeedIndicator' is enabled,
  * the device will start beeping when the vehicle exceeds this speed. Default [100].
  */
  speedingOn?: number;
  /**
  * Gets or sets the Vehicle Identification Number (VIN) of the vehicle associated with
  * the device. Maximum length [50] Default [""].
  */
  vehicleIdentificationNumber?: string;
}


/**
* A mobile tracking device that is used in MyGeotab. This is used for extensibility
* and is based on the object.
*/
export interface IGoDriveDevice extends IDevice
{
}


/**
* A legacy Geotab device is any GO device prior to GO4v3. Additional properties can
* be seen in {@link IGoDevice}.
*/
export interface IGoLegacy extends IGoDevice
{
  /** Gets or sets an array that can get/set the AuxWarningSpeeds for the vehicle. */
  auxWarningSpeed?: number[];
  /** Gets or sets exposes the radio channels as an array of 20 bytes. */
  channel?: number[];
  /** Gets or sets the channel count. */
  channelCount?: number;
  /**
  * Gets or sets the distance to be used (in meters) to generate a log. A log will be
  * reported each time the this distance has been exceeded. Default [1000].
  */
  deltaDistance?: number;
  /** Gets or sets the delta heading. Default [48]. */
  deltaHeading?: number;
  /** Gets or sets the delta heading HS. Default [14]. */
  deltaHeadingHS?: number;
  /** Gets or sets the delta heading min speed in km/h. Default [14]. */
  deltaHeadingMinSpeed?: number;
  /** Gets or sets the delta heading min speed HS in km/h. Default [72]. */
  deltaHeadingMinSpeedHS?: number;
  /** Gets or sets the delta min speed in km/h. Default [50]. */
  deltaMinSpeed?: number;
  /** Gets or sets the delta speed in km/h. Default [9]. */
  deltaSpeed?: number;
  /** Gets or sets an array that can get/set the EnableAuxWarnings for the vehicle. */
  enableAuxWarning?: boolean[];
  /** Gets or sets the EnableControlExternalRelay value for the vehicle. */
  enableControlExternalRelay?: boolean;
  /** Gets or sets the External Device ShutDown Delay value for the vehicle. */
  externalDeviceShutDownDelay?: number;
  /**
  * Gets or sets the FrequencyOffset used on the device radio. The default is 1 and
  * should not be changed. Only has an effect on Channel Set 0 - which consists of channels
  * 0 to 15.
  */
  frequencyOffset?: number;
  /** Gets or sets the harsh break. Default [17]. */
  harshBreak?: number;
  /** Gets or sets the immobilize arming. */
  immobilizeArming?: number;
  /** Gets or sets a value indicating whether [immobilize unit]. */
  immobilizeUnit?: boolean;
  /** Gets or sets a value indicating whether this instance is aided GPS enabled. */
  isAidedGpsEnabled?: boolean;
  /** Gets or sets an array that can get/set the IsAuxIgnTriggers for the vehicle. */
  isAuxIgnTrigger?: boolean[];
  /**
  * Gets or sets an array of values indicating if a corresponding Aux signal should
  * be inverted on importing the device data.
  */
  isAuxInverted?: boolean[];
  /** Gets or sets whether to send warning on harsh brake. Default [false]. */
  isHarshBrakeWarningOn?: boolean;
  /** Gets or sets the IsRfUploadOnWhenMoving value for the vehicle. */
  isRfUploadOnWhenMoving?: boolean;
  /**
  * Gets or sets the version of this set of rf channels. Each time a change is made,
  * increment this value until it rolls over.
  */
  rfParameterVersion?: number;
}


/** The contents of a {@link ITextMessage} that will be delivered to a GoTalk. */
export interface IGoTalkContent extends ITextMessageContentType
{
  /** Gets or sets the message. The message can be up to 256 characters. */
  message: string;
  /**
  * Gets method to get raw binary. NOTE: The endianness of IDs and other numbers inside
  * of the payload are reversed to keep the C# format.
  */
  payload: number[];
}


/**
*  A group is one element in a hierarchical tree. Each group can have none or many
* children, it is the children that define the shape of the hierarchical tree. The
* parent is not a property of the group object and is only defined by who the group
* is a child of. It is necessary to know the id of the parent group when adding a
* new group or removing an existing group.<br> There are three core Group branches
* used in MyGeotab. The most common are "Company Groups", company Groups are used
* to organize entities ({@link IRule}) into logical groups related to the organization.
* A Group structure can be constructed by region, vocation, reporting or anything
* that makes sense to the business, this allows aggregate reports and rolling up data
* in a flexible way. These groups have a many to many type of relationship with the
* entities that are members and are not limited to one type of entity.<br> The second
* type is "Security Groups", these are Groups to which {@link ISecurityFilter}(s)
* associated to it. Security Filters control what parts of the application/API a User
* has access to.<br> The third type of group is a "Private User Group", this group
* is used only for scheduling reports and displaying dashboard reports for a User.
* This Group will only ever apply to one User and will typically be named the user's
* name.<br> There is a base structure of Groups which cannot be removed, these are
* considered to be "System"<br> Groups:<br> Company GroupSecurity GroupEverything
* Security GroupSupervisor Security GroupUser Security GroupView Only Security GroupNothing
* Security GroupPrivate User Group When Groups are retrieved they will always be in
* a flat list of groups. The hierarchically tree(s) can be reconstructed by looking
* at the "Children" property of each Group. The "Root" group will never be returned
* and is only for system use.<br> 
*/
export interface IGroup extends INameEntity
{
  /** Gets or sets the Children of this group. A list of Group(s). */
  children: IGroup[];
  /**
  * Gets or sets the {@link IColor} used to render assets belonging to this group. Default
  * [Blue].
  */
  color: any;
  /**
  * Gets or sets the free text field where any user information can be stored and referenced
  * for this entity. Default [""].
  */
  comments: string;
  /** Gets or sets the unique identifier for this entity. See {@link IId}. */
  id: string;
  /**
  * Gets or sets the name of this entity that uniquely identifies it and is used when
  * displaying this entity.
  */
  name: string;
  /** Gets or sets the parent Group of the selected group. */
  parent: IGroup;
  /** Gets or sets the ltree path of the group. */
  path: string;
  /**
  * Gets or sets the string reference to add to the database entry for this group. Maximum
  * length [255] Default [""].
  */
  reference: string;
}


/** Group search list */
export interface IGroupListSearch extends ISearch
{
  /** Gets or sets group id */
  groupId?: string;
  /** Gets or sets the groups */
  groupListSearches?: IGroupListSearch[];
  /** Gets or sets how to search the group relations */
  relation?: GroupSearchRelation;
}


/** The entities which hold a relation to a group. */
export interface IGroupRelations
{
  /** Gets or sets the {@link IAddInData}(s) related to the Group. */
  addInDatas: IAddInData[];
  /** Gets or sets the {@link ICustomReportSchedule}(s) related to the Group. */
  customReportSchedules: ICustomReportSchedule[];
  /** Gets or sets the {@link IDefect}(s) related to the Group. */
  defects: IDefect[];
  /** Gets or sets the {@link IDevice}(s) with auto groups related to the Group. */
  deviceAutoGroups: IDevice[];
  /** Gets or sets the {@link IDevice}(s) related to the Group. */
  devices: IDevice[];
  /** Gets or sets the {@link IDriver}(s) related to the Group. */
  drivers: IUser[];
  /** Gets or sets the {@link IDVIRLog}(s) related to the Group. */
  dvirLogs: IDVIRLog[];
  /** Gets or sets the which the entities are related to. */
  group: IGroup;
  /** Gets or sets the {@link IRule}(s) related to the Group. */
  rules: IRule[];
  /** Gets or sets the {@link ITrailer}(s) related to the Group. */
  trailers: ITrailer[];
  /** Gets or sets the {@link IUser}(s) related to the Group. */
  users: IUser[];
  /** Gets or sets the {@link IZone}(s) related to the Group. */
  zones: IZone[];
}


/**
* Exception with information about the grouped linked entities that hold a relation
* preventing removal.
*/
export interface IGroupRelationViolatedException
{
  /** Gets or sets the {@link IGroupRelations} preventing removal. */
  relations: IGroupRelations;
}


/** The object used to specify the arguments when searching for a {@link IGroup}. */
export interface IGroupSearch extends ISearch
{
  /**
  * Gets or sets include Groups from all trees, for example "Security Groups" and "Private
  * User Groups". The"Company Group" tree is included by default.
  */
  includeAllTrees?: boolean;
  /** Gets or sets gets maximum Id of the search criteria. */
  maxId: string;
  /**
  * Gets or sets search for Groups with this Name. Wildcard can be used by prepending/appending
  * "%" to string. Example "%name%".
  */
  name: string;
  /**
  * Gets or sets search for Groups with this Reference. Wildcard can be used by prepending/appending
  * "%" to string. Example "%reference%".
  */
  reference: string;
}


/**
* Represents a GroupSecurity entity. This defines the many to many relationship between
* a {@link IGroup}.
*/
export interface IGroupSecurity extends IEntityWithVersion
{
  /** Gets or sets the associated with the GroupSecurity. */
  group?: IGroup;
  /** Gets or sets the {@link ISecurityFilter} associated with the GroupSecurity. */
  securityFilter?: ISecurityFilter;
}


/** The object used to specify the arguments when searching for a . */
export interface IGroupSecuritySearch extends ISearch
{
}


/** Hos Ruleset. */
export interface IHosRuleSetNew extends IEntity
{
}


/** The message content to immobilize a device. */
export interface IImmobilizationContent extends IDataToComponentContent
{
  /** Gets or sets the relay state. */
  relayState: RelayState;
}


/** Distribution lists for Import/Export notifications. */
export interface IImportExportDistributionList extends IDistributionListSystem
{
}


/** User is in active Exception. */
export interface IInactiveUserException
{
}


/**
* This exception is thrown on a MyAdmin databaseName logon with an incorrect user/password
* combination or when the MyAdmin user's credentials become invalid on a databaseName.
*/
export interface IInvalidMyAdminUserException
{
  /** Gets the database related to the exception. */
  database: string;
  /** Gets the server related to the exception. */
  server: string;
}


/**
* This exception is thrown on a logon with an incorrect user/password combination
* or when the user's credentials become invalid.
*/
export interface IInvalidUserException
{
}


/**
* Represents an Iox Add-On (like modem or navigation device) that is attached to a
* GO unit. Each Iox Add-On is assigned a channel - which is the serial port number
* that it typically communicates with.
*/
export interface IIoxAddOn extends IEntity
{
  /**
  * Gets or sets the channel on which the Add-On is attached to the GO unit. This is
  * typically just a serial port. 0 means the Add-On is not attached.
  */
  channel: number;
  /** Gets or sets the DateTime this IoxAddOn was assigned it's . */
  dateTime?: Date;
  /** Gets or sets the {@link IDevice} this IoxAddOn is connected to. */
  device: IDevice;
  /**
  * Gets or sets the unique identifier for this Iox Add-On type. Iox Add-On types are
  * assigned by Geotab. See {@link IKnownIoxAddOnType}.
  */
  type: number;
}


/**
*  The object used to specify the arguments when searching for {@link IIoxAddOn}(s).<br>
*/
export interface IIoxAddOnSearch extends ISearch
{
  /**
  * Gets or sets if true only Iox Add-Ons that are currently connected to a device will
  * be returned.
  */
  connectedOnly?: boolean;
  /**
  * Gets or sets search for Iox Add-Ons that are or have been attached to this Id. Available
  * DeviceSearch options are:. Id
  */
  deviceSearch: IDeviceSearch;
  /**
  * Gets or sets search for Iox Add-Ons of a specific type (Garmin, GoTalk etc). See
  * {@link IKnownIoxAddOnType}.
  */
  type?: number;
}


/**
* The contents of a {@link ITextMessage} that can be used to control the state of
* an IOX-OUTPUT.
*/
export interface IIoxOutputContent extends IDataToComponentContent
{
  /**
  * Gets or sets a value indicating whether the relay state. [true] if the relay is
  * on; otherwise, [false].
  */
  isRelayOn: boolean;
}


/** Represent the key used to identify a . */
export interface IKey extends IEntity
{
  /** Gets or sets driver of the driver key. */
  driver: IDriver;
  /** Gets or sets the . */
  driverKeyType?: DriverKeyType;
  /**
  * Gets or sets the ID of the driver key. Represents the decoded serial number. USB
  * blue keys are assigned a key ID.
  */
  keyId?: number;
  /**
  * Gets or sets the Serial Number of the driver key. Represents the key ID encoded
  * as a serial number. NFC keys are assigned a serial number.
  */
  serialNumber: string;
}


/** All the system Ids. */
export interface IKnownId
{
  /** Gets the controller aerodynamic control identifier. */
  controllerAerodynamicControlId: string;
  /** Gets the controller aerodynamic control unit identifier. */
  controllerAerodynamicControlUnitId: string;
  /** Gets the controller aftertreatment system gas intake identifier. */
  controllerAftertreatmentSystemGasIntakeId: string;
  /** Gets the controller aftertreatment system gas outlet identifier. */
  controllerAftertreatmentSystemGasOutletId: string;
  /** Gets the controller alternator electrical charging system identifier. */
  controllerAlternatorElectricalChargingSystemId: string;
  /** Gets the controller auxiliary heater no1 identifier. */
  controllerAuxiliaryHeaterNo1Id: string;
  /** Gets the controller auxiliary heater no2 identifier. */
  controllerAuxiliaryHeaterNo2Id: string;
  /** Gets the controller auxiliary valve control identifier. */
  controllerAuxiliaryValveControlId: string;
  /** Gets the controller axle drive no1 identifier. */
  controllerAxleDriveNo1Id: string;
  /** Gets the controller axle drive no2 identifier. */
  controllerAxleDriveNo2Id: string;
  /** Gets the controller axle power unit identifier. */
  controllerAxlePowerUnitId: string;
  /** Gets the controller axle steering identifier. */
  controllerAxleSteeringId: string;
  /** Gets the controller axle trailer identifier. */
  controllerAxleTrailerId: string;
  /** Gets the controller body controller identifier. */
  controllerBodyControllerId: string;
  /** Gets the controller brakes drive axle no1 identifier. */
  controllerBrakesDriveAxleNo1Id: string;
  /** Gets the controller brakes drive axle no2 identifier. */
  controllerBrakesDriveAxleNo2Id: string;
  /** Gets the controller brakes power unit identifier. */
  controllerBrakesPowerUnitId: string;
  /** Gets the controller brakes steer axle identifier. */
  controllerBrakesSteerAxleId: string;
  /** Gets the controller brakes system controller identifier. */
  controllerBrakesSystemControllerId: string;
  /** Gets the controller brakes trailer no1 identifier. */
  controllerBrakesTrailerNo1Id: string;
  /** Gets the controller brakes trailer no2 identifier. */
  controllerBrakesTrailerNo2Id: string;
  /** Gets the controller brakes trailer no3 identifier. */
  controllerBrakesTrailerNo3Id: string;
  /** Gets the identifier for the fixed controller assigned for BRP specific faults. */
  controllerBrpFaultId: string;
  /** Gets the controller CAB climate control identifier. */
  controllerCabClimateControlId: string;
  /** Gets the controller CAB controller primary identifier. */
  controllerCabControllerPrimaryId: string;
  /** Gets the controller CAB controller secondary identifier. */
  controllerCabControllerSecondaryId: string;
  /** Gets the controller CAB display no1 identifier. */
  controllerCabDisplayNo1Id: string;
  /** Gets the controller CAB display no2 identifier. */
  controllerCabDisplayNo2Id: string;
  /** Gets the controller cargo refrigeration heating trailer identifier. */
  controllerCargoRefrigerationHeatingTrailerId: string;
  /** Gets the controller chassis controller no1 identifier. */
  controllerChassisControllerNo1Id: string;
  /** Gets the controller chassis controller no2 identifier. */
  controllerChassisControllerNo2Id: string;
  /** Gets the controller clutch converter unit identifier. */
  controllerClutchConverterUnitId: string;
  /** Gets the controller communications unit cellular identifier. */
  controllerCommunicationsUnitCellularId: string;
  /** Gets the controller communications unit radio identifier. */
  controllerCommunicationsUnitRadioId: string;
  /** Gets the controller communications unit satellite identifier. */
  controllerCommunicationsUnitSatelliteId: string;
  /** Gets the controller communication unit ground identifier. */
  controllerCommunicationUnitGroundId: string;
  /** Gets the controller communication unit satellite identifier. */
  controllerCommunicationUnitSatelliteId: string;
  /** Gets the controller cranking starting system identifier. */
  controllerCrankingStartingSystemId: string;
  /** Gets the controller data logging computer identifier. */
  controllerDataLoggingComputerId: string;
  /** Gets the geotab ai model controller identifier. */
  controllerDefaultGeotabAiModelId: string;
  /** Gets the controller diagnostic systems power unit identifier. */
  controllerDiagnosticSystemsPowerUnitId: string;
  /** Gets the controller diagnostic systems trailer identifier. */
  controllerDiagnosticSystemsTrailerId: string;
  /** Gets the controller driver information center no1 identifier. */
  controllerDriverInformationCenterNo1Id: string;
  /** Gets the controller electrical charging system identifier. */
  controllerElectricalChargingSystemId: string;
  /** Gets the controller electrical identifier. */
  controllerElectricalId: string;
  /** Gets the controller electrical system identifier. */
  controllerElectricalSystemId: string;
  /** Gets the controller endurance braking system identifier. */
  controllerEnduranceBrakingSystemId: string;
  /** Gets the controller engine no2 identifier. */
  controllerEngineNo2Id: string;
  /** Gets the controller engine no3 identifier. */
  controllerEngineNo3Id: string;
  /** Gets the controller engine retarder identifier. */
  controllerEngineRetarderId: string;
  /** Gets the controller engine valve controller identifier. */
  controllerEngineValveControllerId: string;
  /** Gets the controller exhaust emission controller identifier. */
  controllerExhaustEmissionControllerId: string;
  /** Gets the controller fan drive controller identifier. */
  controllerFanDriveControllerId: string;
  /** Gets the geotab ai model controller identifier. */
  controllerGeotabAiModelFaultId: string;
  /** Gets the identifier for the fixed controller assigned for GMCCC specific faults. */
  controllerGmcccFaultId: string;
  /** Gets the identifier for the fixed controller assigned to the GO device. */
  controllerGoDeviceId: string;
  /** Gets the controller headway controller identifier. */
  controllerHeadwayControllerId: string;
  /** Gets the controller hitch control identifier. */
  controllerHitchControlId: string;
  /** Gets the controller hydraulic pump controller identifier. */
  controllerHydraulicPumpControllerId: string;
  /** Gets the controller ignition control module no1 identifier. */
  controllerIgnitionControlModuleNo1Id: string;
  /** Gets the controller ignition control module no2 identifier. */
  controllerIgnitionControlModuleNo2Id: string;
  /** Gets the controller information system controller no1 identifier. */
  controllerInformationSystemControllerNo1Id: string;
  /** Gets the controller instrument cluster identifier. */
  controllerInstrumentClusterId: string;
  /** Gets the controller instrument cluster no1 identifier. */
  controllerInstrumentClusterNo1Id: string;
  /** Gets the controller J1708 cruise control identifier. */
  controllerJ1708CruiseControlId: string;
  /** Gets the controller J1708 engine identifier. */
  controllerJ1708EngineId: string;
  /** Gets the controller J1708 fuel system identifier. */
  controllerJ1708FuelSystemId: string;
  /** Gets the controller J1708 pneumatic system controller identifier. */
  controllerJ1708PneumaticSystemControllerId: string;
  /** Gets the controller J1708 power takeoff identifier. */
  controllerJ1708PowerTakeoffId: string;
  /** Gets the controller J1708 trip recorder identifier. */
  controllerJ1708TripRecorderId: string;
  /** Gets the controller J1708 turbocharger identifier. */
  controllerJ1708TurbochargerId: string;
  /** Gets the controller J1708 vehicle security identifier. */
  controllerJ1708VehicleSecurityId: string;
  /** Gets the controller J1939 cruise control identifier. */
  controllerJ1939CruiseControlId: string;
  /** Gets the controller J1939 engine no1 identifier. */
  controllerJ1939EngineNo1Id: string;
  /** Gets the controller J1939 engine no2 identifier. */
  controllerJ1939EngineNo2Id: string;
  /** Gets the controller J1939 fuel system identifier. */
  controllerJ1939FuelSystemId: string;
  /** Gets the controller J1939 pneumatic system controller identifier. */
  controllerJ1939PneumaticSystemControllerId: string;
  /** Gets the controller J1939 power take off main rear identifier. */
  controllerJ1939PowerTakeOffMainRearId: string;
  /** Gets the controller J1939 trip recorder identifier. */
  controllerJ1939TripRecorderId: string;
  /** Gets the controller J1939 turbocharger identifier. */
  controllerJ1939TurbochargerId: string;
  /** Gets the controller J1939 vehicle security identifier. */
  controllerJ1939VehicleSecurityId: string;
  /**
  * Gets the identifier for the fixed controller assigned for legacy manufacturer specific
  * faults.
  */
  controllerLegacyFaultId: string;
  /** Gets the controller lighting operator controls identifier. */
  controllerLightingOperatorControlsId: string;
  /** Gets the controller management computer no1 identifier. */
  controllerManagementComputerNo1Id: string;
  /** Gets the controller multiplex identifier. */
  controllerMultiplexId: string;
  /** Gets the controller none identifier. */
  controllerNoneId: string;
  /** Gets the controller OBD body identifier. */
  controllerObdBodyId: string;
  /** Gets the controller OBD chassis identifier. */
  controllerObdChassisId: string;
  /** Gets the controller OBD networking identifier. */
  controllerObdNetworkingId: string;
  /** Gets the controller OBD powertrain identifier. */
  controllerObdPowertrainId: string;
  /** Gets the controller WWH OBD body identifier. */
  controllerObdWwhBodyId: string;
  /** Gets the controller WWH OBD chassis identifier. */
  controllerObdWwhChassisId: string;
  /** Gets the controller WWH OBD networking identifier. */
  controllerObdWwhNetworkingId: string;
  /** Gets the controller WWH OBD powertrain identifier. */
  controllerObdWwhPowertrainId: string;
  /** Gets the controller off-board diagnostics no1 identifier. */
  controllerOffboardDiagnosticsNo1Id: string;
  /** Gets the controller off-board diagnostics no2 identifier. */
  controllerOffboardDiagnosticsNo2Id: string;
  /** Gets the controller off-board programming station identifier. */
  controllerOffboardProgrammingStationId: string;
  /** Gets the controller off vehicle gateway identifier. */
  controllerOffVehicleGatewayId: string;
  /** Gets the controller oil sensor identifier. */
  controllerOilSensorId: string;
  /** Gets the controller on board diagnostic unit identifier. */
  controllerOnBoardDiagnosticUnitId: string;
  /** Gets the controller parking brake controller identifier. */
  controllerParkingBrakeControllerId: string;
  /** Gets the controller particulate trap system identifier. */
  controllerParticulateTrapSystemId: string;
  /** Gets the controller passenger operator climate control1 identifier. */
  controllerPassengerOperatorClimateControl1Id: string;
  /** Gets the controller passenger operator climate control no2 identifier. */
  controllerPassengerOperatorClimateControlNo2Id: string;
  /** Gets the controller power take off front secondary identifier. */
  controllerPowerTakeOffFrontSecondaryId: string;
  /**
  * Gets the identifier for the fixed controller assigned for manufacturer specific
  * faults.
  */
  controllerProprietaryFaultId: string;
  /** Gets the controller propulsion battery charger identifier. */
  controllerPropulsionBatteryChargerId: string;
  /** Gets the controller proximity detector front identifier. */
  controllerProximityDetectorFrontId: string;
  /** Gets the controller proximity detector rear identifier. */
  controllerProximityDetectorRearId: string;
  /** Gets the controller ramp control identifier. */
  controllerRampControlId: string;
  /** Gets the controller rear axle steering controller identifier. */
  controllerRearAxleSteeringControllerId: string;
  /** Gets the controller rear axle steering controller no1 identifier. */
  controllerRearAxleSteeringControllerNo1Id: string;
  /** Gets the controller retarder driveline identifier. */
  controllerRetarderDrivelineId: string;
  /** Gets the controller retarder engine identifier. */
  controllerRetarderEngineId: string;
  /** Gets the controller retarder exhaust engine no1 identifier. */
  controllerRetarderExhaustEngineNo1Id: string;
  /** Gets the controller retarder exhaust engine no2 identifier. */
  controllerRetarderExhaustEngineNo2Id: string;
  /** Gets the controller road speed indicator identifier. */
  controllerRoadSpeedIndicatorId: string;
  /** Gets the controller safety restraint system identifier. */
  controllerSafetyRestraintSystemId: string;
  /** Gets the controller seat control no1 identifier. */
  controllerSeatControlNo1Id: string;
  /** Gets the controller seat control no2 identifier. */
  controllerSeatControlNo2Id: string;
  /** Gets the controller shift console primary identifier. */
  controllerShiftConsolePrimaryId: string;
  /** Gets the controller shift console secondary identifier. */
  controllerShiftConsoleSecondaryId: string;
  /** Gets the controller starter system identifier. */
  controllerStarterSystemId: string;
  /** Gets the controller steering column unit identifier. */
  controllerSteeringColumnUnitId: string;
  /** Gets the controller steering controller identifier. */
  controllerSteeringControllerId: string;
  /** Gets the Controller suspension drive axle no1 identifier. */
  controllerSuspensionDriveAxleNo1Id: string;
  /** Gets the controller suspension drive axle no2 identifier. */
  controllerSuspensionDriveAxleNo2Id: string;
  /** Gets the controller suspension power unit identifier. */
  controllerSuspensionPowerUnitId: string;
  /** Gets the controller suspension steer axle identifier. */
  controllerSuspensionSteerAxleId: string;
  /** Gets the controller suspension system controller no1 identifier. */
  controllerSuspensionSystemControllerNo1Id: string;
  /** Gets the controller suspension system controller no2 identifier. */
  controllerSuspensionSystemControllerNo2Id: string;
  /** Gets the controller suspension trailer identifier. */
  controllerSuspensionTrailerId: string;
  /** Gets the controller tire pressure controller identifier. */
  controllerTirePressureControllerId: string;
  /** Gets the controller tires control unit identifier. */
  controllerTiresControlUnitId: string;
  /** Gets the controller tires power unit identifier. */
  controllerTiresPowerUnitId: string;
  /** Gets the controller tires trailer identifier. */
  controllerTiresTrailerId: string;
  /** Gets the controller tires trailer no2 identifier. */
  controllerTiresTrailerNo2Id: string;
  /** Gets the controller tires trailer no3 identifier. */
  controllerTiresTrailerNo3Id: string;
  /** Gets the controller tractor trailer bridge no1 identifier. */
  controllerTractorTrailerBridgeNo1Id: string;
  /** Gets the controller transmission additional hybrid control module identifier. */
  controllerTransmissionAdditionalHybridControlModuleId: string;
  /** Gets the controller transmission display primary identifier. */
  controllerTransmissionDisplayPrimaryId: string;
  /** Gets the controller transmission display secondary identifier. */
  controllerTransmissionDisplaySecondaryId: string;
  /** Gets the controller transmission identifier. */
  controllerTransmissionId: string;
  /** Gets the controller transmission no1 identifier. */
  controllerTransmissionNo1Id: string;
  /** Gets the controller transmission no2 identifier. */
  controllerTransmissionNo2Id: string;
  /** Gets the controller vehicle dynamic stability controller identifier. */
  controllerVehicleDynamicStabilityControllerId: string;
  /** Gets the controller vehicle management system identifier. */
  controllerVehicleManagementSystemId: string;
  /** Gets the controller vehicle management system no2 identifier. */
  controllerVehicleManagementSystemNo2Id: string;
  /** Gets the controller vehicle management system no3 identifier. */
  controllerVehicleManagementSystemNo3Id: string;
  /** Gets the controller vehicle navigation identifier. */
  controllerVehicleNavigationId: string;
  /** Gets the controller vehicle navigation unit identifier. */
  controllerVehicleNavigationUnitId: string;
  /** Gets the controller vehicle sensors to data converter identifier. */
  controllerVehicleSensorsToDataConverterId: string;
  /** Gets the controller virtual terminal identifier. */
  controllerVirtualTerminalId: string;
  /** Gets the controller water pump controller identifier. */
  controllerWaterPumpControllerId: string;
  /** Gets the diagnostic ABS system active identifier. */
  diagnosticAbsSystemActiveId: string;
  /** Gets the diagnostic ABS warning light identifier. */
  diagnosticAbsWarningLightId: string;
  /** Gets the diagnostic acceleration event before calibration identifier. */
  diagnosticAccelerationEventbeforeCalibrationId: string;
  /** Gets the diagnostic acceleration forward braking identifier. */
  diagnosticAccelerationForwardBrakingId: string;
  /** Gets the diagnostic acceleration side to side identifier. */
  diagnosticAccelerationSideToSideId: string;
  /** Gets the diagnostic acceleration up down identifier. */
  diagnosticAccelerationUpDownId: string;
  /** Gets the diagnostic accelerometer calibrated identifier. */
  diagnosticAccelerometerCalibratedId: string;
  /** Gets the diagnostic accelerometer failed to initialize identifier. */
  diagnosticAccelerometerFailedToInitializeId: string;
  /** Gets the diagnostic accelerometer interrupt failure identifier. */
  diagnosticAccelerometerInterruptFailureId: string;
  /** Gets the diagnostic accident data upload event identifier. */
  diagnosticAccidentDataUploadEventId: string;
  /** Gets the diagnostic accident level acceleration event identifier. */
  diagnosticAccidentLevelAccelerationEventId: string;
  /** Gets the diagnostic ac control unit status identifier. */
  diagnosticAcControlUnitStatusId: string;
  /** Gets the diagnostic airbag deployed identifier. */
  diagnosticAirbagDeployedId: string;
  /** Gets the diagnostic airbag nearly deployed identifier. */
  diagnosticAirbagNearlyDeployedId: string;
  /** Gets the diagnostic airbag warning light identifier. */
  diagnosticAirbagWarningLightId: string;
  /** Gets the diagnostic air conditioner refrigerant pressure identifier. */
  diagnosticAirConditionerRefrigerantPressureId: string;
  /** Gets the diagnostic id for analog auxiliary 1. */
  diagnosticAnalogAux1Id: string;
  /** Gets the diagnostic id for analog auxiliary 2. */
  diagnosticAnalogAux2Id: string;
  /** Gets the diagnostic id for analog auxiliary 3. */
  diagnosticAnalogAux3Id: string;
  /** Gets the diagnostic id for analog auxiliary 4. */
  diagnosticAnalogAux4Id: string;
  /** Gets the diagnostic id for analog auxiliary 5. */
  diagnosticAnalogAux5Id: string;
  /** Gets the diagnostic id for analog auxiliary 6. */
  diagnosticAnalogAux6Id: string;
  /** Gets the diagnostic id for analog auxiliary 7. */
  diagnosticAnalogAux7Id: string;
  /** Gets the diagnostic id for analog auxiliary 8. */
  diagnosticAnalogAux8Id: string;
  /** Gets the diagnostic APN re scan started due to connection failure identifier. */
  diagnosticApnReScanStartedDueToConnectionFailureId: string;
  /** Gets the diagnostic aux1 identifier. */
  diagnosticAux1Id: string;
  /** Gets the diagnostic aux2 identifier. */
  diagnosticAux2Id: string;
  /** Gets the diagnostic aux3 identifier. */
  diagnosticAux3Id: string;
  /** Gets the diagnostic aux4 identifier. */
  diagnosticAux4Id: string;
  /** Gets the diagnostic aux5 identifier. */
  diagnosticAux5Id: string;
  /** Gets the diagnostic aux6 identifier. */
  diagnosticAux6Id: string;
  /** Gets the diagnostic aux7 identifier. */
  diagnosticAux7Id: string;
  /** Gets the diagnostic aux8 identifier. */
  diagnosticAux8Id: string;
  /** Gets the diagnostic auxiliary module failure identifier. */
  diagnosticAuxiliaryModuleFailureId: string;
  /** Gets the diagnostic average fuel economy identifier. */
  diagnosticAverageFuelEconomyId: string;
  /** Gets the diagnostic average fuel economy natural gas identifier. */
  diagnosticAverageFuelEconomynaturalGasId: string;
  /** Gets the diagnostic battery current identifier. */
  diagnosticBatteryCurrentId: string;
  /** Gets the diagnostic battery temperature identifier. */
  diagnosticBatteryTemperatureId: string;
  /** Gets the diagnostic Bluetooth Ammonia (NH3) concentration identifier. */
  diagnosticBluetoothAmmoniaConcentrationId: string;
  /** Gets the diagnostic Bluetooth beacon battery level identifier. */
  diagnosticBluetoothBeaconBatteryLevelId: string;
  /** Gets the diagnostic Bluetooth beacon category identifier. */
  diagnosticBluetoothBeaconCategoryId: string;
  /** Gets the diagnostic Bluetooth beacon in range identifier. */
  diagnosticBluetoothBeaconInRangeId: string;
  /** Gets the diagnostic Bluetooth beacon live altitude identifier. */
  diagnosticBluetoothBeaconLiveAltitudeId: string;
  /** Gets the diagnostic Bluetooth beacon live barometric pressure identifier. */
  diagnosticBluetoothBeaconLiveBarometricPressureId: string;
  /** Gets the diagnostic Bluetooth beacon live impact identifier. */
  diagnosticBluetoothBeaconLiveImpactId: string;
  /** Gets the diagnostic Bluetooth beacon live light identifier. */
  diagnosticBluetoothBeaconLiveLightId: string;
  /** Gets the diagnostic Bluetooth beacon live relative humidity identifier. */
  diagnosticBluetoothBeaconLiveRelativeHumidityId: string;
  /** Gets the diagnostic Bluetooth beacon live temperature identifier. */
  diagnosticBluetoothBeaconLiveTemperatureId: string;
  /**
  * Gets the diagnostic Bluetooth beacon particulate matter less than 10 micrometers
  * identifier.
  */
  diagnosticBluetoothBeaconParticulateMatter10MicronId: string;
  /** Gets the diagnostic Bluetooth beacon particulate matter less than 1 micrometer identifier. */
  diagnosticBluetoothBeaconParticulateMatter1MicronId: string;
  /**
  * Gets the diagnostic Bluetooth beacon particulate matter less than 2.5 micrometers
  * identifier.
  */
  diagnosticBluetoothBeaconParticulateMatter2P5MicronId: string;
  /** Gets the diagnostic Bluetooth Carbon Dioxide (CO2) concentration identifier. */
  diagnosticBluetoothCarbonDioxideConcentrationId: string;
  /** Gets the diagnostic Bluetooth Carbon Monoxide (CO) concentration identifier. */
  diagnosticBluetoothCarbonMonoxideConcentrationId: string;
  /** Gets the diagnostic Bluetooth generic timer for identifer 255. */
  diagnosticBluetoothCustomData255Id: string;
  /** Gets the diagnostic Bluetooth Ethanol (C2H5OH) concentration identifier. */
  diagnosticBluetoothEthanolConcentrationId: string;
  /** Gets the diagnostic Bluetooth fuel level identifier. */
  diagnosticBluetoothFuelLevelId: string;
  /** Gets the diagnostic Bluetooth generic byte for identifer 230. */
  diagnosticBluetoothGenericByte230Id: string;
  /** Gets the diagnostic Bluetooth generic byte for identifer 231. */
  diagnosticBluetoothGenericByte231Id: string;
  /** Gets the diagnostic Bluetooth generic byte for identifer 232. */
  diagnosticBluetoothGenericByte232Id: string;
  /** Gets the diagnostic Bluetooth generic byte for identifer 233. */
  diagnosticBluetoothGenericByte233Id: string;
  /** Gets the diagnostic Bluetooth generic byte for identifer 234. */
  diagnosticBluetoothGenericByte234Id: string;
  /** Gets the diagnostic Bluetooth generic byte for identifer 235. */
  diagnosticBluetoothGenericByte235Id: string;
  /** Gets the diagnostic Bluetooth generic byte for identifer 236. */
  diagnosticBluetoothGenericByte236Id: string;
  /** Gets the diagnostic Bluetooth generic byte for identifer 237. */
  diagnosticBluetoothGenericByte237Id: string;
  /** Gets the diagnostic Bluetooth generic byte for identifer 238. */
  diagnosticBluetoothGenericByte238Id: string;
  /** Gets the diagnostic Bluetooth generic byte for identifer 239. */
  diagnosticBluetoothGenericByte239Id: string;
  /** Gets the diagnostic Bluetooth generic timer for identifer 240. */
  diagnosticBluetoothGenericTimer240Id: string;
  /** Gets the diagnostic Bluetooth generic timer for identifer 241. */
  diagnosticBluetoothGenericTimer241Id: string;
  /** Gets the diagnostic Bluetooth generic timer for identifer 242. */
  diagnosticBluetoothGenericTimer242Id: string;
  /** Gets the diagnostic Bluetooth generic timer for identifer 243. */
  diagnosticBluetoothGenericTimer243Id: string;
  /** Gets the diagnostic Bluetooth generic timer for identifer 244. */
  diagnosticBluetoothGenericTimer244Id: string;
  /** Gets the diagnostic Bluetooth generic timer for identifer 245. */
  diagnosticBluetoothGenericTimer245Id: string;
  /** Gets the diagnostic Bluetooth generic timer for identifer 246. */
  diagnosticBluetoothGenericTimer246Id: string;
  /** Gets the diagnostic Bluetooth generic timer for identifer 247. */
  diagnosticBluetoothGenericTimer247Id: string;
  /** Gets the diagnostic Bluetooth generic timer for identifer 248. */
  diagnosticBluetoothGenericTimer248Id: string;
  /** Gets the diagnostic Bluetooth generic timer for identifer 249. */
  diagnosticBluetoothGenericTimer249Id: string;
  /** Gets the diagnostic Bluetooth Hydrogen (H2) concentration identifier. */
  diagnosticBluetoothHydrogenConcentrationId: string;
  /** Gets the diagnostic Bluetooth Methane (CH4) concentration identifier. */
  diagnosticBluetoothMethaneConcentrationId: string;
  /** Gets the diagnostic Bluetooth Nitric Oxide (NO) concentration identifier. */
  diagnosticBluetoothNitricOxideConcentrationId: string;
  /** Gets the diagnostic Bluetooth Nitrogen Dioxide (NO2) concentration identifier. */
  diagnosticBluetoothNitrogenDioxideConcentrationId: string;
  /** Gets the diagnostic bootloader update has failed identifier. */
  diagnosticBootloaderUpdateHasFailedId: string;
  /** Gets the diagnostic brake pedal on identifier. */
  diagnosticBrakePedalOnId: string;
  /** Gets the diagnostic brake temperature identifier. */
  diagnosticBrakeTemperatureId: string;
  /** Gets the diagnostic bus access door identifier. */
  diagnosticBusAccessDoorId: string;
  /** Gets the diagnostic CAB interior temperature identifier. */
  diagnosticCabInteriorTemperatureId: string;
  /** Gets the diagnostic CANBUS disabled identifier. */
  diagnosticCanBusDisabledId: string;
  /** Gets the diagnostic CANBUS excessive listen identifier. */
  diagnosticCanBusExcessiveListenId: string;
  /** Gets the diagnostic CANBUS failed to initialize identifier. */
  diagnosticCanBusFailedToInitializeId: string;
  /** Gets the diagnostic CANBUS oscillating active passive identifier. */
  diagnosticCanBusOscillatingActivePassiveId: string;
  /** Gets the diagnostic CANBUS short identifier. */
  diagnosticCanBusShortId: string;
  /** Gets the diagnostic CAN mode initialization failure identifier. */
  diagnosticCanModeInitializationFailureId: string;
  /** Gets the diagnostic can transmit error count exceeded identifier. */
  diagnosticCanTransmitErrorCountExceededId: string;
  /** Gets the diagnostic change clean exhaust filter warning light identifier. */
  diagnosticChangeCleanExhaustFilterWarningLightId: string;
  /** Gets the diagnostic change fuel filter warning light identifier. */
  diagnosticChangeFuelFilterWarningLightId: string;
  /** Gets the diagnostic charge state identifier. */
  diagnosticChargeStateId: string;
  /** Gets the diagnostic winter operation controller status. */
  diagnosticControllerStatusId: string;
  /** Gets the diagnostic coolant level identifier. */
  diagnosticCoolantLevelId: string;
  /** Gets the diagnostic cranking voltage identifier. */
  diagnosticCrankingVoltageId: string;
  /** Gets the diagnostic cruise control active identifier. */
  diagnosticCruiseControlActiveId: string;
  /** Gets the diagnostic cruise control enabled identifier. */
  diagnosticCruiseControlEnabledId: string;
  /** Gets the diagnostic dash warning light amber lamp identifier. */
  diagnosticDashWarningLightAmberLampId: string;
  /** Gets the diagnostic dash warning light protect lamp identifier. */
  diagnosticDashWarningLightProtectLampId: string;
  /** Gets the diagnostic dash warning light red lamp identifier. */
  diagnosticDashWarningLightRedLampId: string;
  /** Gets the diagnostic device disabled identifier. */
  diagnosticDeviceDisabledId: string;
  /** Gets the diagnostic device has been unplugged identifier. */
  diagnosticDeviceHasBeenUnpluggedId: string;
  /** Gets the diagnostic device logging disabled identifier. */
  diagnosticDeviceLoggingDisabledId: string;
  /** Gets the diagnostic device oscillator issue identifier. */
  diagnosticDeviceOscillatorIssueId: string;
  /** Gets the diagnostic device power change identifier. */
  diagnosticDevicePowerChangeId: string;
  /** Gets the diagnostic device restarted because all power was removed identifier. */
  diagnosticDeviceRestartedBecauseAllPowerWasRemovedId: string;
  /** Gets the diagnostic device restarted because of firmware update identifier. */
  diagnosticDeviceRestartedBecauseOfFirmwareUpdateId: string;
  /** Gets the diagnostic device restarted because of low voltage in power supply identifier. */
  diagnosticDeviceRestartedBecauseOfLowVoltageInPowerSupplyId: string;
  /** Gets the diagnostic device restarted due to internal reset condition identifier. */
  diagnosticDeviceRestartedDueToInternalResetConditionId: string;
  /** Gets the diagnostic device restarted due to internal watchdog condition identifier. */
  diagnosticDeviceRestartedDueToInternalWatchdogConditionId: string;
  /** Gets the diagnostic device total fuel identifier. */
  diagnosticDeviceTotalFuelId: string;
  /** Gets the diagnostic device total idle fuel identifier. */
  diagnosticDeviceTotalIdleFuelId: string;
  /** Gets the diagnostic diesel exhaust fluid identifier. */
  diagnosticDieselExhaustFluidId: string;
  /** Gets the diagnostic diesel particulate filter lamp identifier. */
  diagnosticDieselParticulateFilterLampId: string;
  /** Gets the diagnostic disabled excessive accelerometer data identifier. */
  diagnosticDisabledExcessiveAccelerometerDataId: string;
  /** Gets the diagnostic driver airbag deployed identifier. */
  diagnosticDriverAirbagDeployedId: string;
  /** Gets the diagnostic driver audible alert for idle shutdown timer identifier. */
  diagnosticDriverAudibleAlertForIdleShutdownTimerId: string;
  /** Gets the diagnostic driver seat belt identifier. */
  diagnosticDriverSeatbeltId: string;
  /** Gets the diagnostic electrical system rating identifier. */
  diagnosticElectricalSystemRatingId: string;
  /** Gets the electric vehicle battery total driving energy in identifier. Units: kWh */
  diagnosticElectricEnergyInId: string;
  /** Gets the electric vehicle battery total driving energy out identifier. Units: kWh */
  diagnosticElectricEnergyOutId: string;
  /** Gets the diagnostic id for electric vehicle battery power. */
  diagnosticElectricVehicleBatteryPowerId: string;
  /** Gets the diagnostic id for charge type (AC or DC). */
  diagnosticElectricVehicleChargingStateId: string;
  /** Gets the diagnostic id for the IsCharging signal */
  diagnosticElectricVehicleIsChargingId: string;
  /** Gets the diagnostic engine check fuel filler cap warning light identifier. */
  diagnosticEngineCheckFuelFillerCapWarningLightId: string;
  /** Gets the diagnostic engine coolant temperature identifier. */
  diagnosticEngineCoolantTemperatureId: string;
  /** Gets the diagnostic engine cooling fan speed identifier. */
  diagnosticEngineCoolingFanSpeedId: string;
  /** Gets the diagnostic engine data active identifier. */
  diagnosticEngineDataActiveId: string;
  /** Gets the diagnostic engine hot warning light identifier. */
  diagnosticEngineHotWarningLightId: string;
  /** Gets the diagnostic engine hours adjustment identifier. */
  diagnosticEngineHoursAdjustmentId: string;
  /** Gets the diagnostic engine hours identifier. */
  diagnosticEngineHoursId: string;
  /** Gets the diagnostic engine oil level identifier. */
  diagnosticEngineOilLevelId: string;
  /** Gets the diagnostic engine oil life remaining identifier. */
  diagnosticEngineOilLifeRemainingId: string;
  /** Gets the diagnostic engine oil starvation indicator on identifier. */
  diagnosticEngineOilStarvationIndicatorOnId: string;
  /** Gets the diagnostic engine oil temperature identifier. */
  diagnosticEngineOilTemperatureId: string;
  /** Gets the diagnostic engine on time identifier. */
  diagnosticEngineOnTimeId: string;
  /** Gets the diagnostic engine operating in reduced power mode warning light identifier. */
  diagnosticEngineOperatingInReducedPowerModeWarningLightId: string;
  /** Gets the diagnostic engine road speed identifier. */
  diagnosticEngineRoadSpeedId: string;
  /** Gets the diagnostic engine running due to vehicle remote starter identifier. */
  diagnosticEngineRunningDueToVehicleRemoteStarterId: string;
  /** Gets the diagnostic engine shutdown by idle timer identifier. */
  diagnosticEngineShutdownByIdleTimerId: string;
  /** Gets the diagnostic engine speed identifier. */
  diagnosticEngineSpeedId: string;
  /** Gets the diagnostic engine starting disabled warning light identifier. */
  diagnosticEngineStartingDisabledWarningLightId: string;
  /** Gets the diagnostic engine transmission oil temperature identifier. */
  diagnosticEngineTransmissionOilTemperatureId: string;
  /** Gets the diagnostic engine warning light identifier. */
  diagnosticEngineWarningLightId: string;
  /** Gets the diagnostic excessive accelerometer events identifier. */
  diagnosticExcessiveAccelerometerEventsId: string;
  /** Gets the diagnostic excessive accelerometer events over accident threshold identifier. */
  diagnosticExcessiveAccelerometerEventsOverAccidentThresholdId: string;
  /** Gets the diagnostic excessive accelerometer logs in a single event identifier. */
  diagnosticExcessiveAccelerometerLogsInASingleEventId: string;
  /** Gets the diagnostic excessive logging detected identifier. */
  diagnosticExcessiveLoggingDetectedId: string;
  /** Gets the diagnostic exhaust differential pressure identifier. */
  diagnosticExhaustDifferentialPressureId: string;
  /** Gets the diagnostic first row middle seat belt identifier. */
  diagnosticFirstRowMiddleSeatbeltId: string;
  /** Gets the diagnostic flash error count identifier. */
  diagnosticFlashErrorCountId: string;
  /** Gets the diagnostic flashing amber light identifier. */
  diagnosticFlashingAmberLightId: string;
  /** Gets the diagnostic flashing red light identifier. */
  diagnosticFlashingRedLightId: string;
  /** Gets the diagnostic flash memory failure identifier. */
  diagnosticFlashMemoryFailureId: string;
  /** Gets the diagnostic Ford ISO protocol detected identifier. */
  diagnosticFordIsoProtocolDetectedId: string;
  /** Gets the diagnostic frontal impact pretensioner severity achieved identifier. */
  diagnosticFrontalImpactPretensionerSeverityAchievedId: string;
  /** Gets the diagnostic frontal impact stage1 severity achieved identifier. */
  diagnosticFrontalImpactStage1SeverityAchievedId: string;
  /** Gets the diagnostic frontal impact stage2 severity achieved identifier. */
  diagnosticFrontalImpactStage2SeverityAchievedId: string;
  /** Gets the diagnostic fuel alcohol composition identifier. */
  diagnosticFuelAlcoholCompositionId: string;
  /** Gets the diagnostic fuel filter life remaining identifier. */
  diagnosticFuelFilterLifeRemainingId: string;
  /** Gets the diagnostic fuel level identifier. */
  diagnosticFuelLevelId: string;
  /** Gets the diagnostic fuel tank capacity identifier. */
  diagnosticFuelTankCapacityId: string;
  /** Gets the diagnostic fuel units identifier. */
  diagnosticFuelUnitsId: string;
  /** Gets the diagnostic gear position identifier. */
  diagnosticGearPositionId: string;
  /** Gets the diagnostic general vehicle warning light identifier. */
  diagnosticGeneralVehicleWarningLightId: string;
  /** Gets the diagnostic Geotab driver key read error identifier. */
  diagnosticGeotabDriverKeyReadErrorId: string;
  /** Gets the diagnostic GMLAN high speed engine protocol detected identifier. */
  diagnosticGmlanHighspeedEngineProtocolDetectedId: string;
  /** Gets the diagnostic GMLAN low speed engine protocol detected identifier. */
  diagnosticGmlanLowspeedEngineProtocolDetectedId: string;
  /** Gets the diagnostic GM SWC low speed protocol detected identifier. */
  diagnosticGmSwcLowSpeedProtocolDetectedId: string;
  /** Gets the diagnostic GO device voltage identifier. */
  diagnosticGoDeviceVoltageId: string;
  /** Gets the diagnostic GPS antenna short circuit identifier. */
  diagnosticGpsAntennaShortCircuitId: string;
  /** Gets the diagnostic GPS antenna unplugged identifier. */
  diagnosticGpsAntennaUnpluggedId: string;
  /** Gets the diagnostic GPS configuration retry identifier. */
  diagnosticGpsConfigurationRetryId: string;
  /** Gets the diagnostic GPS log reason. */
  diagnosticGpsLogReasonId: string;
  /** Gets the diagnostic GPS not responding identifier. */
  diagnosticGpsNotRespondingId: string;
  /** Gets the diagnostic hard corner identifier. */
  diagnosticHardCornerId: string;
  /** Gets the diagnostic harness detected6 pin identifier. */
  diagnosticHarnessDetected6PinId: string;
  /** Gets the diagnostic harness detected9 pin identifier. */
  diagnosticHarnessDetected9PinId: string;
  /** Gets the diagnostic harsh acceleration identifier. */
  diagnosticHarshAccelerationId: string;
  /** Gets the diagnostic harsh brake identifier. */
  diagnosticHarshBrakeId: string;
  /** Gets the diagnostic high voltage while ignition off identifier. */
  diagnosticHighVoltageWhileIgnitionOffId: string;
  /** Gets the diagnostic Honda IDO engine protocol detected identifier. */
  diagnosticHondaIsoEngineProtocolDetectedId: string;
  /** Gets the diagnostic hybrid engine status identifier. */
  diagnosticHybridEngineStatusId: string;
  /** Gets the diagnostic hybrid vehicle detected identifier. */
  diagnosticHybridVehicleDetectedId: string;
  /** Gets the diagnostic idle shutdown timer active identifier. */
  diagnosticIdleShutdownTimerActiveId: string;
  /** Gets the diagnostic idle shutdown timer enabled identifier. */
  diagnosticIdleShutdownTimerEnabledId: string;
  /** Gets the diagnostic idle shutdown timer override identifier. */
  diagnosticIdleShutdownTimerOverrideId: string;
  /** Gets the diagnostic ignition identifier. */
  diagnosticIgnitionId: string;
  /** Gets the diagnostic instantaneous fuel economy identifier. */
  diagnosticInstantaneousFuelEconomyId: string;
  /** Gets the diagnostic instantaneous fuel rate identifier. */
  diagnosticInstantaneousFuelRateId: string;
  /** Gets the diagnostic intermittent connection communications identifier. */
  diagnosticIntermittentConnectionCommunicationsId: string;
  /** Gets the diagnostic internal clock stopped identifier. */
  diagnosticInternalClockStoppedId: string;
  /** Gets the diagnostic invalid device type detected identifier. */
  diagnosticInvalidDeviceTypeDetectedId: string;
  /** Gets the diagnostic invalid driver identifier. */
  diagnosticInvalidDriverIdId: string;
  /** Gets the diagnostic invalid GPS messages received identifier. */
  diagnosticInvalidGpsMessagesReceivedId: string;
  /** Gets the diagnostic invalid opcode reset identifier. */
  diagnosticInvalidOpcodeResetId: string;
  /** Gets the diagnostic Iridium accelerometer event identifier. */
  diagnosticIridiumAccelerometerEventId: string;
  /** Gets the diagnostic Iridium low voltage identifier. */
  diagnosticIridiumLowVoltageId: string;
  /** Gets the diagnostic ISO14230 legacy engine protocol detected identifier. */
  diagnosticIso14230LegacyEngineProtocolDetectedId: string;
  /** Gets the diagnostic ISO9141 legacy engine protocol detected identifier. */
  diagnosticIso9141LegacyEngineProtocolDetectedId: string;
  /** Gets the diagnostic J1708 ALDL harness detected identifier. */
  diagnosticJ1708AldlHarnessDetectedId: string;
  /** Gets the diagnostic J1708 engine hours identifier. */
  diagnosticJ1708EngineHoursId: string;
  /** Gets the diagnostic J1708 engine protocol detected identifier. */
  diagnosticJ1708EngineProtocolDetectedId: string;
  /** Gets the diagnostic J1708 total vehicle distance identifier. */
  diagnosticJ1708TotalVehicleDistanceId: string;
  /** Gets the diagnostic J1850 PWM legacy engine protocol detected identifier. */
  diagnosticJ1850PwmLegacyEngineProtocolDetectedId: string;
  /** Gets the diagnostic J1850 VPW legacy engine protocol detected identifier. */
  diagnosticJ1850VpwLegacyEngineProtocolDetectedId: string;
  /** Gets the diagnostic J1939 CAN engine protocol detected identifier. */
  diagnosticJ1939CanEngineProtocolDetectedId: string;
  /** Gets the diagnostic J1939 engine hours identifier. */
  diagnosticJ1939EngineHoursId: string;
  /** Gets the diagnostic J1939 total vehicle distance identifier. */
  diagnosticJ1939TotalVehicleDistanceId: string;
  /** Gets the diagnostic left side airbag deployed identifier. */
  diagnosticLeftSideAirbagDeployedId: string;
  /** Gets the diagnostic left side severity achieved identifier. */
  diagnosticLeftSideSeverityAchievedId: string;
  /** Gets the diagnostic left turn signal identifier. */
  diagnosticLeftTurnSignalId: string;
  /** Gets the diagnostic liquid material rate. */
  diagnosticLiquidMaterialRateId: string;
  /** Gets the diagnostic liquid material type. */
  diagnosticLiquidMaterialTypeId: string;
  /** Gets the diagnostic third party (custom device) log data buffer overrun value. */
  diagnosticLogDataBufferOverrunId: string;
  /** Gets the diagnostic low priority warning light identifier. */
  diagnosticLowPriorityWarningLightId: string;
  /** Gets the diagnostic memory allocation error identifier. */
  diagnosticMemoryAllocationErrorId: string;
  /** Gets the diagnostic memory pointer error identifier. */
  diagnosticMemoryPointerErrorId: string;
  /** Gets the diagnostic OBDCAN 11 Bit 250 K engine protocol detected identifier. */
  diagnosticObdcan11Bit250KEngineProtocolDetectedId: string;
  /** Gets the diagnostic OBDCAN 11 Bit 500 K engine protocol detected identifier. */
  diagnosticObdcan11Bit500KEngineProtocolDetectedId: string;
  /** Gets the diagnostic OBDCAN 29 Bit 250 K engine protocol detected identifier. */
  diagnosticObdcan29Bit250KEngineProtocolDetectedId: string;
  /** Gets the diagnostic OBDCAN 29 Bit 500 K engine protocol detected identifier. */
  diagnosticObdcan29Bit500KEngineProtocolDetectedId: string;
  /** Gets the diagnostic OBD odometer reader identifier. */
  diagnosticObdOdometerReaderId: string;
  /** Gets the diagnostic OBD port alert status identifier. */
  diagnosticObdPortAlertStatusId: string;
  /** Gets the diagnostic odometer adjustment identifier. */
  diagnosticOdometerAdjustmentId: string;
  /** Gets the diagnostic odometer identifier. */
  diagnosticOdometerId: string;
  /** Gets the diagnostic oil change due warning light identifier. */
  diagnosticOilChangeDueWarningLightId: string;
  /** Gets the diagnostic oil level low warning light identifier. */
  diagnosticOilLevelLowWarningLightId: string;
  /** Gets the diagnostic oil light on identifier. */
  diagnosticOilLightOnId: string;
  /** Gets the diagnostic oil pressure identifier. */
  diagnosticOilPressureId: string;
  /**
  * Gets the diagnostic id for the power going into the on-board charger from an AC
  * EVSE (W).
  */
  diagnosticOnBoardChargerACInputPowerId: string;
  /** Gets the diagnostic id for AC voltage. */
  diagnosticOnBoardChargerAcInputVoltageId: string;
  /**
  * Gets the diagnostic id for the power coming out of the on-board charger in the form
  * of DC (W).
  */
  diagnosticOnBoardChargerDCOutputPowerId: string;
  /** Gets the diagnostic outside temperature identifier. */
  diagnosticOutsideTemperatureId: string;
  /** Gets the diagnostic panic identifier. */
  diagnosticPanicId: string;
  /** Gets the diagnostic parking brake identifier. */
  diagnosticParkingBrakeId: string;
  /** Gets the diagnostic passenger airbag deployed identifier. */
  diagnosticPassengerAirbagDeployedId: string;
  /** Gets the diagnostic passenger occupancy identifier. */
  diagnosticPassengerOccupancyId: string;
  /** Gets the diagnostic passenger seat belt violation identifier. */
  diagnosticPassengerSeatbeltViolationId: string;
  /** Gets the diagnostic position valid identifier from device. */
  diagnosticPositionValidAtDeviceId: string;
  /** Gets the diagnostic position valid identifier. */
  diagnosticPositionValidId: string;
  /** Gets the diagnostic possible collision detected identifier. */
  diagnosticPossibleCollisionDetectedId: string;
  /** Gets the diagnostic potential bad install identifier. */
  diagnosticPotentialBadInstallId: string;
  /** Gets the diagnostic power takeoff engaged identifier. */
  diagnosticPowerTakeoffEngagedId: string;
  /** Gets the diagnostic power takeoff total fuel used identifier. */
  diagnosticPowerTakeoffTotalFuelUsedId: string;
  /** Gets the diagnostic pre wet material rate. */
  diagnosticPreWetMaterialRateId: string;
  /** Gets the diagnostic pre wet material type. */
  diagnosticPreWetMaterialTypeId: string;
  /** Gets the diagnostic PTO enabled identifier. */
  diagnosticPtoEnabledId: string;
  /** Gets the diagnostic ram memory failure id. */
  diagnosticRamFailureId: string;
  /** Gets the diagnostic raw odometer identifier. */
  diagnosticRawOdometerId: string;
  /** Gets the diagnostic rear impact severity achieved identifier. */
  diagnosticRearImpactSeverityAchievedId: string;
  /** Gets the diagnostic id for peripheral device: reefer temp zone 1. */
  diagnosticReeferTemperatureZone1Id: string;
  /** Gets the diagnostic id for peripheral device: reefer temp zone 2. */
  diagnosticReeferTemperatureZone2Id: string;
  /** Gets the diagnostic id for peripheral device: reefer temp zone 3. */
  diagnosticReeferTemperatureZone3Id: string;
  /** Gets the diagnostic id for peripheral device: reefer temp zone 4. */
  diagnosticReeferTemperatureZone4Id: string;
  /** Gets the diagnostic restarted the modem manager state machine identifier. */
  diagnosticRestartedTheModemManagerStateMachineId: string;
  /** Gets the diagnostic restarted the modem state machine identifier. */
  diagnosticRestartedTheModemStateMachineId: string;
  /** Gets the diagnostic restarted the radio manager state machine identifier. */
  diagnosticRestartedTheRadioManagerStateMachineId: string;
  /** Gets the diagnostic restarted the radio state machine identifier. */
  diagnosticRestartedTheRadioStateMachineId: string;
  /** Gets the diagnostic restarted the WIFI manager state machine identifier. */
  diagnosticRestartedTheWifiManagerStateMachineId: string;
  /** Gets the diagnostic restarted the WIFI state machine identifier. */
  diagnosticRestartedTheWifiStateMachineId: string;
  /** Gets the diagnostic RF module failure identifier. */
  diagnosticRfModuleFailureId: string;
  /** Gets the diagnostic RF module mac address error identifier. */
  diagnosticRfModuleMacAddressErrorId: string;
  /** Gets the diagnostic right side airbag deployed identifier. */
  diagnosticRightSideAirbagDeployedId: string;
  /** Gets the diagnostic right side severity achieved identifier. */
  diagnosticRightSideSeverityAchievedId: string;
  /** Gets the diagnostic right turn signal identifier. */
  diagnosticRightTurnSignalId: string;
  /** Gets the diagnostic rollover severity achieved identifier. */
  diagnosticRolloverSeverityAchievedId: string;
  /** Gets the diagnostic secondary can bus failed to initialize identifier. */
  diagnosticSecondaryCanBusFailedToInitializeId: string;
  /** Gets the diagnostic second row left seat belt identifier. */
  diagnosticSecondRowLeftSeatbeltId: string;
  /** Gets the diagnostic second row middle seat belt identifier. */
  diagnosticSecondRowMiddleSeatbeltId: string;
  /** Gets the diagnostic second row right seat belt identifier. */
  diagnosticSecondRowRightSeatbeltId: string;
  /** Gets the diagnostic slave processor failure identifier. */
  diagnosticSlaveProcessorFailureId: string;
  /** Gets the diagnostic solid material active. */
  diagnosticSolidMaterialActiveId: string;
  /** Gets the diagnostic solid material rate. */
  diagnosticSolidMaterialRateId: string;
  /** Gets the diagnostic solid material type. */
  diagnosticSolidMaterialTypeId: string;
  /** Gets the diagnostic standard harness detected identifier. */
  diagnosticStandardHarnessDetectedId: string;
  /** Gets the diagnostic id for State of Charge (SOC). */
  diagnosticStateOfChargeId: string;
  /** Gets the diagnostic panic identifier. */
  diagnosticSystemAlertId: string;
  /** Gets the diagnostic third party (custom device) device power change value. */
  diagnosticThirdPartyDevicePowerChangeId: string;
  /** Gets the diagnostic third party (custom device) engine data active value. */
  diagnosticThirdPartyEngineDataActiveId: string;
  /** Gets the diagnostic engine road speed identifier. */
  diagnosticThirdPartyEngineRoadSpeedId: string;
  /** Gets the diagnostic third party (custom device) engine hours identifier. */
  diagnosticThirdPartyEngineRunTimeId: string;
  /** Gets the diagnostic log third party data buffer overrun value. */
  diagnosticThirdPartyLogDataBufferOverrunId: string;
  /** Gets the third party (custom device) diagnostic odometer identifier. */
  diagnosticThirdPartyOdometerId: string;
  /** Gets the diagnostic third row left seat belt identifier. */
  diagnosticThirdRowLeftSeatbeltId: string;
  /** Gets the diagnostic third row middle seat belt identifier. */
  diagnosticThirdRowMiddleSeatbeltId: string;
  /** Gets the diagnostic third row right seat belt identifier. */
  diagnosticThirdRowRightSeatbeltId: string;
  /** Gets the diagnostic tire pressure front left identifier. */
  diagnosticTirePressureFrontLeftId: string;
  /** Gets the diagnostic tire pressure front right identifier. */
  diagnosticTirePressureFrontRightId: string;
  /** Gets the diagnostic tire pressure rear left identifier. */
  diagnosticTirePressureRearLeftId: string;
  /** Gets the diagnostic tire pressure rear right identifier. */
  diagnosticTirePressureRearRightId: string;
  /** Gets the diagnostic tire pressure spare identifier. */
  diagnosticTirePressureSpareId: string;
  /** Gets the diagnostic tire warning light identifier. */
  diagnosticTireWarningLightId: string;
  /** Gets the diagnostic too many engine records identifier. */
  diagnosticTooManyEngineRecordsId: string;
  /** Gets the diagnostic too many logs in multilog identifier. */
  diagnosticTooManyLogsInMultilogId: string;
  /** Gets the diagnostic total air used identifier. */
  diagnosticTotalAirUsedId: string;
  /** Gets the diagnostic total fuel used identifier. */
  diagnosticTotalFuelUsedId: string;
  /** Gets the diagnostic total idle air used identifier. */
  diagnosticTotalIdleAirUsedId: string;
  /** Gets the diagnostic total idle fuel used identifier. */
  diagnosticTotalIdleFuelUsedId: string;
  /** Gets the diagnostic total idle hours identifier. */
  diagnosticTotalIdleHoursId: string;
  /** Gets the diagnostic id for total lifetime battery energy in during AC charging. */
  diagnosticTotalLifetimeBatteryEnergyInDuringACChargingId: string;
  /** Gets the diagnostic id for total lifetime battery energy in during DC charging. */
  diagnosticTotalLifetimeBatteryEnergyInDuringDCChargingId: string;
  /** Gets the diagnostic id for total lifetime battery energy out during AC charging. */
  diagnosticTotalLifetimeBatteryEnergyOutDuringACChargingId: string;
  /** Gets the diagnostic id for total lifetime battery energy out during DC charging. */
  diagnosticTotalLifetimeBatteryEnergyOutDuringDCChargingId: string;
  /** Gets the diagnostic id for total lifetime on board charger energy from an AC EVSE. */
  diagnosticTotalLifetimeOnBoardChargerEnergyInDuringACChargingInId: string;
  /**
  * Gets the diagnostic id for Electric vehicle on-board charger total energy out during
  * AC charging (since telematics device install).
  */
  diagnosticTotalLifetimeOnBoardChargerEnergyOutDuringACChargingId: string;
  /** Gets the diagnostic total PTO hours identifier. */
  diagnosticTotalPtoHoursId: string;
  /** Gets the diagnostic total trip fuel used identifier. */
  diagnosticTotalTripFuelUsedId: string;
  /** Gets the diagnostic total trip idle fuel used identifier. */
  diagnosticTotalTripIdleFuelUsedId: string;
  /** Gets the diagnostic Toyota ISO engine protocol detected identifier. */
  diagnosticToyotaIsoEngineProtocolDetectedId: string;
  /** Gets the diagnostic traction control system active identifier. */
  diagnosticTractionControlSystemActiveId: string;
  /** Gets the diagnostic traction control system enabled identifier. */
  diagnosticTractionControlSystemEnabledId: string;
  /** Gets the diagnostic transmission oil change warning light identifier. */
  diagnosticTransmissionOilChangeWarningLightId: string;
  /** Gets the diagnostic transmission oil level identifier. */
  diagnosticTransmissionOilLevelId: string;
  /** Gets the diagnostic trip distance identifier. */
  diagnosticTripDistanceId: string;
  /** Gets the diagnostic truck liquid material total. */
  diagnosticTruckLiquidMaterialTotalId: string;
  /** Gets the diagnostic truck pre wet material total. */
  diagnosticTruckPreWetMaterialTotalId: string;
  /** Gets the diagnostic truck solid material total. */
  diagnosticTruckSolidMaterialTotalId: string;
  /** Gets the diagnostic undefined engine protocol detected identifier. */
  diagnosticUndefinedEngineProtocolDetectedId: string;
  /** Gets the diagnostic vehicle ABS system failed identifier. */
  diagnosticVehicleAbsSystemFailedId: string;
  /** Gets the diagnostic vehicle active (idle or driving) id. */
  diagnosticVehicleActiveId: string;
  /** Gets the diagnostic vehicle AWD system failed identifier. */
  diagnosticVehicleAwdSystemFailedId: string;
  /** Gets the diagnostic vehicle battery low voltage identifier. */
  diagnosticVehicleBatteryLowVoltageId: string;
  /** Gets the diagnostic vehicle programmed cruise high speed limit identifier. */
  diagnosticVehicleProgrammedCruiseHighSpeedLimitId: string;
  /** Gets the diagnostic vehicle programmed maximum road speed limit enabled identifier. */
  diagnosticVehicleProgrammedMaximumRoadspeedLimitEnabledId: string;
  /** Gets the diagnostic vehicle programmed maximum road speed limit identifier. */
  diagnosticVehicleProgrammedMaximumRoadspeedLimitId: string;
  /** Gets the diagnostic VIN request failure identifier. */
  diagnosticVinRequestFailureId: string;
  /** Gets the diagnostic washer fluid level identifier. */
  diagnosticWasherFluidLevelId: string;
  /** Gets the diagnostic water detected in fuel warning light identifier. */
  diagnosticWaterDetectedInFuelWarningLightId: string;
  /** Gets the diagnostic wifi hotspot data usage identifier. */
  diagnosticWiFiHotspotDataUsageId: string;
  /** Gets DisplayMeasurementProfile United States Identity. */
  displayMeasurementProfileAfricaId: string;
  /** Gets DisplayMeasurementProfile Asia Identity. */
  displayMeasurementProfileAsiaId: string;
  /** Gets DisplayMeasurementProfile Australia and New Zealand Identity. */
  displayMeasurementProfileAustraliaNewZealandId: string;
  /** Gets DisplayMeasurementProfile Canada Identity. */
  displayMeasurementProfileCanadaId: string;
  /** Gets DisplayMeasurementProfile Central and South America Identity. */
  displayMeasurementProfileCentralSouthAmericaId: string;
  /** Gets DisplayMeasurementProfile Default Identity. */
  displayMeasurementProfileDefaultId: string;
  /** Gets DisplayMeasurementProfile Europe Identity. */
  displayMeasurementProfileEuropeId: string;
  /** Gets DisplayMeasurementProfile Mexico Identity. */
  displayMeasurementProfileMexicoId: string;
  /** Gets DisplayMeasurementProfile UK Identity. */
  displayMeasurementProfileUKId: string;
  /** Gets DisplayMeasurementProfile United States Identity. */
  displayMeasurementProfileUnitedStatesId: string;
  /** Gets Identity DisplayUnitOfMeasure. */
  displayUnitOfMeasureIdentityId: string;
  /** Gets the distribution list import/export identifier. */
  distributionListImportExportId: string;
  /** Gets the distribution list news identifier. */
  distributionListNewsId: string;
  /** Gets the email template default application exception identifier. */
  emailTemplateDefaultApplicationExceptionId: string;
  /** Gets the email template default exception rule identifier. */
  emailTemplateDefaultExceptionRuleId: string;
  /** Gets the engine type generic identifier. */
  engineTypeGenericId: string;
  /** Gets the engine type none identifier. */
  engineTypeNoneId: string;
  /** Gets the event type lease expiry identifier. */
  eventTypeLeaseExpiryId: string;
  /** Gets the event type license plate expiry identifier. */
  eventTypeLicensePlateExpiryId: string;
  /** Gets the event type oil change identifier. */
  eventTypeOilChangeId: string;
  /** Gets the event type tire rotation identifier. */
  eventTypeTireRotationId: string;
  /** Gets the group company identifier. */
  groupCompanyId: string;
  /** Gets the group defects identifier. */
  groupDefectsId: string;
  /** Gets the group drive user security identifier. */
  groupDriveUserSecurityId: string;
  /** Gets the group everything security identifier. */
  groupEverythingSecurityId: string;
  /** Gets the group nothing security identifier. */
  groupNothingSecurityId: string;
  /** Gets the group private user identifier. */
  groupPrivateUserId: string;
  /** Gets the group root identifier. */
  groupRootId: string;
  /** Gets the group security identifier. */
  groupSecurityId: string;
  /** Gets the group supervisor security identifier. */
  groupSupervisorSecurityId: string;
  /** Gets the group trailer defects identifier. */
  groupTrailerDefectsId: string;
  /** Gets the group user security identifier. */
  groupUserSecurityId: string;
  /** Gets the group vehicle defects identifier. */
  groupVehicleDefectsId: string;
  /** Gets the group view only security identifier. */
  groupViewOnlySecurityId: string;
  /** Gets Alaska Passenger 70-hour/7-day */
  hosRuleSetAlaskaPassenger7Day: string;
  /** Gets Alaska Passenger 80-hour/8-day */
  hosRuleSetAlaskaPassenger8Day: string;
  /** Gets Alaska Property 70-hour/7-day */
  hosRuleSetAlaskaProperty7Day: string;
  /** Gets Alaska Property 70-hour/7-day Sleeper */
  hosRuleSetAlaskaProperty7DaySleeper: string;
  /** Gets Alaska Property 80-hour/8-day */
  hosRuleSetAlaskaProperty8Day: string;
  /** Gets Alaska Property 80-hour/8-day Sleeper */
  hosRuleSetAlaskaProperty8DaySleeper: string;
  /** Gets hos Ruleset Id America7Day. */
  hosRuleSetAmerica7Day: string;
  /** Gets hos Ruleset Id America7DayBig. */
  hosRuleSetAmerica7DayBig: string;
  /** Gets hos Ruleset Id America7DayBigSleeper. */
  hosRuleSetAmerica7DayBigSleeper: string;
  /** Gets hos Ruleset Id 7-day without 34-h. */
  hosRuleSetAmerica7DayNo34h: string;
  /** Gets hos Ruleset Id 7-day without 34-h with Sleeper. */
  hosRuleSetAmerica7DayNo34hSleeper: string;
  /** Gets hos Ruleset Id America7DayPassenger. */
  hosRuleSetAmerica7DayPassenger: string;
  /** Gets hos Ruleset Id America7DaySleeper. */
  hosRuleSetAmerica7DaySleeper: string;
  /** Gets hos Ruleset Id America8Day. */
  hosRuleSetAmerica8Day: string;
  /** Gets hos Ruleset Id America8DayBig. */
  hosRuleSetAmerica8DayBig: string;
  /** Gets hos Ruleset Id America8DayBigSleeper. */
  hosRuleSetAmerica8DayBigSleeper: string;
  /** Gets hos Ruleset Id 8-day without 34-h. */
  hosRuleSetAmerica8DayNo34h: string;
  /** Gets hos Ruleset Id 8-day without 34-h with Sleeper. */
  hosRuleSetAmerica8DayNo34hSleeper: string;
  /** Gets hos Ruleset Id America8DayPassenger. */
  hosRuleSetAmerica8DayPassenger: string;
  /** Gets hos Ruleset Id America8DaySleeper. */
  hosRuleSetAmerica8DaySleeper: string;
  /** Gets hos Ruleset Id America Non-CDL 7 day. */
  hosRuleSetAmericaNonCdlShortHaul7Day: string;
  /** Gets hos Ruleset Id America Non-CDL 8 day. */
  hosRuleSetAmericaNonCdlShortHaul8Day: string;
  /** Gets hos Ruleset Id America No Rest Requirement 7 Day. */
  hosRuleSetAmericaNoRestRequirement7Day: string;
  /** Gets hos Ruleset Id America No Rest Requirement 7 Day Big. */
  hosRuleSetAmericaNoRestRequirement7DayBig: string;
  /** Gets hos Ruleset Id America No Rest Requirement 7 Day Big with Sleeper. */
  hosRuleSetAmericaNoRestRequirement7DayBigSleeper: string;
  /** Gets hos Ruleset Id America No Rest Requirement 7 Day with Sleeper. */
  hosRuleSetAmericaNoRestRequirement7DaySleeper: string;
  /** Gets hos Ruleset Id America No Rest Requirement 8 Day. */
  hosRuleSetAmericaNoRestRequirement8Day: string;
  /** Gets hos Ruleset Id America No Rest Requirement 8 Day Big. */
  hosRuleSetAmericaNoRestRequirement8DayBig: string;
  /** Gets hos Ruleset Id America No Rest Requirement 8 Day Big with Sleeper. */
  hosRuleSetAmericaNoRestRequirement8DayBigSleeper: string;
  /** Gets hos Ruleset Id America No Rest Requirement 8 Day with Sleeper. */
  hosRuleSetAmericaNoRestRequirement8DaySleeper: string;
  /** Gets hos Ruleset Id AmericaSalesperson. */
  hosRuleSetAmericaSalesperson: string;
  /** Gets hos Ruleset Id AmericaSalespersonNonCdlShortHaul. */
  hosRuleSetAmericaSalespersonNonCdlShortHaul: string;
  /** Gets hos Ruleset Id AmericaShortHaul. */
  hosRuleSetAmericaShortHaul: string;
  /** Gets hos Ruleset Id AmericaShortHaul14hrWorkday. */
  hosRuleSetAmericaShortHaul14hrWorkday: string;
  /** Gets hos Ruleset Id AmericaShortHaul8Day. */
  hosRuleSetAmericaShortHaul8Day: string;
  /** Gets hos Ruleset Id AmericaShortHaul8Day14hrWorkday. */
  hosRuleSetAmericaShortHaul8Day14hrWorkday: string;
  /** Gets hos Ruleset Id Short-haul 8-day without 34-h. */
  hosRuleSetAmericaShortHaul8DayNo34h: string;
  /** Gets hos Ruleset Id Short-haul 7-day without 34-h. */
  hosRuleSetAmericaShortHaulNo34h: string;
  /** Gets hos Ruleset Id AmericaShortHaulPassenger. */
  hosRuleSetAmericaShortHaulPassenger: string;
  /** Gets hos Ruleset Id AmericaShortHaulPassenger8Day. */
  hosRuleSetAmericaShortHaulPassenger8Day: string;
  /** Gets hos Ruleset Id AmericaTexas. */
  hosRuleSetAmericaTexas: string;
  /** Gets hos Ruleset Id AmericaTexasShortHaul. */
  hosRuleSetAmericaTexasShortHaul: string;
  /** Gets hos Ruleset Id AmericaTexasShortHaul8Day. */
  hosRuleSetAmericaTexasShortHaul8Day: string;
  /** Gets hos Ruleset Id Brazil property short haul. */
  hosRuleSetBrazilShortHaul: string;
  /** Gets California Property Intrastate */
  hosRuleSetCalifornia8day: string;
  /** Gets hos Ruleset Id CaliforniaFarmProduct. */
  hosRuleSetCaliforniaFarmProduct: string;
  /** Gets hos Ruleset Id CaliforniaFarmProduct With Rest Requirement. */
  hosRuleSetCaliforniaFarmProductWithRestRequirement: string;
  /** Gets hos Ruleset Id CaliforniaFlammableLiquid. */
  hosRuleSetCaliforniaFlammableLiquid: string;
  /** Gets hos Ruleset Id CaliforniaFlammableLiquid With Rest Requirement. */
  hosRuleSetCaliforniaFlammableLiquidWithRestRequirement: string;
  /** Gets hos Ruleset Id CaliforniaPassenger. */
  hosRuleSetCaliforniaPassenger: string;
  /** Gets hos Ruleset Id CaliforniaProperty. */
  hosRuleSetCaliforniaProperty: string;
  /** Gets hos Ruleset Id CaliforniaSchoolPupil. */
  hosRuleSetCaliforniaSchoolPupil: string;
  /** Gets hos Ruleset Id CaliforniaSchoolPupil With Rest Requirement. */
  hosRuleSetCaliforniaSchoolPupilWithRestRequirement: string;
  /** Gets hos Ruleset Id CanadaCycleOne. */
  hosRuleSetCanadaCycleOne: string;
  /** Gets hos Ruleset Id CanadaCycleOneTeam. */
  hosRuleSetCanadaCycleOneTeam: string;
  /** Gets hos Ruleset Id CanadaCycleTwo. */
  hosRuleSetCanadaCycleTwo: string;
  /** Gets hos Ruleset Id CanadaCycleTwoTeam. */
  hosRuleSetCanadaCycleTwoTeam: string;
  /** Gets hos Ruleset Id CanadaNorthOf60CycleOne. */
  hosRuleSetCanadaNorthOf60CycleOne: string;
  /** Gets hos Ruleset Id Canada North of 60 Cycle Two. */
  hosRuleSetCanadaNorthOf60CycleTwo: string;
  /** Gets hos Ruleset Id Carrier Exemption. */
  hosRuleSetCarrierExemption: string;
  /** Gets hos Ruleset Id Florida 7-day. */
  hosRuleSetFlorida7Day: string;
  /** Gets hos Ruleset Id Florida 8-day. */
  hosRuleSetFlorida8Day: string;
  /** Gets hos Ruleset Id Florida Short-haul 7 day. */
  hosRuleSetFloridaShortHaul7Day: string;
  /** Gets hos Ruleset Id Florida Short-haul 8 day. */
  hosRuleSetFloridaShortHaul8Day: string;
  /** Gets Maryland Short Haul 70-hour/7-day */
  hosRuleSetMarylandShortHaul7Day: string;
  /** Gets Maryland Short Haul 80-hour/8-day */
  hosRuleSetMarylandShortHaul8Day: string;
  /** Gets Nebraska 70-hour/7-day */
  hosRuleSetNebraska7day: string;
  /** Gets Nebraska 80-hour/8-day */
  hosRuleSetNebraska8day: string;
  /** Gets hos Ruleset Id None. */
  hosRuleSetNone: string;
  /** Gets hos Ruleset Id None Big Day. */
  hosRuleSetNone8Day: string;
  /** Gets hos Ruleset Id NoneCanada (South of 60). */
  hosRuleSetNoneCanada: string;
  /** Gets North Dakota 70-hour/7-day */
  hosRuleSetNorthDakota7Day: string;
  /** Gets North Dakota Short Haul 70-hour/7-day */
  hosRuleSetNorthDakotaShortHaul7Day: string;
  /** Gets hos Ruleset Id OilTransport7Day. */
  hosRuleSetOilTransport7Day: string;
  /** Gets hos Ruleset Id OilTransport7DayBig. */
  hosRuleSetOilTransport7DayBig: string;
  /** Gets hos Ruleset Id OilTransport7DayBigSleeper. */
  hosRuleSetOilTransport7DayBigSleeper: string;
  /** Gets hos Ruleset Id OilTransport7DaySleeper. */
  hosRuleSetOilTransport7DaySleeper: string;
  /** Gets hos Ruleset Id OilTransport8Day. */
  hosRuleSetOilTransport8Day: string;
  /** Gets hos Ruleset Id OilTransport8DayBig. */
  hosRuleSetOilTransport8DayBig: string;
  /** Gets hos Ruleset Id OilTransport8DayBigSleeper. */
  hosRuleSetOilTransport8DayBigSleeper: string;
  /** Gets hos Ruleset Id OilTransport8DaySleeper. */
  hosRuleSetOilTransport8DaySleeper: string;
  /** Gets hos Ruleset Id OilTransportCalifornia8day. */
  hosRuleSetOilTransportCalifornia8day: string;
  /** Gets hos Ruleset Id OilTransportCaliforniaProperty. */
  hosRuleSetOilTransportCaliforniaProperty: string;
  /** Gets hos Ruleset Id America No Rest Requirement 7 Day with 24 hour reset. */
  hosRuleSetOilTransportNoRestRequirement7Day: string;
  /** Gets hos Ruleset Id America No Rest Requirement 7 Day Big with 24 hour reset. */
  hosRuleSetOilTransportNoRestRequirement7DayBig: string;
  /**
  * Gets hos Ruleset Id America No Rest Requirement 7 Day Big with 24 hour reset and
  * split sleeper.
  */
  hosRuleSetOilTransportNoRestRequirement7DayBigSleeper: string;
  /**
  * Gets hos Ruleset Id America No Rest Requirement 7 Day with 24 hour reset and split
  * sleeper.
  */
  hosRuleSetOilTransportNoRestRequirement7DaySleeper: string;
  /** Gets hos Ruleset Id America No Rest Requirement 8 Day with 24 hour reset. */
  hosRuleSetOilTransportNoRestRequirement8Day: string;
  /** Gets hos Ruleset Id America No Rest Requirement 8 Day Big with 24 hour reset. */
  hosRuleSetOilTransportNoRestRequirement8DayBig: string;
  /**
  * Gets hos Ruleset Id America No Rest Requirement 8 Day Big with 24 hour reset and
  * split sleeper.
  */
  hosRuleSetOilTransportNoRestRequirement8DayBigSleeper: string;
  /**
  * Gets hos Ruleset Id America No Rest Requirement 8 Day with 24 hour reset and split
  * sleeper.
  */
  hosRuleSetOilTransportNoRestRequirement8DaySleeper: string;
  /** Gets hos Ruleset Id OilTransportShortHaul. */
  hosRuleSetOilTransportShortHaul: string;
  /** Gets hos Ruleset Id OilTransportShortHaul14hrWorkday. */
  hosRuleSetOilTransportShortHaul14hrWorkday: string;
  /** Gets hos Ruleset Id OilTransportShortHaul8Day. */
  hosRuleSetOilTransportShortHaul8Day: string;
  /** Gets hos Ruleset Id OilTransportShortHaul8Day14hrWorkday. */
  hosRuleSetOilTransportShortHaul8Day14hrWorkday: string;
  /** Gets hos Ruleset Id OilTransportTexas. */
  hosRuleSetOilTransportTexas: string;
  /** Gets hos Ruleset Id OilWell7Day. */
  hosRuleSetOilWell7Day: string;
  /** Gets hos Ruleset Id OilWell7DayBig. */
  hosRuleSetOilWell7DayBig: string;
  /** Gets hos Ruleset Id OilWell7DayBigSleeper. */
  hosRuleSetOilWell7DayBigSleeper: string;
  /** Gets hos Ruleset Id OilWell7DaySleeper. */
  hosRuleSetOilWell7DaySleeper: string;
  /** Gets hos Ruleset Id OilWell8Day. */
  hosRuleSetOilWell8Day: string;
  /** Gets hos Ruleset Id OilWell8DayBig. */
  hosRuleSetOilWell8DayBig: string;
  /** Gets hos Ruleset Id OilWell8DayBigSleeper. */
  hosRuleSetOilWell8DayBigSleeper: string;
  /** Gets hos Ruleset Id OilWell8DaySleeper. */
  hosRuleSetOilWell8DaySleeper: string;
  /** Gets hos Ruleset Id OilWellCalifornia8day. */
  hosRuleSetOilWellCalifornia8day: string;
  /** Gets hos Ruleset Id OilWellCaliforniaProperty. */
  hosRuleSetOilWellCaliforniaProperty: string;
  /**
  * Gets hos Ruleset Id America No Rest Requirement 7 Day with 24 hour reset and oil
  * well.
  */
  hosRuleSetOilWellNoRestRequirement7Day: string;
  /**
  * Gets hos Ruleset Id America No Rest Requirement 7 Day Big with 24 hour reset and
  * oil well.
  */
  hosRuleSetOilWellNoRestRequirement7DayBig: string;
  /**
  * Gets hos Ruleset Id America No Rest Requirement 7 Day Big with 24 hour reset and
  * oil well and split sleeper.
  */
  hosRuleSetOilWellNoRestRequirement7DayBigSleeper: string;
  /**
  * Gets hos Ruleset Id America No Rest Requirement 7 Day with 24 hour reset and oil
  * well and split sleeper.
  */
  hosRuleSetOilWellNoRestRequirement7DaySleeper: string;
  /**
  * Gets hos Ruleset Id America No Rest Requirement 8 Day with 24 hour reset and oil
  * well.
  */
  hosRuleSetOilWellNoRestRequirement8Day: string;
  /**
  * Gets hos Ruleset Id America No Rest Requirement 8 Day Big with 24 hour reset and
  * oil well.
  */
  hosRuleSetOilWellNoRestRequirement8DayBig: string;
  /**
  * Gets hos Ruleset Id America No Rest Requirement 8 Day Big with 24 hour reset and
  * oil well and split sleeper.
  */
  hosRuleSetOilWellNoRestRequirement8DayBigSleeper: string;
  /**
  * Gets hos Ruleset Id America No Rest Requirement 8 Day with 24 hour reset and oil
  * well and split sleeper.
  */
  hosRuleSetOilWellNoRestRequirement8DaySleeper: string;
  /** Gets hos Ruleset Id OilWellTexas. */
  hosRuleSetOilWellTexas: string;
  /** Gets Oregon 70-hour/7-day */
  hosRuleSetOregon7day: string;
  /** Gets Oregon 80-hour/8-day */
  hosRuleSetOregon8day: string;
  /** Gets South Carolina 70-hour/7-day */
  hosRuleSetSouthCarolina7Day: string;
  /** Gets South Carolina 80-hour/8-day */
  hosRuleSetSouthCarolina8Day: string;
  /** Gets hos Ruleset Id WashingtonIntrastate7Day. */
  hosRuleSetWashingtonIntrastate7Day: string;
  /** Gets hos Ruleset Id WashingtonIntrastate8Day. */
  hosRuleSetWashingtonIntrastate8Day: string;
  /** Gets the no device identifier. */
  noDeviceId: string;
  /** Gets the no diagnostic identifier. */
  noDiagnosticId: string;
  /** Gets the no display profile identifier. */
  noDisplayProfileId: string;
  /** Gets the no driver identifier. */
  noDriverId: string;
  /** Gets the no exception event identifier. */
  noExceptionEventId: string;
  /** Gets the no failure mode identifier. */
  noFailureModeId: string;
  /** Gets the no recipient identifier. */
  noRecipientId: string;
  /** Gets the no rule identifier. */
  noRuleId: string;
  /** Gets the no trailer identifier. */
  noTrailerId: string;
  /** Gets the no user identifier. */
  noUserId: string;
  /** Gets the parameter group none identifier. */
  parameterGroupNoneId: string;
  /** Gets the report template advanced audit log identifier. */
  reportTemplateAdvancedAuditLogId: string;
  /** Gets the report template advanced auxiliary detail identifier. */
  reportTemplateAdvancedAuxiliaryDetailId: string;
  /** Gets the report template advanced auxiliary summary identifier. */
  reportTemplateAdvancedAuxiliarySummaryId: string;
  /** Gets the report template advanced charge event identifier. */
  reportTemplateAdvancedChargeEventId: string;
  /** Gets the report template advanced congregation identifier. */
  reportTemplateAdvancedCongregationId: string;
  /** Gets the report template advanced customer visits detail identifier. */
  reportTemplateAdvancedCustomerVisitsDetailId: string;
  /** Gets the report template advanced customer visits summary identifier. */
  reportTemplateAdvancedCustomerVisitsSummaryId: string;
  /** Gets the report template advanced device install history identifier. */
  reportTemplateAdvancedDeviceInstallHistoryId: string;
  /** Gets the report template advanced diagnostics identifier. */
  reportTemplateAdvancedDiagnosticsId: string;
  /** Gets the report template advanced DVIR identifier. */
  reportTemplateAdvancedDVIRId: string;
  /** Gets the report template advanced engine fault identifier. */
  reportTemplateAdvancedEngineFaultId: string;
  /** Gets the report template advanced engine status identifier. */
  reportTemplateAdvancedEngineStatusId: string;
  /** Gets the report template advanced engine summary identifier. */
  reportTemplateAdvancedEngineSummaryId: string;
  /** Gets the report template advanced event history identifier. */
  reportTemplateAdvancedEventHistoryId: string;
  /** Gets the report template advanced event rule device identifier. */
  reportTemplateAdvancedEventRuleDeviceId: string;
  /** Gets the report template advanced exceptions detail identifier. */
  reportTemplateAdvancedExceptionsDetailId: string;
  /** Gets the report template advanced exceptions summary identifier. */
  reportTemplateAdvancedExceptionsSummaryId: string;
  /** Gets the report template advanced failure mode identifier. */
  reportTemplateAdvancedFailureModeId: string;
  /** Gets the report template advanced fuel tax identifier. */
  reportTemplateAdvancedFuelTaxId: string;
  /** Gets the report template advanced fuel usage identifier. */
  reportTemplateAdvancedFuelUsageId: string;
  /** Gets the report template advanced groups identifier. */
  reportTemplateAdvancedGroupsId: string;
  /** Gets the report template advanced HOS availability identifier. */
  reportTemplateAdvancedHOSAvailabilityId: string;
  /** Gets the report template advanced hos log identifier. */
  reportTemplateAdvancedHOSLogId: string;
  /** Gets the report template advanced hos violation identifier. */
  reportTemplateAdvancedHOSViolationId: string;
  /** Gets the report template advanced log details identifier. */
  reportTemplateAdvancedLogDetailsId: string;
  /** Gets the report template advanced maintenance reminders identifier. */
  reportTemplateAdvancedMaintenanceRemindersId: string;
  /** Gets the report template advanced material management identifier. */
  reportTemplateAdvancedMaterialManagementId: string;
  /** Gets the report template advanced notifications identifier. */
  reportTemplateAdvancedNotificationsId: string;
  /** Gets the report template advanced plan vs actual route identifier. */
  reportTemplateAdvancedPlanVsActualRouteId: string;
  /** Gets the report template advanced risk management identifier. */
  reportTemplateAdvancedRiskManagementId: string;
  /** Gets the report template advanced route directions identifier. */
  reportTemplateAdvancedRouteDirectionsId: string;
  /** Gets the report template advanced route summary identifier. */
  reportTemplateAdvancedRouteSummaryId: string;
  /** Gets the report template advanced service status identifier. */
  reportTemplateAdvancedServiceStatusId: string;
  /** Gets the report template advanced text messages identifier. */
  reportTemplateAdvancedTextMessagesId: string;
  /** Gets the report template advanced time card identifier. */
  reportTemplateAdvancedTimeCardId: string;
  /** Gets the report template advanced time performance identifier. */
  reportTemplateAdvancedTimePerformanceId: string;
  /** Gets the report template advanced trips detail identifier. */
  reportTemplateAdvancedTripsDetailId: string;
  /** Gets the report template advanced trips summary identifier. */
  reportTemplateAdvancedTripsSummaryId: string;
  /** Gets the report template advanced unmatched route identifier. */
  reportTemplateAdvancedUnmatchedRouteId: string;
  /** Gets the report template advanced users identifier. */
  reportTemplateAdvancedUsersId: string;
  /** Gets the report template advanced value performance identifier. */
  reportTemplateAdvancedValuePerformanceId: string;
  /** Gets the report template advanced vehicles identifier. */
  reportTemplateAdvancedVehiclesId: string;
  /** Gets the report template advanced zones identifier. */
  reportTemplateAdvancedZonesId: string;
  /** Gets the report template audit log identifier. */
  reportTemplateAuditLogId: string;
  /** Gets the report template auxiliary detail identifier. */
  reportTemplateAuxiliaryDetailId: string;
  /** Gets the report template auxiliary summary identifier. */
  reportTemplateAuxiliarySummaryId: string;
  /** Gets the report template charge event identifier. */
  reportTemplateChargeEventId: string;
  /** Gets the report template congregation identifier. */
  reportTemplateCongregationId: string;
  /** Gets the report template customer visits detail identifier. */
  reportTemplateCustomerVisitsDetailId: string;
  /** Gets the report template customer visits summary identifier. */
  reportTemplateCustomerVisitsSummaryId: string;
  /** Gets the report template device install history identifier. */
  reportTemplateDeviceInstallHistoryId: string;
  /** Gets the report template diagnostics identifier. */
  reportTemplateDiagnosticsId: string;
  /** Gets the report template DVIR identifier. */
  reportTemplateDVIRId: string;
  /** Gets the report template engine fault identifier. */
  reportTemplateEngineFaultId: string;
  /** Gets the report template engine status identifier. */
  reportTemplateEngineStatusId: string;
  /** Gets the report template engine summary identifier. */
  reportTemplateEngineSummaryId: string;
  /** Gets the report template event history identifier. */
  reportTemplateEventHistoryId: string;
  /** Gets the report template event rule device identifier. */
  reportTemplateEventRuleDeviceId: string;
  /** Gets the report template exceptions detail identifier. */
  reportTemplateExceptionsDetailId: string;
  /** Gets the report template exceptions summary identifier. */
  reportTemplateExceptionsSummaryId: string;
  /** Gets the report template failure mode identifier. */
  reportTemplateFailureModeId: string;
  /** Gets the report template Fill ups identifier. */
  reportTemplateFillUpsId: string;
  /** Gets the report template fuel tax identifier. */
  reportTemplateFuelTaxId: string;
  /** Gets the report template fuel usage identifier. */
  reportTemplateFuelUsageId: string;
  /** Gets the report template groups identifier. */
  reportTemplateGroupsId: string;
  /** Gets the report template HOS availability identifier. */
  reportTemplateHOSAvailabilityId: string;
  /** Gets the report template HOS log identifier. */
  reportTemplateHOSLogId: string;
  /** Gets the report template HOS violation identifier. */
  reportTemplateHOSViolationId: string;
  /** Gets the report template log details identifier. */
  reportTemplateLogDetailsId: string;
  /** Gets the report template maintenance reminders identifier. */
  reportTemplateMaintenanceRemindersId: string;
  /** Gets the report template material management identifier. */
  reportTemplateMaterialManagementId: string;
  /** Gets the report template notifications identifier. */
  reportTemplateNotificationsId: string;
  /** Gets the report template plan vs actual route identifier. */
  reportTemplatePlanVsActualRouteId: string;
  /** Gets the report template risk management identifier. */
  reportTemplateRiskManagementId: string;
  /** Gets the report template route directions identifier. */
  reportTemplateRouteDirectionsId: string;
  /** Gets the report template route summary identifier. */
  reportTemplateRouteSummaryId: string;
  /** Gets the report template service status identifier. */
  reportTemplateServiceStatusId: string;
  /** Gets the report template text messages identifier. */
  reportTemplateTextMessagesId: string;
  /** Gets the report template time card identifier. */
  reportTemplateTimeCardId: string;
  /** Gets the report template time performance identifier. */
  reportTemplateTimePerformanceId: string;
  /** Gets the report template trips detail identifier. */
  reportTemplateTripsDetailId: string;
  /** Gets the report template trips summary identifier. */
  reportTemplateTripsSummaryId: string;
  /** Gets the report template unmatched route identifier. */
  reportTemplateUnmatchedRouteId: string;
  /** Gets the report template users identifier. */
  reportTemplateUsersId: string;
  /** Gets the report template value performance identifier. */
  reportTemplateValuePerformanceId: string;
  /** Gets the report template vehicles identifier. */
  reportTemplateVehiclesId: string;
  /** Gets the report template watchdog identifier. */
  reportTemplateWatchdogId: string;
  /** Gets the report template zones identifier. */
  reportTemplateZonesId: string;
  /** Gets the rule accident identifier. */
  ruleAccidentId: string;
  /** Gets the rule after hours usage identifier. */
  ruleAfterHoursUsageId: string;
  /** Gets the rule alternator failed identifier. */
  ruleAlternatorFailedId: string;
  /** Gets the rule application exception identifier. */
  ruleApplicationExceptionId: string;
  /** Gets the rule at office longer than identifier. */
  ruleAtOfficeLongerThanId: string;
  /** Gets the rule dvir defect identifier. */
  ruleDvirDefectId: string;
  /** Gets the rule ELD yard move exemption identifier. */
  ruleDVIRPostTripMissingId: string;
  /** Gets the rule ELD yard move exemption identifier. */
  ruleDVIRPreTripMissingId: string;
  /** Gets the rule early leave identifier. */
  ruleEarlyLeaveId: string;
  /** Gets the rule engine abuse identifier. */
  ruleEngineAbuseId: string;
  /** Gets the rule engine light on identifier. */
  ruleEngineLightOnId: string;
  /** Gets the rule EV Done Charging identifier. */
  ruleEVDoneChargingId: string;
  /** Gets the rule EV Enter Charging Zone With Low Charge identifier. */
  ruleEVEnterChargingZoneWithLowChargeId: string;
  /** Gets the rule EV Exit Charging Zone With Low Charge identifier. */
  ruleEVExitChargingZoneWithLowChargeId: string;
  /** Gets the rule EV Low Charge identifier. */
  ruleEVLowChargeId: string;
  /** Gets the rule fleet idling identifier. */
  ruleFleetIdlingId: string;
  /** Gets the rule ELD yard move exemption identifier. */
  ruleFMCSAELDYardMoveExemptionId: string;
  /** Gets the rule harsh braking identifier. */
  ruleHarshBrakingId: string;
  /** Gets the rule harsh cornering identifier. */
  ruleHarshCorneringId: string;
  /** Gets the rule idling identifier. */
  ruleIdlingId: string;
  /** Gets the rule idling no PTO identifier. */
  ruleIdlingNoPtoId: string;
  /** Gets the rule jackrabbit starts identifier. */
  ruleJackrabbitStartsId: string;
  /** Gets the rule late arrival identifier. */
  ruleLateArrivalId: string;
  /** Gets the rule lights left on identifier. */
  ruleLightsLeftOnId: string;
  /** Gets the rule long lunch identifier. */
  ruleLongLunchId: string;
  /** Gets the rule long stops during work hours identifier. */
  ruleLongStopsDuringWorkHoursId: string;
  /** Gets the rule low fuel level identifier. */
  ruleLowFuelLevelId: string;
  /** Gets the rule Material management deadhead. */
  ruleMaterialManagementDeadheadId: string;
  /** Gets the rule Material management liquid application. */
  ruleMaterialManagementLiquidApplicationId: string;
  /** Gets the rule Material management plow. */
  ruleMaterialManagementPlowActiveId: string;
  /** Gets the rule Material management pre wet application. */
  ruleMaterialManagementPreWetApplicationId: string;
  /** Gets the rule Material management solid application. */
  ruleMaterialManagementSolidApplicationId: string;
  /** Gets the rule Material management unload. */
  ruleMaterialManagementUnloadId: string;
  /** Gets the rule posted speeding identifier. */
  rulePostedSpeedingId: string;
  /** Gets the rule reverse at start identifier. */
  ruleReverseAtStartId: string;
  /** Gets the rule seat belt identifier. */
  ruleSeatbeltId: string;
  /** Gets the rule unauthorized device removal identifier. */
  ruleUnauthorizedDeviceRemovalId: string;
  /** Gets the rule unauthorized home stop identifier. */
  ruleUnauthorizedHomeStopId: string;
  /** Gets the rule harsh braking identifier. */
  ruleVehicleMovementWithinZonesId: string;
  /** Gets the securityId, Allow viewing the about checkmate page. */
  securityIdAboutCheckmateId: string;
  /**
  * Gets the securityId, Allow user to view and edit accelerometer stock rules and device
  * settings.
  */
  securityIdAccelerometerDataClearanceId: string;
  /** Gets the securityId, Access to AccidentDebugReport. */
  securityIdAccidentDebugReportId: string;
  /** Gets the securityId, Allow access to create or download accident keys. */
  securityIdAccidentWizardId: string;
  /** Gets the securityId, Allow user to view turn on/off Active tracking feature. */
  securityIdActiveTrackingClearanceId: string;
  /**
  * Gets the securityId, Allow user to view the wifi settings tab and view/modify the
  * wifi hotspot SSID and password.
  */
  securityIdAdministerWiFiHotspotSettingsId: string;
  /** Gets the securityId, Access to AuditLog. */
  securityIdAuditLogId: string;
  /** Gets the securityId, Allow user to view auxiliary settings. */
  securityIdAuxiliaryClearanceId: string;
  /** Gets the securityId, Access to certify DVIR. */
  securityIdCertifyDVIRId: string;
  /** Gets the securityId, Access to ChangePassword. */
  securityIdChangePasswordId: string;
  /** Gets the securityId, Access to CongregationReport. */
  securityIdCongregationReportId: string;
  /** Gets the securityId, Access to CreateExtractKey. */
  securityIdCreateExtractKeyId: string;
  /** Gets the securityId, Access to CreateFirmwareKey. */
  securityIdCreateFirmwareKeyId: string;
  /** Gets the securityId, Access to CreateKeyBackup. */
  securityIdCreateKeyBackupId: string;
  /** Gets the securityId, Access to CreateProgrammingKey. */
  securityIdCreateProgrammingKeyId: string;
  /** Gets the securityId, Access to CreateTestKey. */
  securityIdCreateTestKeyId: string;
  /** Gets the securityId, Access to CreateWifiKey. */
  securityIdCreateWifiKeyId: string;
  /** Gets the securityId, Access to CustomerVisitsReport. */
  securityIdCustomerVisitsReportId: string;
  /** Gets the securityId, Allow deleting GPS Text Message. */
  securityIdDeleteGpsTextMessageId: string;
  /** Gets the securityId, Allow user to see advanced device settings. */
  securityIdDeviceAdminAdvancedId: string;
  /**
  * Gets the securityId, Access to removing vehicle, unpluging device, and replacing
  * device.
  */
  securityIdDeviceAdminDeleteUnplugReplaceId: string;
  /** Gets the securityId, Allow use to configure driver feedback settings. */
  securityIdDeviceAdminDriverFeedbackId: string;
  /** Gets the securityId, Access to DeviceAdmin. */
  securityIdDeviceAdminId: string;
  /** Gets the securityId, Allow user to view device current status link. */
  securityIdDeviceCurrentStatusClearanceId: string;
  /** Gets the securityId, Access to DeviceInstallHistoryReport. */
  securityIdDeviceInstallHistoryReportId: string;
  /** Gets the securityId, Access to Device List. */
  securityIdDeviceListId: string;
  /** Gets the securityId, Allow user to view and edit DirectSupport tickets. */
  securityIdDirectSupportAdminId: string;
  /** Gets the securityId, Display devices on a map. */
  securityIdDisplayMapId: string;
  /**
  * Gets the securityId, required to support ENGCO and is only applicable if their custom
  * code has been configured. Allow user to configure driver blacklist on devices.
  */
  securityIdDriverBlacklistId: string;
  /** Gets the securityId, Allow user to view driver identification (keys). */
  securityIdDriverIdentificationClearanceId: string;
  /**
  * Gets the securityId, Allow user to edit the odometer reading associated with the
  * device.
  */
  securityIdEditDeviceOdometerId: string;
  /** Gets the securityId, Allow user to edit a distribution list. */
  securityIdEditDistributionListId: string;
  /** Gets the securityId, Allow user to edit an exception rule using the wizard. */
  securityIdEditExceptionId: string;
  /** Gets the securityId, Allow changing exception email templates. */
  securityIdEditNotificationEmailTemplateId: string;
  /** Gets the securityId, Allow user to edit OSM road speeds. */
  securityIdEditRoadSpeedsId: string;
  /** Gets the securityId, Allow user to view and edit TripType Change Data. */
  securityIdEditTripTypeChangeDataId: string;
  /** Gets the securityId, Access to EngineDiagnosticList. */
  securityIdEngineDiagnosticListId: string;
  /** Gets the securityId, Access to EngineFailureModeList. */
  securityIdEngineFailureModeListId: string;
  /** Gets the securityId, Access to EngineFlashCodelist. */
  securityIdEngineFlashCodelistId: string;
  /** Gets the securityId, Access to EngineManagementReport. */
  securityIdEngineManagementReportId: string;
  /** Gets the securityId, Allow user to view and edit engine status stock rules. */
  securityIdEngineStatusDataClearanceId: string;
  /** Gets the securityId, Access to EngineStatusDataGraph. */
  securityIdEngineStatusDataGraphId: string;
  /** Gets the securityId, Access to EngineTypeList. */
  securityIdEngineTypeListId: string;
  /** Gets the securityId, Access to EngineUnitOfMeasureList. */
  securityIdEngineUnitOfMeasureListId: string;
  /** Gets the securityId, Access to EventOccurrenceList. */
  securityIdEventOccurrenceListId: string;
  /** Gets the securityId, Access to Everything. */
  securityIdEverythingId: string;
  /** Gets the securityId, Access to ExceptionsList. */
  securityIdExceptionsListId: string;
  /** Gets the securityId, Access to ExceptionsReport. */
  securityIdExceptionsReportId: string;
  /** Gets the securityId, Access to ExportFromOtherDatabase. */
  securityIdExportFromOtherDatabaseId: string;
  /** Gets the securityId, Allow user to view feature preview switcher. */
  securityIdFeaturePreviewClearanceId: string;
  /** Gets the securityId, Allow access to the Fuel Tax Report. */
  securityIdFuelTaxId: string;
  /** Gets the securityId, Access to FuelTransactionAdmin. */
  securityIdFuelTransactionAdminId: string;
  /** Gets the securityId, Access to FuelTransactionList. */
  securityIdFuelTransactionListId: string;
  /** Gets the securityId, Access to Fuel Usage Report. */
  securityIdFuelUsageReportId: string;
  /** Gets the securityId, Allow user to view GoTalk settings and version. */
  securityIdGoTalkClearanceId: string;
  /** Gets the securityId, Access to ImportFromOtherDatabase. */
  securityIdImportFromOtherDatabaseId: string;
  /** Gets the securityId, Access to ImportZones. */
  securityIdImportZonesId: string;
  /** Gets the securityId, Access to inspect DVIR. */
  securityIdInspectDVIRId: string;
  /** Gets the securityId, Access to KeyInformation. */
  securityIdKeyInformationId: string;
  /** Gets the securityId, Allows the user to Launch Custom Reports and Add-Ins. */
  securityIdLaunchAddInId: string;
  /** Gets the securityId, Allow user to add, edit, or remove AddInData objects. */
  securityIdManageAddInDataId: string;
  /** Gets the securityId, Allow user to view and edit addins. */
  securityIdManageAddinsClearanceId: string;
  /** Gets the securityId, Allow user to manage certificates. */
  securityIdManageCertificatesId: string;
  /** Gets the securityId, Allow user to edit DVIR logs. */
  securityIdManageDVIRLogsId: string;
  /** Gets the securityId, Allow user to edit HOS driver logs. */
  securityIdManageHOSLogsId: string;
  /** Gets the securityId, Allow user to add, set or remove media files. */
  securityIdManageMediaId: string;
  /** Gets the securityId, Allow access to managing report templates. */
  securityIdManageReportTemplatesId: string;
  /** Gets the securityId, All user to add/edit/remove trailers. */
  securityIdManageTrailersId: string;
  /** Gets the securityId, Access to Material Management. */
  securityIdMaterialManagementReportId: string;
  /** Gets the securityId, This is dashboard security. Allow access to dashboard and CustomReportSchedule. */
  securityIdMileageSummaryDashboardId: string;
  /** Gets the securityId, Allow user to view news notifications switcher. */
  securityIdNewsNotificationsClearanceId: string;
  /** Gets the securityId, Access to NodesList. */
  securityIdNodesListId: string;
  /** Gets the securityId, Access to NotificationList. */
  securityIdNotificationListId: string;
  /** Gets the securityId, Access to OrganizeViews. */
  securityIdOrganizeViewsId: string;
  /** Gets the securityId, Allow user to view product guide. */
  securityIdProductGuideClearanceId: string;
  /** Gets the securityId, Allow user to purchase paid items on the Marketplace. */
  securityIdPurchaseMarketplacePaidItemsId: string;
  /** Gets the securityId, Access to PurgeData. */
  securityIdPurgeDataId: string;
  /** Gets the securityId, Access to RadioDownloaderList. */
  securityIdRadioDownloaderListId: string;
  /** Gets the securityId, Access to ReminderReport. */
  securityIdReminderReportId: string;
  /** Gets the securityId, Access to ReminderRuleList. */
  securityIdReminderRuleListId: string;
  /** Gets the securityId, Access to repair DVIR. */
  securityIdRepairDVIRId: string;
  /** Gets the securityId, Access to ReprocessData. */
  securityIdReprocessDataId: string;
  /**
  * Gets the securityId, Requests the current GPS location from a GO device. Typical
  * implementation is for Iridium network.
  */
  securityIdRequestDeviceLocationId: string;
  /** Gets the securityId, Allow user to view reseller data. */
  securityIdResellerControlClearanceId: string;
  /** Gets the securityId, Access to RestoreKeyBackup. */
  securityIdRestoreKeyBackupId: string;
  /** Gets the securityId, Access to RiskManagementReport. */
  securityIdRiskManagementReportId: string;
  /** Gets the securityId, Allow user to run Route Comparison Report. */
  securityIdRouteComparisonReportId: string;
  /** Gets the securityId, Access to RouteList. */
  securityIdRouteListId: string;
  /** Gets the securityId, Access to RouteSummaryReport. */
  securityIdRouteSummaryReportId: string;
  /** Gets the securityId, Access to SecurityClearanceList. */
  securityIdSecurityClearanceListId: string;
  /** Gets the securityId, Allow external relay instruction to be send to the vehicle. */
  securityIdSendExternalRelayInstructionId: string;
  /** Gets the securityId, Allow sending GPS Text Message, Routes and Addresses.s */
  securityIdSendGpsTextMessageId: string;
  /** Gets the securityId, Allow user to view device service plans. */
  securityIdServicePlansClearanceId: string;
  /** Gets the securityId, "SecurityIdServices" settings tab. */
  securityIdServicesSettingsId: string;
  /** Gets the securityId, Access to SpeedProfileReport. */
  securityIdSpeedProfileReportId: string;
  /** Gets the securityId, Allow starting full version of MyGeotab from a web page. */
  securityIdStartFullVersionId: string;
  /** Gets the securityId, Allow user to view and edit status groups. */
  securityIdStatusGroupsClearanceId: string;
  /** Gets the securityId, Access to SystemSettings. */
  securityIdSystemSettingsId: string;
  /** Gets the securityId, Access to TimeCardReport. */
  securityIdTimeCardReportId: string;
  /**
  * Gets the securityId, required to support WATERMARK and is only applicable if their
  * custom code has been configured.
  */
  securityIdTrackHistoricDataId: string;
  /** Gets the securityId, Access to TripsActivityReport. */
  securityIdTripsActivityReportId: string;
  /** Gets the securityId, Access to UnassignedRouteReport. */
  securityIdUnassignedRouteReportId: string;
  /**
  * Gets the securityId, Unknown identifier is not used for security purposes. It's
  * used internally to indicate a particular type could not be translated into a security
  * identifier. This always yields in access denied.
  */
  securityIdUnknownId: string;
  /** Gets the securityId, Administer Users/Drivers. */
  securityIdUserAdminId: string;
  /** Gets the securityId, Access to User/Driver List. */
  securityIdUserListId: string;
  /** Gets the securityId, Access to UserSettings. */
  securityIdUserSettingsId: string;
  /** Gets the securityId, Allow user to view AddInData objects. */
  securityIdViewAddInDataId: string;
  /** Gets the securityId, Allow user to view the advanced help items. */
  securityIdViewAdvancedHelpId: string;
  /** Gets the securityId, Allow user to view BinaryData. */
  securityIdViewBinaryDataId: string;
  /**
  * Gets the securityId, Allow user to view Business Intelligence data (Fleet Industry
  * Trends and etc.)
  */
  securityIdViewBusinessIntelligenceId: string;
  /** Gets the securityId, Allow user to view certificates. */
  securityIdViewCertificatesId: string;
  /** Gets the securityId, Allow user to view DVIR logs. */
  securityIdViewDVIRLogsId: string;
  /** Gets the securityId, Allow viewing sent and received GPS Text Messages. */
  securityIdViewGpsTextMessageId: string;
  /** Gets the securityId, Allow user only to view groups. */
  securityIdViewGroupsId: string;
  /** Gets the securityId, Allow user to view HOS driver logs. */
  securityIdViewHOSLogsId: string;
  /** Gets the securityId, Allow user to see paid Marketplace items. */
  securityIdViewMarketplacePaidItemsId: string;
  /** Gets the securityId, Allow user to view media files. */
  securityIdViewMediaId: string;
  /** Gets the securityId, Allow viewing data using report template. */
  securityIdViewReportTemplateId: string;
  /** Gets the securityId, Allow user to view existing trailers. */
  securityIdViewTrailersId: string;
  /** Gets the securityId, Allow user to view TripType Change Data. */
  securityIdViewTripTypeChangeDataId: string;
  /** Gets the securityId, Allow user to view the wifi hotspot SSID and password. */
  securityIdViewWiFiHotspotSettingsId: string;
  /** Gets the securityId, Access to WorkHolidayList. */
  securityIdWorkHolidayListId: string;
  /** Gets the securityId, Access to WorkTimeList. */
  securityIdWorkTimeListId: string;
  /** Gets the securityId, Access to ZoneAdmin. */
  securityIdZoneAdminId: string;
  /** Gets the securityId, Access to ZoneList. */
  securityIdZoneListId: string;
  /** Gets the securityId, Access to List of ZoneType's. */
  securityIdZoneTypeListId: string;
  /** Gets the source AI Model identifier. */
  sourceAiModelId: string;
  /** Gets the source BRP obsolete identifier. */
  sourceAiModelObsoleteId: string;
  /** Gets the source BRP identifier. */
  sourceBrpId: string;
  /** Gets the source BRP obsolete identifier. */
  sourceBrpObsoleteId: string;
  /** Gets the source Geotab GO identifier. */
  sourceGeotabGoId: string;
  /** Gets the source Geotab GO obsolete identifier. */
  sourceGeotabGoObsoleteId: string;
  /** Gets the source GMCCC identifier. */
  sourceGmcccId: string;
  /** Gets the source GMCCC obsolete identifier. */
  sourceGmcccObsoleteId: string;
  /** Gets the source J1708 identifier. */
  sourceJ1708Id: string;
  /** Gets the source J1708 obsolete identifier. */
  sourceJ1708ObsoleteId: string;
  /** Gets the source J1939 identifier. */
  sourceJ1939Id: string;
  /** Gets the source J1939 obsolete identifier. */
  sourceJ1939ObsoleteId: string;
  /** Gets the source Legacy proprietary identifier. */
  sourceLegacyId: string;
  /** Gets the source Legacy proprietary obsolete identifier. */
  sourceLegacyObsoleteId: string;
  /** Gets the source OBD identifier. */
  sourceObdId: string;
  /** Gets the source OBD obsolete identifier. */
  sourceObdObsoleteId: string;
  /** Gets the source OBD Source Address identifier. */
  sourceObdSaId: string;
  /** Gets the source WWH OBD obsolete identifier. */
  sourceObdSaObsoleteId: string;
  /** Gets the source Proprietary identifier. */
  sourceProprietaryId: string;
  /** Gets the source Proprietary obsolete identifier. */
  sourceProprietaryObsoleteId: string;
  /** Gets the source system identifier. */
  sourceSystemId: string;
  /** Gets the source system obsolete identifier. */
  sourceSystemObsoleteId: string;
  /** Gets the source third-party identifier. */
  sourceThirdPartyId: string;
  /** Gets the source third-party obsolete identifier. */
  sourceThirdPartyObsoleteId: string;
  /** Gets the system user identifier. */
  systemUserId: string;
  /** Gets the text template default exception rule identifier. */
  textTemplateDefaultExceptionRuleId: string;
  /** Gets the text template default exception rule popup identifier. */
  textTemplateDefaultExceptionRulePopupId: string;
  /** Gets the unit of measure amps identifier. */
  unitOfMeasureAmpsId: string;
  /** Gets the unit of measure bytes identifier. */
  unitOfMeasureBytesId: string;
  /** Gets the unit of measure cubic meters identifier. */
  unitOfMeasureCubicMetersId: string;
  /** Gets the unit of measure cubic meters per second identifier. */
  unitOfMeasureCubicMetersPerSecondId: string;
  /** Gets the unit of measure degrees Celsius identifier. */
  unitOfMeasureDegreesCelsiusId: string;
  /** Gets the unit of measure grams identifier. */
  unitOfMeasureGramsId: string;
  /** Gets the unit of measure grams per second identifier. */
  unitOfMeasureGramsPerSecondId: string;
  /** Gets the unit of measure grams per square meter identifier. */
  unitOfMeasureGramsPerSquareMeterId: string;
  /** Gets the unit of measure Hertz identifier. */
  unitOfMeasureHertzId: string;
  /** Gets the unit of measure kilograms per kilometer identifier. */
  unitOfMeasureKilogramsPerKilometerId: string;
  /** Gets the unit of measure kilometers per hour identifier. */
  unitOfMeasureKilometersPerHourId: string;
  /** Gets the unit of measure kilometers per kilogram identifier. */
  unitOfMeasureKilometersPerKilogramId: string;
  /** Gets the unit of measure kilometers per liter identifier. */
  unitOfMeasureKilometersPerLiterId: string;
  /** Gets the unit of measure kilowatt-hours identifier. */
  unitOfMeasureKiloWattHoursId: string;
  /** Gets the unit of measure liters identifier. */
  unitOfMeasureLitersId: string;
  /** Gets the unit of measure liters per lane kilometer identifier. */
  unitOfMeasureLitersPerLaneKilometerId: string;
  /** Gets the unit of measure liters per tonne identifier. */
  unitOfMeasureLitersPerTonneId: string;
  /** Gets the unit of measure meters identifier. */
  unitOfMeasureMetersId: string;
  /** Gets the unit of measure meters per second squared identifier. */
  unitOfMeasureMetersPerSecondSquaredId: string;
  /** Gets the unit of measure Newton meters identifier. */
  unitOfMeasureNewtonMetersId: string;
  /** Gets the unit of measure Newtons identifier. */
  unitOfMeasureNewtonsId: string;
  /** Gets the unit of measure none identifier. */
  unitOfMeasureNoneId: string;
  /** Gets the unit of measure Ohms identifier. */
  unitOfMeasureOhmsId: string;
  /** Gets the unit of measure Ohms per second identifier. */
  unitOfMeasureOhmsPerSecondId: string;
  /** Gets the unit of measure parts per million identifier. */
  unitOfMeasurePartsPerMillionId: string;
  /** Gets the unit of measure Pascals identifier. */
  unitOfMeasurePascalsId: string;
  /** Gets the unit of measure percentage identifier. */
  unitOfMeasurePercentageId: string;
  /** Gets the unit of measure pulses per meter identifier. */
  unitOfMeasurePulsesPerMeterId: string;
  /** Gets the unit of measure radians identifier. */
  unitOfMeasureRadiansId: string;
  /** Gets the unit of measure revolutions identifier. */
  unitOfMeasureRevolutionsId: string;
  /** Gets the unit of measure revolutions per minute identifier. */
  unitOfMeasureRevolutionsPerMinuteId: string;
  /** Gets the unit of measure seconds identifier. */
  unitOfMeasureSecondsId: string;
  /** Gets the unit of measure Volts identifier. */
  unitOfMeasureVoltsId: string;
  /** Gets the unit of measure Watts identifier. */
  unitOfMeasureWattsId: string;
  /** Gets the unknown driver identifier. */
  unknownDriverId: string;
  /** Gets the user notification binary file start identifier. */
  userNotificationBinaryFileStartId: string;
  /** Gets the user report template identifier. */
  userReportTemplateId: string;
  /** Gets the user work time start identifier. */
  userWorkTimeStartId: string;
  /** Gets the work time all hours identifier. */
  workTimeAllHoursId: string;
  /** Gets the work time early departure hours identifier. */
  workTimeEarlyLeaveHoursId: string;
  /** Gets the work time late arrival hours identifier. */
  workTimeLateArrivalHoursId: string;
  /** Gets the work time lunch hours identifier. */
  workTimeLunchHoursId: string;
  /** Gets the work time standard hours identifier. */
  workTimeStandardHoursId: string;
  /** Gets the zone type address lookup identifier. */
  zoneTypeAddressLookupId: string;
  /** Gets the zone type customer identifier. */
  zoneTypeCustomerId: string;
  /** Gets the zone type home identifier. */
  zoneTypeHomeId: string;
  /** Gets the zone type office identifier. */
  zoneTypeOfficeId: string;
}


/**
* A unique identifier for different types {@link IIoxAddOn}s. The range of valid values
* is between 4096 (inclusive) and 8192.
*/
export interface IKnownIoxAddOnType
{
}


/**
*  Internal object for languages for lookup.
*
* @deprecated
*/
export interface ILanguageDictionary
{
  /** Gets or sets the language of the sentence. */
  language: string;
  /** Gets or sets a dictionary of sentences as key and translated sentences as values. */
  sentenceDictionary: { [key:string]: string };
}


/**
*  Message content that can send a GPS location to a device. Derived from {@link ITextContent}.
* To reset the location on a device, a location message with latitude/longitude 0
* can be sent to the device.
*/
export interface ILocationContent extends ITextContent
{
  /** Gets or sets the address of the stop. */
  address: string;
  /** Gets or sets the {@link IId} of the route message. */
  id: number;
  /** Gets or sets the latitude of the stop. */
  latitude: number;
  /** Gets or sets the longitude of the stop. */
  longitude: number;
  /**
  * Gets or sets a collection of "DateRange"s indicating when the driver's intent was
  * to go to the provided and .
  */
  onRouteRanges: IDateRange[];
  /** Gets or sets the {@link IId} of the route message. */
  routeId: string;
}


/**  The results of an authentication attempt. */
export interface ILoginResult
{
  /** Gets or sets the {@link ICredentials} to be used when making calls to MyGeotab. */
  credentials: ICredentials;
  /**
  * Gets or sets the path of server hosting the database. "ThisServer" if successfully
  * logged in to this server, or "servername". The caller must handle prepending the
  * protocol.
  */
  path: string;
}


/**
* Record of log entries containing data for a device's position and speed at a specific
* date and time.
*/
export interface ILogRecord extends IEntity
{
  /** Gets or sets the date and time the log was recorded. */
  dateTime?: Date;
  /** Gets or sets the {@link IDevice} this log belongs to. */
  device: IDevice;
  /**
  * Gets or sets a value indicating whether this instance is the last active record
  * in the vehicle's active period. Possible values are:. false: The record is within
  * the active period and not the last active recordtrue: The record is within the active
  * period and is the last active recordnull: The record is not within the active period
  * (ex. GPS heartbeat)
  */
  isLastActive?: boolean;
  /** Gets or sets the latitude of the log record. */
  latitude: number;
  /** Gets or sets the longitude of the log record. */
  longitude: number;
  /** Gets or sets the logged speed or an invalid speed (in km/h). */
  speed: number;
}


/** Represents an estimate location based on the previous/next and a date. */
export interface ILogRecordInterpolated extends ILogRecord
{
}


/**
*  The object used to specify the arguments when searching for<br> {@link ILogRecord}(s).<br>
* When searching for log records the system will return all records that match the<br>
* search criteria and interpolate the value at the provided from/to dates when there
* is no record that<br> corresponds to the date. Interpolated records are dynamically
* created when the request is made and<br> can be identified as not having the ID
* property populated. Records with an ID are stored in the<br> database.<br> This
* search has been designed to work efficiently with these combinations of parameters:IdDeviceSearch
* + FromDate and/or ToDate
*/
export interface ILogRecordSearch extends ISearch
{
  /**
  * Gets or sets search for LogRecords for this {@link IDeviceSearch} Id. Available
  * DeviceSearch options are:. Id
  */
  deviceSearch: IDeviceSearch;
  /** Gets or sets search for LogRecords at this date or after. */
  fromDate?: Date;
  /** Gets or sets a value indicating whether [observe active state]. */
  observeActiveState: boolean;
  /** Gets or sets search for LogRecords at this date or before. */
  toDate?: Date;
}


/** Used to validate if the log record is valid. */
export interface ILogRecordValidator
{
}


/** Couples a and a objects with a distance between them in kilometers. */
export interface ILogRecordZoneDistance extends IEntity
{
  /** Gets or sets the date. */
  dateTime?: Date;
  /** Gets or sets the . */
  device?: IDevice;
  /** Gets or sets nullable Distance. */
  distance?: number;
  /** Gets or sets . */
  zone?: IZone;
}


/**
*  The object used to specify the arguments when searching for {@link ILogRecord}
* from GPSZoneDistance page(s).
*/
export interface ILogRecordZoneDistanceSearch extends ISearch
{
  /**
  * Gets or sets search for {@link ILogRecordZoneDistance}s that were created for {@link
  * IDeviceSearch}(s). Available DeviceSearch options are:. Id
  */
  deviceSearch: IDeviceSearch;
  /**
  * Gets or sets search for {@link ILogRecordZoneDistance}s that were recorded at this
  * date or after.
  */
  fromDate?: Date;
  /**
  * Gets or sets search for {@link ILogRecordZoneDistance}s that were recorded at this
  * date or before.
  */
  toDate?: Date;
  /**
  * Gets or sets search for {@link ILogRecordZoneDistance}s that were created for {@link
  * IZoneSearch}(s). Available ZoneSearch options are:. Id
  */
  zoneSearch: IZoneSearch;
}


/** Maximum road speed result. */
export interface IMaxRoadSpeedResult
{
  /** Gets or sets the Date. */
  date?: Date;
  /** Gets or sets the isEstimate value. */
  isEstimate?: boolean;
  /** Gets or sets the MaxSpeed. */
  maxSpeed: number;
  /** Gets or sets the TruckMaxSpeed. */
  truckMaxSpeed: number;
}


/**
* Populates property with a value that allows to distinguish it from an entity that
* is not yet added to the database and prevents form an accidental db commit.
*/
export interface IMemoryId
{
}


/**
* The contents of a {@link ISerialIoxContent} and is not compatible with all Add-Ons.
* For more information regarding Add-On compatible please contact your reseller. MimeContent
* is converted into bytes with a specific format. The first byte is the length of
* the MimeType (N). The next N bytes are the ASCII encoded bytes of the MimeType string.
* The next two bytes are the length of the Data (L). Finally, the next L bytes are
* the Data. Messages from MyGeotab will be delivered in this format and messages to
* MyGeotab must be in this format as well.<br> 
*/
export interface IMimeContent extends ITextMessageContentType
{
  binaryDataPacketDelay?: Date;
  channelNumber?: number;
  data: number[];
  mimeType: string;
  /**
  * @inheritdoc
  */
  payload: number[];
}


/** An that has a name field. */
export interface INameEntity extends IEntity
{
  /**
  * Gets or sets the name of this entity that uniquely identifies it and is used when
  * displaying this entity.
  */
  name: string;
}


/** An entity with a name and a version. */
export interface INameEntityWithVersion extends INameEntity
{
  /** Gets or sets the version of the entity. */
  version?: number;
}


/** News Distribution List. */
export interface INewsDistributionList extends IDistributionListSystem
{
}


/** The class that represents NFC type key. */
export interface INfcKey extends IKey
{
}


/** A {@link IDevice} type that represents no device. */
export interface INoDevice extends IDevice
{
  /** Gets or sets the device was active at this date or after. */
  activeFrom?: Date;
  /** Gets or sets the device was active at this date or before. */
  activeTo?: Date;
  /** Sets the {@link IGroup}(s) for reporting that this device belongs to. */
  groups?: IGroup[];
  /** Gets or sets the unique identifier for this entity. see {@link IId}. */
  id?: string;
  /**
  * Gets or sets the name of this entity that uniquely identifies it and is used when
  * displaying this entity.
  */
  name?: string;
  /** Gets or sets device's ProductID. */
  productId?: number;
}


/** A driver object that represents no driver. */
export interface INoDriver extends IDriverSystem
{
}


/** No Recipient. */
export interface INoRecipient extends IRecipient
{
  /**
  * Sets the recipient address. This is used when sending notifications via email or
  * Web Services.
  */
  address: string;
  /**
  * Gets or sets the type of recipient this instance refers to. This determines whether
  * the recipient is emailed or notified in a different manner.
  */
  recipientType?: RecipientType;
  /** Sets the application user this recipient belongs to. */
  user: IUser;
}


/**
* This is a with an Id of . A User see that has this group in its security groups
* means that there is no access to anything in the system. This is useful if you want
* to revoke access to the system or build upon this role and give access to a small
* set of items.
*/
export interface INothingSecurityGroup extends ISystemSecurityClearance
{
  /** Gets the unique identifier for this entity. see . */
  id: string;
  /** Gets the name of this system group. Cannot be set. */
  name: string;
}


/**
*  This class represents a notification that has to be send to a recipient.
*
* @deprecated
*/
export interface INotification extends IEntityWithVersion
{
  /** Gets or sets gets the date. */
  dateTime?: Date;
  /**
  * Gets or sets the timestamp indication until when this notification was processed
  * (viewed, delivered).
  */
  dateTimeEnd?: Date;
  /**
  * Gets or sets the {@link INotificationApplicationExceptionData} data that provides
  * the data for this notification. Deprecated: Please send all exceptions directly
  * to Error Reporting rather than using<br> 
  */
  notificationApplicationExceptionData: INotificationApplicationExceptionData;
  /** Gets or sets the notification data. */
  notificationData: INotificationData;
  /**
  * Gets or sets the {@link INotificationExceptionData} data that provides the data
  * for this notification.
  */
  notificationExceptionData: INotificationExceptionData;
  /** Gets or sets the data that provides the data for this notification. */
  notificationExceptionForUsersData: INotificationExceptionForUsersData;
  /**
  * Gets or sets the {@link INotificationForAdminUsersData} data that provides the data
  * for this notification.
  */
  notificationForAdminUsers: INotificationForAdminUsersData;
  /**
  * Gets or sets the {@link INotificationInfoData} data that provides the data for this
  * notification.
  */
  notificationInfoData: INotificationInfoData;
  /** Gets or sets the data that provides the data for this notification. */
  notificationMessageData: INotificationMessageData;
  /** Gets or sets the data that provides the data for this notification. */
  notificationNewsData: INotificationNewsData;
  /** Gets or sets the data that provides the data for this notification. */
  notificationUserModifiedData: INotificationUserModifiedData;
  /** Gets or sets the recipient this notification belongs to. */
  recipient: IRecipient;
}


/**
* The notification data associated with application exceptions that the end user cannot
* control.
*/
export interface INotificationApplicationExceptionData extends INotificationData
{
  /** Gets or sets what is the description for the application exception. */
  description?: string;
  /** Gets or sets additional info related to the application exception. */
  info?: string;
  /** Gets or sets the machine name where the application exception occurred. */
  machineName?: string;
  /** Gets or sets what is the source of the application exception. */
  source?: string;
}


/** Custom Notification Alert sound. */
export interface INotificationAudioAlarmFile extends INotificationBinaryFile
{
  /** Gets or sets the binary data. */
  binaryData: number[];
  /** Gets or sets the type of the binary data for notifications. */
  type: NotificationBinaryFileType;
}


/** Notification binary file. */
export interface INotificationBinaryFile extends INameEntity
{
  /** Gets or sets the file type. */
  fileType?: MediaFileType;
  /** Gets or sets get the type of the binary data for notifications. */
  type: NotificationBinaryFileType;
}


/** The class represents data that is associated with a notification. */
export interface INotificationData extends IEntity
{
}


/** The notification data pertaining to Exception Rules. */
export interface INotificationExceptionData extends INotificationData
{
  /** Gets or sets the exception event that holds the data for this notification. */
  exceptionEvent: IExceptionEvent;
  /** Gets or sets the information for the notification exception data. */
  info: string;
  /** Gets or sets the {@link INotificationType} of the notification. */
  type: NotificationType;
}


/**
* The notification data associated with application exceptions that can be resolved
* by user action.
*/
export interface INotificationExceptionForUsersData extends INotificationData
{
  /** Gets or sets what is the description for the exception. */
  description: string;
  /** Gets or sets additional info related to the exception. */
  info: string;
  /** Gets or sets the machine name where the exception occurred. */
  machineName: string;
  /** Gets or sets what is the source of the exception. */
  source: string;
}


/** The notification data associated with application notifications meant for admins. */
export interface INotificationForAdminUsersData extends INotificationExceptionForUsersData
{
  /** Gets a value indicating whether it is admin only for notification. */
  isAdminOnly: boolean;
}


/** The information data associated with a notification. */
export interface INotificationInfoData extends INotificationData
{
  /** Gets or sets the information for the specific machine. */
  info?: string;
  /**
  * Gets or sets the instance of this particular notification eg. the particular downloader
  * serial number.
  */
  instance?: string;
  /** Gets or sets the machine name pertaining to the relevant information. */
  machineName?: string;
  /** Gets or sets what is the source of the application exception. */
  source?: string;
  /** Gets or sets what is the current state for the application exception. */
  state?: NotificationStatus;
}


/** The message data associated with a notification. */
export interface INotificationMessageData extends INotificationData
{
  /** Gets or sets the information. */
  info?: string;
  /** Gets or sets the machine name pertaining to the relevant information. */
  machineName?: string;
  /** Gets or sets what is the source of the application exception. */
  source?: string;
}


/** The notification data pertaining to Exception Rules. */
export interface INotificationNewsData extends INotificationData
{
  /** Gets or sets the exception event that holds the data for this notification. */
  info: INotificationNewsDataInfo;
}


/** Notification info data for system news. */
export interface INotificationNewsDataInfo
{
  /** Gets or sets the module to display for news. */
  htmlInfo: string;
  /** Gets or sets the full plain text info of the news. */
  textFullInfo: string;
  /** Gets or sets the plain text info of the news. */
  textInfo: string;
}


/**
* The exception that occurs when sending a notification fails. Usually the result
* of a transient database issue. Receivers of this exception can retry.
*/
export interface INotificationNotifyException
{
}


/**
*  The object used to specify the arguments when searching for {@link INotification}(s).
*
* @deprecated
*/
export interface INotificationSearch extends ISearch
{
  /** Gets or sets search for Notifications with this {@link INotificationData} Id. */
  notificationData: INotificationData;
  /** Gets or sets search for Notifications with this {@link IRecipientSearch} Id. */
  recipientSearch: IRecipientSearch;
}


/**
* A class for notifying of changes to a {@link IUser}. Provides information about
* who was changed, who did the changes, what type of changes happened, and any values
* that were changed if applicable. Matching {@link IUserModified}.<br> Notifications
* of this type are only delivered to SystemNotice subscribers who have valid Group
* scope and {@link ISecurityIdentifier}.<br> 
*/
export interface INotificationUserModifiedData extends INotificationData
{
  /** Gets the type of {@link IUserModification} that occurred. */
  modificationAction: UserModification;
  /**
  * Gets additional info about the stored in a data class. This info is JSON-serialized
  * and stored in the "sInfo" column of the NotificationData table.<br> 
  */
  userModifiedInfo: IUserModifiedInfo;
}


/**
*  A for (s) with no trailer.
*
* @deprecated
*/
export interface INoTrailer extends ITrailer
{
  /** Gets or sets the serial number. */
  comment: string;
  /** Gets or sets the unique identifier for this entity. see . */
  id: string;
  /**
  * Gets or sets the name of this entity that uniquely identifies it and is used when
  * displaying this entity.
  */
  name: string;
}


/** A that is used when no user specific user is assigned to objects, eg. Notifications. */
export interface INoUser extends IUserSystem
{
}


/** The format of requests sent to OEM Control service. */
export interface IControlRequest
{
  /** Gets or sets the payload. */
  payload: string;
  /** Gets or sets the vin. */
  vin: string;
}


export interface IOtauCommandContent extends IDataToComponentContent
{
  data: number[];
}


/** Represents an exception thrown when a users has exceeded the query limit of an API. */
export interface IOverLimitException
{
}


/**
* The contents of a {@link ITextMessage} that can be used to control the state of
* an IOX-OUTPUT.
*/
export interface IPassthroughEnabledMessage extends IDataToComponentContent
{
}


/** Exception thrown when the password policy is violated. */
export interface IPasswordPolicyViolationException
{
}


/**
* This is a system group see with an Id of . It contains private groups for all users,
* see . Each user ideally would one group under this group. This way, it will be easy
* to schedule a report or a dashboard for a user.
*/
export interface IPrivateUserGroup extends ISystemGroupBase
{
  /** Gets the unique identifier for this entity. see . */
  id: string;
  /** Gets the name of this system group. Cannot be set. */
  name: string;
}


export interface IProcessPending extends IEntity
{
  dateTime?: Date;
  device: IDevice;
  isCompleteReprocess: boolean;
}


/** The statistical information about a radio data connection. */
export interface IRadioData extends IEntity
{
  /** Gets or sets the bytes received. */
  bytesReceived?: number;
  /** Gets or sets the bytes sent. */
  bytesSent?: number;
  /** Gets or sets the {@link IDevice}. */
  device: IDevice;
  /** Gets the duration. */
  duration?: Date;
  /** Gets or sets the end time. */
  endTime?: Date;
  /** Gets or sets the radio connection status. */
  radioConnectionStatus?: RadioConnectionStatus;
  /** Gets or sets the type of the radio connection. */
  radioConnectionType?: RadioConnectionType;
  /**
  * Gets or sets the {@link IRadioDownloader} associated with this RadioData. Can be
  * NULL for example 802.11 data that does not originate from a {@link IRadioDownloader}.
  */
  radioDownloader: IRadioDownloader;
  /** Gets or sets the signal strength. */
  signalStrength?: number;
  /** Gets or sets the start time. */
  startTime?: Date;
}


/** A base class for the family of 900/868MHz Radio Downloaders. */
export interface IRadioDownloader extends INameEntity
{
  /** Gets or sets the channel number this radio downloader operates on. */
  channel?: number;
  /**
  * Gets or sets the date when this {@link IRadioDownloader} was configured. Null if
  * the configuration is still pending and the RadioDownload has not been configured.
  */
  configurationTimeStamp?: Date;
  /** Gets or sets the firmware version for this radio downloader. */
  firmware?: IFirmware;
  /**
  * Gets or sets the frequency offset for this radio. The default is 0x1. To limit communication
  * to frequencies above 915 MHz, set to 0x17. This only applies to channel set 0 (0x00
  * to 0x0F).
  */
  frequencyOffset?: number;
  /**
  * Gets or sets determines if this RadioDownloader is managed by the system. RadioDownloaders
  * that are not managed will not be reprogrammed when you change the settings. It is
  * assumed that the downloader is already correctly programmed.
  */
  isManaged?: boolean;
  /** Gets or sets the is up status value. */
  isUp?: boolean;
  /**
  * Gets or sets details about the last Radio Connection made to this radio downloader.
  * This field is never populated unless explicitly done by the datastore methods.
  */
  lastConnection?: IRadioData;
  /** Gets or sets the current. {@link IRadioDownloaderStatus} */
  radioDownloaderStatus?: RadioDownloaderStatus;
  /** Gets or sets the unique Serial Number for this. {@link IRadioDownloader} */
  serialNumber?: string;
}


/**
*  The object used to specify the arguments when searching for a {@link IRadioDownloader}.
*
* @deprecated
*/
export interface IRadioDownloaderSearch extends ISearch
{
  /**
  * Gets or sets search for a RadioDownloader which is associated to the particular
  * {@link IRadioDownloaderStatus}.
  */
  radioDownloaderStatus?: RadioDownloaderStatus;
  /**
  * Gets or sets search for a RadioDownloader which is associated to the particular
  * {@link IRadioDownloaderType}.
  */
  radioDownloaderType?: RadioDownloaderType;
  /**
  * Gets or sets search for a RadioDownloader which is associated to the particular
  * SerialNumber.
  */
  serialNumber: string;
}


/**
*  The recipient for a specific notification. A recipient is linked to {@link IRule}(s)
* via a {@link IDistributionList}. When a {@link IRule} is violated the {@link IDistributionList}
* linked recipient receives a notification. The type of recipient is defined by it's
* {@link IRecipientType}. Not all properties of this object will have a value at the
* same time they are dependent on the {@link IRecipientType}. Recipient is represented
* by the string "NoRecipientId" where there is no recipient.
*/
export interface IRecipient extends IEntity
{
  /** Gets or sets the email address used when sending notifications via Email. */
  address: string;
  /** Gets or sets the {@link IGroup} to assign the related device to. */
  group: IGroup;
  /** Gets or sets the NotificationBinaryFile to notify with. */
  notificationBinaryFile: INotificationBinaryFile;
  /**
  * Gets or sets the {@link IRecipientType} (type of notification message) this instance
  * refers to.
  */
  recipientType?: RecipientType;
  /** Gets or sets the {@link ITripType} to assign the related device to. */
  tripType?: TripType;
  /** Gets or sets the {@link IUser} to receive notification. */
  user: IUser;
}


/**
*  The object used to specify the arguments when searching for (s).
*
* @deprecated
*/
export interface IRecipientSearch extends ISearch
{
  /** Gets or sets search for {@link IRecipient} of this {@link IRecipientType}. */
  recipientType: RecipientType;
}


/**
* If removing an entity would cause a relationship exception then this exception is
* thrown.
*/
export interface IRelationViolatedException
{
}


/** Stores the binary data for a generate excel report. */
export interface IReportStorage extends IEntityWithVersion
{
  /** Gets or sets the excel binary data. */
  binaryData?: number[];
  /** Gets or sets a {@link IDateTime} of when the report was generated. */
  creationDate?: Date;
  /** Gets or sets the start of the reports date range. */
  reportDateRange?: IDateRange;
  /** Gets or sets the name of the report. */
  reportName?: string;
  /** Gets or sets the type of the report. */
  reportType?: string;
}


/**
* The {@link IReportStorageAuthorization} links a report to a user who is authorised
* to view that report.
*/
export interface IReportStorageAuthorization extends IEntity
{
  /** Gets or sets a timestamp of when the report was generated. */
  dateTime?: Date;
  /** Gets or sets the report. */
  reportStorage?: IReportStorage;
  /** Gets or sets the id of the user who is authorized to view the report. */
  user?: IUser;
}


/** The object used to specify the arguments when searching for (s). */
export interface IReportStorageSearch extends ISearch
{
  /**
  * Gets or sets a value indicating whether to retrieve the {@link IReportStorage} objects
  * by descending order.
  */
  descendingOrderByRowVersion: boolean;
  /**
  * Gets or sets a value indicating whether the binary data field of the report storage
  * object should be set.
  */
  includeBinaryData: boolean;
  /** Gets or sets the max row version to retrieve a {@link IReportStorage} object for. */
  maxRowVersion?: number;
}


/** ReportTemplate class represents a template for reports that is an Excel file. */
export interface IReportTemplate extends INameEntity
{
  /** Gets or sets the Excel binary data. */
  binaryData: number[];
  /** Gets or sets whether the ReportTemplate is System. */
  isSystem?: boolean;
  /** Gets or sets the {@link IReportDataSource}. */
  reportDataSource?: ReportDataSource;
  /** Gets or sets the {@link IReportTemplateType}. */
  reportTemplateType?: ReportTemplateType;
  /** Gets or sets whether the ReportTemplate is shown in the report dropdowns. */
  showReport?: boolean;
  /** Gets or sets the . */
  signingInfo: ISigningInfo;
}


/**
*  The object used to specify the arguments when searching for {@link IReportTemplate}(s).
*
* @deprecated
*/
export interface IReportTemplateSearch extends ISearch
{
  /** Gets or sets include report Binary Data for this ReportTemplate. */
  includeBinaryData?: boolean;
  /** Gets or sets search for a ReportTemplate with this ReportDataSource. */
  reportDataSource?: ReportDataSource;
}


/**  A message that requests the current location of a device through Iridium. */
export interface IRequestLocation extends IBinaryPayload
{
  /**
  * Gets or sets the device associated with the location request Used to look up device
  * in BinaryPayloadBridge
  */
  device: IDevice;
  /** Gets or sets the device's hardware ID. */
  deviceId: number;
  /** Gets the binary data. */
  payload: number[];
}


/** Info about the reseller. */
export interface IResellerInfo
{
  /** Gets or sets the address. */
  address: string;
  /** Gets or sets the contact email. */
  contactEmail: string;
  /** Gets or sets the name. */
  name: string;
  /** Gets or sets the SVG logo. */
  svgLogo: string;
  /** Gets or sets the telephone number. */
  telephoneNumber: string;
}


/**
*  RestInfo.
*
* @deprecated
*/
export interface IRestInfo
{
  /** Gets or sets the from date. */
  fromDate: Date;
  /** Gets or sets the to date. */
  toDate: Date;
}


/**  The address and {@link IZone} (if any found) returned by a reverse geocode operation. */
export interface IReverseGeocodeAddress
{
  /**
  * Gets or sets the city name. In some cases there is a suburb and city and these are
  * contained in City and OtherCity respectively.
  */
  city: string;
  /** Gets or sets the country name. */
  country: string;
  /**
  * Gets or sets the full formatted address, containing all the available information
  * for street, province/state, postal/ZIP code and country.
  */
  formattedAddress: string;
  /**
  * Gets or sets the secondary or other city name. In some cases there is a suburb and
  * city and these are contained in City and OtherCity respectively.
  */
  otherCity: string;
  /** Gets or sets the postal code (ZIP code in USA). */
  postalCode: string;
  /**
  * Gets or sets the Region name. This is typically a province, state, region or constituent
  * country.
  */
  region: string;
  /**
  * Gets or sets the street name of the address; this will not always include the street
  * number.
  */
  street: string;
  /** Gets or sets the street name of the address. */
  streetName: string;
  /** Gets or sets the street number of the address. */
  streetNumber: string;
  /** Gets or sets the collection of {@link IZone}(s) the address is within. */
  zones: IZone[];
}


/** Representation of risk-based data belonging to a . */
export interface IRiskData
{
  /** Gets or sets the total (s) during after hours. */
  afterHoursTripCount: number;
  /** Gets the average speed calculated as distance traveled over time, in KM/h. */
  averageSpeed: number;
  /** Gets or sets the idling count over 5 minutes. */
  idlingOver5Count: number;
  /** Gets or sets the total idling time for the period. */
  idlingTime: Date;
  /** Gets or sets the Owner () of the risk data. */
  item: IEntity;
  /** Gets or sets the max speed for the period. */
  maxSpeed: number;
  /** Gets or sets the period end date. */
  periodEndDate?: Date;
  /** Gets or sets the period sequence number. */
  periodNumber?: number;
  /** Gets or sets the period start date. */
  periodStartDate?: Date;
  /** Gets or sets the count of seat belt violations (aux 1). */
  seatbeltViolation: number;
  /** Gets or sets the count of speed 1 violations. */
  speed1Count: number;
  /** Gets or sets the count of speed 2 violations. */
  speed2Count: number;
  /** Gets or sets the count of speed 3 violations. */
  speed3Count: number;
  /** Gets or sets the count of stops over 10 minutes and under 20 minutes. */
  stopOver10Count: number;
  /** Gets or sets the count of stops over 20 minutes and under 30 minutes. */
  stopOver20Count: number;
  /** Gets or sets the count of stops over 30 minutes and under 40 minutes. */
  stopOver30Count: number;
  /** Gets or sets the count of stops over 40 minutes and under 50 minutes. */
  stopOver40Count: number;
  /** Gets or sets the count of stops over 50 minutes. */
  stopOver50Count: number;
  /** Gets or sets the count of stops under 10 minutes. */
  stopUnder10Count: number;
  /** Gets or sets the total distance traveled for the period, in KM/h. */
  totalDistance: number;
  /** Gets or sets the total driving time. */
  totalDrivingTime: Date;
  /** Gets or sets the total stops for the period. */
  totalStops: number;
}


/** This is a system group see that is the root of all groups. */
export interface IRootGroup extends ISystemGroupBase
{
  /** Gets the unique identifier for this entity. see . */
  id: string;
  /** Gets the name of this system group. Cannot be set. */
  name: string;
}


/**  A connected sequence of zones which create a path for the vehicle to follow. */
export interface IRoute extends INameEntityWithVersion
{
  /**
  * Gets or sets free text field where any user information can be stored and referenced
  * for this entity. Default [""].
  */
  comment: string;
  /**
  * Gets or sets the {@link IDevice} linked to the route. Only applies to "Plan" type
  * routes.
  */
  device: IDevice;
  /** Gets or sets the unique identifier for this entity. See {@link IId}. */
  id: string;
  /**
  * Gets or sets the name of this entity that uniquely identifies it and is used when
  * displaying this entity. Maximum length [255].
  */
  name: string;
  /**
  * Gets or sets the {@link IRoutePlanItem} item collection (sequence of stops which
  * make up the route).
  */
  routePlanItemCollection: IRoutePlanItem[];
  /** Gets or sets the {@link IRouteType}. Default [Basic]. */
  routeType?: RouteType;
}


/** This is a for a . */
export interface IRouteDevice
{
  /** Gets or sets the . */
  device: IDevice;
  /** Gets or sets the end date. */
  endDate?: Date;
  /** Gets start Date of the route in the specific time zone. */
  localStartDate: IDateTimeWithTimeZone;
  /** Gets or sets the route. */
  route: IRoute;
  /** Gets or sets the start date. */
  startDate?: Date;
  /** Gets or sets the time zone. */
  timeZone: string;
}


/**
*  A {@link IDevice} and date pair that represents the last time a particular {@link
* IRouteExtract} has been executed for a specific vehicle.
*
* @deprecated
*/
export interface IRouteExtract extends IEntity
{
  /** Gets or sets the vehicle object to which the last date of the extract applies. */
  device: IDevice;
  /** Gets or sets the date when the extract has been completed for this vehicle. */
  lastExtractDateTime?: Date;
}


/**
*  The object used to specify the arguments when searching for {@link IRouteExtract}(s).
*
* @deprecated
*/
export interface IRouteExtractSearch extends ISearch
{
  /**
  * Gets or sets search for RouteExtract with this {@link IDeviceSearch} Id. Available
  * DeviceSearch options are:. Id
  */
  deviceSearch: IDeviceSearch;
  /** Gets or sets search for {@link IRouteExtract} recorded at this date or after. */
  fromDate?: Date;
  /** Gets or sets search for {@link IRouteExtract} recorded before this date. */
  toDate?: Date;
}


/** Represents a {@link ILogRecord} in proximity of a particular. {@link IRoutePlanItem} */
export interface IRouteItem extends IRoutePlanItem
{
  /** Gets or sets the distance of the log record from the route plan. */
  distance?: number;
  /** Gets or sets the {@link ILogRecord}. */
  logRecord: ILogRecord;
}


/** Represents a route matched to a device's driving activity. */
export interface IRouteMatch
{
  /** Gets the {@link IDevice} that was matched. */
  device: IDevice;
  /** Gets the duration. */
  duration?: number;
  /** Gets the end date. */
  endDate?: Date;
  /** Gets or sets the {@link ILogRecord}s of the route. */
  logRecords: ILogRecord[];
  /** Gets or sets the probability of a match. */
  probability?: number;
  /** Gets or sets the {@link IRoute} that is matched. */
  route: IRoute;
  /** Gets the start date. */
  startDate?: Date;
}


/**  The class representing an individual item in a planned {@link IRoute}. */
export interface IRoutePlanItem extends IEntity
{
  /** Gets or sets the start date for the plan item. */
  activeFrom?: Date;
  /** Gets or sets the end date for the plan item. */
  activeTo?: Date;
  /** Gets expected date and time of arrival. */
  dateTime?: Date;
  /** Gets or sets expected trip distance to arrival. */
  expectedDistanceToArrival?: number;
  /** Gets or sets expected stop duration in milliseconds. */
  expectedStopDuration?: Date;
  /** Gets or sets expected trip time to arrival in milliseconds. */
  expectedTripDurationToArrival?: Date;
  /** Gets or sets the associated {@link IRoute} of the plan. */
  route: IRoute;
  /** Gets or sets the sequence number of the plan item. */
  sequence?: number;
  /** Gets or sets the associated {@link IZone} in the route. */
  zone: IZone;
}


/**  The object used to specify the arguments when searching for {@link IRoute}(s). */
export interface IRouteSearch extends ISearch
{
  /**
  * Gets or sets filter by the {@link IDeviceSearch} options. Providing a device ID
  * will search for any Routes that are assigned to that Device. Providing the Groups
  * will search for Routes for that have Devices in that group. Available DeviceSearch
  * options are:. IdGroupsGroupListSearchOnly {@link IRouteType} "Plan" have a Device
  * assigned.
  */
  deviceSearch: IDeviceSearch;
  /** Gets or sets search for Routes that were active at this date or after. */
  fromDate?: Date;
  /** Gets or sets maximum version of the search criteria. */
  maxVersion?: number;
  /** Gets or sets minimum version of the search criteria. */
  minVersion?: number;
  /**
  * Gets or sets search for Routes with this Name. Wildcard can be used by prepending/appending
  * "%" to string. Example "%comments%".
  */
  name: string;
  /** Gets or sets search for Routes with this {@link IRouteType}. */
  routeType?: RouteType;
  /** Gets or sets search for Routes that were active at this date or before. */
  toDate?: Date;
  /**
  * Gets or sets filter by the {@link IZoneSearch} options. Providing a zone ID will
  * search for any Routes that have that Zone as a planned stop. Providing the Groups
  * or GroupListSearch will search for Routes that have a Zone (planned stop) that is
  * in both that group and its' children or its' parent tree. Available ZoneSearch options
  * are:. IdGroupsGroupListSearch
  */
  zoneSearch: IZoneSearch;
}


/**  Search that implements IEntity for search objects. */
export interface ISearch
{
  /** Gets or sets search for an entry based on the specific {@link IId}. */
  id: string;
  /** Gets or sets the row version of the search criteria. */
  version?: number;
}


/**
*  Represents a with (s) that are used to determine security access to different parts
* of the application. To get all SecurityClearance(s), call the Get method with typeName<br>
* and a<br> <br> with the Id property set to GroupSecurityId.<br> 
*/
export interface ISecurityClearance extends IGroup
{
  /**
  * Gets or sets the (s) either adds or removes a particular SecurityIdentifier to a
  * user's set of allowed items.
  */
  securityFilters: ISecurityFilter[];
}


/**
*  Represents an item that either Adds or Removes a particular to a user's set of
* allowed items.
*/
export interface ISecurityFilter
{
  /**
  * Gets or sets a value indicating whether this feature is Added or Removed. Please
  * note this property is evaluated in<br> the context of the SecurityFilter(s) available
  * to the parent SecurityClearance.<br> 
  */
  isAdd: boolean;
  /** Gets or sets the . */
  securityId: ISecurityId;
  /**
  * Gets or sets the identifier that provides a security identity for control of access.
  * See .
  */
  securityIdentifier?: SecurityIdentifier;
}


/**
* This is a . The sub tree of this group is used to manage security to various parts
* of the system.
*/
export interface ISecurityGroup extends ISystemSecurityClearance
{
  /** Gets the unique identifier for this entity. see . */
  id: string;
  /** Gets the name of this system group. Cannot be set. */
  name: string;
}


/** For managing security identifiers. */
export interface ISecurityId extends INameEntityWithVersion
{
  /** Gets or Sets the custom page name. */
  customPageName?: string;
  /**
  * Gets or sets a value indicating whether this securityIdentifier is a system Id or
  * custom identifier.
  */
  isSystemSecurityId: boolean;
}


/** The converter for converting a {@link ISecurityIdentifier}. */
export interface ISecurityIdConverter
{
}


/**
* The contents of a {@link ITextMessage} containing data to give to a third-party
* IOX Add-On over an RS232. The SerialIoxContent is a 'dumb pipe' type of message.
* Whatever data is put in the data property will be delivered, as is, to the system
* on the other end of the IOX-RS232.<br> 
*/
export interface ISerialIoxContent extends IDataToComponentContent
{
  /**
  * Gets or sets the channel the {@link IIoxAddOn} is communicating over. 0 means the
  * Add-On is not attached.
  */
  channel: number;
  /** Gets or sets the data to send to the {@link IIoxAddOn}. Up to 249 bytes can be sent. */
  data: number[];
}


/**
*  Internal class with the session info.
*
* @deprecated
*/
export interface ISessionInfo
{
  /** Gets or sets the database this applies to. */
  database: string;
  /**
  * Gets or sets the expiry date in UTC. Sessions remain valid until this DateTime has
  * passed.
  */
  dateTime?: Date;
  /** Gets or sets the last date when user changed the password. */
  lastPasswordChangedDate?: Date;
  /**
  * Gets or sets the ultimate expiry date time. Sessions should expire after this time
  * and cannot be extended.
  */
  ultimateExpiryDateTime?: Date;
  /** Gets or sets the user name. */
  username: string;
}


/**
*  A ShipmentLog is a record of shipment transported by a specified vehicle for a
* duration of time.
*/
export interface IShipmentLog extends IEntityWithVersion
{
  /** Gets or sets the date the shipment was started. Default [UtcNow]. */
  activeFrom?: Date;
  /** Gets or sets the date the shipment was ended. Default [MaxDate]. */
  activeTo?: Date;
  /** Gets or sets the commodity shipped. Maximum length [255] Default [""]. */
  commodity: string;
  /** Gets or sets the date and time the log was created. */
  dateTime?: Date;
  /** Gets or sets the {@link IDevice} associated with this log. */
  device: IDevice;
  /** Gets or sets the identifier of the shipment document. Default [""]. */
  documentNumber: string;
  /** Gets or sets the {@link IUser} who created this log. */
  driver: IUser;
  /** Gets or sets the name of the shipper. Default [""]. */
  shipperName: string;
}


/**  The object used to specify the arguments when searching for {@link IShipmentLog}(s). */
export interface IShipmentLogSearch extends ISearch
{
  /**
  * Gets or sets search for ShipmentLogs with this commodity. Wildcard can be used by
  * prepending/appending "%" to string.
  */
  commodity: string;
  /**
  * Gets or sets search for ShipmentLogs for this {@link IDeviceSearch} Id. Available
  * DeviceSearch options are:. Id
  */
  deviceSearch: IDeviceSearch;
  /**
  * Gets or sets search for ShipmentLogs with this document number. Wildcard can be
  * used by prepending/appending "%" to string.
  */
  documentNumber: string;
  /**
  * Gets or sets search for ShipmentLogs that were active at this date or after. Set
  * to UTC now to search for only currently active ShipmentLogs.
  */
  fromDate?: Date;
  /**
  * Gets or sets search for entities that contain specific keywords in all wildcard
  * string-searchable fields.
  */
  keywords: string[];
  /**
  * Gets or sets Search for {@link IShipmentLog}s with a maximum of this version.
  *
  * @deprecated
  */
  maxVersion?: number;
  /**
  * Gets or sets Search for {@link IShipmentLog}s with a minimum of this version.
  *
  * @deprecated
  */
  minVersion?: number;
  /**
  * Gets or sets search for ShipmentLogs with this shipper name. Wildcard can be used
  * by prepending/appending "%" to string.
  */
  shipperName: string;
  /** Gets or sets search for ShipmentLogs that were active at this date or before. */
  toDate?: Date;
  /**
  * Gets or sets search for ShipmentLogs with this {@link IUserSearch} Id. Available
  * UserSearch options are:. Id
  */
  userSearch: IUserSearch;
}


/** Used to hold all signing info. */
export interface ISigningInfo
{
  /** Gets or sets the datetime when the report is approved. */
  datetime: Date;
  /** Gets or sets the signatory, the person who approve the report. */
  signatory: string;
  /** Gets or sets the signature of the report. */
  signature: string;
  /** Gets or sets the report binary. */
  signingObjectHash: number[];
  /** Gets or sets the thumbprint. */
  thumbprint: string;
}


/** A list of speed limit change results. */
export interface ISpeedLimitChanges
{
  /**
  * Gets or sets the array of ratios that represent the ratio of distance or time (depends
  * on the usage context) changes between two coordinate indexes where a change in the
  * speed limit happened. For example, if the speed limit changes halfway in between
  * point2 and point3, we would return and index of 2.5.
  */
  indexRatios: number[];
  /** Gets or sets the array of speed limit change values for each index ratio. */
  speedLimits: number[];
}


/** Message to request status data. */
export interface IStatusDataRequestContent extends IDataToComponentContent
{
  /** Gets or sets the s to request data from. */
  ids: string[];
}


/**
* This is a with an Id of . A user see that has this group in its security groups
* will have access to modify local data in the system. This is the type of user that
* does not need to administrate the system, but needs to create devices, zones, work
* times etc.
*/
export interface ISupervisorSecurityGroup extends ISystemSecurityClearance
{
  /** Gets the unique identifier for this entity. see . */
  id: string;
  /** Gets the name of this system group. Cannot be set. */
  name: string;
}


/**
* An exception for use within the Processor namespace only, which includes information
* about entities which violated foreign key constraints and caused a {@link IRelationViolatedException}.
*/
export interface ISuspectEntityException
{
  /**
  * Gets the collection containing IDs and type names of entities that are suspect in
  * causing the error.
  */
  suspectedEntities: [string,string][];
}


/** Email template for system. */
export interface ISystemEmailTemplate extends IEmailTemplate
{
  /** Gets or sets body of email. */
  body: string;
  /** Gets or sets report template. */
  exceptionsDetailTemplate: IReportTemplate;
  /** Gets or sets the unique identifier for this entity. See {@link IId}. */
  id: string;
  /**
  * Gets or sets the name of this entity that uniquely identifies it and is used when
  * displaying this entity.
  */
  name: string;
  /** Gets or sets subject line of email. */
  subject: string;
}


/** The base class for all groups that are a system group. */
export interface ISystemGroupBase extends IGroup
{
  /** Gets or sets color used to render assets belonging to this group. */
  color: any;
  /** Gets or sets the unique identifier for this entity. see . */
  id: string;
  /**
  * Gets or sets the name of this entity that uniquely identifies it and is used when
  * displaying this entity.
  */
  name: string;
}


/** The base class for (s) that are system entities. */
export interface ISystemSecurityClearance extends ISecurityClearance
{
  /** Gets or sets color used to render assets belonging to this group. */
  color: any;
  /** Gets or sets retrieves the . Cannot be set. */
  id: string;
  /** Gets or sets retrieves the name. Cannot be set. */
  name: string;
}


/** The settings related to the entire system. */
export interface ISystemSettings extends IEntity
{
  /** Gets or sets the allowed user authentication type. */
  allowedUserAuthenticationType?: UserAuthenticationType;
  /** Gets or sets the allowed No access period for user in days. */
  allowedUserInactivityPeriod?: number;
  /** Gets or sets the default value for allowed No access period for user in days. */
  allowedUserInactivityPeriodDefault?: number;
  /** Gets or sets a value indicating whether marketplace purchases are allowed. */
  allowMarketplacePurchases?: boolean;
  /** Gets or sets if the resellers are allowed to login automatically. */
  allowResellerAutoLogin?: boolean;
  /**
  * Gets or sets a value indicating whether the user is allowed to see third-party marketplace
  * items.
  */
  allowThirdPartyMarketplaceApps?: boolean;
  /** Gets or sets a value indicating whether unsigned Add-Ins is allowed. */
  allowUnsignedAddIn?: boolean;
  /** Gets or sets the BigQuery entity upload versions. */
  bigQueryUploadVersions: any;
  /**
  * Gets or sets free text field where any user information can be stored and referenced
  * for this database.
  */
  comments: string;
  /** Gets or sets the address of the registered company - used in some reports. */
  companyAddress: string;
  /** Gets or sets the unique GUID for this database. */
  companyGuid?: any;
  /**
  * Gets or sets the name of the registered company for this database - it is used in
  * reports.
  */
  companyName: string;
  /** Gets or sets the custom code(s) used to enable specialized functionality. */
  customCode: string;
  /** Gets or sets the customer classifiers. */
  customerClassification: CustomerClassifier[];
  /** Gets or sets customer pages. */
  customerPages: string[];
  /** Gets or sets the custom Exempt HOS Abbreviation */
  customExemptHOSAbbreviation: string;
  /** Gets or sets the custom Exempt HOS name */
  customExemptHOSName: string;
  /** Gets or sets the custom web map provider list. */
  customWebMapProviderList: ICustomWebMapProvider[];
  /** Gets or sets the database owner. */
  databaseOwner: string;
  /** Gets or sets dataVersion of . */
  dataVersion: string;
  /** Gets or sets database expiry date. */
  demoExpiryDate?: Date;
  /** Gets or sets the DirectSupportAcceptedDate. */
  directSupportAcceptedDate?: Date;
  /**
  * Gets or sets percentage factor to add to each calculated distance, used to improve
  * accuracy.
  */
  distanceIncreaseFactor?: number;
  /**
  * Gets or sets the email sender for this database. System sent emails will be from
  * this address.
  */
  emailSenderFrom: string;
  /** Gets or sets the Encryption state. */
  enableDataFileEncryption?: boolean;
  /** Gets or sets the size limits for media files. */
  fileSizeLimits: IFileSizeLimits;
  /** Gets or sets ftpFeederLastIdSettings. */
  ftpFeederLastIdSettings: any;
  /** Gets or sets the fuel settings. */
  fuelSettings: any;
  /** Gets or sets the fuel transaction import settings. */
  fuelTransactionImportSettingsList: any[];
  /** Gets or sets the database specific Google API Key if one is provided. */
  googleApiKey: string;
  /** Gets or sets the database specific Here.com key if one is provided. */
  hereApiKey: string;
  /**
  * Gets or sets a value indicating whether or not to include report attachments in
  * email.
  */
  includeReportAttachmentsInEmail?: boolean;
  /** Gets or sets the Industry GUID. */
  industry: string;
  /** Gets or sets is this a backup. */
  isBackup?: boolean;
  /** Gets or sets the last time the company profile data was exported to big query. */
  lastCompanyProfileExportToBq?: Date;
  /** Gets or sets the LastUpdate. */
  lastUpdate?: Date;
  /** Gets or sets the validity period for live data updates. */
  liveDataValidityInterval?: Date;
  /** Gets or sets the database specific Map Box key if one is provided. */
  mapBoxApiKey: string;
  /**
  * Gets or sets The map download URL list.
  *
  * @deprecated
  */
  mapDownloadUrlList: string[];
  /** Gets or sets the Map Provider for this database. */
  mapProvider: string;
  /**
  * Gets or sets a system wide value representing the maximum stop time to be used for
  * some reports and calculations.
  */
  maximumStopInterval?: Date;
  /**
  * Gets or sets the maximum distance (in m) that a driver can travel in PC before getting
  * put into D.
  */
  maxPCDistance?: number;
  /**
  * Gets or sets a system wide value representing the minimum stop time to be used for
  * some reports and calculations.
  */
  minimumStopInterval?: Date;
  /** Gets or sets excluded tokens from notification types such as email */
  notificationExcludedTokens: NotificationTokenType[];
  /**
  * Gets or sets the password lifetime. A user's session ultimate expiry date will have
  * a maximum of when this lifetime expires. If a user authenticates and the lifetime
  * is up they will be forced to change their password. Does nothing if the lifetime
  * is 0 or less.
  */
  passwordLifetime?: Date;
  /** Gets or sets the password policy. */
  passwordPolicy: any;
  /** Gets or sets the percent of leased vehicles. */
  percentOfLeasedVehicles?: number;
  /** Gets or sets the percent of telematics devices. */
  percentOfTelematicsDevices?: number;
  /** Gets or sets the Purge settings. */
  purgeSettings: any;
  /** Gets or sets the rate plan downloader last call date for this database. */
  ratePlanDownloaderLastCallDate?: Date;
  /** Gets or sets returns the reseller info for this database, if it exists. */
  resellerInfo: IResellerInfo;
  /** Gets or sets the result limits for different sources. */
  resultLimits: IResultLimits;
  /**
  * Gets or sets returns true if the processor is set to light memory footprint mode
  * (for systems with large fleets).
  */
  smallCacheMode?: boolean;
  /**
  * Gets or sets the grace period to use when deciding whether speeding is happening
  * for the first speeding trigger.
  */
  speedingGraceDuration?: Date;
  /**
  * Gets or sets the 3 Speeding triggers used to calculate the violations in speed ranges
  * in (s), in km/h.
  */
  speedingTrigger: number[];
  /** Gets or sets the maximum speed for GO units, considered as NOT MOVING. */
  stopSpeedGo?: number;
  /**
  * Gets or sets the number of previous password hashes to remember. Used to prevent
  * users from changing their password to a previous password. 0 is a special value
  * where we will not prevent this. The maximum value is 1000.
  */
  storedPreviousPasswordHashes?: number;
  /** Gets or sets systemScript. */
  systemScript: string;
  /**
  * Gets or sets the trip upload version, which shows how many trips were already uploaded
  * to Google Big Query.
  */
  tripUploadVersion?: number;
  /** Gets or sets the lockout policy of user. */
  userLockoutPolicy: any;
  /**
  * Gets or sets the period (in minutes) after that user session expire if the user
  * has no activity.
  */
  userTimeoutPeriod?: number;
  /** Gets or sets the Weather Provider for this database. */
  weatherProvider: string;
  /**
  * Gets or sets a system wide value representing the maximum distance from a zone's
  * borders where a moving or stationary device is considered visiting the zone's neighbourhood.
  */
  zoneNeighbourhoodLimit?: number;
  /**
  * Gets or sets a system wide value representing the maximum distance from a zone's
  * borders where a moving device is considered visiting the zone's neighbourhood.
  */
  zoneNeighbourhoodLimitWhenMoving?: number;
}


/**
* The internal user that has access to everything and is used internally by MyGeotab
* processes.
*/
export interface ISystemUser extends IUserSystem
{
}


/** The class that represents Tachograph type key. */
export interface ITachographKey extends IKey
{
}


/** A coordinate that is related to a DateTime. */
export interface ITemporalCoordinate extends ICoordinate
{
  /** Gets or sets the date and time of this coordinate. */
  dateTime?: Date;
}


/**  The contents of a GPS Text Message. See also:. {@link ILocationContent} */
export interface ITextContent extends ITextMessageContentType
{
  /** Gets or sets contains the message text. */
  message: string;
  /**
  * Gets or sets a value indicating whether set to true this message is sent to display
  * immediately on the Garmin device. This value has no effect on messages sent from
  * the Garmin device.
  */
  urgent?: boolean;
}


/**
*  A message to send or received from a device. When working with text messages it
* is important to make the distinction between a "Reply" and a "Response". Reply:
* A reply is a Text Message that is a Reply to another text message.<br> For example:
* A text message is sent to a device and the device replies with a text message of
* it's own.<br> Response: A response is a predefined ("canned") response within a
* text message.<br> For example: A text message is sent to a device with a number
* of canned responses to reply with (Yes,<br> No, Maybe).<br> One of those responses
* is selected by the driver and is the message of the Reply from the device.<br> 
*/
export interface ITextMessage extends IEntityWithVersion
{
  /** Gets or sets the date and time the text message is active from. */
  activeFrom?: Date;
  /** Gets or sets the date and time the text message is active to. */
  activeTo?: Date;
  /** Gets or sets the date and time the message was delivered. Default [MaxDate]. */
  delivered?: Date;
  /** Gets or sets the {@link IDevice} the message was sent to. Default [Null]. */
  device: IDevice;
  /** Gets or sets if message is going to or from vehicle. */
  isDirectionToVehicle?: boolean;
  /**
  * Gets or sets the {@link IUser} who read the message or null if the message has not
  * been read.
  */
  markedReadBy: IUser;
  /**
  * Gets or sets the message content. A basic message can be sent via a {@link ITextContent}
  * or a message with predefined ("canned") responses by a {@link ICannedResponseContent}
  * or a series of {@link ILocationContent} comprising a route.
  */
  messageContent: ITextMessageContentType;
  /**
  * Gets or sets the text message that this is the reply to. Only a reply message will
  * have a parent.
  */
  parentMessage: ITextMessage;
  /**
  * Gets or sets the date and time the message was read or null if the message has not
  * been read.
  */
  read?: Date;
  /** Gets or sets the {@link IUser} the message was sent to. Default [Null]. */
  recipient: IUser;
  /**
  * Gets or sets the text message reply to this message. A text message should only
  * have one reply. (Should not reply to a reply). Default [Null]
  */
  replyMessage: ITextMessage;
  /** Gets or sets the date and time the message was sent. Default [MaxDate]. */
  sent?: Date;
  /**
  * Gets or sets the {@link IUser} that the message was sent from or null. If the message
  * was sent from a device or was generated by the system the user property will be
  * null. Default [Null].
  */
  user: IUser;
}


/** The type of the text message content. */
export interface ITextMessageContentType
{
  /** Gets or sets the type of message. See . */
  contentType?: MessageContentType;
}


/** The object used to specify the arguments when searching for a {@link ITextMessage}. */
export interface ITextMessageSearch extends ISearch
{
  /** Gets or sets search for TextMessages filtered based on the {@link IMessageContentType}. */
  contentTypes: MessageContentType[];
  /**
  * Gets or sets search for TextMessages sent to this {@link IDeviceSearch}. Available
  * DeviceSearch options are: IdGroupsGroupListSearch
  */
  deviceSearch: IDeviceSearch;
  /** Gets or sets search for TextMessages that were sent at this date or after. */
  fromDate?: Date;
  /**
  * Gets or sets search for TextMessages sent to Devices that are members of these GroupSearch(s)
  * or their child Groups. Available {@link IGroupSearch} options are: Id
  */
  groups: IGroupSearch[];
  /**
  * Gets or sets search for delivered or undelivered TextMessages. If it's set to true,
  * it will return all TextMessages that were delivered. If it set to false, it will
  * return all TextMessages that were not delivered. If it is set to null, it will return
  * both delivered and undelivered TextMessages.
  */
  isDelivered?: boolean;
  /**
  * Gets or sets search for TextMessages based on the "direction" of the message. If
  * it's set to true, it will return all TextMessages that were sent to a {@link IDevice}.
  * If it set to false, it will return all TextMessages that were not sent to a {@link
  * IDevice}. If it is set to null, it will return TextMessages sent to or from any
  * asset type.
  */
  isDirectionToVehicle?: boolean;
  /**
  * Gets or sets search for read or unread TextMessages. If it's set to true, it will
  * return all TextMessages that were read. If it set to false, it will return all TextMessages
  * that were not unread. If it is set to null, it will return both read and unread
  * TextMessages.
  */
  isRead?: boolean;
  /** Gets or sets search for TextMessages that were delivered/sent/read since this date. */
  modifiedSinceDate?: Date;
  /** Gets or sets search for TextMessages that have parent id as this {@link IId}. */
  parentMessageId: string;
  /** Gets or sets search for TextMessages that have parent id as this id. */
  parentTextMessageId?: number;
  /**
  * Gets or sets search for TextMessages sent to this {@link IUserSearch}. Available
  * UserSearch options are: IdCompanyGroupsDriverGroupsDriverGroupListSearch
  */
  recipientSearch: IUserSearch;
  /** Gets or sets search for TextMessages that were sent at this date or before. */
  toDate?: Date;
  /**
  * Gets or sets search for TextMessages sent by this {@link IUserSearch}. Available
  * UserSearch options are: IdCompanyGroupsDriverGroupsDriverGroupListSearch
  */
  userSearch: IUserSearch;
}


/** Stores custom text notifications. */
export interface ITextTemplate extends INotificationBinaryFile
{
  /** Gets or sets the text. */
  text: string;
  /** Gets or sets the type of the binary data for notifications. */
  type: NotificationBinaryFileType;
}


/**  Information about an Olson time zone. */
export interface ITimeZoneInfo
{
  /** Gets or sets the Olson time zone identifier. */
  id: string;
  /** Gets or sets a value indicating whether the time zone supports daylight saving time. */
  isDaylightSavingTimeSupported: boolean;
  /** Gets or sets the offset of the time zone from UTC. */
  offsetFromUtc: Date;
  /**
  * Gets time zone Id's mapped from Olson time zone (key) to Windows time zone (value).
  * Note: there is not a 1:1 mapping. List generated by TRUNK/Odds/TimeZoneMapper. XML
  * file from http://unicode.org/repos/cldr/trunk/common/supplemental/windowsZones.xml.
  */
  olsonWindowsTimes: { [key:string]: string };
}


/** Adjustment rule for timezones. */
export interface ITimeZoneInfoAdjustmentRule
{
  /** Gets the date end. */
  dateEnd?: Date;
  /** Gets the date start. */
  dateStart?: Date;
  /** Gets the daylight delta. */
  daylightDelta: Date;
  /** Gets the daylight transition end. */
  daylightTransitionEnd: ITransitionTime;
  /** Gets the daylight transition start. */
  daylightTransitionStart: ITransitionTime;
}


/**  TimeZone info with its day light saving rules. */
export interface ITimeZoneInfoWithRules
{
  /** Gets or sets daylight saving Adjustment rules. */
  adjustmentRules: ITimeZoneInfoAdjustmentRule[];
  /**
  * Gets or sets the time zone identifier. This is the timeZoneId that was requested.
  * Important because there are many timeZoneId that fall under a single TimeZoneInfo.id.
  */
  timeZoneId: string;
  /** Gets or sets TimeZoneInfo. */
  timeZoneInfo: ITimeZoneInfo;
}


/**
*  A trailer which can be attached and detached from a vehicle with a {@link ITrailerAttachment}
* record.
*/
export interface ITrailer extends INameEntityWithVersion
{
  /**
  * Gets or sets free text field where any user information can be stored and referenced
  * for this entity. Default [""].
  */
  comment: string;
  /** Gets or sets the list of trailer groups. */
  groups: IGroup[];
  /** Gets or sets the unique {@link IId} of the trailer. */
  id: string;
  /** Gets or sets the name of the trailer. Maximum length [255]. */
  name: string;
}


/**
* A TrailerAttachment is a record of the attachment of a {@link IDevice} over a period
* of time.
*/
export interface ITrailerAttachment extends IEntityWithVersion
{
  /** Gets or sets the date and time the {@link ITrailer} was attached. Default [UtcNow]. */
  activeFrom?: Date;
  /** Gets or sets the date and time the {@link ITrailer} was detached. Default [MaxDate]. */
  activeTo?: Date;
  /**
  * Gets the date the {@link ITrailer} was attached. This is only present so that we
  * can implement IDeviceProvider.
  */
  dateTime?: Date;
  /** Gets or sets the {@link ITrailer} is associated with. */
  device: IDevice;
  /** Gets or sets the attached {@link ITrailer}. */
  trailer: ITrailer;
}


/**
*  The object used to specify the arguments when searching for {@link ITrailerAttachment}
* record(s).
*/
export interface ITrailerAttachmentSearch extends ISearch
{
  /**
  * Gets or sets search for TrailerAttachments that were active at this date or after.
  * Set to UTC now to search for only currently active TrailerAttachments.
  */
  activeFrom?: Date;
  /** Gets or sets search for TrailerAttachments that were active at this date or before. */
  activeTo?: Date;
  /**
  * Gets or sets search for TrailerAttachments attached to this {@link IDeviceSearch}
  * Id. Available DeviceSearch options are:. Id
  */
  deviceSearch: IDeviceSearch;
  /** Gets or sets the maximum row version of the TrailerAttachment search criteria. */
  maxVersion?: number;
  /**
  * Gets or sets search for TrailerAttachments with this {@link ITrailerSearch} Id.
  * Available TrailerSearch options are:. Id
  */
  trailerSearch: ITrailerSearch;
  /** Gets or sets the row version of the TrailerAttachment search criteria. */
  version?: number;
}


/**  The object used to specify the arguments when searching for {@link ITrailer}(s). */
export interface ITrailerSearch extends ISearch
{
  /**
  * Gets or sets search for Trailers that are members of these (s) one of it's children
  * or one of it's parents. Available GroupSearch options are:. Id
  */
  groups: IGroupSearch[];
  /**
  * Gets or sets search for Trailers with a name containing this {@link IString}. Wildcard
  * can be used by prepending/appending "%" to string.
  */
  name: string;
}


/**
*  This is a vehicles trip and a summary of the driving activity during that trip.
* To get more information about stops during a trip please see {@link IExceptionEvent}.
* A complete "trip" is defined as starting at the time in which the vehicle starts
* and begins being driven. The trip continues after the vehicle has been stopped and
* ends at the time the vehicle restarts and begins being driven again; which then
* starts the next trip.
*/
export interface ITrip extends IEntity
{
  /** Gets the distance the vehicle was driven after work hours (in km). */
  afterHoursDistance?: number;
  /** Gets the duration the vehicle was driven after work hours. */
  afterHoursDrivingDuration?: Date;
  /** Gets or sets whether the trip ends after hours. */
  afterHoursEnd?: boolean;
  /** Gets or sets whether the trip starts after hours. */
  afterHoursStart?: boolean;
  /** Gets the duration the vehicle was stopped after work hours. */
  afterHoursStopDuration?: Date;
  /** Gets average speed in km/h. This only includes the average speed while driving. */
  averageSpeed?: number;
  /**
  * Gets the trip date time. 
  *
  * @deprecated
  */
  dateTime?: Date;
  /** Gets or sets the {@link IDevice} associated with the trip. */
  device: IDevice;
  /** Gets or sets the distance the vehicle was driven during this trip (in km). */
  distance?: number;
  /** Gets or sets the {@link IDriver} for the trip. */
  driver: IDriver;
  /** Gets or sets the duration between the start and stop of the trip. */
  drivingDuration?: Date;
  /** Gets the "From" Date. */
  from?: Date;
  /**
  * Gets or sets total end of trip idling (idling is defined as speed is 0 and ignition
  * on). It is calculated from the beginning of this trip to beginning of next trip.
  */
  idlingDuration?: Date;
  /**
  * Gets or sets Does this trip have a Seat Belt Off Incident. Not Supported/Obsolete.
  * We still have a field in the Trips table though.
  *
  * @deprecated
  */
  isSeatBeltOff?: boolean;
  /** Gets or sets the maximum speed of the vehicle during this trip (in km/h). */
  maximumSpeed?: number;
  /** Gets the start date of the next trip. */
  nextTripStart?: Date;
  /**
  * Gets or sets the number of incidents where the vehicle reached the first range of
  * speeding triggers.
  */
  speedRange1?: number;
  /**
  * Gets or sets the duration where the vehicle drove in the first range of speeding
  * triggers.
  */
  speedRange1Duration?: Date;
  /**
  * Gets or sets the number of incidents where the vehicle reached the second range
  * of speeding triggers.
  */
  speedRange2?: number;
  /**
  * Gets or sets the duration where the vehicle drove in the second range of speeding
  * triggers.
  */
  speedRange2Duration?: Date;
  /**
  * Gets or sets the number of incidents where the vehicle reached the third range of
  * speeding triggers.
  */
  speedRange3?: number;
  /**
  * Gets or sets the duration where the vehicle drove in the third range of speeding
  * triggers.
  */
  speedRange3Duration?: Date;
  /** Gets or sets the date and time that the trip started. */
  start?: Date;
  /** Gets or sets the date and time the trip stopped. */
  stop?: Date;
  /**
  * Gets or sets the duration the vehicle was stopped at the end of the trip. This also
  * includes any idling done at the end of a trip.
  */
  stopDuration?: Date;
  /** Gets or sets the {@link ICoordinate} associated with this Trip's stop. */
  stopPoint: any;
  /** Gets the "To" Date. */
  to?: Date;
  /** Gets or sets the distance the vehicle was driven during work hours. */
  workDistance?: number;
  /** Gets or sets the duration the vehicle was driven during work hours. */
  workDrivingDuration?: Date;
  /** Gets or sets the duration the vehicle was stopped during work hours. */
  workStopDuration?: Date;
}


/**
*  This stores unique geohash based on {@link ITrip}.
*
* @deprecated
*/
export interface ITripGeohash extends IEntity
{
  /** Gets or sets the associated trip start date time. */
  dateTime?: Date;
  /** Gets or sets the {@link ITripGeohash}. */
  device?: IDevice;
  /** Gets or sets geohash of precision 6 based on latitude and longitude of {@link ILogRecord}. */
  geohash?: string;
}


/** The object used to specify the arguments when searching for a {@link ITripGeohash}. */
export interface ITripGeohashSearch extends ISearch
{
  /**
  * Gets or sets search for TripGeohashes with a {@link IDeviceSearch} Id. Available
  * DeviceSearch options are: Id
  */
  deviceSearch?: IDeviceSearch;
  /** Gets or sets search for TripGeohashes recorded from this date onwards. */
  startDateTime?: Date;
}


/**
*  The object used to specify the arguments when searching for<br> {@link ITrip}(s).<br>
* This search has been designed to work efficiently with these combinations of parameters:IdDeviceSearch
* + FromDate and/or ToDate (+ IncludeOverlappedTrips)UserSearch + FromDate and/or
* ToDate (+ IncludeOverlappedTrips)
*/
export interface ITripSearch extends ISearch
{
  /**
  * Gets or sets search for Trips with this {@link IDeviceSearch} Id. Available DeviceSearch
  * options are:. Id
  */
  deviceSearch: IDeviceSearch;
  /**
  * Gets or sets search for Trips recorded at this date or after. When "IncludeOverlappedTrips"
  * is set to True, search for Trips where the NextTripStartTime is at this date, after
  * or NULL.
  */
  fromDate?: Date;
  /**
  * Gets or sets a value indicating whether when OverlappedTrips is set to True; any
  * part of a trip that overlaps with the FromDate or ToDate boundary will have the
  * entire trip included in the data.
  */
  includeOverlappedTrips: boolean;
  /** Gets or sets maximum Id of the search criteria. */
  maxId: string;
  /** Gets or sets minimum Id of the search criteria. */
  minId: string;
  /**
  * Gets or sets search rectangular area for Trips; the trips being retrieved must be
  * located in this area. The {@link IBoundingBox} object should contain the bottom
  * left and top right coordinates of the searching rectangle.
  */
  searchArea: IBoundingBox;
  /**
  * Gets or sets search for Trips recorded at this date or before. When "IncludeOverlappedTrips"
  * is set to True, search for Trips where the StartDateTime is this date or before.
  */
  toDate?: Date;
  /**
  * Gets or sets search for Trips with this {@link IUserSearch} Id. Available UserSearch
  * options are:. Id
  */
  userSearch: IUserSearch;
}


/** The trip summary data for TripSummary report. */
export interface ITripSummary
{
  /** Gets or sets the duration of the customer. */
  customerDuration: Date;
  /** Gets or sets the customer stop count. */
  customerStopCount: number;
  /** Gets number of distinct days driven. */
  daysDriven: Date[];
  /** Gets or sets the device. */
  device: IDevice;
  /** Gets or sets the distance. */
  distance: number;
  /** Gets or sets the driver. */
  driver: IDriver;
  /** Gets or sets the duration of the driving. */
  drivingDuration: Date;
  /** Gets or sets the duration of the home. */
  homeDuration: Date;
  /** Gets or sets the duration of the idling. */
  idlingDuration: Date;
  /** Gets or sets the maximum speed. */
  maximumSpeed: number;
  /** Gets or sets the duration of the office. */
  officeDuration: Date;
  /** Gets or sets the stop count of all trips. */
  stopCount: number;
  /** Gets or sets the duration of the stop. */
  stopDuration: Date;
}


/** Indicates when a was changed. */
export interface ITripTypeChange extends IEntity
{
  /** Gets or sets the date time. */
  dateTime?: Date;
  /** Gets or sets the device. */
  device: IDevice;
  /** Gets or sets the type of the trip. */
  tripType?: TripType;
}


/**
*  The object used to specify the arguments when searching for {@link ITripTypeChange}(s).<br>
*/
export interface ITripTypeChangeSearch extends ISearch
{
  /**
  * Gets or sets search for {@link IDeviceSearch} Id. Available DeviceSearch options
  * are:. IdGroupsGroupListSearch
  */
  deviceSearch: IDeviceSearch;
  /** Gets or sets search for {@link ITripTypeChange}s recorded at this date or after. */
  fromDate?: Date;
  /**
  * Gets or sets a value indicating whether gets or sets a value to include the first
  * {@link IFromDate} is null this has no effect.
  */
  includeFromDateOverlap: boolean;
  /** Gets or sets search for {@link ITripTypeChange}s recorded at this date or before. */
  toDate?: Date;
}


/**
*  A device trip.
*
* @deprecated
*/
export interface ITripWithLogs
{
  /**
  * @inheritdoc
  */
  from?: Date;
  /** Gets the . */
  logs: ILogRecord[];
  /**
  * @inheritdoc
  */
  to?: Date;
  /** Gets the . */
  trip: ITrip;
}


/** This object contains the users UI security configuration. */
export interface IUIConfiguration
{
  /** Gets the access control list. */
  acl: ISecurityFilter[];
  /** Gets a value indicating whether returns true if the web ui config has any. */
  containsAny: boolean;
  /** Gets or sets the system script. This is a script that runs when the browser starts. */
  systemScript: string;
}


/**
*  The default unknown driver of a . Used if the driver is not identified through
* a key.
*
* @deprecated
*/
export interface IUnknownDriver extends IDriverSystem
{
}


/**
* An untracked asset that is used in MyGeotab without a serial number. This is used
* for extensibility and is based on the {@link IDevice} object.
*/
export interface IUntrackedAsset extends IDevice
{
  /**
  * Gets or sets the offset to be applied engine hours data reported by the engine computer.
  * Default [0].
  */
  engineHourOffset?: number;
  /** Gets or sets the Engine Hours for the device. Default [0]. */
  engineHours?: number;
  /**
  * Gets or sets the Engine Vehicle Identification Number from the engine of the vehicle
  * associated with the device.
  */
  engineVehicleIdentificationNumber?: string;
  /**
  * Gets or sets the vehicle license plate details of the vehicle associated with the
  * device. Maximum length [50] Default [""].
  */
  licensePlate?: string;
  /**
  * Gets or sets the state or province of the vehicle associated with the device. Maximum
  * length [50] Default [""].
  */
  licenseState?: string;
  /** Gets or sets the Odometer for the device. */
  odometer?: number;
  /**
  * Gets or sets a value used to correct the odometer value received from the engine.
  * Default [1].
  */
  odometerFactor?: number;
  /**
  * Gets or sets the offset to be applied odometer reported by the engine computer.
  * Default [0].
  */
  odometerOffset?: number;
  /**
  * Gets or sets the Vehicle Identification Number (VIN) of the vehicle associated with
  * the device. Maximum length [50] Default [""].
  */
  vehicleIdentificationNumber?: string;
}


/** Represent a USB {@link IKey} for a . */
export interface IUsbKey extends IKey
{
}


/** A user of the system. A user can be a MyGeotab user or a user that is a {@link IDriver}. */
export interface IUser extends INameEntityWithVersion
{
  /** Gets a value indicating the user accepted EULA revision number. Default [0]. */
  acceptedEULA?: number;
  /**
  * Gets or sets the list of active dashboards for the user, displayed on the dashboard
  * page. Default [empty].
  */
  activeDashboardReports: string[];
  /** Gets or sets the date the user is active from. Default [UtcNow]. */
  activeFrom?: Date;
  /** Gets or sets the date the user is active to. Default [MaxDate]. */
  activeTo?: Date;
  /** Gets or sets the HOS authority address of the user. Default [""]. */
  authorityAddress: string;
  /** Gets or sets the HOS authority name of the user. Default [""]. */
  authorityName: string;
  /** Gets or sets list of all available dashboard reports to the user. Default [empty]. */
  availableDashboardReports: string[];
  /**
  * Gets or sets the user's stored list of custom response options to choose from when
  * sending a . Each item is a set of predefined response options. Default [empty].
  */
  cannedResponseOptions: string[][];
  /** Gets or sets the carrier number. Default [""]. */
  carrierNumber: string;
  /**
  * Gets or sets a flag indicating whether the user's password requires resetting. If
  * [true], the user will be forced to change their password on next login. Default
  * [false].
  */
  changePassword?: boolean;
  /**
  * Gets or sets free text field where any user information can be stored and referenced
  * for this entity. Default [""].
  */
  comment: string;
  /** Gets or sets the company address for the user. Default [""]. */
  companyAddress: string;
  /** Gets or sets the list of organization (s) that the user belongs to. */
  companyGroups: IGroup[];
  /** Gets or sets the name of the company for the user. Default [""]. */
  companyName: string;
  /**
  * Gets or sets the user two symbols country ISO code (https://www.iso.org/iso-3166-country-codes.html).
  * Maximum length [2] Default [""]
  */
  countryCode: string;
  /**
  * Gets or sets the format dates will be displayed to this user. Default ["MM/dd/yy
  * HH:mm:ss"].
  */
  dateFormat: string;
  /** Gets or sets the default tiles when using Google maps. Default [Roadmap]. */
  defaultGoogleMapStyle?: number;
  /** Gets or sets the default tiles when using Here Maps. Default [Roadmap]. */
  defaultHereMapStyle?: number;
  /**
  * Gets or sets the default map engine to use for this user. System map engines are:
  * GoogleMapsHereMapMapBox Default ["MapBox"].
  */
  defaultMapEngine: string;
  /** Gets or sets the default tiles when using Open Street Maps. Default [MapBox]. */
  defaultOpenStreetMapStyle?: number;
  /**
  * Gets or sets the default start page to view when login is complete. Maps to the
  * hash portion of the web site URL (https://url/enpoint/[#page]). Default [helpGuide].
  */
  defaultPage: string;
  /**
  * Gets or sets the designation or title of the employee. Maximum length [50] Default
  * [""].
  */
  designation: string;
  /** Gets or sets the DisplayMeasurementProfile. */
  displayMeasurementProfile: IDisplayMeasurementProfile;
  /** Gets or sets the driver's last viewed guide version. Default [0]. */
  driveGuideVersion?: number;
  /**
  * Gets or sets the user's preferred {@link IElectricEnergyEconomyUnit} for viewing
  * fuel economy. Default [LitersEPer100Km].
  */
  electricEnergyEconomyUnit?: number;
  /**
  * Gets or sets the employee number or external identifier. Maximum length [50] Default
  * [""].
  */
  employeeNo: string;
  /**
  * Gets or sets the user's preferred day to represent the start of the week. Default
  * ["Sunday"].
  */
  firstDayOfWeek?: number;
  /** Gets or sets the first name of the user. Maximum length [255]. */
  firstName: string;
  /**
  * Gets or sets the user's preferred {@link IFuelEconomyUnit} for viewing fuel economy.
  * Default [LitersPer100Km].
  */
  fuelEconomyUnit?: number;
  /** Gets or sets the aggregated list of all user groups. */
  groups: IGroup[];
  /** Gets or sets the {@link IHosRuleSet} the user follows. Default [None]. */
  hosRuleSet?: number;
  /** Gets or sets the unique identifier for the User. See . */
  id: string;
  /**
  * Gets or sets the is driver toggle, if [true] the user is a driver, otherwise [false].
  * Default [false].
  */
  isDriver?: boolean;
  /**
  * Gets or sets the isEmailReportEnabled, if [true] the user will receive the emailed
  * report, otherwise [false]. Default [true].
  */
  isEmailReportEnabled?: boolean;
  /**
  * Gets a value indicating whether the old EULA has been accepted by the end user.
  * Default [false].
  */
  isEULAAccepted?: boolean;
  /**
  * Gets or sets a value indicating whether the user is allowed to HOS personal conveyance.
  * Default [false].
  */
  isExemptHOSEnabled?: boolean;
  /**
  * Gets or sets a value indicating whether labs are enabled for this user. When set
  * to true this will enable experimental features that are still in the process of
  * being developed. Default [false].
  */
  isLabsEnabled?: boolean;
  /**
  * Gets or sets whether the current regional settings is in metric units of measurement
  * (or US/Imperial). Default [true].
  */
  isMetric?: boolean;
  /**
  * Gets or sets a value that indicates whether news notifications are enabled for this
  * user. Default [true].
  */
  isNewsEnabled?: boolean;
  /**
  * Gets or sets a value indicating whether the user is allowed to HOS personal conveyance.
  * Default [false].
  */
  isPersonalConveyanceEnabled?: boolean;
  /**
  * Gets or sets a value indicating whether are service update notifications enabled
  * for this user. Default [false].
  */
  isServiceUpdatesEnabled?: boolean;
  /**
  * Gets or sets the issuer {@link ICertificate} for the user. Will only be populated
  * for users not using basic authentication.
  */
  issuerCertificate: ICertificate;
  /**
  * Gets or sets a value indicating whether the user is allowed to HOS yard move. Default
  * [false].
  */
  isYardMoveEnabled?: boolean;
  /**
  * Gets or sets the user's culture identifier as a predefined {@link IName} of an existing
  * System.Globalization.CultureInfo, or Windows-only culture name. Default: ["en"]
  * for English.
  */
  language: string;
  /** Gets or sets the user's Last access date of the system. */
  lastAccessDate?: Date;
  /** Gets or sets the last name of the user. Maximum length [255]. */
  lastName: string;
  /**
  * Gets or sets the list of the of the available {@link IMapView}s from the live map.
  * Default [continent of the user's selected time zone].
  */
  mapViews: any[];
  /**
  * Gets or sets a value indicating the maximum personal conveyance distance per day
  * in meters. Default [0].
  */
  maxPCDistancePerDay?: number;
  /** Gets or sets the user's email address / login name. Maximum length [255]. */
  name: string;
  /** Gets or sets the user's password. */
  password: string;
  /**
  * Gets or sets the user phone number with space separated country phone code. Example
  * +1 5555555555. Maximum length [20] Default [""]
  */
  phoneNumber: string;
  /**
  * Gets or sets the user phone number without formatting. Maximum length [5] Default
  * [""]
  */
  phoneNumberExtension: string;
  /** Gets or sets the private (s) that the user belongs to. */
  privateUserGroups: IGroup[];
  /**
  * Gets or sets the report (s) for reporting that this user belongs to. The selected
  * reporting groups will allow the user to sort entities that are children of the selected
  * groups. It will not allow them to see entities that are outside of their data access.
  * Default [empty].
  */
  reportGroups: IGroup[];
  /** Gets or sets the security (s) this user belongs to; which define the user's access. */
  securityGroups: IGroup[];
  /**
  * Gets or sets a flag indicating whether to show ClickOnce support warning as the
  * default page. (legacy) Default [false].
  */
  showClickOnceWarning?: boolean;
  /**
  * Gets or sets the IANA time zone Id of the user. All data will be displayed in this
  * time zone. Default ["America/New\_York"].
  */
  timeZoneId: string;
  /** Gets or sets the . Default [Basic]. */
  userAuthenticationType?: UserAuthenticationType;
  /**
  * Gets or sets a value indicating the user accepted Wifi specific EULA revision number.
  * Default [0].
  */
  wifiEULA?: number;
  /**
  * Gets or sets the windows authentication user Id. This property is so we don't return
  * both User Id and Name to the client side when they have the same value. User Id
  * and Name only differ for WindowsAuthentication users.
  */
  windowsAuthenticationUserId: string;
  /** Gets or sets the default {@link IZoneDisplayMode} used on the map. Default [Default]. */
  zoneDisplayMode?: number;
}


/** A user's Hos Ruleset. */
export interface IUserHosRuleSet extends IEntityWithVersion
{
  /** Gets or sets the active from. */
  dateTime?: Date;
  /** Gets or sets the ruleset. */
  hosRuleSet: IHosRuleSetNew;
  /** Gets or sets the start of day. */
  startOfDay?: Date;
  /** Gets or sets the user. */
  user: IUser;
}


/**
* false The object used to specify the arguments when searching for {@link IHosRuleSet}
* objects.
*/
export interface IUserHosRuleSetSearch extends ISearch
{
  /** Gets or sets search for hos ruleset objects that were recorded at this date or after. */
  fromDate?: Date;
  /**
  * Gets or sets Search for {@link IUserHosRuleSet}s with a maximum of this version.
  *
  * @deprecated
  */
  maxVersion?: number;
  /**
  * Gets or sets Search for {@link IUserHosRuleSet}s with a minimum of this version.
  *
  * @deprecated
  */
  minVersion?: number;
  /** Gets or sets search for hos ruleset objects that were recorded at this date or before. */
  toDate?: Date;
  /**
  * Gets or sets search for hos ruleset objects with this {@link IUserSearch}. Available
  * UserSearch options are:. IdGroupSearch
  */
  userSearch: IUserSearch;
}


/** User's Login status. */
export interface IUserLoginStatus extends IEntity
{
  /** Gets or sets updated time of this record. */
  dateTime?: Date;
  /** Gets or sets user's first failure authentication time. */
  firstLoginFailureDatetime?: Date;
  /** Gets or sets user's lockout time. */
  lockoutUntil?: Date;
  /** Gets or sets user's failure count. */
  loginFailureCount?: number;
  /** Gets or sets the user. */
  user: IUser;
}


/**
*  The object used to specify the arguments when searching for a .
*
* @deprecated
*/
export interface IUserLoginStatusSearch extends ISearch
{
  /** Gets or sets a value indicating whether the users are locked at this moment. */
  onlyCurrentyLockedOut: boolean;
  /**
  * Gets or sets search for UserloginStatus with this {@link IUserSearch} Id Available
  * UserSearch options are:. Id
  */
  userSearch: IUserSearch;
}


/**
* A class representing extra data to be stored with a {@link INotificationUserModifiedData}
* and serialized into the Info column of the 'notificationdata' table.
*/
export interface IUserModifiedInfo
{
  /** Gets the username of the {@link IModifiedUserName}. */
  modifiedByUserName: string;
  /** Gets the username of the {@link IUser} which was modified. */
  modifiedUserName: string;
}


/**
* A class which represents data associated with {@link INotificationUserModifiedData}.
* This type holds additional information about properties of the {@link IUser} which
* were modified. It only applies to certain types of {@link IUserModification})}).
*/
export interface IUserModifiedValueInfo extends IUserModifiedInfo
{
  /**
  * Gets a string representing the value that was sent to the Audit log from given property
  */
  message: string;
  /**
  * Gets a set of strings representing values that were added to a property for a given
  * {@link IUser}. Only applicable for or . When a User's {@link IGroup}s are modified,
  * the names of all the groups that were added.<br> OR:<br> When a User's {@link ISecurityClearance}s
  * are modified, the names of all the clearances that were added.<br> 
  */
  propertyValuesAdded: string[];
  /**
  * Gets a set of strings representing values that were removed from a property for
  * a given {@link IUser}. Only applicable for or . When a User's {@link IGroup}s are
  * modified, the names of all the groups that were removed.<br> OR:<br> When a User's
  * {@link ISecurityClearance}s are modified, the names of all the clearances that were
  * removed.<br> 
  */
  propertyValuesRemoved: string[];
}


/**
* A password hash. May represent a currently valid hash, or could represent a previous
* password hash that we are storing to prevent duplication. For internal use in the
* User bridge.
*/
export interface IUserPasswordHash extends IEntity
{
  /** Gets or sets the time this password was set. */
  dateTime?: Date;
  /** Gets or sets the password hash. */
  hash: string;
  /**
  * Gets or sets the password string. Used for checking for duplicates; wil be null
  * if read from database.
  */
  password: string;
  /** Gets or sets a User. */
  user: IUser;
}


/** The object used to specify the arguments when searching for a {@link IDriver}. */
export interface IUserSearch extends ISearch
{
  /** Gets or sets search for Users who are associated with this {@link IUserAuthenticationType}. */
  authenticationType?: UserAuthenticationType;
  /**
  * Gets or sets search for Users who are a member of this . Available GroupSearch options
  * are:. IdCannot be used with DriverGroups.
  */
  companyGroups: IGroupSearch[];
  /**
  * Gets or sets search for Users who are assigned a Driver Key which is a member of
  * the {@link IGroupSearch}. Available GroupSearch options are:. IdCannot be used with
  * CompanyGroups.
  */
  driverGroups: IGroupSearch[];
  /**
  * Gets or sets search for a User who is associated with this Driver Employee Number.
  * Wildcard can be used by prepending/appending "%" to string. Example "%EmployeeNumber%".
  * This property is negatable. If the first character of this search property is '!',
  * then the API will know to negate the search logic. (e.g. field = "!EmployeeNumber%",
  * is equivalent to: WHERE NOT LIKE 'EmployeeNumber%')
  */
  employeeNumber: string;
  /**
  * Gets or sets search for Users with this first name. Wildcard can be used by prepending/appending
  * "%" to string. Example "%firstName%". This property is negatable. If the first character
  * of this search property is '!', then the API will know to negate the search logic.
  * (e.g. field = "!John%", is equivalent to: WHERE NOT LIKE 'John%')
  */
  firstName: string;
  /**
  * Gets or sets search for Users that were active at this date or after. Set to UTC
  * now to search for only currently active (non-archived) users.
  */
  fromDate?: Date;
  /** Gets or sets search for Users who are associated with this {@link IHosRuleSet}. */
  hosRuleSet?: number;
  /** Gets or sets only search for Users who have a Driver Key assigned. */
  isDriver?: boolean;
  /** Gets or sets search for a User who is associated with this Driver Key Id. */
  keyId?: number;
  /**
  * Gets or sets search for entities that contain specific keywords in all wildcard
  * string-searchable fields.
  */
  keywords: string[];
  /**
  * Gets or sets search for Users with this last name. Wildcard can be used by prepending/appending
  * "%" to string. Example "%lastName%". This property is negatable. If the first character
  * of this search property is '!', then the API will know to negate the search logic.
  * (e.g. field = "!John%", is equivalent to: WHERE NOT LIKE 'John%')
  */
  lastName: string;
  /**
  * Gets or sets search for a User who is associated with this Driver License Number.
  * Wildcard can be used by prepending/appending "%" to string. Example "%LicenseNumber%".
  * This property is negatable. If the first character of this search property is '!',
  * then the API will know to negate the search logic. (e.g. field = "!LicenseNumber%",
  * is equivalent to: WHERE NOT LIKE 'LicenseNumber%')
  */
  licenseNumber: string;
  /**
  * Gets or sets search for Users with this email/log-on name. Wildcard can be used
  * by prepending/appending "%" to string. Example "%name%". This property is negatable.
  * If the first character of this search property is '!', then the API will know to
  * negate the search logic. (e.g. field = "!John%", is equivalent to: WHERE NOT LIKE
  * 'John%')
  */
  name: string;
  /**
  * Gets or sets search for Users who are assigned to a specific Security Clearance
  * which is a member of the {@link IGroupSearch}. Available GroupSearch options are:.
  * Id
  */
  securityGroups: IGroupSearch[];
  /** Gets or sets search for a User who is associated with this Driver Serial Number. */
  serialNumber: string;
  /** Gets or sets search for Users that were active at this date or before. */
  toDate?: Date;
}


/**
* This is a with an Id of . A user see that has this group assigned to its security
* groups will have the default level of access.
*/
export interface IUserSecurityGroup extends ISystemSecurityClearance
{
  /** Gets the unique identifier for this entity. see . */
  id: string;
  /** Gets the name of this system group. Cannot be set. */
  name: string;
}


/** A user's support. */
export interface IUserSupport extends IEntity
{
  /** Gets or sets type of support for current user. */
  type: UserSupportType;
  /** Gets or sets the user. */
  user: IUser;
}


/**
*  The object used to specify the arguments when searching for a .
*
* @deprecated
*/
export interface IUserSupportSearch extends ISearch
{
  /** Gets or sets search for UserSupport with this {@link IUserSupportType} Id */
  type?: UserSupportType;
  /**
  * Gets or sets search for UserSupport with this {@link IUserSearch} Id Available UserSearch
  * options are:. Id
  */
  userSearch?: IUserSearch;
}


/** Base class for all system user types. */
export interface IUserSystem extends IUser
{
  /** Gets or sets the list of organization (s) that the user belongs to. */
  companyGroups: IGroup[];
  /** Gets or sets the unique identifier for this entity. see . */
  id: string;
  /**
  * Gets or sets the name of this entity that uniquely identifies it and is used when
  * displaying this entity. The name cannot be changed for this user.
  */
  name: string;
  /** Gets or sets the private (s) that the user belongs to. */
  privateUserGroups: IGroup[];
  /** Gets or sets the (s) for reporting that this user belongs to. */
  reportGroups: IGroup[];
  /** Gets or sets the security (s) this user belongs to defining the users access. */
  securityGroups: IGroup[];
  /**
  * @inheritdoc
  */
  version?: number;
}


/** Message content to send {@link IVehicleCommand}s to a vehicle. */
export interface IVehicleCommandContent extends IDataToComponentContent
{
  /** Gets or sets the command to send to the vehicle. */
  command: VehicleCommand;
  /**
  * Gets or sets the {@link IDateTime} the command was sent. The commands that are too
  * old will be ignored.
  */
  commandDate: Date;
  /**
  * Gets or sets an optional payload that goes with the command. If not needed it will
  * be set to 0.
  */
  commandPayload: number;
}


/** VehicleConfiguration parameters entity. */
export interface IVehicleConfiguration extends IEntityWithVersion
{
  /** Gets or sets the {@link IDevice} associated with this VehicleConfiguration. */
  device: IDevice;
}


/**  The object used to specify the arguments when searching for {@link IVehicleConfiguration}(s). */
export interface IVehicleConfigurationSearch extends ISearch
{
  /**
  * Gets or sets search for VehicleConfiguration for this {@link IDeviceSearch} Id.
  * Available DeviceSearch options are: IdGroupsGroupListSearch
  */
  deviceSearch: IDeviceSearch;
}


/** A summary of vehicle activity for a given route and day. */
export interface IVehicleDayRoute extends IRouteDevice
{
  /** Gets or sets the number of customer stops over the minimum stop time threshold. */
  customerStopsOverThreshold: number;
  /** Gets or sets the number of customer stops under the minimum stop time threshold. */
  customerStopsUnderThreshold: number;
  /** Gets or sets the total duration of customer stops over the minimum stop time threshold. */
  customerTimeOverThreshold: Date;
  /** Gets or sets the total duration of customer stops under the minimum stop time threshold. */
  customerTimeUnderThreshold: Date;
  /** Gets or sets the total distance driven for the day. */
  distance: number;
  /** Gets or sets the total driving time for the day. */
  driveTime: Date;
  /** Gets the list of the matched route for the day. */
  employeeList: string;
  /** Gets or sets the list of employees associated with this route and day. */
  employees: IEmployee[];
  /** Gets or sets the first time the device departed for the day in UTC time. */
  firstDepartureTime: Date;
  /** Gets or sets the total number of stops at a home type zone. */
  homeStops: number;
  /** Gets or sets the total amount of time spent at home. */
  homeTime: Date;
  /** Gets or sets the total amount of time spent idling. */
  idleTime: Date;
  /** Gets or sets the number of jack rabbit starts (not implemented currently). */
  jackRabbitStarts: number;
  /** Gets or sets the time of the last trips arrival. */
  lastArrivalTime?: Date;
  /** Gets or sets the Last Office Stop . */
  lastOfficeStopZone?: IZone;
  /** Gets the first time the device departed for the day in device's time zone. */
  localFirstDepartureTime?: IDateTimeWithTimeZone;
  /** Gets the time of the last trips arrival in the device's time zone. */
  localLastArrivalTime?: IDateTimeWithTimeZone;
  /** Gets or sets the count or candidate {@link IRoute}. */
  matchedRouteCandidateRouteItemCount: number;
  /** Gets or sets gets the matched route zone names. */
  matchedRouteZoneNames: string;
  /** Gets or sets the number of office stops. */
  officeStops: number;
  /** Gets or sets the total duration spent at an office type zone. */
  officeTime: Date;
  /**
  * Gets the percentage of time spent speeding. The percentage is calculated against
  * the total amount of driving time.
  */
  percentageSpeeding: number;
  /** Gets or sets the number of seat belt violations for the day. */
  seatbeltViolations: number;
  /** Gets or sets the number of speeding violations for the day. */
  speedingViolations: number;
  /** Gets or sets the total amount of time spent over the speeding threshold. */
  speedingViolationTime: Date;
  /** Gets or sets gets the stops within thresholds. */
  stopsWithinThresholds: number;
  /** Gets the total stops, regardless of type. */
  totalStops: number;
  /** Gets the total time. */
  totalTime: Date;
  /** Gets or sets the number of undefined stops over the minimum stop time threshold. */
  undefinedStopsOverThreshold: number;
  /** Gets or sets the number of undefined stops under the minimum stop time threshold. */
  undefinedStopsUnderThreshold: number;
  /** Gets or sets the total duration of stops over the minimum stop time threshold. */
  undefinedStopTimeOverThreshold: Date;
  /** Gets or sets the total duration of stops under the minimum stop time threshold. */
  undefinedStopTimeUnderThreshold: Date;
}


/** Software version information for the server. */
export interface IVersionInformation
{
  /** Gets or sets the {@link IApplicationVersionInformation}. */
  application: IApplicationVersionInformation;
  /** Gets or sets the current version of the MyGeotab databases on the server. */
  database: string;
  /** Gets or sets the Text to Speech firmware version provided by the server. */
  goTalk: string;
  /**
  * Gets or sets the current version of MyGeotab, branch, and commit hash running on
  * the server.
  */
  server: string;
  /** Gets or sets the server flags. */
  serverFlags: number;
}


/**
* This is a with an Id of . A user see that have their security assigned to this group
* will only have access to view local data in the system. This user is unable to \*modify\*
* any data in the system and is the type of access that is recommended for users that
* need to view data in reports, tracking etc.
*/
export interface IViewOnlySecurityGroup extends ISystemSecurityClearance
{
  /** Gets the unique identifier for this entity. see . */
  id: string;
  /** Gets the name of this system group. Cannot be set. */
  name: string;
}


/** Represents a way or road segment in OSM. */
export interface IWay
{
  /** Gets or sets the road segment index. */
  index?: number;
  /** Gets or sets is the speed value and estimate. */
  isEstimate?: boolean;
  /** Gets or sets the IsOverRide of the points. */
  isOverRide?: boolean;
  /** Gets or sets the date the way was last edited. */
  lastEdited?: Date;
  /** Gets or sets the MaxSpeed of the points. */
  maxSpeed?: number;
  /** Gets or sets the of the points. */
  points: any[];
  /** Gets or sets details on the provider of the road data. */
  provider: string;
  /** Gets or sets the RoadName of the points. */
  roadName: string;
  /** Gets or sets the Truck MaxSpeed of the points. */
  truckMaxSpeed?: number;
  /** Gets or sets the OSM Way Id. */
  wayId?: number;
}


/** A list of way segments and details. */
export interface IWayPathDetails
{
  /**
  * Gets or sets the array of ratios that represent the ratio of distance changes between
  * two coordinate indexes where a change in the way segment happened. For example,
  * if the speed limit changes halfway in between point2 and point3, we would return
  * and index of 2.5.
  */
  indexRatios: number[];
  /** Gets or sets the array of way segment values for each index ratio. */
  waySegments: IWay[];
}


/** This describes an error that the web Javascript client has. */
export interface IWebClientError
{
  /** Gets or sets the ajax call. */
  ajaxCall: string;
  /** Gets or sets the ajax error. */
  ajaxError: string;
  /** Gets or sets the ajax success. */
  ajaxSuccess: string;
  /** Gets or sets the browser properties. */
  browserProperties: string;
  /** Gets or sets the error client settings. */
  clientSettings: string;
  /** Gets or sets the comment. */
  comment: string;
  /** Gets or sets the database. */
  database: string;
  /** Gets or sets he error source for errors without stack trace. */
  errorSource: string;
  /** Gets or sets the name of the exception. */
  exceptionName: string;
  /** Gets or sets the name of the file. */
  fileName: string;
  /** Gets or sets the error hash. */
  hash: string;
  /** Gets or sets the line number. */
  lineNumber: number;
  /** Gets or sets the message. */
  message: string;
  /**
  * Gets or sets additional error details. Might be navigation history, request logs
  * - everything that doesn't match other fields.
  */
  otherDetails: string;
  /** Gets or sets the previous errors. */
  previousErrors: string;
  /** Gets or sets the stack trace. */
  stackTrace: string;
  /** Gets or sets the tag. */
  tag: string;
  /** Gets or sets gets or Sets description of tasks running when exception happened. */
  tasks: string;
  /** Gets or sets the error timeStamp. */
  timeStamp: string;
  /** Gets or sets the URL. */
  url: string;
  /** Gets or sets the user. */
  user: string;
}


/** URL template. */
export interface IWebRequestTemplate extends INotificationBinaryFile
{
  /** Gets or sets the data to be sent as the POST data. Null otherwise. */
  postBody: string;
  /** Gets or sets the request type is an HTTP GET or POST. */
  requestType?: WebRequestTemplateHttpVerb;
  /** Gets or sets get the type of the binary data for notifications. */
  type: NotificationBinaryFileType;
  /** Gets or sets the url to connect to. */
  url: string;
}


/**
* Widget class represents a single widget that is a part of dashboard displayed on
* dashboard page.
*/
export interface IWidget extends INameEntity
{
  /** Gets or sets the date the widget is active from. Default [UtcNow]. */
  activeFrom?: Date;
  /** Gets or sets the date the widget is active to. Default [MaxDate]. */
  activeTo?: Date;
  /**
  * Gets or sets the details of the widget. The details are in json format. Default
  * [""].
  */
  jsonDetails: string;
  /** Gets or sets the {@link IUser} who created the widget. */
  owner: IUser;
  /** Gets or sets the {@link IReportPeriod} of scheduled report. */
  period?: ReportPeriod;
  /** Gets or sets the widget type. */
  type?: WidgetType;
}


/**
*  The object used to specify the arguments when searching for a .
*
* @deprecated
*/
export interface IWidgetSearch extends ISearch
{
  /**
  * Gets or sets search for Widget with this Name. Wildcard can be used by prepending/appending
  * "%" to string. Example "%name%".
  */
  name: string;
  /**
  * Gets or sets search for Widgets by the list of widgetIds. Available WidgetSearch
  * options are:. Id
  */
  widgetIds: string[];
}


/** WiFi parameters entity. */
export interface IWiFiHotspot extends IVehicleConfiguration
{
  /** Gets or sets the WiFi password. */
  password: string;
  /** Gets or sets the WiFi SSID. */
  ssid: string;
}


/** Parameters for WiFi hotspot. */
export interface IWiFiHotspotData
{
  /** Gets or sets the WiFi password. */
  password: string;
  /** Gets or sets the WiFi SSID. */
  ssid: string;
}


/** The object used to specify the arguments when searching for a . */
export interface IWiFiHotspotSearch extends IVehicleConfigurationSearch
{
}


/**
*  DaySummary.
*
* @deprecated
*/
export interface IWorkdaySummary
{
  /** Gets or sets the amount the driving limit was extended. */
  driveExtension?: Date;
  /** Gets or sets the from date. */
  fromDate?: Date;
  /** Gets or sets the to date. */
  toDate?: Date;
  /** Gets or sets the amount the workday limit was extended. */
  workdayExtension?: Date;
}


/**  Day that is specified as not being a regular working day. */
export interface IWorkHoliday extends INameEntity
{
  /** Gets or sets the midnight of the work holiday. */
  date: IDateTimeWithTimeZone;
  /** Gets or sets the holiday group for this holiday day. See . */
  holidayGroup: IWorkTimeHolidayGroupId;
}


/**  The object used to specify the arguments when searching for a . */
export interface IWorkHolidaySearch extends ISearch
{
  /**
  * Gets or sets search for WorkHolidays with this Name. Wildcard can be used by prepending/appending
  * "%" to string. Example "%name%".
  */
  name: string;
}


/**
* The set of (s) defining periods during the week that are considered as part of regular
* working hours. Work times that apply to all times are represented by "WorkTimeAllHoursId".
*/
export interface IWorkTime extends INameEntity
{
  /**
  * Gets or sets free text field where any user information can be stored and referenced
  * for this entity. Default [""].
  */
  comment: string;
  /** Gets or sets the list of (s). */
  details: IWorkTimeDetail[];
  /** Gets or sets the . */
  holidayGroup: IWorkTimeHolidayGroupId;
  /**
  * Gets or sets the name of this entity that uniquely identifies it and is used when
  * displaying this entity. Maximum length [50].
  */
  name: string;
}


/**
*  Declaration of an invariant singleton object WorkTimesAllHours.
*
* @deprecated
*/
export interface IWorkTimeAllHours extends IWorkTimeSystem
{
  /** Sets the WorkTimesDetails collection. */
  details: IWorkTimeDetail[];
  /** Gets the singleton value. */
  value: IWorkTimeAllHours;
}


/**  The times during the week that are working times. */
export interface IWorkTimeDetail extends IEntity
{
  /** Gets the day of the week; with Sunday being 0, Monday being 1, etc.. */
  dayOfWeek?: number;
  /** Gets the timeSpan since the start of the period. */
  fromTime: Date;
  /** Gets the timeSpan to the end of the period. */
  toTime: Date;
}


/** Represents Early Leave hours. */
export interface IWorkTimeEarlyLeaveHours extends IWorkTimeSystem
{
}


/**
*  Work holidays. See {@link IWorkTime}. Items can be grouped together by giving them
* all the same GroupId number.
*/
export interface IWorkTimeHolidayGroupId
{
  /** Gets or sets the Id for the Group associated with the WorkHoliday and WorkTime. */
  groupId?: number;
}


/** Represents Late Arrival hours. */
export interface IWorkTimeLateArrivalHours extends IWorkTimeSystem
{
}


/** Represents Lunch hours. */
export interface IWorkTimeLunchHours extends IWorkTimeSystem
{
}


/**  The object used to specify the arguments when searching for a . */
export interface IWorkTimeSearch extends ISearch
{
  /**
  * Gets or sets search for WorkTimes with this Name. Wildcard can be used by prepending/appending
  * "%" to string. Example "%name%".
  */
  name: string;
}


/** Represents the standard hours. */
export interface IWorkTimeStandardHours extends IWorkTimeSystem
{
}


/** A work time that is a system supplied work time. */
export interface IWorkTimeSystem extends IWorkTime
{
  /**
  * Gets or sets free text field where any user information can be stored and referenced
  * for this entity.
  */
  comment: string;
  /** Gets or sets the . */
  holidayGroup: IWorkTimeHolidayGroupId;
  /** Gets or sets the unique identifier for this entity. see . */
  id: string;
  /**
  * Gets or sets the name of this entity that uniquely identifies it and is used when
  * displaying this entity.
  */
  name: string;
}


/**
* Sometimes referred to as a "Geofence", a zone is a virtual geographic boundary,
* defined by its points representing a real-world geographic area.
*/
export interface IZone extends INameEntityWithVersion
{
  /**
  * Gets or sets the date indicating when this zone begins it's active lifespan. Default
  * [UtcNow].
  */
  activeFrom?: Date;
  /**
  * Gets or sets the date indicating when this zone finishes it's active lifespan. Default
  * [MaxDate].
  */
  activeTo?: Date;
  /** Gets the latitude coordinate of the zone's centroid. */
  centroidLatitude?: number;
  /** Gets the longitude coordinate of the zone's centroid. */
  centroidLongitude?: number;
  /**
  * Gets or sets a free text field where any user information can be stored and referenced
  * for this entity. Default [""].
  */
  comment: string;
  /**
  * Gets or sets a value indicating whether this zone must be displayed when viewing
  * a map or it should be hidden. Default [true].
  */
  displayed?: boolean;
  /** Gets the zone's extent. */
  extent: any[];
  /**
  * Gets or sets external Reference. Any type of external reference you would like to
  * attach to the zone. For example; an ID from another data source referenced when
  * exporting zone data into another program. Maximum length [255] Default [""].
  */
  externalReference: string;
  /**
  * Gets or sets the of the fill for this zone when showing on a map. Default [based
  * on zone type; Customer: Orange, Office: Light Orange, Home: Green, Other: Blue].
  */
  fillColor: any;
  /** Gets or sets the group(s) this zone belongs to. */
  groups: IGroup[];
  /** Gets or sets the unique identifier for this entity. See . */
  id: string;
  /**
  * Gets or sets whether this zone name must be shown when devices stop in this zone.
  * If [true] a "zone stop rule" (Rule with BaseType: ZoneStop) will automatically be
  * created for this zone. This is to facilitate reporting on zone stops. The rule is
  * not visible via the UI. Default [true].
  */
  mustIdentifyStops?: boolean;
  /**
  * Gets or sets the name of this entity that uniquely identifies it and is used when
  * displaying this entity.
  */
  name: string;
  /**
  * Gets or sets the list of points (see ) that make up this zone. A zone should be
  * closed, the first point is the same coordinate as the last point. It is possible
  * to add a zone with an unclosed set of points but the points will be closed by the
  * system.<br> 
  */
  points: any[];
  /** Gets or sets the list of {@link IZoneType}(s) this zone belongs to. Default [Customer]. */
  zoneTypes: IZoneType[];
}


/**  The object used to specify the arguments when searching for (s). */
export interface IZoneSearch extends ISearch
{
  /**
  * Gets or sets search for Zones with this External Reference. Wildcard can be used
  * by prepending/appending "%" to string. Example "%reference%".
  */
  externalReference: string;
  /**
  * Gets or sets search for Zones that were active at this date or after. Set to UTC
  * now to search for only currently active (non-archived) zones.
  */
  fromDate?: Date;
  /**
  * Gets or sets search for Zones that are members of these (s) one of it's children
  * or one of it's parents. Available GroupSearch options are:. Id
  */
  groups: IGroupSearch[];
  /**
  * Gets or sets include zones that are in the in this hierarchy of the (s) provided.
  * If no (s) are provided the user's data scope groups will be used. Default: .ParentAndChild.
  */
  includeGroups?: IncludeGroups;
  /**
  * Gets or sets search for entities that contain specific keywords in all wildcard
  * string-searchable fields.
  */
  keywords: string[];
  /** Gets or sets exclude Zones whose radius is smaller than this size (meters). */
  minimumRadiusInMeters?: number;
  /**
  * Gets or sets search for Zones with this Name. Wildcard can be used by prepending/appending
  * "%" to string. Example "%name%".
  */
  name: string;
  /**
  * Gets or sets the {@link IBoundingBox} search for Zones in this area extent, the
  * zones being retrieved must be located in this area. Typically used for retrieving
  * Zones in the extents of a bounding box. The SearchArea object should contain the
  * minimum and maximum latitude and longitude representing the search area.
  */
  searchArea: IBoundingBox;
  /** Gets or sets search for Zones that were active at this date or before. */
  toDate?: Date;
  /**
  * Gets or sets search for Zones in this area extent, the zones being retrieved must
  * be located in this area. Typically used for retrieving Zones in the extents of a
  * Map Viewport. The viewport object should contain the top left coordinate of the
  * viewport (x,y) and the width, height. An example of the JSON structure of this object
  * is: { "x":-106.72608947754628, "y":55.862873349922104, "width":41.04492187500384,
  * "height":-28.66703166908511 }.
  */
  viewport: any;
  /**
  * Gets or sets search for Zones that are of type (s). Available ZoneTypeSearch options
  * are:. Id
  */
  zoneTypes: IZoneTypeSearch[];
}


/** The type of the zone. */
export interface IZoneType extends INameEntity
{
  /**
  * Gets or sets a free text field where any user information can be stored and referenced
  * for this entity. Default [""].
  */
  comment: string;
}


/** A zone type that is for address lookup. */
export interface IZoneTypeAddressLookup extends IZoneTypeSystem
{
  /** Gets the singleton value. */
  value: IZoneTypeAddressLookup;
}


/** A zone type that is a customer. */
export interface IZoneTypeCustomer extends IZoneTypeSystem
{
}


/** A zone type that is a home zone. */
export interface IZoneTypeHome extends IZoneTypeSystem
{
}


/** Zone Type that is an office zone. */
export interface IZoneTypeOffice extends IZoneTypeSystem
{
}


/**
*  The object used to specify the arguments when searching for (s).
*
* @deprecated
*/
export interface IZoneTypeSearch extends ISearch
{
  /**
  * Gets or sets get name of ZoneType to search for. Wildcard can be used by prepending/appending
  * "%" to string. Example "%comments%".
  */
  name: string;
}


/** Base class for all system zone types. */
export interface IZoneTypeSystem extends IZoneType
{
  /** Gets or sets the comment. The comment cannot be changed for this zone type. */
  comment: string;
  /** Gets or sets the unique identifier for this entity. see . */
  id: string;
  /**
  * Sets the name of this entity that uniquely identifies it and is used when displaying
  * this entity. The name cannot be changed for this zone type.
  */
  name: string;
}


/**
* This class contains helper methods related to encoding and parsing device serial
* numbers and hardware IDs.
*/
export interface IThirdPartyHelper
{
  /** Gets the OEM device types. */
  oemDeviceTypes: number[];
  /** Gets the third-party device types. */
  thirdPartyDeviceTypes: { [key:number]: string };
  /** Gets the third-party vehicle device types. */
  thirdPartyVehicleDeviceTypes: number[];
}


/** A collection of common methods used to validate and work with {@link IUri}s. */
export interface IUriValidator
{
}


/** Stand alone validation routines. */
export interface IUtilityValidator
{
}


/**
* Collection of static methods related to the web server that allows it to be used
* by other projects without referencing CheckmateServer.
*/
export interface IWebServerHelper
{
}


/** Transition time for adjustment rule. */
export interface ITransitionTime
{
  /** Gets the day. */
  day: number;
  /** Gets the day of week. */
  dayOfWeek?: number;
  /**
  * Gets a value indicating whether DST is fixed Day in month or should be calculated
  * with Week and DayOfWeek.
  */
  isFixedDateRule: boolean;
  /** Gets the month. */
  month: number;
  /** Gets the time of day. */
  timeOfDay?: Date;
  /** Gets the week. */
  week: number;
}


/** Components for info and performance evaluation. */
export enum DatabaseInfoComponent { 
  /** Database name. */
  DatabaseName = "DatabaseName", 
  /** System Settings in milliseconds. */
  SystemSettingsReadMillis = "SystemSettingsReadMillis", 
  /** Time to read log record in milliseconds. */
  LogRecordReadMillis = "LogRecordReadMillis", 
  /** Time to read and count entities in milliseconds. */
  EntityCountMillis = "EntityCountMillis", 
  /** Time to read last user access date in milliseconds. */
  LastUserAccessReadMillis = "LastUserAccessReadMillis", 
  /** Time to get database location in milliseconds. */
  DatabaseLocationMillis = "DatabaseLocationMillis", 
  /** Time to get database uploader statistics in milliseconds. */
  UploaderStatsMillis = "UploaderStatsMillis", 
  /** Time taken to move between actions of measuring individual components. */
  OutsideComponentsMillis = "OutsideComponentsMillis"
}


/** Indicates the JSON-RPC error type that occurred. Derived from JSON-RPC 2.0 specification. */
export enum JsonRpcErrorCode { 
  /** The default value. */
  None = "None", 
  /**
  * Invalid JSON was received by the server. An error occurred on the server while parsing
  * the JSON text.
  */
  ParseError = "ParseError", 
  /** Internal JSON-RPC error. */
  InternalError = "InternalError", 
  /** Invalid method parameter(s). */
  InvalidParams = "InvalidParams", 
  /** The method does not exist / is not available. */
  MethodNotFound = "MethodNotFound", 
  /** The JSON sent is not a valid Request object. */
  InvalidRequest = "InvalidRequest", 
  /** The server responded with {@link IGroupRelationViolatedException}. */
  GroupRelationViolatedError = "GroupRelationViolatedError", 
  /** The server responded with {@link INone}. */
  DbUnavailableGeneralError = "DbUnavailableGeneralError", 
  /** The server responded with {@link IConnectionFailure}. */
  DbUnavailableConnectionFailure = "DbUnavailableConnectionFailure", 
  /** The server responded with {@link IUnknownDatabase}. */
  DbUnavailableUnknownDatabase = "DbUnavailableUnknownDatabase", 
  /** The server responded with {@link IInitializing}. */
  DbUnavailableInitializing = "DbUnavailableInitializing", 
  /** The server responded with {@link IOperationAborted}. */
  DbUnavailableOperationAborted = "DbUnavailableOperationAborted", 
  /** Invalid certificate error. */
  InvalidCertificateException = "InvalidCertificateException", 
  /** Internal server error. */
  InternalServerError = "InternalServerError"
}


/**
*  The message type of a ping message.
*
* @deprecated
*/
export enum PingMessageType { 
  /** Unknown ping message type */
  Unknown = "Unknown", 
  /** The hello ping message type */
  Hello = "Hello", 
  /** The keep alive ping message type */
  KeepAlive = "KeepAlive", 
  /** The finish ping message type */
  Finish = "Finish", 
  /** The error message type */
  Error = "Error"
}


/** An enum that indicates the uploader status. */
export enum ProcessingStatus { 
  /** Regular processing during daylight hours. */
  DaylightHoursProcessing = "DaylightHoursProcessing", 
  /** Regular processing after hours. */
  AfterHoursProcessing = "AfterHoursProcessing", 
  /** Reprocessing during daylight hours. */
  DaylightHoursReprocessing = "DaylightHoursReprocessing", 
  /** Reprocessing after hours. */
  AfterHoursReprocessing = "AfterHoursReprocessing", 
  /** Waiting for files to process. */
  Idle = "Idle", 
  /** Processing is unavailable. */
  Unavailable = "Unavailable"
}


/** Information about the performance of a hosted database. */
export interface IDatabaseInfo
{
  /** Gets or sets the bad file count. */
  badFileCount: number;
  /** Gets or sets the billable device count. */
  billableDeviceCount: number;
  /** Gets or sets the comment. */
  comment: string;
  /** Gets or sets the company unique identifier. */
  companyGuid: any;
  /** Gets or sets the cpu time / total time ratio - based load factor as percent. */
  cpuSeconds: number;
  /** Gets or sets the custom codes to report. */
  customCode: string;
  /** Gets or sets the Country and City of the database. */
  databaseLocation: string;
  /** Gets or sets the data size KB. */
  dataSizeKB: number;
  /** Gets or sets the demo database expiry date. */
  demoExpiryDate?: Date;
  /** Gets or sets the fuel customer identifiers. */
  fuelCustomerIds: string[];
  /** Gets or sets the geocoder type. */
  geocoderType: string;
  /** Gets or sets a value indicating whether this database instance is bad (unreachable). */
  isBad: boolean;
  /** Gets or sets the lag time of the uploader in ms. */
  lagTime: Date;
  /** Gets or sets the last activity date. */
  lastActivityDateTime?: Date;
  /** Gets or sets the last GPS date time. */
  lastGPSDateTime?: Date;
  /** Gets or sets the load factor. */
  loadFactor: number;
  /** Gets or sets the map provider. */
  mapProvider: string;
  /** Gets or sets the name. */
  name: string;
  /** Gets or sets the processing status. */
  processingStatus: ProcessingStatus;
  /** Gets or sets the database provider. */
  sqlType: string;
  /** Gets or sets the TXT file count. */
  txtFileCount: number;
}


/**
*  Info about a file to be moved in a database move.
*
* @deprecated
*/
export interface IDatabaseMoveFile
{
  /** Gets the name of the file. */
  name: string;
  /** Gets the size of the file in bytes. */
  size: number;
}


/**
*  The results of initializing a database move.
*
* @deprecated
*/
export interface IDatabaseMoveResponse
{
  /** Gets or sets the list of files. */
  files: IDatabaseMoveFile[];
  /** Gets or sets the unique key for this move. */
  key?: any;
  /** Gets or sets the total size of the files (GB). */
  totalSize: number;
}


/** Class for getting disk usage. */
export interface IDiskUsage
{
  /** Gets or sets the free disk space in GB. */
  freeDiskSpaceGb: number;
  /** Gets or sets the free disk space in KB. */
  freeDiskSpaceKb: number;
  /** Gets or sets the percentage disk space. */
  percentageDiskSpace: number;
}


/**
* The exception that is thrown when a request with an invalid certificate was made
* to a server.
*/
export interface IInvalidCertificateException
{
}


/** The exception that is thrown when an invalid request was made to a server. */
export interface IInvalidRequestException
{
}


/** A JSON-RPC response without error. */
export interface IJsonResponse<T>
{
  /** Gets or sets the {@link IJsonRpcError}. */
  error: IJsonRpcError;
  /**
  * Gets or sets the identifier which corresponds to the value of the id member in the
  * request object.
  */
  id: any;
  /** Gets the version of the JSON-RPC protocol. */
  jsonrpc: string;
  /** Gets or sets the {@link IInt32} index. */
  requestIndex?: number;
  /** Gets or sets the result. */
  result: T;
}


/** A JSON-RPC response with error. */
export interface IJsonResponseError
{
  /** Gets or sets the {@link IJsonRpcError}. */
  error: IJsonRpcError;
  /**
  * Gets or sets the identifier which corresponds to the value of the id member in the
  * request object.
  */
  id: any;
  /** Gets the version of the JSON-RPC protocol. */
  jsonrpc: string;
  /** Gets or sets the {@link IInt32} index. */
  requestIndex: number;
}


/**
* Models a JSON-RPC error provided as "error" property of JSON-RPC response object
* when an error is encountered while making a request. http://www.jsonrpc.org/specification#error\_object.
*/
export interface IJsonRpcError
{
  /** Gets or sets exception code indicating the error type that occurred. */
  code: number;
  /**
  * Gets or sets the {@link IJsonRpcErrorData} containing detailed information about
  * the error.
  */
  data: IJsonRpcErrorData;
  /** Gets or sets inner errors. */
  errors: IJsonErrorInner[];
  /**
  * Gets or sets a short description of the error, ex: "Argument Out Of Range" with
  * no error context-specific data.
  */
  message: string;
  /** Gets the name of the JSON-RPC error. */
  name: string;
}


/** The implementation specific error data for a JSON-RPC request error. */
export interface IJsonRpcErrorData
{
  /** Gets or sets the error instance identifier. */
  id: string;
  /**
  * Gets or sets a primitive or structured value that contains additional information
  * about the error. {@link IState} information.
  */
  info: string;
  /**
  * Gets or sets the index of the request in a "multicall" at which a failure occurred,
  * otherwise [null].
  */
  requestIndex: number;
  /** Gets or sets the type of error. */
  type: string;
}


/** The message of maintenance notification in the provided languages. */
export interface ILocalizedNews
{
  /** Gets or sets the expiration. */
  expiration: Date;
  /** Gets or sets the messages. */
  languageMessage: { [key:string]: INotificationNewsDataInfo };
}


/** An exception thrown when trying to move more then one database from a server. */
export interface IMoveAlreadyInProgressException
{
}


/** The results from notifying all databases on a server of news. */
export interface INotifyNewsResult
{
  /** Gets or sets the database. */
  database: string;
  /** Gets or sets the message. */
  message: string;
  /** Gets or sets a value indicating whether this {@link INotifyNewsResult} is success. */
  success: boolean;
}


/** Helper class for determining object model type info. */
export interface IObjectModelTypeHelper
{
}


/**
*  A ping message.
*
* @deprecated
*/
export interface IPingMessage
{
  /** Gets or sets the date time the message was created. */
  dateTime?: Date;
  /** Gets or sets the key, used to identify sender. */
  key?: any;
  /** Gets or sets the type of message. */
  messageType?: PingMessageType;
  /** Gets or sets free test field. */
  textContent: string;
}


/** Information about the server's host environment. */
export interface IServerHostInfo
{
  /** Gets or sets a value indicating whether this is a FedRAMP server. */
  isFedRamp?: boolean;
}


/** The performance information about a particular hosting server. */
export interface IServerInfo extends IServerInfoBase
{
  /** Gets or sets a value indicating whether the server accepts registrations. */
  acceptsRegistrations: boolean;
  /** Gets or sets the Drive usage for the C drive only. */
  cDriveUsage: IDiskUsage;
  /** Gets or sets the number of times ExcelClient has failed consecutively. */
  consecutiveExcelFailures: number;
  /** Gets or sets the overall database load factor. */
  databaseFactor: number;
  /** Gets or sets gets the database info list. */
  databaseInfo: IDatabaseInfo[];
  /** Gets the free disk space in GB. */
  freeDiskSpaceGB: number[];
  /** Gets or sets gets the old free space array. */
  freeDiskSpaceKB: number[];
  /**
  * Gets or sets a value indicating whether database alarm is triggered for any DB on
  * this server.
  */
  isAnyDatabaseBad: boolean;
  /** Gets or sets a value indicating whether fuel transaction import is enabled. */
  isFuelImportEnabled: boolean;
  /** Gets or sets the new registrations pool identifier. */
  newRegistrationsPoolId: number;
  /** Gets or sets gets the Drive usage for all non-C drives. */
  otherDriveUsage: IDiskUsage;
  /** Gets or sets gets the old percentage free space array. */
  percentageDiskSpace: number[];
  /** Gets or sets gets the Country and City of where the server is located. */
  serverLocation: string;
  /** Gets or sets the list of server host tag metadata. */
  serverTags: { [key:string]: string };
  /** Gets or sets the overall web server load factor. */
  webServerFactor: number;
}


/** Base class for all serverInfo Classes. */
export interface IServerInfoBase
{
  /** Gets or sets the checkmate version. */
  checkmateVersion: string;
  /** Gets or sets the load factor. */
  loadFactor: number;
}


/** The result of queueing a database to send registries to registry service. */
export interface IRegistryQueueResult
{
  /** Gets or sets the name of the database the result is for. */
  database: string;
  /** Gets or sets a value indicating whether the database was queued or not. */
  queued: boolean;
}


/** Inner JSON error class. */
export interface IJsonErrorInner
{
  /**
  * Gets or sets a Primitive or Structured value that contains additional information
  * about the error.
  */
  data: string;
  /** Gets or sets the message. */
  message: string;
  /** Gets or sets the name. */
  name: string;
  /** Gets or sets the stack trace. */
  stackTrace: string;
}


/** Indicates whether administrator of data base requires training or not */
export enum RequireTraining { 
  /** Unknown status */
  Unknown = "Unknown", 
  /** Yes, administrator requires training */
  Yes = "Yes", 
  /** No, administrator doesn't require training */
  No = "No", 
  /** Maybe later */
  Maybe = "Maybe"
}


/** Company details for registration. */
export interface ICompanyDetails
{
  /** Gets or sets free text field. Maximum length [1000]. */
  comments: string;
  /** Gets or sets the company name. Maximum length [256]. */
  companyName?: string;
  /**
  * Gets or sets the account administrator's first name. Maximum length [100] is shared
  * between FirstName, one added space, and LastName.
  */
  firstName?: string;
  /** Gets or sets the number of vehicles in the company fleet. */
  fleetSize?: number;
  /** Gets the account administrator's first and last name. */
  fullName: string;
  /** Gets or sets the company industry guid the same as SystemSettings Industry property. */
  industry?: any;
  /**
  * Gets or sets the account administrator's last name. Maximum length [100] is shared
  * between FirstName, one added space, and LastName.
  */
  lastName: string;
  /** Gets or sets the company phone number. Maximum length [50]. */
  phoneNumber: string;
  /** Gets or sets the registration domain name where database is created. */
  registrationDomain: string;
  /** Gets or sets whether administrator required training or not. */
  requireTraining?: RequireTraining;
  /** Gets or sets the reseller name. Maximum length [50]. */
  resellerName: string;
  /**
  * Gets or sets a value indicating whether sign-up to receive news about new telematics
  * products, events and promotions.
  */
  signUpForNews: boolean;
  /**
  * Gets or sets the IANA time zone Id of the device used to determine local work times.
  * This is typically the "home location" of the admin user.
  */
  timeZoneId?: string;
}


/** This exception is thrown when there is an exception creating/registering a new database. */
export interface IRegistrationException
{
}


/** Indicates the type of operation delivered by {@link IPubSubDataUpdateData`1}. */
export enum PubSubDataUpdateVerb { 
  /** Data was added. */
  Add = "Add", 
  /** Data was updated. */
  Set = "Set", 
  /** Data was removed. */
  Remove = "Remove"
}


/**
* An object used to signal that data has changed using pub sub. This is meant to be
* the .
*/
export interface IPubSubDataUpdateData<T>
{
  /** Gets a list of {@link IIEntity}s that were updated. */
  data: string[];
  /** Gets the object. */
  entityData: any;
  /**
  * Gets the id of the sender sending the update. This is optional. If provided it should
  * follow the convention idBigNumber (eg id123456789101112).
  */
  senderId: string;
  /** Gets the type of {@link IIEntity} that was updated. */
  type: string;
  /** Gets the type of update. */
  verb: PubSubDataUpdateVerb;
}


/** A PubSub message sent. */
export interface IPubSubMessage
{
  /** Gets or sets the data sent to or from the pub sub. */
  data: any;
  /** Gets or sets the subscription. */
  subscriptionId: string;
}


/**
*  Defines the result of process locking for .
*
* @deprecated
*/
export enum Error { 
  /** No lock error */
  None = "None", 
  /** The unauthorized error */
  Unauthorized = "Unauthorized", 
  /** The database unavailable error */
  DbUnavailable = "DbUnavailable"
}


/** The Lock permission. */
export interface IHolder extends INameEntity
{
  /** Gets or sets gets if the holder is disabled. */
  isDisabled?: boolean;
  /** Gets or sets the Lock. */
  lock: ILock;
}


/**
*  Known Lock Type.
*
* @deprecated
*/
export interface IKnownLockType
{
}


/**
*  A Process lock record.
*
* @deprecated
*/
export interface ILock extends IEntity
{
  /** Gets or sets the UTC time of the last lock update. */
  dateTime?: Date;
  /** Gets default lock update interval. */
  defaultUpdateInterval: Date;
  /** Gets or sets the Holder of the lock. */
  holderName?: string;
  /** Gets or sets the subject. */
  subject?: string;
  /** Gets or sets the LockType of the lock. */
  type?: ILockType;
}


/**
*  The Lock record.
*
* @deprecated
*/
export interface ILockStateChangeNotify
{
  /** Gets or sets the Lock record. */
  lock: ILock;
  /** Gets or sets the LockStatusChange value. */
  notify: any;
}


/**
*  A Process lock record.
*
* @deprecated
*/
export interface ILockType extends INameEntity
{
  /** Gets or sets if the type is disabled. */
  isDisabled?: boolean;
}


/**
*  Defines the result of process locking for .
*
* @deprecated
*/
export interface IResult
{
  /** Gets or sets time value. */
  dateTime?: Date;
  /** Gets or sets the error value. */
  error?: Error;
}


/** Sources for which a limit should be applied. */
export enum LimitSource { 
  /** No limit source */
  None = "None", 
  /** Originating from APIv1 */
  Apiv1 = "Apiv1"
}


/** Represents size limits of file based on extension. */
export interface IFileSizeLimits
{
  /** Gets or sets the maximum image size in bytes. */
  maxImageSizeBytes: number;
  /** Gets or sets the maximum video size in bytes. */
  maxVideoSizeBytes: number;
}


/** An override of the default result limit. */
export interface IResultLimitOverride
{
  /**
  * Gets or sets a value indicating whether the limit is a temporary max returnable
  * limit.
  */
  isMaxPayloadLimit: boolean;
  /** Gets or sets the limit which will override the default. */
  limit: number;
  /** Gets or sets the type which should have the override applied. */
  type: any;
  /** Gets or sets the full name of the Type which should have the override applied. */
  typeName: string;
}


/** Result limits to be imposed for a set of sources. */
export interface IResultLimits
{
  /** Gets or sets the limits defined for a source. */
  sourceLimits: { [key in LimitSource]: ISourceResultLimits };
}


/** Result limits for a given source. */
export interface ISourceResultLimits
{
  /** Gets or sets the default limit. */
  defaultLimit: number;
  /** Gets or sets the type specific limit overrides. */
  overrides: IResultLimitOverride[];
  /** Gets or sets the Source. */
  source: LimitSource;
}


/** The source from which tank capacity was derived. */
export enum FuelTankCapacitySource { 
  /** Unknown */
  Unknown = "Unknown", 
  /** Engine reported tank capacity diagnostic */
  DiagnosticTankCapacity = "DiagnosticTankCapacity", 
  /** Estimate derived from fuel level (percent) and fuel used diagnostics */
  EstimateFuelLevel = "EstimateFuelLevel", 
  /** Estimate derived from fuel level (volume) */
  EstimateFuelUnits = "EstimateFuelUnits", 
  /** Manually entered tank capacity as stored. */
  DeviceTankCapacity = "DeviceTankCapacity"
}


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
  DieselExhaustFluid = "DieselExhaustFluid"
}


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
  GFN = "GFN"
}


/**
* Confidence of the fuel event data, derived from how many data points successfully
* matched to calculate a {@link IFuelUpEvent}.
*/
export enum FuelUpEventConfidences { 
  /** None */
  None = "None", 
  /** Fuel level based {@link IFuelUpEvent} */
  FuelLevel = "FuelLevel", 
  /** The {@link IFuelUpEvent} that matched on trip stop date. */
  TripStop = "TripStop", 
  /** The based {@link IFuelUpEvent} */
  FuelTransaction = "FuelTransaction", 
  /**  based {@link IFuelUpEvent} that has a matched device */
  DeviceMatchedFuelTransaction = "DeviceMatchedFuelTransaction", 
  /**  based {@link IFuelUpEvent} that has matched trip stop by location */
  LocationMatchedFuelTransaction = "LocationMatchedFuelTransaction", 
  /**  based {@link IFuelUpEvent} that has matched trip stop by date */
  TripStopFuelTransaction = "TripStopFuelTransaction", 
  /**
  * Fuel level based {@link IFuelTransaction} based {@link IFuelUpEvent} by datetime
  * and device
  */
  DeviceFuelLevelMatchedFuelTransaction = "DeviceFuelLevelMatchedFuelTransaction", 
  /**
  * Fuel level based {@link IFuelTransaction} based {@link IFuelUpEvent} where locations
  * match
  */
  LocationFuelLevelMatchedFuelTransaction = "LocationFuelLevelMatchedFuelTransaction", 
  /** The {@link IDevice} was not communicating at the time of transaction */
  NotCommunicating = "NotCommunicating", 
  /**
  * Fuel level based {@link IFuelUpEvent} could not be determined as there is not enough
  * data
  */
  FuelLevelIndeterminate = "FuelLevelIndeterminate", 
  /**  based {@link IFuelUpEvent} that has a matched driver */
  DriverMatchedFuelTransaction = "DriverMatchedFuelTransaction", 
  /** Fuel used inconsistent */
  FuelUsedInconsistent = "FuelUsedInconsistent", 
  /** The {@link IDevice} is reporting electric energy usage. */
  EngineElectricEnergy = "EngineElectricEnergy"
}


/** An event representing adding fuel to a vehicle. */
export interface IFillUp extends IFuelUsedEvent
{
  /** Gets or sets the confidence associated with the transaction. */
  confidence?: FuelUpEventConfidences;
  /** Gets or sets the volume derived from fuel tank capacity. */
  derivedVolume?: number;
  /** Gets or sets the difference in fuel out vs fuel in. */
  deviationFactor?: number;
  /** Gets or sets the raw fuel transaction. */
  fuelTransactions?: IFuelTransaction[];
  /** Gets or sets the fuel tank capacity. */
  tankCapacity?: IFuelTankCapacity;
  /** Gets or sets the fuel tank level change. */
  tankLevelExtrema?: IFillUpExtrema;
  /** Gets or sets the total fuel used up to this point in time. */
  totalFuelUsed?: number;
}


/** Represents the extrema (minima/maxima) from a set of {@link IStatusData} values. */
export interface IFillUpExtrema
{
  /** Gets the maxima value. */
  maxima: IStatusData;
  /** Gets or sets the maxima fuel data point for the fill up event */
  maximaPoint?: IFillUpExtremum;
  /** Gets the minima value. */
  minima: IStatusData;
  /** Gets or sets the minima fuel data point for the fill up event. */
  minimaPoint?: IFillUpExtremum;
}


/**
* An event representing adding fuel to a vehicle. An extremum representing either
* the minimum or maximum point of fuel used for a given {@link IFillUp}.
*/
export interface IFillUpExtremum
{
  /**
  * Gets or sets the data of the extremum. This is derived from the {@link IStatusData}
  * record used to calculate the extremum.
  */
  data?: number;
  /**
  * Gets or sets the date time of the extremum. This is derived from the {@link IStatusData}
  * record used to calculate the extremum.
  */
  dateTime?: Date;
  /**
  * Gets or sets the maxima type as the fuel tank capacity source. This is derived from
  * the specific diagnostic type of the {@link IStatusData} records used to calculate
  * the extremum.
  */
  source: FuelTankCapacitySource;
}


/** The object used to specify the arguments when searching for a {@link IFillUp}. */
export interface IFillUpSearch extends IFuelUpEventSearch
{
}


/** Log of fueling events. */
export interface IFuelEvent extends IEntityWithVersion
{
  /** Gets or sets the cost of the fuel transaction. Default [0]. */
  cost?: number;
  /**
  * Gets or sets the three digit ISO 427 currency code (http://www.xe.com/iso4217.php).
  * Default ["USD"].
  */
  currencyCode: string;
  /** Gets or sets the UTC date and time of the transaction. */
  dateTime?: Date;
  /** Gets or sets the {@link ICoordinate} of the transaction retailer. Default [0,0]. */
  location: any;
  /** Gets or sets the driver recorded odometer reading in km. Default [0]. */
  odometer?: number;
  /**
  * Gets or sets the {@link IFuelTransactionProductType} of this transaction. Default
  * [Unknown].
  */
  productType?: FuelTransactionProductType;
  /** Gets or sets the volume of fuel purchased in Liters. Default [0]. */
  volume?: number;
}


/** Represent a vehicle's fuel tank capacity and how it was derived. */
export interface IFuelTankCapacity
{
  /** Gets or sets the tank capacity source. */
  source: FuelTankCapacitySource;
  /** Gets or sets the volume (L). */
  volume: number;
}


/**
* Information from a fuel card provider representing a fuel transaction. Fuel card
* information will be matched to a by one of these fields: vehicleIdentificationNumber,
* serialNumber, licencePlate or comments.
*/
export interface IFuelTransaction extends IFuelEvent
{
  /** Gets or sets the masked or partial purchasing card number. */
  cardNumber: string;
  /**
  * Gets or sets the free text field where any user information can be stored and referenced
  * for this entity. This can be used to associate the transaction with a . Maximum
  * length [1024] Default [""].
  */
  comments: string;
  /**
  * Gets or sets the vehicle description of the vehicle. This can be used to associate
  * the transaction with a . Maximum length [255] Default [""].
  */
  description: string;
  /** Gets or sets the {@link IDevice} the transaction belongs to. Default [null]. */
  device: IDevice;
  /** Gets or sets the {@link IDriver} the transaction belongs to. */
  driver: IDriver;
  /**
  * Gets or sets the fuel card holder name. This can be used to associate the transaction
  * with a . Maximum length [255] Default [""].
  */
  driverName: string;
  /**
  * Gets or sets the external reference to the transaction. Typically this is an external
  * identifier. Maximum length [255] Default [""].
  */
  externalReference: string;
  /**
  * Gets or sets the licence plate of the vehicle of the vehicle. This can be used to
  * associate the transaction with a . Maximum length [255] Default [""].
  */
  licencePlate: string;
  /** Gets or sets the {@link IFuelTransactionProvider} of this transaction. Default [Unknown]. */
  provider?: FuelTransactionProvider;
  /**
  * Gets or sets the serial number of the device. This can be used to associate the
  * transaction with a . Maximum length [255] Default [""].
  */
  serialNumber: string;
  /** Gets or sets the site/merchant name where the transaction took place. */
  siteName: string;
  /** Gets or sets the JSON string representing the source data. Default [""]. */
  sourceData: string;
  /**
  * Gets or sets the vehicle identification number (VIN) of the vehicle. This is used
  * to associate the transaction with a . Maximum length [255] Default [""].
  */
  vehicleIdentificationNumber: string;
}


/** The object used to specify the arguments when searching for a {@link IFuelTransaction}. */
export interface IFuelTransactionSearch extends ISearch
{
  /**
  * Gets or sets search for FuelTransactions for this {@link IDeviceSearch} Id. Available
  * DeviceSearch options are:. IdGroupsGroupListSearch
  */
  deviceSearch: IDeviceSearch;
  /**
  * Gets or sets search for Fuel Transactions with this External Reference. Wildcard
  * can be used by prepending/appending "%" to string. Example "%reference%".
  */
  externalReference: string;
  /**
  * Gets or sets the from date, which is used to search for FuelTransactions that occur
  * on or after this date.
  */
  fromDate?: Date;
  /**
  * Gets or sets a value indicating whether to include source data with transaction.
  * Source data can be a large string, therefore, optionally exclude it from results.
  */
  includeSourceData: boolean;
  /** Gets or sets the maximum version for which FuelTransactions should be searched. */
  maxVersion?: number;
  /** Gets or sets search by the {@link IFuelTransactionProvider}. */
  provider?: FuelTransactionProvider;
  /**
  * Gets or sets the to date, which is used to search for FuelTransactions that occur
  * on or before this date.
  */
  toDate?: Date;
  /** Gets or sets the VehicleIdentificationNumber. */
  vehicleIdentificationNumber: string;
}


/** An event representing adding fuel to a vehicle. */
export interface IFuelUpEvent extends IFuelUsedEvent
{
  /** Gets or sets the confidence associated with the transaction. */
  confidence?: FuelUpEventConfidences;
  /** Gets or sets the volume derived from fuel tank capacity. */
  derivedVolume?: number;
  /** Gets or sets the difference in fuel out vs fuel in. */
  deviationFactor?: number;
  /** Gets or sets the raw fuel transaction. */
  fuelTransactions: IFuelTransaction[];
  /** Gets or sets the fuel tank capacity. */
  tankCapacity: IFuelTankCapacity;
  /** Gets or sets the fuel tank level change. */
  tankLevelExtrema: IFillUpExtrema;
  /** Gets or sets the total fuel used up to this point in time. */
  totalFuelUsed?: number;
}


/** The object used to specify the arguments when searching for a {@link IFuelUpEvent}. */
export interface IFuelUpEventSearch extends ISearch
{
  /**
  * Gets or sets the device search criteria for the FuelUpEvent with this {@link DeviceSearch}
  * Id. Available DeviceSearch options are:. Id
  */
  deviceSearch: IDeviceSearch;
  /**
  * Gets or sets the from date, which is used to search for FuelUpEvent(s) recorded
  * on or after this date.
  */
  fromDate?: Date;
  /**
  * Gets or sets the to date, which is used to search for FuelUpEvent(s) recorded on
  * or before this date.
  */
  toDate?: Date;
}


/** Log of fueling events. */
export interface IFuelUsed extends IEntityWithVersion
{
  /** Gets or sets the UTC date and time of the transaction. */
  dateTime?: Date;
  /** Gets or sets the StatusData for the {@link IDevice} specified. */
  device: IDevice;
  /** Gets or sets the volume of fuel purchased in Liters. Default [0]. */
  totalFuelUsed?: number;
}


/** An event representing fuel used for a vehicle. */
export interface IFuelUsedEvent extends IFuelEvent
{
  /** Gets or sets the associated with the transaction. */
  device: IDevice;
  /** Gets or sets the distance traveled since the last fill-up. */
  distance?: number;
  /** Gets or sets the associated with the transaction. */
  driver: IDriver;
}


/** The object used to specify the arguments when searching for a {@link IFuelUsed}. */
export interface IFuelUsedSearch extends ISearch
{
  /**
  * Gets or sets the device search criteria for the {@link IFuelUsed} records with this
  * {@link DeviceSearch} Id. Available DeviceSearch options are:. IdGroupsGroupListSearch
  */
  deviceSearch?: IDeviceSearch;
  /**
  * Gets or sets the from date, which is used to search for {@link IFuelUsed} records
  * recorded on or after this date.
  */
  fromDate?: Date;
  /**
  * Gets or sets the to date, which is used to search for {@link IFuelUsed} records
  * recorded on or before this date.
  */
  toDate?: Date;
}


/**
*  A moving average calculator.
*
* @deprecated
*/
export interface IMovingAverageCalculator
{
}


/** The type of a {@link IMediaFile}. */
export enum MediaType { 
  /** Unknown file type. */
  Unknown = "Unknown", 
  /** Video file type. */
  Video = "Video", 
  /** Image file type. */
  Image = "Image"
}


/** The status of an uploaded file. */
export enum Status { 
  /** The status is unknown. */
  Unknown = "Unknown", 
  /** The file is being processed. */
  Processing = "Processing", 
  /** The file is ready. */
  Ready = "Ready", 
  /** Media file has not been upload. */
  NoFile = "NoFile"
}


/** The entity which describes the binary media. */
export interface IMediaFile extends INameEntityWithVersion
{
  /** Gets or sets the {@link IDevice} associated with the file. */
  device: IDevice;
  /** Gets or sets the {@link IDriver} associated with the file. */
  driver: IDriver;
  /** Gets or sets the from date. */
  fromDate?: Date;
  /** Gets or sets the {@link IMediaType}. */
  mediaType?: MediaType;
  /** Gets or sets file metadata in JSON format. */
  metaData: string;
  /** Gets or sets the {@link IId} of the solution which added the data. */
  solutionId: string;
  /** Gets or sets the file processing {@link IStatus}. */
  status?: Status;
  /** Gets or sets the list of tags to provide context to the file. */
  tags: ITag[];
  /** Gets or sets the list of files which serve as the thumbnail for this file. */
  thumbnails: IMediaFile[];
  /** Gets or sets the to date. */
  toDate?: Date;
}


/** Stores accepted MediaFile extensions and related methods */
export interface IMediaFileHelper
{
}


/**
* The object used to specify the arguments when searching for {@link IMediaFile}.
* This will return the data describing a file, not the actual file.
*/
export interface IMediaFileSearch extends ISearch
{
  /**
  * Gets or sets search for MediaFile recorded for this {@link IDeviceSearch} Id. Available
  * DeviceSearch options are:. IdGroupGroupListSearch
  */
  deviceSearch: IDeviceSearch;
  /**
  * Gets or sets search for MediaFile with this {@link IUserSearch} Id. Available UserSearch
  * options are:. Id
  */
  driverSearch: IUserSearch;
  /**
  * Gets or sets search for MediaFile records at this date or after. Includes overlapping
  * dates.
  */
  fromDate?: Date;
  /** Gets or sets search for MediaFile records before this version. */
  maxVersion?: number;
  /** Gets or sets search for MediaFile records at or after this version. */
  minVersion?: number;
  /**
  * Gets or sets search for MediaFile records at this date or before. Includes overlapping
  * dates.
  */
  toDate?: Date;
}


/** A named tag to provide context to an entity. */
export interface ITag extends INameEntityWithVersion
{
}


/** Defines the different types of {@link ICondition}(s). */
export enum ConditionType { 
  /** None */
  None = "None", 
  /**
  * Operator: Condition for "And" operations. "And" conditions must have two or more
  * children that will act as the operands in the equation.
  */
  And = "And", 
  /**
  * Operator: Condition for "Or" operations. "Or" conditions must have two or more children
  * that will act as the operands in the equation.
  */
  Or = "Or", 
  /** Data: Evaluate the condition against active {@link IFaultData}. */
  Fault = "Fault", 
  /** Data: Evaluate the condition against active or inactive {@link IFaultData}. */
  ActiveOrInactiveFault = "ActiveOrInactiveFault", 
  /**
  * Zone Operator: Evaluate if related the asset(s) are inside the {@link IZone} specified
  * by this condition.
  */
  InsideArea = "InsideArea", 
  /**
  * Zone Operator: Evaluate if the related asset(s) are outside the {@link IZone} specified
  * in this condition.
  */
  OutsideArea = "OutsideArea", 
  /** Data: Evaluate against the related asset(s) trip stop value. */
  Stop = "Stop", 
  /**
  * Zone Operator: Evaluate if the related asset(s) are stopped inside the {@link IZone}
  * specified in this condition.
  */
  ZoneStop = "ZoneStop", 
  /**
  * Zone Operator: Evaluate if the related asset(s) are entering the bounds a {@link
  * IZone} specified in this condition.
  */
  EnteringArea = "EnteringArea", 
  /**
  * Zone Operator: Evaluate if the related asset(s) are exiting the bounds a {@link
  * IZone} specified in this condition.
  */
  ExitingArea = "ExitingArea", 
  /**
  * Auxiliary Operator: Evaluate against the asset(s) Auxiliary 1 value. Auxiliary conditions
  * can have the value of 0 (False) or 1 (True).
  */
  Aux1 = "Aux1", 
  /**
  * Auxiliary Operator: Evaluate against the asset(s) Auxiliary 2 value. Auxiliary conditions
  * can have the value of 0 (False) or 1 (True).
  */
  Aux2 = "Aux2", 
  /**
  * Auxiliary Operator: Evaluate against the asset(s) Auxiliary 3 value. Auxiliary conditions
  * can have the value of 0 (False) or 1 (True).
  */
  Aux3 = "Aux3", 
  /**
  * Auxiliary Operator: Evaluate against the asset(s) Auxiliary 4 value. Auxiliary conditions
  * can have the value of 0 (False) or 1 (True).
  */
  Aux4 = "Aux4", 
  /**
  * Auxiliary Operator: Evaluate against the asset(s) Auxiliary 5 value. Auxiliary conditions
  * can have the value of 0 (False) or 1 (True).
  */
  Aux5 = "Aux5", 
  /**
  * Auxiliary Operator: Evaluate against the asset(s) Auxiliary 6 value. Auxiliary conditions
  * can have the value of 0 (False) or 1 (True).
  */
  Aux6 = "Aux6", 
  /**
  * Auxiliary Operator: Evaluate against the asset(s) Auxiliary 7 value. Auxiliary conditions
  * can have the value of 0 (False) or 1 (True).
  */
  Aux7 = "Aux7", 
  /**
  * Auxiliary Operator: Evaluate against the asset(s) Auxiliary 8 value. Auxiliary conditions
  * can have the value of 0 (False) or 1 (True).
  */
  Aux8 = "Aux8", 
  /**
  * Ignition Operator: Evaluate against the asset(s) ignition value. Ignition conditions
  * can have the value of 0 (Off) or 1 (On).
  */
  Ignition = "Ignition", 
  /**
  * Value Operator: The duration of the child condition must continue to be true for
  * longer than the value of this condition in seconds.
  */
  DurationLongerThan = "DurationLongerThan", 
  /**
  * Value Operator: The duration of the child condition must continue to be true for
  * no longer than the value of this condition in seconds.
  */
  DurationShorterThan = "DurationShorterThan", 
  /**
  * Value Operator: The duration of the child condition must continue to be true for
  * a distance longer than the value of this condition in km.
  */
  DistanceLongerThan = "DistanceLongerThan", 
  /**
  * Value Operator: The duration of the child condition must continue to be true for
  * no longer distance than the value of this condition in km.
  */
  DistanceShorterThan = "DistanceShorterThan", 
  /** Work Hours Operator: Occurs during the {@link IWorkTime}. */
  DeviceWorkHours = "DeviceWorkHours", 
  /** Work Hours Operator: Occurs after the {@link IWorkTime}. */
  AfterDeviceWorkHours = "AfterDeviceWorkHours", 
  /** Work Hours Operator: Occurs during the {@link IWorkTime} assigned to this condition. */
  RuleWorkHours = "RuleWorkHours", 
  /** Work Hours Operator: Occurs after the {@link IWorkTime} assigned to this condition. */
  AfterRuleWorkHours = "AfterRuleWorkHours", 
  /**
  * Asset: Apply to the {@link IRule}. When no asset condition is specified the rule
  * will apply to all assets in the rule's groups.
  */
  Device = "Device", 
  /**
  * Asset: Apply to the {@link IRule}. When no asset condition is specified the rule
  * will apply to all assets in the rule's groups.
  */
  Driver = "Driver", 
  /** System: A method of reporting application exceptions. */
  ApplicationException = "ApplicationException", 
  /** Operator: Invert the results of the child condition(s). */
  InvertResult = "InvertResult", 
  /**
  * Data: Evaluate the condition against {@link IDiagnostic}. This condition will have
  * the Diagnostic property populated and is used in conjunction with (as child of)
  * an operator (IsValueMoreThan, IsValueLessThan, IsValueEqualTo, AnyData).
  */
  FilterStatusDataByDiagnostic = "FilterStatusDataByDiagnostic", 
  /** Operator: The result of the child condition is greater than value of this condition. */
  IsValueMoreThan = "IsValueMoreThan", 
  /** Operator: The result of the child condition is less than value of this condition. */
  IsValueLessThan = "IsValueLessThan", 
  /** Operator: The result of the child condition is equal to value of this condition. */
  IsValueEqualTo = "IsValueEqualTo", 
  /**
  * Data: There is any recorded data of which is specified in the child condition during
  * this observation period.
  */
  AnyData = "AnyData", 
  /**
  * Operator: True when the expected duration of the child condition meets this conditions
  * value in seconds.
  */
  ExpectedDuration = "ExpectedDuration", 
  /**
  * Operator: True when the expected distance of the child condition meets this conditions
  * value in km.
  */
  ExpectedDistance = "ExpectedDistance", 
  /**
  * Data: The trip duration of the asset in seconds. Compare against this value using
  * an operator. Example: DurationLongerThan(value) - child of TripDuration condition.
  */
  TripDuration = "TripDuration", 
  /**
  * Data: The speed of the asset in km/h. Compare against this value using an operator.
  * Example: IsValueMoreThan(value) - child of Speed condition.
  */
  Speed = "Speed", 
  /**
  * Data: The trip distance of the asset in km. Compare against this value using an
  * operator. Example: DistanceLongerThan(value) - child of TripDistance condition.
  */
  TripDistance = "TripDistance", 
  /** A link to another {@link ICondition}. */
  Link = "Link", 
  /**
  * Data: The posted road speed of the road the asset is located on in km/h. Compare
  * against this value using an operator and comparing to speed.
  */
  SpeedLimit = "SpeedLimit", 
  /**
  * Data: Is the asset driving. Extract a sequence of values of +1 (at start of driving),
  * -1 (at beginning of stoppage), 0 (state unknown: usually occurs at start and the
  * end of available span of the {@link ILogRecord}(s)).
  */
  IsDriving = "IsDriving", 
  /**
  * Data: The posted road speed of the road the asset is located on in km/h. Compare
  * against this value using an operator and comparing to speed; excludes estimate speed
  * values.
  */
  SpeedLimitExcludingEstimates = "SpeedLimitExcludingEstimates", 
  /** Data: Time Between GPS points in seconds. */
  DurationBetweenGps = "DurationBetweenGps", 
  /** Data: Distance Between GPS points in meters. */
  DistanceBetweenGps = "DistanceBetweenGps", 
  /**
  * Data: The posted road speed of the road the asset is located on in km/h. Compare
  * against this value using an operator and comparing to speed, uses community speed
  * data only.
  */
  SpeedLimitCommunity = "SpeedLimitCommunity", 
  /**
  * Data: The posted road speed of the road the asset is located on in km/h. Compare
  * against this value using an operator and comparing to speed, uses community speed
  * data only; excludes estimate speed values.
  */
  SpeedLimitCommunityExcludingEstimates = "SpeedLimitCommunityExcludingEstimates", 
  /**
  * Data: The posted road speed of the road the asset is located on in km/h. Compare
  * against this value using an operator and comparing to speed, uses commercial speed
  * data only.
  */
  SpeedLimitCommercial = "SpeedLimitCommercial", 
  /**
  * Data: The posted road speed of the road the asset is located on in km/h. Compare
  * against this value using an operator and comparing to speed, uses commercial speed
  * data only; excludes estimate speed values.
  */
  SpeedLimitCommercialExcludingEstimates = "SpeedLimitCommercialExcludingEstimates", 
  /**
  * Data: The reference date is encoded as number of milliseconds since "epoch" date
  * of midnight of 2002/01/01.
  */
  ReferenceDate = "ReferenceDate", 
  /** Data: Exception event for whenever is detected. */
  DVIRDefect = "DVIRDefect", 
  /** Data: No Pre or Post DVIR check is performed between working days. */
  NoDVIRCheck = "NoDVIRCheck", 
  /** Data: Exception event for the entire duration of a {@link ITrip}. */
  EntireTrip = "EntireTrip", 
  /**
  * Operator: Condition for "Inclusive" operations. "Inclusive" conditions must have
  * two or more children that will act as the operands in the equation.
  */
  Inclusive = "Inclusive", 
  /**
  * Data: The posted road speed of the road the asset is located on in km/h. Used as
  * measurement and filtered by its parent filters.
  */
  SpeedLimitAsMeasurement = "SpeedLimitAsMeasurement", 
  /** Data: No Pre or Post DVIR check is performed between working days. */
  NoPreDVIRCheck = "NoPreDVIRCheck", 
  /** Data: No Pre or Post DVIR check is performed between working days. */
  NoPostDVIRCheck = "NoPostDVIRCheck", 
  /**
  * Operator: The result of the child condition is greater than a percentage of the
  * value of this condition.
  */
  IsValueMoreThanPercent = "IsValueMoreThanPercent", 
  /**
  * Operator: The result of the child condition is less than a percentage of the value
  * of this condition.
  */
  IsValueLessThanPercent = "IsValueLessThanPercent", 
  /**
  * Data: The average road speed of the road the asset is located on in km/h. Compare
  * against this value using an operator and comparing to speed.
  */
  AverageRoadSpeed = "AverageRoadSpeed"
}


/** Kinds of data sources fro. {@link ICondition} */
export enum DataSourceKind { 
  /** None */
  None = "None", 
  /** None */
  Any = "Any", 
  /** Instance of . */
  LogRecord = "LogRecord", 
  /** Instance of . */
  FaultData = "FaultData", 
  /** Instance of . */
  StatusData = "StatusData", 
  /** Instance of . */
  NotificationDataApplicationException = "NotificationDataApplicationException", 
  /** . */
  ExceptionEvent = "ExceptionEvent", 
  /** {@link IDouble}. */
  Numeric = "Numeric", 
  /** . */
  WorkTime = "WorkTime", 
  /** . */
  DVIRDefect = "DVIRDefect"
}


/**
* When exceptions are created based on built-in rules, the base type is always set
* to "Stock". For rules which are defined by you, the base type will be "Custom".
* The ZoneStop base type is used to designate exceptions created specifically when
* a zone is configured with the "MustIdentifyStops" property set to true.
*/
export enum ExceptionRuleBaseType { 
  /** Custom Exception rule. All user created rules are custom rules. */
  Custom = "Custom", 
  /** Route Definition base rule */
  RouteDefinition = "RouteDefinition", 
  /**
  * Stock (canned) exception rule. These are the common rules available to switch on/off
  * in MyGeotab.
  */
  Stock = "Stock", 
  /**
  * Zone stop rule. When a {@link IZone}'s MustIdentifyStops property is set to true,
  * the system creates a rule to identify when a device is stopped in the zone. These
  * rules are of type ZoneStop.
  */
  ZoneStop = "ZoneStop", 
  /** Unknown base type. */
  Unknown = "Unknown"
}


/** Specific categories to which the exception rules belong. */
export enum ExceptionRuleCategory { 
  /** An Application Exception Rule. */
  ApplicationExceptionRule = "ApplicationExceptionRule", 
  /**
  * A user management Exception Rule that includes either engine and non-engine rules
  * or combination of them.
  */
  UserExceptionRules = "UserExceptionRules", 
  /** An Exception Rule associated with a Customer Zone. */
  ZoneStopExceptionRules = "ZoneStopExceptionRules"
}


/** The mode of the {@link IRule}. */
export enum ExceptionRuleMode { 
  /** Checked inside a zone. */
  Inside = "Inside", 
  /** Checked outside a zone. */
  Outside = "Outside", 
  /** Check for stop inside a zone. */
  StopInside = "StopInside", 
  /** Check for stop outside a zone. */
  StopOutside = "StopOutside", 
  /** Entering a zone. */
  EnteringZone = "EnteringZone", 
  /** Exiting a zone. */
  ExitingZone = "ExitingZone"
}


/**
* This enumerated type allows designating rules to be of a certain type to assist
* with differentiating them from one another.
*/
export enum ExceptionRuleType { 
  /** Normal Exception Rule. */
  Normal = "Normal", 
  /** Exception rule. */
  System = "System", 
  /** Customer Zone Stop ExceptionRule. */
  Zone = "Zone", 
  /** Application Exception. */
  ApplicationException = "ApplicationException", 
  /** No Type (for generic use). */
  None = "None"
}


/** Defines the different types of rule monitor predicates. */
export enum MonitorPredicate { 
  /** None */
  None = "None", 
  /** Captures first occurrence of monitored data. */
  Start = "Start", 
  /** Captures last occurrence of monitored data. */
  End = "End"
}


/**
*  Conditions model the logic that govern a {@link IConditionType}) defines the meaning
* of each condition in the tree and can be an operator, special operator, data or
* an asset.<br> Depending on the type of condition, it can have a minimum of 0 and
* maximum of 1 entity properties (Device, Driver, Diagnostic, WorkTime, Zone or ZoneType)
* defined per condition. Operator conditions (OR, AND, &gt;, &lt;, ==, NOT) will not
* have any entity properties populated. Special Operator conditions evaluate against
* special types of data such as Aux data, Zones, WorkHours, etc. and may have the
* entity property populated and/or a child condition populated with a Data condition.
* Asset conditions will only have the asset entity property populated.<br> The unit
* of measure for data is described either by the related {@link IUnitOfMeasure} or
* as follows:<br> Distance: Meters (m)<br> Speed: Kilometers Per Hour (km/h)<br> Duration:
* Seconds<br> A tree of conditions can define simple or complex rules and can be very
* powerful. Please take into consideration all possible consequences of a series of
* rules. Overly complex, poorly written or an excessive number of rules can have undesirable
* performance effects.<br> This class is in development. Its public interface is a
* subject to change.
*/
export interface ICondition extends IEntity
{
  /** Gets or sets child condition(s) of this condition. */
  children: ICondition[];
  /** Gets or sets the {@link IConditionType} defines the meaning of this condition. */
  conditionType?: ConditionType;
  /** Gets or sets specified {@link IDevice} associated with the condition. */
  device: IDevice;
  /** Gets or sets the {@link IDiagnostic} to compare the value of. */
  diagnostic: IDiagnostic;
  /** Gets or sets specified {@link IDriver} associated with the condition. */
  driver: IDriver;
  /** Gets or sets the Condition that this Condition is a link of. */
  linkTarget: ICondition;
  /** Gets or sets the parent Condition for this Condition. Null for root condition. */
  parent: ICondition;
  /** Gets or sets the {@link IRule} that this condition applies to. */
  rule: IRule;
  /** Gets or sets the sequence that defines the {@link ICondition}. */
  sequence?: number;
  /** Gets the name of the metric used. */
  unit: string;
  /** Gets or sets the specified value to evaluate against. */
  value?: number;
  /**
  * Gets or sets the {@link IWorkTime} that the event must occur inside/outside of for
  * the violation to occur.
  */
  workTime: IWorkTime;
  /** Gets or sets specified {@link IZone} associated with the condition. */
  zone: IZone;
  /** Gets or sets specified {@link IZoneType}. */
  zoneType: IZoneType;
}


/** Factory for creating conditions. */
export interface IConditionFactory
{
}


/**  The event of an exception generated by Rule violation. */
export interface IExceptionEvent extends IEntityWithVersion
{
  /** Gets or sets the start date of the ExceptionEvent; at or after this date. */
  activeFrom?: Date;
  /** Gets or sets the end date of the ExceptionEvent; at or before this date. */
  activeTo?: Date;
  /** Gets or sets the {@link IDevice} related to the ExceptionEvent. */
  device?: IDevice;
  /** Gets or sets the {@link IDiagnostic}. */
  diagnostic?: IDiagnostic;
  /** Gets or sets the distance travelled since the start of the ExceptionEvent. */
  distance?: number;
  /** Gets or sets the {@link IDriver} specified for the device. */
  driver?: IDriver;
  /** Gets the duration of the exception event. */
  duration?: Date;
  /** Gets or sets the collection of {@link IExceptionInstance}. */
  exceptions?: IExceptionInstance[];
  /**
  * @inheritdoc
  */
  from?: Date;
  /** Gets or sets the exception Rule which was broken. */
  rule?: IRule;
  /**
  * @inheritdoc
  */
  to?: Date;
}


/** Base class for all Exceptions. */
export interface IExceptionEventMargin
{
  /** Gets the date. */
  dateTime?: Date;
  /** Gets the {@link IDevice}. */
  device: IDevice;
  /** Gets the {@link IDriver} of the {@link IExceptionInstance} . */
  driver: IDriver;
  /** Gets the {@link IExceptionEvent} of this instance. */
  exceptionEvent: IExceptionEvent;
}


/**
*  The metadata monitored by or generated from the {@link IExceptionEventMetadata}
* processing.
*
* @deprecated
*/
export interface IExceptionEventMetadata extends IEntity
{
  /** Gets or sets the recorded value of the data value parameter. */
  data?: number;
  /** Gets or sets the date and time the log was created. */
  dateTime?: Date;
  /** Gets or sets  */
  diagnostic: IDiagnostic;
  /** Gets or sets  */
  exceptionEvent: IExceptionEvent;
  /** Gets or sets the recorded value of the monitor predicate parameter. */
  monitorPredicate?: MonitorPredicate;
}


/**
*  The object used to specify the arguments when searching for<br> {@link IExceptionEvent}.<br>
* This search has been designed to work efficiently with these combinations of parameters:IdDeviceSearch
* + RuleSearch + FromDate and/or ToDate
*/
export interface IExceptionEventSearch extends ISearch
{
  /**
  * Gets or sets filter by the {@link IDeviceSearch} options. Providing a Device ID
  * will search for any Exception Events recorded for that Device. Providing Groups
  * will search Exception Events recorded for Devices that are members of the provided
  * GroupSearch(s) or their children. Available DeviceSearch options are:. IdGroupsGroupListSearch
  */
  deviceSearch: IDeviceSearch;
  /** Gets or sets search for Exception Events that occurred at this date or after. */
  fromDate?: Date;
  /** Gets or sets the maximum row version of the {@link IExceptionEvent} search criteria. */
  maxVersion?: number;
  /**
  * Gets or sets filter by the {@link IRuleSearch} options. Providing a Rule ID will
  * search for any Exception Events recorded for that Rule. Available RuleSearch options
  * are:. Id
  */
  ruleSearch: IRuleSearch;
  /** Gets or sets search for Exception Events that occurred at this date or before. */
  toDate?: Date;
  /**
  * Gets or sets the filter by the {@link IUserSearch} options. Providing a User ID
  * will search for any Exception Events recorded for that User. Providing Groups will
  * search Exception Events recorded for Users that are members of the provided GroupSearch(s)
  * or their children. Available UserSearch options are: IdDriverGroupsDriverGroupListCompanyGroupsUserGroupListSearch
  * Cannot be used with DeviceSearch.
  */
  userSearch: IUserSearch;
  /** Gets or sets the row version of the {@link IExceptionEvent} search criteria. */
  version?: number;
}


/**
* This class contains the {@link IExceptionEvent} and estimated driver and coordinates
* for the {@link IExceptionEvent}. It is used most for Engine ExceptionEvents for
* they do not associate to Gps Data directly.
*/
export interface IExceptionEventWithCoordinate extends IExceptionEvent
{
  /** Gets the coordinate. */
  coordinate: ICoordinate;
}


/**
*  Exception with its corresponding event meta data.
*
* @deprecated
*/
export interface IExceptionEventWithMetadata extends IExceptionEvent
{
}


/**
* Base class for all Exceptions. 
*
* @deprecated
*/
export interface IExceptionInstance
{
  /** Gets the date of this exception instance. */
  dateTime?: Date;
  /** Gets the {@link IDevice} of the {@link IExceptionInstance}. */
  device: IDevice;
  /** Gets the Driver" /&gt; of the {@link ExceptionInstance} . */
  driver: IDriver;
}


/**
*  Exception Activity.
*
* @deprecated
*/
export interface IExceptionsActivity
{
  /** Gets or sets the device. */
  device: IDevice;
  /** Gets Distance. */
  distance?: number;
  /** Gets or sets the driver. */
  driver: IDriver;
  /** Gets the duration in ms. */
  duration: Date;
  /** Gets or sets the {@link IRule}. */
  exceptionRule: IRule;
  /** Gets or sets the stop zone. */
  stopZone: IZone;
}


/** The exception details for reports. */
export interface IExceptionsDetail extends IExceptionsActivity
{
  /** Gets the duration in ms. */
  duration: Date;
  /** Gets the end time. */
  endTime?: Date;
  /** Gets the exception event. */
  exceptionEvent: IExceptionEvent;
  /** Gets or sets the exceptions info. */
  exceptionsInfo: string;
  /** Gets or sets the extra exception data. */
  extraExceptionData: string;
  /** Gets the latitude. */
  latitude?: number;
  /** Gets or sets the location. */
  location: IAddressLookupData;
  /** Gets the longitude. */
  longitude?: number;
  /** Gets or sets the max road speed limit. */
  maxRoadSpeedLimit?: number;
  /** Gets or sets the max road speed limit is estimated. */
  maxRoadSpeedLimitEstimated?: boolean;
  /** Gets or sets the max speed. */
  maxSpeed?: number;
  /** Gets the start time. */
  startTime?: Date;
  /** Gets the trip distance when the exception occurs. */
  tripDistance?: number;
}


/**
*  The Exceptions summary class.
*
* @deprecated
*/
export interface IExceptionsSummary extends IExceptionsActivity
{
  /** Gets the duration. */
  duration: Date;
  /** Gets the first {@link IExceptionEvent} instance of the {@link IRule}. */
  firstIncident?: Date;
  /** Gets the event count for the {@link IRule}. */
  incidentCount: number;
  /** Gets the last {@link IExceptionEvent} instance of the {@link IRule}. */
  lastIncident?: Date;
}


/** A exception event that represents DBNull database value. */
export interface INoExceptionEvent extends IExceptionEvent
{
  /**
  * @inheritdoc
  */
  id: string;
}


/** A Exceptiopn Rule which represents DBNull database value. */
export interface INoRule extends IRule
{
  /** Gets or sets the unique identifier for this entity. see {@link IId}. */
  id: string;
  /**
  * Gets or sets the name of this entity that uniquely identifies it and is used when
  * displaying this entity.
  */
  name: string;
}


/**
*  A rule is the definition of conditions that, when "violated", will generate an
* {@link IExceptionEvent}. The rule's logic is defined by it's tree of {@link ICondition}
* (s). It's condition tree will be evaluated against data for device(s) that are members
* of the rule's assigned group(s) or the device(s)/driver(s) defined in the rule condition
* tree. The conditions will be evaluated independently against the assets in the selected
* groups.
*/
export interface IRule extends INameEntityWithVersion
{
  /**
  * Gets or sets start date of the Rule's notification activity period. The events with
  * earlier date than this date will not be reported through the notification engine.
  */
  activeFrom?: Date;
  /** Gets or sets end date of the Rule's notification activity period. */
  activeTo?: Date;
  /**
  * Gets or sets the {@link IExceptionRuleBaseType} of the rule; either Custom, Stock
  * or ZoneStop.
  */
  baseType?: ExceptionRuleBaseType;
  /**
  * Gets or sets the {@link IColor} associated with this rule. Used when rendering {@link
  * IExceptionEvent}(s) related to this rule. Color is defined by the parameters "Red",
  * "Green" and "Blue".
  */
  color: any;
  /**
  * Gets or sets free text field where any user information can be stored and referenced
  * for this entity.
  */
  comment: string;
  /**
  * Gets or sets the hierarchical tree of {@link ICondition}(s) defining the logic of
  * a rule. A rule should have one or more conditions in it's tree.
  */
  condition: ICondition;
  /**
  * Gets or sets a list of {@link IGroup}(s) assigned to the rule. Device in these groups
  * will have the rule evaluated against their data. Device conditions will override
  * devices in the assigned groups.
  */
  groups: IGroup[];
  /** Gets or sets the unique identifier for this entity. See {@link IId}. */
  id: string;
  /**
  * Gets or sets the name of the rule entity that uniquely identifies it and is used
  * when displaying this entity.
  */
  name: string;
}


/**
*  The event of an exception generated by {@link IRuleMonitor} violation.
*
* @deprecated
*/
export interface IRuleMonitor extends IEntity
{
  /** Gets or sets  */
  diagnostic: IDiagnostic;
  /** Gets or sets  */
  monitorPredicate?: MonitorPredicate;
  /** Gets or sets  */
  rule: IRule;
}


/**  The object used to specify the arguments when searching for a {@link IRule}. */
export interface IRuleSearch extends ISearch
{
  /**
  * Gets or sets search for Rules that are this {@link IExceptionRuleBaseType}; either
  * Custom, Stock, or ZoneStop.
  */
  baseType?: ExceptionRuleBaseType;
  /**
  * Gets or sets search for Rules that are in this {@link IExceptionRuleCategory}; either
  * ApplicationExceptionRule, UserExceptionRules or ZoneStopExceptionRules.
  */
  category?: ExceptionRuleCategory;
  /**
  * Gets or sets search for Rules that are members of these {@link IGroupSearch}(s)
  * one of it's children or one of it's parents. Available GroupSearch options are:.
  * Id
  */
  groups: IGroupSearch[];
  /**
  * Gets or sets search for a {@link IRule} with this {@link IId}. Id cannot be used
  * with any other search properties.
  */
  id: string;
  /** Gets or sets include zone stop rules. Default [false]. */
  includeZoneStopRules?: boolean;
  /**
  * Gets or sets search for Rules with this Name. Wildcard can be used by prepending/appending
  * "%" to string. Example "%comments%".
  */
  name: string;
  /** Gets or sets the list of {@link IZoneType} to search by. */
  zoneTypes: IZoneType[];
}


/**
*  The trip exceptions summary class.
*
* @deprecated
*/
export interface ITripExceptionsSummary extends IExceptionsSummary
{
  /** Gets the Start Utc for the trip. */
  tripId: string;
}


/** Diagnostic source type of the diagnostic. */
export enum DiagnosticType { 
  /** No diagnostic. */
  None = "None", 
  /** SID (Subsystem Identifier). */
  Sid = "Sid", 
  /** PID (Parameter Identifier). */
  Pid = "Pid", 
  /** Go Diagnostic. */
  GoDiagnostic = "GoDiagnostic", 
  /** Data Diagnostic. */
  DataDiagnostic = "DataDiagnostic", 
  /** SPN (Suspect Parameter Number). */
  SuspectParameter = "SuspectParameter", 
  /** OBD-II (On-board Diagnostic) Fault. */
  ObdFault = "ObdFault", 
  /** Go Device Fault. */
  GoFault = "GoFault", 
  /** OBD-II (On-board Diagnostic) WWH Fault. */
  ObdWwhFault = "ObdWwhFault", 
  /** Proprietary Fault. */
  ProprietaryFault = "ProprietaryFault", 
  /** Legacy Proprietary Fault. */
  LegacyFault = "LegacyFault", 
  /** GMCCC Fault. */
  GmcccFault = "GmcccFault", 
  /** BRP Fault. */
  BrpFault = "BrpFault", 
  /** AI Model. */
  AiModel = "AiModel"
}


/** Represents a severity/class code from the engine system of the specific {@link IDevice}. */
export enum DtcClass { 
  /** DTCClass 0 is unclassified. */
  Unclassified = "Unclassified", 
  /** DTCClass 1 matches the GTR module B Class A definition. */
  A = "A", 
  /** DTCClass 2 matches the GTR module B Class B1 definition. */
  B1 = "B1", 
  /** DTCClass 3 matches the GTR module B Class B2 definition. */
  B2 = "B2", 
  /** DTCClass 4 matches the GTR module B Class C Definition. */
  C = "C"
}


/** Represents a severity/class code from the engine system of the specific {@link IDevice}. */
export enum DtcSeverity { 
  /** This value indicates that the failure requests maintenance only. */
  MaintenanceOnly = "MaintenanceOnly", 
  /**
  * This value indicates to the failure that a check of the vehicle is required at next
  * halt.
  */
  CheckAtNextHalt = "CheckAtNextHalt", 
  /** This value indicates to the failure that an immediate check of the vehicle is required. */
  CheckImmediately = "CheckImmediately"
}


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
  Protect = "Protect"
}


/** Specify whether the fault resets automatically or manually. */
export enum FaultResetMode { 
  /**
  * The engine {@link IFaultData} instances. These instances will continue to grow until
  * the fault condition ends.
  */
  None = "None", 
  /** The engine {@link IFaultData} instance. */
  AutoReset = "AutoReset"
}


/**
* Represents a fault code state code from the engine system of the specific {@link
* IDevice}.
*/
export enum FaultState { 
  /** None, FaultState Not Indicated (). */
  None = "None", 
  /** Pending fault code. */
  Pending = "Pending", 
  /** Active fault code. */
  Active = "Active"
}


/** A known unit of measure. */
export enum KnownUnitOfMeasure { 
  /** No unit of measure. */
  None = "None", 
  /** The degrees celsius unit of measure. */
  DegreesCelsius = "DegreesCelsius", 
  /** The kilometers per hour unit of measure. */
  KilometersPerHour = "KilometersPerHour", 
  /** The newtons unit of measure. */
  Newtons = "Newtons", 
  /** The newton meters unit of measure. */
  NewtonMeters = "NewtonMeters", 
  /** The meters per second squared unit of measure. */
  MetersPerSecondSquared = "MetersPerSecondSquared", 
  /** The meters unit of measure. */
  Meters = "Meters", 
  /** The grams unit of measure. */
  Grams = "Grams", 
  /** The cubic meters unit of measure. */
  CubicMeters = "CubicMeters", 
  /** The liters unit of measure. */
  Liters = "Liters", 
  /** The cubic meters per second unit of measure. */
  CubicMetersPerSecond = "CubicMetersPerSecond", 
  /** The rotations per minute unit of measure. */
  RotationsPerMinute = "RotationsPerMinute", 
  /** The hertz unit of measure. */
  Hertz = "Hertz", 
  /** The seconds unit of measure. */
  Seconds = "Seconds", 
  /** The volts unit of measure. */
  Volts = "Volts", 
  /** The amps unit of measure. */
  Amps = "Amps", 
  /** The watts unit of measure. */
  Watts = "Watts", 
  /** The ohms unit of measure. */
  Ohms = "Ohms", 
  /** The pascals unit of measure. */
  Pascals = "Pascals", 
  /** The bytes unit of measure. */
  Bytes = "Bytes", 
  /** The parts per million unit of measure. */
  PartsPerMillion = "PartsPerMillion", 
  /** The percentage unit of measure. */
  Percentage = "Percentage", 
  /** The radians unit of measure. */
  Radians = "Radians", 
  /** The revolutions unit of measure. */
  Revolutions = "Revolutions", 
  /** The pulses per meter unit of measure. */
  PulsesPerMeter = "PulsesPerMeter", 
  /** The ohms per second unit of measure. */
  OhmsPerSecond = "OhmsPerSecond", 
  /** The grams per second unit of measure. */
  GramsPerSecond = "GramsPerSecond", 
  /** The kilometers per kilogram unit of measure. */
  KilometersPerKilogram = "KilometersPerKilogram", 
  /** The kilometers per liter unit of measure. */
  KilometersPerLiter = "KilometersPerLiter", 
  /** The kilograms per kilometer unit of measure. */
  KilogramsPerKilometer = "KilogramsPerKilometer", 
  /** The liters per lane kilometer unit of measure. */
  LitersPerLaneKilometer = "LitersPerLaneKilometer", 
  /** The liters per ton unit of measure. */
  LitersPerTon = "LitersPerTon", 
  /** The grams per square meter unit of measure. */
  GramsPerSquareMeter = "GramsPerSquareMeter", 
  /** The kilowatt-hours unit of measure. */
  KiloWattHours = "KiloWattHours", 
  /** The liters per tonne unit of measure. */
  LitersPerTonne = "LitersPerTonne"
}


/**
* Object representing the specific, known ID reserved for faults generated with manufacturer
* specific codes.
*/
export interface IAiModelController extends IController
{
  /** Gets or sets the code. */
  codeId?: number;
  /** Gets or sets the unique identifier for this entity. see {@link IId}. */
  id: string;
  /**
  * Gets or sets the name of this entity that uniquely identifies it and is used when
  * displaying this entity.
  */
  name: string;
  /** Gets or sets the {@link ISource}. */
  source: ISource;
}


/** A diagnostic for an AI Model. */
export interface IAiModelDiagnostic extends IDataDiagnostic
{
}


/**
* Information from the engine computer that can either be measurement data or fault
* code data. This inherited class only consists of a diagnostics Id.
*/
export interface IBasicDiagnostic extends IDiagnostic
{
}


/**
* Object representing the specific, known ID reserved for faults generated with manufacturer
* specific codes.
*/
export interface IBrpFaultController extends IController
{
  /** Gets or sets the code. */
  codeId?: number;
  /** Gets or sets the unique identifier for this entity. see {@link IId}. */
  id: string;
  /**
  * Gets or sets the name of this entity that uniquely identifies it and is used when
  * displaying this entity.
  */
  name: string;
  /** Gets or sets the {@link ISource}. */
  source: ISource;
}


/** A diagnostic for a Brp Device fault. */
export interface IBrpFaultDiagnostic extends IDiagnostic
{
}


/**
* The controller that the diagnostic belongs to. Controllers could be ABS controller,
* suspension controller etc. The available controllers are listed in the {@link IKnownId}.
*/
export interface IController extends INameEntityWithVersion
{
  /** Gets the controller diagnostic code (if applicable). */
  code?: number;
  /**
  * Gets or sets the message identification code for the controller of the diagnostic
  * (if applicable).
  */
  codeId?: number;
  /** Gets or sets the unique identifier for the specific {@link IId}. */
  id: string;
  /**
  * Gets or sets the name of this entity that uniquely identifies it and is used when
  * displaying this entity.
  */
  name: string;
  /** Gets or sets the standard (format) of the {@link ISource}. */
  source: ISource;
}


/** The object used to specify the arguments when searching for {@link IController}(s). */
export interface IControllerSearch extends ISearch
{
  /**
  * Gets or sets search for Controllers with this Name. Wildcard can be used by prepending/appending
  * "%" to string. Example "%name%".
  */
  name: string;
  /**
  * Gets or sets search for Controllers with this {@link ISourceSearch} Id. Available
  * SourceSearch options are:. Id
  */
  sourceSearch: ISourceSearch;
  /** Gets or sets the row version of the {@link IController} search criteria. */
  version?: number;
}


/**
* A {@link IDiagnostic} that represents measurement data from the vehicle (as opposed
* to fault codes).
*/
export interface IDataDiagnostic extends IDiagnostic
{
  /**
  * Gets or sets the conversion factor for the diagnostic parameter; this is related
  * to the {@link IUnitOfMeasure}.
  */
  conversion?: number;
  /** Gets or sets the length of the diagnostic data parameter in bytes. */
  dataLength?: number;
  /**
  * Gets or sets the DiagnosticSignal reference list. This property is obsolete and
  * doesn't store or return any value except null.
  */
  diagnosticSignals?: IDiagnosticSignal[];
  /** Gets or sets the offset value of the diagnostic parameter. */
  offset?: number;
}


/**
* Vehicle diagnostic information from the engine computer that can either be measurement
* data or fault code data. Note: Diagnostics cannot be added, set or removed via the
* API.<br> 
*/
export interface IDiagnostic extends Partial<INameEntityWithVersion>
{
  /** Gets or sets the diagnostic parameter code number. */
  code?: number;
  /** Gets or sets the applicable {@link IController} for the diagnostic parameter. */
  controller?: IController;
  /** Gets or sets the {@link IDiagnosticType} (source) of the diagnostic parameter. */
  diagnosticType?: DiagnosticType;
  /**
  * Gets or sets the {@link IEngineType} for this diagnostic if applicable, otherwise
  * null.
  */
  engineType?: IEngineType;
  /**
  * Gets or sets the {@link IFaultResetMode} of the diagnostic (whether the fault resets
  * automatically or manually).
  */
  faultResetMode?: FaultResetMode;
  /** Gets or sets the unique identifier for this entity. See {@link IId}. */
  id?: string;
  /**
  * Gets or sets the value which describes if the diagnostic guarantees it will log
  * when estimate error is exceeded.
  */
  isLogGuaranteedOnEstimateError?: boolean;
  /**
  * Gets or sets the name of this entity that uniquely identifies it and is used when
  * displaying this entity.
  */
  name?: string;
  /** Gets or sets the {@link ISource} for the diagnostic (the type of diagnostic code). */
  source?: ISource;
  /** Gets the tampering diagnostic codes. */
  tamperingDiagnostics: IDiagnostic[];
  /** Gets or sets the {@link IUnitOfMeasure} applicable to the diagnostic parameter. */
  unitOfMeasure?: IUnitOfMeasure;
  /**
  * Gets or sets the . The diagnostic should only be interpolated within the range of
  * the given type.
  */
  validLoggingPeriod?: ValidLoggingPeriod;
}


/**  The object used to specify the arguments when searching for {@link IDiagnostic}(s). */
export interface IDiagnosticSearch extends ISearch
{
  /** Gets or sets search for a Diagnostic by the code number. */
  code?: number;
  /** Gets or sets the {@link IDiagnosticType} to search for in Diagnostics. */
  diagnosticType?: DiagnosticType;
  /**
  * Gets or sets search for {@link IDiagnostic}(s) with this {@link IId}. Available
  * EngineTypeSearch options are:. Id
  */
  engineTypeSearch: IEngineTypeSearch;
  /** Gets or sets the {@link IFaultResetMode} to search by. */
  faultResetMode?: FaultResetMode;
  /**
  * Gets or sets search for Diagnostics with this Name. Wildcard can be used by prepending/appending
  * "%" to string. Example "%name%".
  */
  name: string;
  /**
  * Gets or sets the {@link ISourceSearch} Id to search for in Diagnostics. Available
  * SourceSearch options are:. IdName
  */
  sourceSearch: ISourceSearch;
  /** Gets or sets the row version of the {@link IDiagnostic} search criteria. */
  version?: number;
}


/** An obsolete, unused class. */
export interface IDiagnosticSignal extends INameEntity
{
  /** Gets or sets gets the code. */
  code: number;
  /** Gets or sets get the data diagnostic. */
  dataDiagnostic: IDataDiagnostic;
}


/**
*  Vehicle diagnostic translation. Note: this class should only be used for migration
* purpose.<br> 
*
* @deprecated
*/
export interface IDiagnosticTranslation extends INameEntity
{
  /** Gets or sets the . */
  diagnostic: IDiagnostic;
  /** Gets or sets language id. */
  language: string;
}


/** Class to display engine code. */
export interface IDisplayCode
{
}


/**
* The type of engine the device has, or which engine type an Engine Management Code
* belongs to. The standard types are represented by the strings "EngineTypeGenericId"
* for the generic engine and "EngineTypeNoneId" where engine type is not available.
*/
export interface IEngineType extends INameEntity
{
  /** Gets or sets the unique identifier for this entity. See {@link IId}. */
  id: string;
  /**
  * Gets or sets the name of this entity that uniquely identifies it and is used when
  * displaying this entity.
  */
  name: string;
}


/**
*  Represents the default {@link IEngineType}.
*
* @deprecated
*/
export interface IEngineTypeGeneric extends IEngineTypeSystem
{
}


/**
*  Represents an empty (null) {@link IEngineType}, used for devices that are not engine-assigned.
*
* @deprecated
*/
export interface IEngineTypeNone extends IEngineTypeSystem
{
}


/**  The object used to specify the arguments when searching for {@link IEngineType}(s). */
export interface IEngineTypeSearch extends ISearch
{
}


/** Base class for all system engine types. */
export interface IEngineTypeSystem extends IEngineType
{
  /** Gets or sets the unique identifier for this entity. see {@link IId}. */
  id: string;
  /**
  * Sets the name of this entity that uniquely identifies it and is used when displaying
  * this entity. The name cannot be changed for this engine type.
  */
  name: string;
}


/**
*  The Failure Mode Identifier (FMI) used to describe engine fault codes. This is
* represented by the string "NoFailureModeId" when there is no applicable FMI.
*/
export interface IFailureMode extends INameEntity
{
  /** Gets or sets the specific FMI code number. */
  code?: number;
  /** Gets or sets the unique identifier for this entity. See . */
  id: string;
  /**
  * Gets or sets the name of this entity that uniquely identifies it and is used when
  * displaying this entity.
  */
  name: string;
  /** Gets or sets the type for the FMI. */
  source: ISource;
}


/**  The object used to specify the arguments when searching for a . */
export interface IFailureModeSearch extends ISearch
{
}


/**
*  A record that represents a fault code record from the engine system of the specific
* .
*/
export interface IFaultData extends IEntity
{
  /** Gets or sets whether the amber warning lamp state. */
  amberWarningLamp?: boolean;
  /** Gets or sets the {@link IDtcClass} code of the fault. */
  classCode?: DtcClass;
  /** Gets or sets the code related to the fault code; if applicable. */
  controller: IController;
  /** Gets or sets the number of times the fault occurred. */
  count?: number;
  /** Gets or sets the date and time at which the event occurred. */
  dateTime?: Date;
  /** Gets or sets the that generated the fault. */
  device: IDevice;
  /** Gets or sets the associated with the fault. */
  diagnostic: IDiagnostic;
  /** Gets or sets the date and time that the DismissUser dismissed the fault. */
  dismissDateTime?: Date;
  /** Gets or sets the that dismissed the fault. */
  dismissUser: IUser;
  /** Gets or sets the of the fault; if applicable. */
  failureMode: IFailureMode;
  /** Gets or sets the of a J1939 vehicle. See for the possible values. */
  faultLampState?: FaultLampState;
  /** Gets or sets the code from the engine system of the specific device. */
  faultState?: FaultState;
  /** Gets or sets the associated with the fault. */
  flashCode: IFlashCode;
  /** Gets or sets the unique identifier for the entity. See . */
  id: string;
  /** Gets or sets the malfunction light state. */
  malfunctionLamp?: boolean;
  /** Gets or sets whether the protect warning lamp is on. */
  protectWarningLamp?: boolean;
  /** Gets or sets whether the red stop lamp is on. */
  redStopLamp?: boolean;
  /** Gets or sets the {@link IDtcSeverity} of the fault. */
  severity?: DtcSeverity;
  /** Gets or sets the source address for enhanced faults. */
  sourceAddress?: number;
}


/**
* A record that represents a fault code record from the engine system of the specific
* populated with ignition cycle information.
*/
export interface IFaultDataByIgnitionCycle extends IFaultData
{
  /** Gets the ignition cycle count for this instance of the . */
  cycleCount: number;
  /** Gets the ignition cycle end time for this instance of the . */
  cycleEndDateTime?: Date;
}


/**
*  The object used to specify the arguments when searching for a<br> .<br> This search
* has been designed to work efficiently with these combinations of parameters:IdDeviceSearch
* + DiagnosticSearch + FromDate and/or ToDateGroupSearch + DiagnosticSearch + FromDate
* and/or ToDate
*/
export interface IFaultDataSearch extends ISearch
{
  /**
  * Gets or sets the search options which are used to search for fault data for a controller
  * by Id. Available ControllerSearch options are:. Id
  */
  controllerSearch: IControllerSearch;
  /**
  * Gets or sets the search options which are used to search for fault data for a device
  * by Id. Available DeviceSearch options are:. Id
  */
  deviceSearch: IDeviceSearch;
  /**
  * Gets or sets search for FaultData recorded for the diagnostic code using the Id.
  * Available DiagnosticSearch options are:. IdCodeNameSourceSearch.NameSourceSearch.Id
  */
  diagnosticSearch: IDiagnosticSearch;
  /**
  * Gets or sets the from date. The FaultData logs are searched for events which were
  * recorded on or after this date.
  */
  fromDate?: Date;
  /**
  * Gets or sets the groups which should be searched. (s). Available GroupSearch options
  * are:. Id
  */
  groups: IGroupSearch[];
  /**
  * Gets or sets the to state of the fault. The Fault data logs are searched for events
  * which are under the this state.
  */
  state?: FaultState;
  /**
  * Gets or sets the to date. The Fault data logs are searched for events which were
  * recorded on or before this date.
  */
  toDate?: Date;
}


/**  The optional summary code references for specific items referencing records. */
export interface IFlashCode extends INameEntity
{
  /** Gets or sets the circuit index reference to the flash code. */
  circuitIndex: string;
  /** Gets or sets the associated to the flash code. */
  diagnostic: IDiagnostic;
  /** Gets or sets the associated to the flash code. */
  failureMode: IFailureMode;
  /** Gets or sets the flash code index. */
  flashCodeIndex: string;
  /**
  * Gets or sets an optional URL which points to the associated documentation for the
  * flash code.
  */
  helpUrl: string;
  /** Gets or sets the unique identifier for this entity. See . */
  id: string;
  /**
  * Gets or sets the name of this entity that both uniquely identifies it and is used
  * for display.
  */
  name: string;
  /** Gets or sets the page reference, if applicable. */
  pageReference: string;
  /** Gets or sets the priority level of the fault flash code. */
  priorityLevel?: number;
}


/**
* Object representing the specific, known ID reserved for faults generated with manufacturer
* specific codes.
*/
export interface IGmcccFaultController extends IController
{
  /** Gets or sets the code. */
  codeId?: number;
  /** Gets or sets the unique identifier for this entity. see {@link IId}. */
  id: string;
  /**
  * Gets or sets the name of this entity that uniquely identifies it and is used when
  * displaying this entity.
  */
  name: string;
  /** Gets or sets the {@link ISource}. */
  source: ISource;
}


/** A diagnostic for a Gmccc Device fault. */
export interface IGmcccFaultDiagnostic extends IDiagnostic
{
}


/** A diagnostic that originates from a Go Device. */
export interface IGoDiagnostic extends IDataDiagnostic
{
  /**
  * @inheritdoc
  */
  engineType?: IEngineType;
}


/**
* Object representing the specific, known ID reserved for faults generated by the
* Geotab GO Device.
*/
export interface IGoFaultController extends IController
{
  /** Gets or sets the code. */
  codeId?: number;
  /** Gets or sets the unique identifier for this entity. see {@link IId}. */
  id: string;
  /**
  * Gets or sets the name of this entity that uniquely identifies it and is used when
  * displaying this entity.
  */
  name: string;
  /** Gets or sets the {@link ISource}. */
  source: ISource;
}


/** A diagnostic for a Go Device fault. */
export interface IGoFaultDiagnostic extends IDiagnostic
{
  /**
  * @inheritdoc
  */
  engineType?: IEngineType;
}


/**
* Object representing the specific, known ID reserved for faults generated with legacy
* manufacturer specific codes.
*/
export interface ILegacyFaultController extends IController
{
  /** Gets or sets the code. */
  codeId?: number;
  /** Gets or sets the unique identifier for this entity. see {@link IId}. */
  id: string;
  /**
  * Gets or sets the name of this entity that uniquely identifies it and is used when
  * displaying this entity.
  */
  name: string;
  /** Gets or sets the {@link ISource}. */
  source: ISource;
}


/** A diagnostic for a legacy manufacturer specific fault. */
export interface ILegacyFaultDiagnostic extends IDiagnostic
{
}


/** An object representing NoController. */
export interface INoController extends IController
{
  /** Gets or sets the code. */
  codeId?: number;
  /** Gets or sets the unique identifier for this entity. see {@link IId}. */
  id: string;
  /**
  * Gets or sets the name of this entity that uniquely identifies it and is used when
  * displaying this entity.
  */
  name: string;
  /** Gets or sets the {@link ISource}. */
  source: ISource;
}


/** A diagnostic for Geotab Devices that represents DBNull database value. */
export interface INoDiagnostic extends IDiagnostic
{
  /** Gets or sets the unique identifier for this entity. see {@link IId}. */
  id?: string;
  /**
  * Gets or sets the name of this entity that uniquely identifies it and is used when
  * displaying this entity.
  */
  name?: string;
}


/** A for diagnostics with no real world failure mode. */
export interface INoFailureMode extends IFailureMode
{
  /** Gets or sets the unique identifier for this entity. see . */
  id: string;
  /**
  * Gets or sets the name of this entity that uniquely identifies it and is used when
  * displaying this entity.
  */
  name: string;
  /** Sets the . */
  source: ISource;
}


/** A diagnostic for an OBD fault. */
export interface IObdFaultDiagnostic extends IDiagnostic
{
}


/** A diagnostic for an OBD fault. */
export interface IObdSaFaultDiagnostic extends IDiagnostic
{
}


/**
*  Standard Parameter Group Number (PGN). Where there is no parameter group it is
* represented by "ParameterGroupNoneId".
*/
export interface IParameterGroup extends INameEntity
{
  /** Gets or sets the unique code of the PGN. */
  code?: number;
  /** Gets or sets the total length in bytes of the PGN. */
  dataLength?: number;
  /** Gets or sets the unique identifier for this entity. See {@link IId}. */
  id: string;
  /**
  * Gets or sets the name of this entity that uniquely identifies it and is used when
  * displaying this entity.
  */
  name: string;
}


/** A parameter group to use where there is no parameter group. */
export interface IParameterGroupNone extends IParameterGroup
{
  /** Gets or sets the unique identifier for this entity. see . */
  id: string;
}


/**  The object used to specify the arguments when searching for a . */
export interface IParameterGroupSearch extends ISearch
{
}


/** A J1708-specific Parameter Identifier. */
export interface IPid extends IDataDiagnostic
{
}


/**
* Object representing the specific, known ID reserved for faults generated with manufacturer
* specific codes.
*/
export interface IProprietaryFaultController extends IController
{
  /** Gets or sets the code. */
  codeId?: number;
  /** Gets or sets the unique identifier for this entity. see {@link IId}. */
  id: string;
  /**
  * Gets or sets the name of this entity that uniquely identifies it and is used when
  * displaying this entity.
  */
  name: string;
  /** Gets or sets the {@link ISource}. */
  source: ISource;
}


/** A diagnostic for a manufacturer specific fault. */
export interface IProprietaryFaultDiagnostic extends IDiagnostic
{
}


/**
* The class that represents {@link IStatusData} received from a sensor like bluetooth
* dongle.
*/
export interface ISensorData extends IStatusData
{
  /** Gets or sets the MAC address of the sensor. */
  address?: number;
}


/**
*  A J1708-specific Subsystem Identifier.
*
* @deprecated
*/
export interface ISid extends IDiagnostic
{
}


/**
*  The source is the underlying producer of the engine data. The source can be one
* of the following "SourceJ1708Id", "SourceJ1939Id", "SourceObdId", "SourceGeotabGoId",
* "SourceSystemId", "SourceObdSaId", "SourceProprietaryId", "SourceLegacyId" and "SourceThirdPartyId"
* strings in JSON.
*/
export interface ISource extends INameEntity
{
  /** Gets or sets the unique identifier for this entity. See {@link IId}. */
  id: string;
  /**
  * Gets or sets the name of this entity that uniquely identifies it and is used when
  * displaying this entity.
  */
  name: string;
}


/** Specifies that the data originated from the AI Model. */
export interface ISourceAiModel extends ISource
{
  /** Gets the singleton value. */
  value: ISourceAiModel;
}


/** Specifies that the data originated from the AI Model. */
export interface ISourceAiModelObsolete extends ISource
{
  /** Gets the singleton value. */
  value: ISourceAiModelObsolete;
}


/** Specifies that the engine data originated from proprietary sources. */
export interface ISourceBrp extends ISource
{
  /** Gets the singleton value. */
  value: ISourceBrp;
}


/** Specifies that the engine data originated from Brp sources for an obsolete GUID. */
export interface ISourceBrpObsolete extends ISource
{
  /** Gets the singleton value. */
  value: ISourceBrpObsolete;
}


/** Specifies that the engine data originated from proprietary sources. */
export interface ISourceGmccc extends ISource
{
  /** Gets the singleton value. */
  value: ISourceGmccc;
}


/** Specifies that the engine data originated from Gmccc sources for an obsolete GUID. */
export interface ISourceGmcccObsolete extends ISource
{
  /** Gets the singleton value. */
  value: ISourceGmcccObsolete;
}


/** Specifies that the engine data originated from a GO device. */
export interface ISourceGo extends ISource
{
}


/** Specifies that the engine data originated from a GO device for an obsolete GUID. */
export interface ISourceGoObsolete extends ISource
{
}


/** Specifies that the engine data originated from a J1708 engine computer. */
export interface ISourceJ1708 extends ISource
{
}


/**
* Specifies that the engine data originated from a J1708 engine computer for an obsolete
* GUID.
*/
export interface ISourceJ1708Obsolete extends ISource
{
}


/** Specifies that the engine data originated from a J1939 engine computer. */
export interface ISourceJ1939 extends ISource
{
}


/**
* Specifies that the engine data originated from a J1939 engine computer for an obsolete
* GUID.
*/
export interface ISourceJ1939Obsolete extends ISource
{
}


/** Specifies that the engine data originated from a legacy proprietary source. */
export interface ISourceLegacy extends ISource
{
  /** Gets the singleton value. */
  value: ISourceLegacy;
}


/**
* Specifies that the engine data originated from a legacy proprietary source for an
* obsolete GUID.
*/
export interface ISourceLegacyObsolete extends ISource
{
  /** Gets the singleton value. */
  value: ISourceLegacyObsolete;
}


/** Specifies that the engine data originated from an OBD II engine computer. */
export interface ISourceObd extends ISource
{
}


/**
* Specifies that the engine data originated from an OBD II engine computer for an
* obsolete GUID.
*/
export interface ISourceObdObsolete extends ISource
{
}


/** Specifies that the engine data originated from WWH enhanced type. */
export interface ISourceObdSa extends ISource
{
  /** Gets the singleton value. */
  value: ISourceObdSa;
}


/**
* Specifies that the engine data originated from WWH enhanced type for an obsolete
* GUID.
*/
export interface ISourceObdSaObsolete extends ISource
{
  /** Gets the singleton value. */
  value: ISourceObdSaObsolete;
}


/** Specifies that the engine data originated from proprietary sources. */
export interface ISourceProprietary extends ISource
{
  /** Gets the singleton value. */
  value: ISourceProprietary;
}


/**
* Specifies that the engine data originated from proprietary sources for an obsolete
* GUID.
*/
export interface ISourceProprietaryObsolete extends ISource
{
  /** Gets the singleton value. */
  value: ISourceProprietaryObsolete;
}


/**  The object used to specify the arguments when searching for a . */
export interface ISourceSearch extends ISearch
{
  /** Gets or sets the name of the search criteria. */
  name: string;
  /** Gets or sets the row version of the search criteria. */
  version?: number;
}


/** Specifies that the engine data originated from the MyGeotab system. */
export interface ISourceSystem extends ISource
{
}


/**
* Specifies that the engine data originated from the MyGeotab system from an obsolete
* GUID.
*/
export interface ISourceSystemObsolete extends ISource
{
}


/** Specifies that the engine data originated from a third-party device. */
export interface ISourceThirdParty extends ISource
{
  /** Gets the singleton value. */
  value: ISourceThirdParty;
}


/**
* Specifies that the engine data originated from a third-party device for an obsolete
* GUID.
*/
export interface ISourceThirdPartyObsolete extends ISource
{
  /** Gets the singleton value. */
  value: ISourceThirdPartyObsolete;
}


/**
*  A record that represents an engine status record from the engine system of the
* specific {@link IDevice}.
*/
export interface IStatusData extends IEntityWithVersion
{
  /** Gets or sets the {@link IDevice} specified. */
  controller: IController;
  /** Gets or sets the recorded value of the diagnostic parameter. */
  data?: number;
  /** Gets or sets the date and time of the logged event. */
  dateTime?: Date;
  /** Gets or sets the StatusData for the {@link IDevice} specified. */
  device?: IDevice;
  /** Gets or sets the {@link IDevice} specified. */
  diagnostic?: IDiagnostic;
  /**
  * Gets or sets a value indicating whether this instance is the last active record
  * in the vehicle's active period. Possible values are:. false: The record is within
  * the active period and not the last active recordtrue: The record is within the active
  * period and is the last active recordnull: The record is not within the active period
  * or the diagnostic does not observe active state (ex. Accelerometer)
  */
  isLastActive?: boolean;
}


/** Represents an estimate based on previous/next and the Date. */
export interface IStatusDataEstimate extends IStatusData
{
}


/**
*  The object used to specify the arguments when searching for<br> {@link IStatusData}.<br>
* When searching for status data including DeviceSearch and DiagnosticSearch<br> the
* system will return all records that match the search criteria and interpolate the
* value at the<br> provided from/to dates when there is no record that corresponds
* to the date. Interpolated records<br> are dynamically created when the request is
* made and can be identified as not having the ID property<br> populated. Records
* with an ID are stored in the database.<br> This search has been designed to work
* efficiently with these combinations of parameters:IdDeviceSearch + DiagnosticSearch
* + FromDate and/or ToDate
*/
export interface IStatusDataSearch extends ISearch
{
  /**
  * Gets or sets search for StatusData recorded for this {@link IDeviceSearch} Id. Available
  * DeviceSearch options are:. IdGroupGroupListSearch
  */
  deviceSearch: IDeviceSearch;
  /**
  * Gets or sets search for StatusData with this {@link IDiagnosticSearch} Id. Available
  * DiagnosticSearch options are:. Id
  */
  diagnosticSearch: IDiagnosticSearch;
  /** Gets or sets search for StatusData records that were logged at this date or after. */
  fromDate?: Date;
  /** Gets or sets a value indicating whether [observe active state]. */
  observeActiveState: boolean;
  /** Gets or sets search for StatusData records that were logged at this date or before. */
  toDate?: Date;
  /**
  * Gets or sets Gets or sets the row version of the {@link IStatusData} search criteria.
  *
  * @deprecated
  */
  version?: number;
}


/**
*  The reference object to {@link IStatusData} and {@link IFaultData}.
*
* @deprecated
*/
export interface ISuspectParameter extends IDataDiagnostic
{
  /** Gets or sets the parameter group. */
  parameterGroup?: IParameterGroup;
}


/**
* Describes the unit of measure (UOM) for engine data logs. In the case where no unit
* of measure is available; this is represented by "UnitOfMeasureNoneId".
*/
export interface IUnitOfMeasure extends INameEntity
{
  /** Gets or sets the unique identifier for this entity. See . */
  id: string;
  /**
  * Gets or sets the name of this entity that uniquely identifies it and is used when
  * displaying this entity.
  */
  name: string;
}


/** Represents the unit of measure for electric current. */
export interface IUnitOfMeasureAmps extends IUnitOfMeasureSystem
{
  /** Gets the singleton instance. */
  value: IUnitOfMeasureAmps;
}


/** Represents the unit of measure for digital storage. */
export interface IUnitOfMeasureBytes extends IUnitOfMeasureSystem
{
  /** Gets the singleton instance. */
  value: IUnitOfMeasureBytes;
}


/** Represents the unit of measure for the volume of a solid. */
export interface IUnitOfMeasureCubicMeters extends IUnitOfMeasureSystem
{
  /** Gets the singleton instance. */
  value: IUnitOfMeasureCubicMeters;
}


/** Represents the unit of measure for volumetric flow rate. */
export interface IUnitOfMeasureCubicMetersPerSecond extends IUnitOfMeasureSystem
{
  /** Gets the singleton instance. */
  value: IUnitOfMeasureCubicMetersPerSecond;
}


/** Represents the unit of measure for temperature. */
export interface IUnitOfMeasureDegreesCelsius extends IUnitOfMeasureSystem
{
  /** Gets the singleton instance. */
  value: IUnitOfMeasureDegreesCelsius;
}


/** Represents the unit of measure for mass. */
export interface IUnitOfMeasureGrams extends IUnitOfMeasureSystem
{
  /** Gets the singleton instance. */
  value: IUnitOfMeasureGrams;
}


/** Represents the unit of measure for mass per second. */
export interface IUnitOfMeasureGramsPerSecond extends IUnitOfMeasureSystem
{
  /** Gets the singleton instance. */
  value: IUnitOfMeasureGramsPerSecond;
}


/** Unit of Measure Helper. */
export interface IUnitOfMeasureHelper
{
}


/** Represents the unit of measure an amount of cycles per second. */
export interface IUnitOfMeasureHertz extends IUnitOfMeasureSystem
{
  /** Gets the singleton instance. */
  value: IUnitOfMeasureHertz;
}


/** Represents the unit of measure for speed. */
export interface IUnitOfMeasureKilometersPerHour extends IUnitOfMeasureSystem
{
  /** Gets the singleton instance. */
  value: IUnitOfMeasureKilometersPerHour;
}


/** Represents the unit of measure for the ratio of distance to fuel consumption. */
export interface IUnitOfMeasureKilometersPerKilogram extends IUnitOfMeasureSystem
{
  /** Gets the singleton instance. */
  value: IUnitOfMeasureKilometersPerKilogram;
}


/** Represents the unit of measure for the volume of a liquid. */
export interface IUnitOfMeasureLiters extends IUnitOfMeasureSystem
{
  /** Gets the singleton instance. */
  value: IUnitOfMeasureLiters;
}


/** Represents the unit of measure for distance. */
export interface IUnitOfMeasureMeters extends IUnitOfMeasureSystem
{
  /** Gets the singleton instance. */
  value: IUnitOfMeasureMeters;
}


/** Represents the unit of measure for acceleration. */
export interface IUnitOfMeasureMetersPerSecondSquared extends IUnitOfMeasureSystem
{
  /** Gets the singleton instance. */
  value: IUnitOfMeasureMetersPerSecondSquared;
}


/** Represents the unit of measure for acceleration. */
export interface IUnitOfMeasureNewtonMeters extends IUnitOfMeasureSystem
{
  /** Gets the singleton instance. */
  value: IUnitOfMeasureNewtonMeters;
}


/** Represents the unit of measure for force. */
export interface IUnitOfMeasureNewtons extends IUnitOfMeasureSystem
{
  /** Gets the singleton instance. */
  value: IUnitOfMeasureNewtons;
}


/**
* The placeholder unit of measure for a diagnostic that does not have any specific
* unit.
*/
export interface IUnitOfMeasureNone extends IUnitOfMeasureSystem
{
}


/** Represents the unit of measure for electrical resistance. */
export interface IUnitOfMeasureOhms extends IUnitOfMeasureSystem
{
  /** Gets the singleton instance. */
  value: IUnitOfMeasureOhms;
}


/** Represents the unit of measure for electrical resistance per second. */
export interface IUnitOfMeasureOhmsPerSecond extends IUnitOfMeasureSystem
{
  /** Gets the singleton instance. */
  value: IUnitOfMeasureOhmsPerSecond;
}


/** Represents the unit of measure for dimensionless quantities. */
export interface IUnitOfMeasurePartsPerMillion extends IUnitOfMeasureSystem
{
  /** Gets the singleton instance. */
  value: IUnitOfMeasurePartsPerMillion;
}


/** Represents the unit of measure for pressure. */
export interface IUnitOfMeasurePascals extends IUnitOfMeasureSystem
{
  /** Gets the singleton instance. */
  value: IUnitOfMeasurePascals;
}


/** Represents the unit of measure for a percentage. */
export interface IUnitOfMeasurePercentage extends IUnitOfMeasureSystem
{
  /** Gets the singleton instance. */
  value: IUnitOfMeasurePercentage;
}


/** Represents the unit of measure an amount of digital pulses per meter. */
export interface IUnitOfMeasurePulsesPerMeter extends IUnitOfMeasureSystem
{
  /** Gets the singleton instance. */
  value: IUnitOfMeasurePulsesPerMeter;
}


/** Represents the unit of measure for an angle. */
export interface IUnitOfMeasureRadians extends IUnitOfMeasureSystem
{
  /** Gets the singleton instance. */
  value: IUnitOfMeasureRadians;
}


/** Represents the unit of measure an amount of circulation rotations. */
export interface IUnitOfMeasureRevolutions extends IUnitOfMeasureSystem
{
  /** Gets the singleton instance. */
  value: IUnitOfMeasureRevolutions;
}


/** Represents the unit of measure for RPM. */
export interface IUnitOfMeasureRevolutionsPerMinute extends IUnitOfMeasureSystem
{
  /** Gets the singleton instance. */
  value: IUnitOfMeasureRevolutionsPerMinute;
}


/** The object used to specify the arguments when searching for a . */
export interface IUnitOfMeasureSearch extends ISearch
{
  /**
  * Gets or sets search for a UnitOfMeasure with a name containing this String. Wildcard
  * can be used by prepending/appending "%" to string. Example "%name%".
  */
  name: string;
}


/** Represents the unit of measure for an amount of time. */
export interface IUnitOfMeasureSeconds extends IUnitOfMeasureSystem
{
  /** Gets the singleton instance. */
  value: IUnitOfMeasureSeconds;
}


/** Represents a system supported unit of measure which cannot be changed. */
export interface IUnitOfMeasureSystem extends IUnitOfMeasure
{
  /** Gets or sets the entity identifier. */
  id: string;
  /** Gets or sets the entity name. */
  name: string;
}


/** Represents the unit of measure for electrical potential. */
export interface IUnitOfMeasureVolts extends IUnitOfMeasureSystem
{
  /** Gets the singleton instance. */
  value: IUnitOfMeasureVolts;
}


/** Represents the unit of measure for electrical power. */
export interface IUnitOfMeasureWatts extends IUnitOfMeasureSystem
{
  /** Gets the singleton instance. */
  value: IUnitOfMeasureWatts;
}


/**
* Class that represents a vehicle identification number. Provides functionality to
* deal with compression and some validation.
*/
export interface IVin
{
}


/** The business impact enum for support tickets. */
export enum BusinessImpact { 
  /** Unknown Impact */
  Unknown = "Unknown", 
  /** Critical Impact */
  Critical = "Critical", 
  /** Major Impact */
  Major = "Major", 
  /** Moderate Impact */
  Moderate = "Moderate", 
  /** Limited Impact */
  Limited = "Limited"
}


/** Represents ticket comment. */
export interface IComment
{
  /** Gets or sets creation date. */
  createdAt: Date;
  /** Gets or sets commenter email. */
  email: string;
  /** Gets or sets commenter name. */
  name: string;
  /** Gets or sets comment text. */
  text: string;
}


/** Represents generic support ticket. */
export interface IGenericTicket
{
  /** Gets or sets tickets additional reply. */
  addComment: IComment;
  /** Gets or sets ticket replies. */
  comments: IComment[];
  /** Gets or sets ticket creation date. */
  createdAt: Date;
  /** Gets or sets an email of the user created the ticket. */
  email: string;
  /** Gets or sets ticket's id. */
  id: string;
  /** Gets or sets current training status. */
  status: string;
  /** Gets or sets ticket's subject. */
  title: string;
  /** Gets or sets a user name (first + ' ' + last). */
  userName: string;
  /** Gets or sets ticket's version. */
  version?: number;
}


/** A training ticket. */
export interface ISupportTicket extends IGenericTicket
{
  /** Gets or sets business impact. */
  businessImpact: BusinessImpact;
  /** Gets or sets Go device serial number. */
  goDeviceSN: string;
  /** Gets or sets vehicle VIN. */
  vehicleIdentificationNumber: string;
  /** Gets or sets vehicle year and model. */
  vehicleYearModel: string;
}


/** A training ticket. */
export interface ITrainingTicket extends IGenericTicket
{
  /** Gets or sets other training interest. */
  otherTrainingInterest: string;
  /** Gets or sets training duration (e.g. 30min, 1h). */
  trainingLength: string;
  /** Gets or sets training user company. */
  trainingRecipientCompany: string;
  /** Gets or sets user email. */
  trainingRecipientEmail: string;
  /** Gets or sets user name. */
  trainingRecipientName: string;
  /** Gets or sets phone number. */
  trainingRecipientPhoneNumber: string;
  /** Gets or sets training time zone. */
  trainingRecipientTimeZone: string;
  /** Gets or sets user title. */
  trainingRecipientTitle: string;
  /** Gets or sets training type. */
  trainingType: string;
}


/** Replacement type for the device. */
export enum ReplacementType { 
  /** Default replacement type */
  Unknown = "Unknown", 
  /** Type of replacement is Sunset. */
  Sunset = "Sunset"
}


/** Device plan details to be sent to UI. */
export interface IDevicePlanDetails
{
  /** Gets or sets device plan contract length of the device. */
  devicePlanContractLengthDays: number;
  /** Gets or sets ERP product name of the device. */
  erpProductNameParam: string;
  /** Gets or sets a value indicating whether to ignore warranty or not. */
  ignoreWarranty: boolean;
}


/** MyAdmin Device Recall/Replacement Info. */
export interface IDeviceReplacementInfo
{
  /** Gets or sets details of the device that need replacement. */
  device?: IReplacementDeviceDetails;
  /** Gets or sets device plan contract length of the device. */
  devicePlanContractLengthDays: number;
  /** Gets or sets details about the replacement of the device. */
  deviceReplacement?: IReplacementDetails;
  /** Gets or sets end date of eligibility of the device. */
  eligibleEndDate?: Date;
  /** Gets or sets start date of eligibility of the device. */
  eligibleStartDate?: Date;
  /** Gets or sets ERP product name of the device. */
  erpProductNameParam: string;
  /** Gets or sets feed version of the device. */
  feedVersion: string;
  /** Gets or sets a value indicating whether its Owner or not. */
  isOwner: boolean;
  /** Gets or sets device replacement completion date. */
  replacementCompletedDate?: Date;
  /** Gets or sets device replacement creation date. */
  replacementCreationDate?: Date;
  /** Gets or sets device replacement request initiation date. */
  replacementRequestInitiationDate?: Date;
}


/** MyAdmin Device Recall/Replacement request status. */
export interface IDeviceReplacementStatus
{
  /** Gets or sets Serial number of the device. */
  serialNumber: string;
  /**
  * Gets or sets a value indicating whether replacement initiation request is successful
  * or not.
  */
  success: boolean;
}


/** Class to store eligibility details to be sent to UI. */
export interface IEligibility
{
  /** Gets or sets end date of eligibility of the device. */
  eligibleEndDate?: Date;
  /** Gets or sets start date of eligibility of the device. */
  eligibleStartDate?: Date;
}


/** Recall/Replacement Information to be sent to UI. */
export interface IReplacement
{
  /** Gets or sets carrier information. */
  carrier: string;
  /** Gets or sets replacement completion date. */
  replacementCompletedDate?: Date;
  /** Gets or sets replacement creation date. */
  replacementCreationDate?: Date;
  /** Gets or sets replacement end date. */
  replacementEndDate?: Date;
  /** Gets or sets replacement message. */
  replacementMessage: string;
  /** Gets or sets replacement request initiation date. */
  replacementRequestInitiationDate?: Date;
  /** Gets or sets replacement start date. */
  replacementStartDate?: Date;
  /** Gets or sets replacement type for the device. */
  replacementType: ReplacementType;
  /** Gets or sets sunset date for the device. */
  sunsetDate?: Date;
}


/** Recall/Replacement Information coming from MyAdmin. */
export interface IReplacementDetails
{
  /** Gets or sets carrier information. */
  carrier: string;
  /** Gets or sets replacement type for the device. */
  deviceReplacementType?: IReplacementTypeDetails;
  /** Gets or sets id of the device. */
  id: number;
  /** Gets or sets a value indicating whether to ignore warranty or not. */
  ignoreWarranty: boolean;
  /** Gets or sets replacement end date. */
  replacementEndDate?: Date;
  /** Gets or sets replacement message. */
  replacementMessage: string;
  /** Gets or sets replacement start date. */
  replacementStartDate?: Date;
  /** Gets or sets sunset date for the device. */
  sunsetDate?: Date;
}


/**
* This class stores information of devices that need replacement. This information
* is coming from MyAdmin.
*/
export interface IReplacementDeviceDetails
{
  /** Gets or sets Hardware Id. */
  hardwareId: number;
  /** Gets or sets Serial number of the device. */
  serialNumber: string;
}


/** Device Replacement Type coming from MyAdmin. */
export interface IReplacementTypeDetails
{
  /** Gets or sets id of the replacement type coming from MyAdmin. */
  id: number;
  /** Gets or sets name of the replacement type coming from MyAdmin. */
  name: string;
}


/** Device Recall/Replacement Information to be sent to UI. */
export interface IResultDeviceReplacementInfo
{
  /** Gets or sets details of device plan. */
  devicePlanDetails?: IDevicePlanDetails;
  /** Gets or sets Serial Number of the device. */
  deviceSerialNumber: string;
  /** Gets or sets the eligibility details of the device */
  eligibilityInfo?: IEligibility;
  /** Gets or sets details about the replacement of the device. */
  replacementInfo?: IReplacement;
}


/** The current database transfer status. */
export enum DatabaseTransferStatus { 
  /** No transfer for this database */
  None = "None", 
  /** The transfer object has been created. */
  Idle = "Idle", 
  /** A database transfer is progress for this datastore */
  InProgress = "InProgress", 
  /** The current datastore has a transfer already in progress */
  AlreadyInProgress = "AlreadyInProgress", 
  /** The maximum allowed transfers per server has been reached */
  LimitExceeded = "LimitExceeded"
}


/** Information related to a database export. */
export interface IDatabaseExportInfo extends IDatabaseTransferInfo
{
  /** Gets or sets the name of the exported file. */
  fileName: string;
}


/** Information related to a database transfer. */
export interface IDatabaseTransferInfo
{
  /** Gets the database. */
  databaseName: string;
  /** Gets or sets details about the current state. */
  details: string;
  /** Gets or sets the current status of the move. */
  status: DatabaseTransferStatus;
}


/** Represents the current type of the charge. */
export enum ChargeType { 
  /** Alternating Current. */
  AC = "AC", 
  /** Direct Current. */
  DC = "DC", 
  /** Charge type is unknown. */
  Unknown = "Unknown"
}


/** The charging state as reported by the device. */
export enum DeviceReportedChargingState { 
  /** The vehicle is not charging. */
  NotCharging = "NotCharging", 
  /** The vehicle is charging using alternating current. */
  ACCharging = "ACCharging", 
  /** The vehicle is charging using direct current. */
  DCCharging = "DCCharging", 
  /** The vehicle is charging but it is unknown how it is charging. */
  ChargingUnknownSource = "ChargingUnknownSource"
}


/** Record of a charge event */
export interface IChargeEvent extends IEntityWithVersion
{
  /** Gets or sets a value indicating whether the charge values were estimated. */
  chargeIsEstimated?: boolean;
  /** Gets or sets the charging type provided by the external power source. */
  chargeType?: ChargeType;
  /** Gets or sets the device which created the charge event. */
  device: IDevice;
  /** Gets or sets the length of time the vehicle was charging in seconds. */
  duration?: Date;
  /** Gets or sets the distance traveled since the previous charge event. */
  electricDistanceSinceLastChargeKm?: number;
  /** Gets or sets the ending state of charge for this charge event. */
  endStateOfCharge?: number;
  /** Gets or sets the energy consumed during the charge event. */
  energyConsumedKwh?: number;
  /** Gets or sets the amount of energy drawn from the battery since the last charge event. */
  energyUsedSinceLastChargeKwh?: number;
  /** Gets or sets the location where the charge event occurred. */
  location: any;
  /** Gets or sets the maximum AC Voltage over the charge event. */
  maxACVoltage?: number;
  /** Gets or sets the peak power used during the charge event. */
  peakPowerKw?: number;
  /** Gets or sets the starting state of charge for this charge event. */
  startStateOfCharge?: number;
  /** Gets or sets the time the charge event started. */
  startTime?: Date;
  /** Gets or sets the time of the from the trip this charge event occurred in. */
  tripStop?: Date;
}


/** The object used to specify the arguments when searching for a {@link IChargeEvent}. */
export interface IChargeEventSearch extends ISearch
{
  /**
  * Gets or sets the device search criteria for the ChargeEvent with this {@link DeviceSearch}
  * Id. Available DeviceSearch options are:. IdGroupsGroupListSearch
  */
  deviceSearch: IDeviceSearch;
  /**
  * Gets or sets the from date, which is used to search for ChargeEvent(s) recorded
  * on or after this date.
  */
  fromDate?: Date;
  /**
  * Gets or sets the id, which is used to search for a Event record. Id cannot be used
  * with any other search properties.
  */
  id: string;
  /**
  * Gets or sets the to date, which is used to search for ChargeEvent(s) recorded on
  * or before this date.
  */
  toDate?: Date;
}


/** Contains the vehicle's status data pertaining to charging */
export interface IVehicleChargingData
{
  /** Gets or sets alternating current voltage data. */
  acVoltageData: IStatusData[];
  /** Gets or sets the power going into the battery in the form of DC (W). */
  batteryPowerInChargingData: IStatusData[];
  /** Gets or sets the total energy going into the battery while driving. */
  batteryTotalDrivingEnergyInData: IStatusData[];
  /** Gets or sets the total energy coming out of the battery while driving. */
  batteryTotalDrivingEnergyOutData: IStatusData[];
  /** Gets or sets the fuel consumption data for a vehicle. */
  fuelConsumptionData: IStatusData[];
  /** Gets or sets on board charger power data from an AC charger. */
  onBoardChargerPowerACInData: IStatusData[];
  /** Gets or sets power coming out of the on-board charger in the form of DC (W). */
  onBoardChargerPowerDCOutData: IStatusData[];
  /** Gets or sets state of charge (SOC) data. */
  socData: IStatusData[];
  /** Gets or sets the energy going into the battery from the on-board charger (kWh). */
  totalLifetimeBatteryEnergyInACChargingData: IStatusData[];
  /** Gets or sets the energy going into the battery from a DC fast charger (kWh). */
  totalLifetimeBatteryEnergyInDCChargingData: IStatusData[];
  /** Gets or sets total lifetime on board charger energy in data during ac charging. */
  totalLifetimeOnBoardChargerEnergyACInData: IStatusData[];
  /**
  * Gets or sets the total energy coming out of the on-board charger in the form of
  * DC (kWh)
  */
  totalLifetimeOnBoardChargerEnergyDCInData: IStatusData[];
  /** Gets or sets the trips. This is used to calculate distance data. */
  tripsData: ITrip[];
}


/** The exception that is thrown when no suitable conversion strategy could be determined. */
export interface IConversionStrategyNotFoundException
{
}


/**  Performs automatic unit conversion depending on the constructor-supplied criteria. */
export interface IUnitConverter
{
}


/** Implementation of which converts electricity from A to mA. */
export interface IAmpsToMilliampsConversionStrategy extends IBaseConversionStrategy
{
}


/**
* Base implementation of which converts measurements units using basic value multiplied
* by conversion factor.
*/
export interface IBaseConversionStrategy
{
  /** Gets the amount to multiply a value by to convert to another unit of measure. */
  conversionFactor: number;
  /** Gets signifies which unit of measure the converted value now references. */
  unitOfMeasure: IUnitOfMeasure;
}


/** Implementation of which converts Bytes to bits. */
export interface IBytesToBitsConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts Bytes to GB. */
export interface IBytesToGigabytesConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts Bytes to KB. */
export interface IBytesToKilobytesConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts Bytes to MB. */
export interface IBytesToMegabytesConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts Bytes to TB. */
export interface IBytesToTerabytesConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts temperature from Celsius to Fahrenheit degrees. */
export interface ICelsiusToFahrenheitConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts temperature from Celsius to Kelvin degrees. */
export interface ICelsiusToKelvinConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts length from cm to inches. */
export interface ICentimetersToInchesConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts length from cm to km. */
export interface ICentimetersToKilometersConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts length from cm to m. */
export interface ICentimetersToMetersConversionStrategy extends IBaseConversionStrategy
{
  /**
  * @inheritdoc
  */
  unitOfMeasure: IUnitOfMeasure;
}


/** Implementation of which converts length from cm to mm. */
export interface ICentimetersToMillimetersConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts length from cm to yards. */
export interface ICentimetersToYardsConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts cm^3/min to inches^3/min. */
export interface ICubicCentimetersPerMinuteToCubicInchesPerMinuteConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts ft^3/s to m^3/s. */
export interface ICubicFeetPerSecondToCubicMetersPerSecondConversionStrategy extends IBaseConversionStrategy
{
  /**
  * @inheritdoc
  */
  unitOfMeasure: IUnitOfMeasure;
}


/** Implementation of which converts inches^3/min to cm^3/min. */
export interface ICubicInchesPerMinuteToCubicCentimetersPerMinuteConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts m^3/s to ft^3/s. */
export interface ICubicMetersPerSecondToCubicFeetPerSecondConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts m^3 to ft^3. */
export interface ICubicMetersToCubicFeetConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts m^3 to inches^3. */
export interface ICubicMetersToCubicInchesConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts m^3 to gallons (Imperial). */
export interface ICubicMetersToGallonsImperialConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts m^3 to L. */
export interface ICubicMetersToLitersConversionStrategy extends IBaseConversionStrategy
{
  /**
  * @inheritdoc
  */
  unitOfMeasure: IUnitOfMeasure;
}


/** Implementation of which converts time from days to hours. */
export interface IDaysToHoursConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts time from days to minutes. */
export interface IDaysToMinutesConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts time from days to seconds. */
export interface IDaysToSecondsConversionStrategy extends IBaseConversionStrategy
{
  /** Gets which unit of measure the converted value now references. */
  unitOfMeasure: IUnitOfMeasure;
}


/** Implementation of which converts angular degrees to radians. */
export interface IDegreesToRadiansConversionStrategy extends IBaseConversionStrategy
{
  /** Gets which unit of measure the converted value now references. */
  unitOfMeasure: IUnitOfMeasure;
}


/** Implementation of which converts angular degrees to revolutions. */
export interface IDegreesToRevolutionsConversionStrategy extends IBaseConversionStrategy
{
  /** Gets which unit of measure the converted value now references. */
  unitOfMeasure: IUnitOfMeasure;
}


/** Implementation of which converts temperatures from Fahrenheit to Celsius degrees. */
export interface IFahrenheitToCelsiusConversionStrategy extends IBaseConversionStrategy
{
  /** Gets the unit of measure which the converted value now references. */
  unitOfMeasure: IUnitOfMeasure;
}


/** Implementation of which converts temperatures from Fahrenheit to Kelvin degrees. */
export interface IFahrenheitToKelvinConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts acceleration from m/s^2 to ft/s^2. */
export interface IFeetPerSecondSquaredToMetersPerSecondSquaredConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts speed from feet/sec to kilometers/hour. */
export interface IFeetPerSecondToKilometersPerHourConversionStrategy extends IBaseConversionStrategy
{
  /** Gets the unit of measure which the converted value now references. */
  unitOfMeasure: IUnitOfMeasure;
}


/** Implementation of which converts speed from feet/sec to knots. */
export interface IFeetPerSecondToKnotsConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts speed from feet/sec to meters/sec. */
export interface IFeetPerSecondToMetersPerSecondConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts speed from feet/sec to miles/hour. */
export interface IFeetPerSecondToMilesPerHourConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts from ft lbf to N m. */
export interface IFootPoundForceToNewtonMetersConversionStrategy extends IBaseConversionStrategy
{
  /** Gets the unit of measure that the converted value now references. */
  unitOfMeasure: IUnitOfMeasure;
}


/** Implementation of which converts from gallon/hr to L/hr. */
export interface IGallonsPerHourToLitersPerHourConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts frequency from GHz to Hz. */
export interface IGigahertzToHertzConversionStrategy extends IBaseConversionStrategy
{
  /**
  * @inheritdoc
  */
  unitOfMeasure: IUnitOfMeasure;
}


/** Implementation of which converts frequency from GHz to kHz. */
export interface IGigahertzToKilohertzConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts frequency from GHz to MHz. */
export interface IGigahertzToMegahertzConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts speed from g/L to ppm. */
export interface IGramsPerLiterToPartsPerMillionConversionStrategy extends IBaseConversionStrategy
{
  /**
  * @inheritdoc
  */
  unitOfMeasure: IUnitOfMeasure;
}


/** Implementation of which converts mass from g/s to lbs/s. */
export interface IGramsPerSecondToPoundsPerSecondConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts mass from g to kg. */
export interface IGramsToKilogramsConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts mass from g to mg. */
export interface IGramsToMilligramsConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts mass from g to oz. */
export interface IGramsToOuncesConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts mass from g to lbs. */
export interface IGramsToPoundsConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts mass from g to metric tonnes. */
export interface IGramsToTonnesConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts frequency from Hz to GHz. */
export interface IHertzToGigahertzConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts frequency from Hz to kHz. */
export interface IHertzToKilohertzConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts frequency from Hz to MHz. */
export interface IHertzToMegahertzConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts Hz to RPM. */
export interface IHertzToRotationsPerMinuteConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts time from hours to days. */
export interface IHoursToDaysConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts time from hours to minutes. */
export interface IHoursToMinutesConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts time from hours to seconds. */
export interface IHoursToSecondsConversionStrategy extends IBaseConversionStrategy
{
  /**
  * @inheritdoc
  */
  unitOfMeasure: IUnitOfMeasure;
}


/** Implementation of which converts pressure from Hg to kPa. */
export interface IInchesOfMercuryToKilopascalsConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts pressure from inHg to MPa. */
export interface IInchesOfMercuryToMegapascalsConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts pressure from Hg to Pa. */
export interface IInchesOfMercuryToPascalsConversionStrategy extends IBaseConversionStrategy
{
  /**
  * @inheritdoc
  */
  unitOfMeasure: IUnitOfMeasure;
}


/** Implementation of which converts pressure from inH2O to kPa. */
export interface IInchesOfWaterToKilopascalsConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts pressure from inH2O to MPa. */
export interface IInchesOfWaterToMegapascalsConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts pressure from inH2O to Pa. */
export interface IInchesOfWaterToPascalsConversionStrategy extends IBaseConversionStrategy
{
  /**
  * @inheritdoc
  */
  unitOfMeasure: IUnitOfMeasure;
}


/** Implementation of which converts temperatures from Kelvin to Celsius degrees. */
export interface IKelvinToCelsiusConversionStrategy extends IBaseConversionStrategy
{
  /**
  * @inheritdoc
  */
  unitOfMeasure: IUnitOfMeasure;
}


/** Implementation of which converts temperature from Kelvin to Fahrenheit degrees. */
export interface IKelvinToFahrenheitConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts mass from kg/hr to lbs/hr. */
export interface IKilogramsPerHourToPoundsPerHourConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts kg/km to lb/mi. */
export interface IKilogramsPerKilometerToPoundsPerMileConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts mass from kg/min to lbs/min. */
export interface IKilogramsPerMinuteToPoundsPerMinuteConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts mass from kg to g. */
export interface IKilogramsToGramsConversionStrategy extends IBaseConversionStrategy
{
  /**
  * @inheritdoc
  */
  unitOfMeasure: IUnitOfMeasure;
}


/** Implementation of which converts mass from kg to mg. */
export interface IKilogramsToMilligramsConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts mass from kg to oz. */
export interface IKilogramsToOuncesConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts mass from kg to lbs. */
export interface IKilogramsToPoundsConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts mass from kg to metric tonnes. */
export interface IKilogramsToTonnesConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts frequency from kHz to GHz. */
export interface IKilohertzToGigahertzConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts frequency from kHz to Hz. */
export interface IKilohertzToHertzConversionStrategy extends IBaseConversionStrategy
{
  /**
  * @inheritdoc
  */
  unitOfMeasure: IUnitOfMeasure;
}


/** Implementation of which converts frequency from kHz to MHz. */
export interface IKilohertzToMegahertzConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts velocity from mph/s to kph/s. */
export interface IKilometersPerHourPerSecondToMilesPerHourPerSecondConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts speed from kilometers/hour to feet/sec. */
export interface IKilometersPerHourToFeetPerSecondConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts speed from kilometers/hour to knots. */
export interface IKilometersPerHourToKnotsConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts speed from kilometers/hour to meters/sec. */
export interface IKilometersPerHourToMetersPerSecondConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts speed from kilometers/hour to mph. */
export interface IKilometersPerHourToMilesPerHourConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts km/kg to miles/lb. */
export interface IKilometersPerKilogramToMilesPerPoundConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts fuel consumption from km/L to L/100 km. */
export interface IKilometersPerLiterToLitersPer100KilometersConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts fuel consumption from km/liter to MPG (Imperial). */
export interface IKilometersPerLiterToMilesPerGallonImperialConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts fuel consumption from km/liter to MPG (US). */
export interface IKilometersPerLiterToMilesPerGallonUsConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts km/min to miles/min. */
export interface IKilometersPerMinuteToMilesPerMinuteConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts length from km to cm. */
export interface IKilometersToCentimetersConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts length from km to feet. */
export interface IKilometersToFeetConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts length from km to inches. */
export interface IKilometersToInchesConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts length from km to m. */
export interface IKilometersToMetersConversionStrategy extends IBaseConversionStrategy
{
  /**
  * @inheritdoc
  */
  unitOfMeasure: IUnitOfMeasure;
}


/** Implementation of which converts distance from km to miles. */
export interface IKilometersToMilesConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts length from km to mm. */
export interface IKilometersToMillimetersConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts length from km to yards. */
export interface IKilometersToYardsConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts pressure from kPa to MPa. */
export interface IKilopascalsToMegapascalsConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts pressure from kPa to Pa. */
export interface IKilopascalsToPascalsConversionStrategy extends IBaseConversionStrategy
{
  /**
  * @inheritdoc
  */
  unitOfMeasure: IUnitOfMeasure;
}


/** Implementation of which converts pressure from kPa to psi. */
export interface IKilopascalsToPoundsPerSquareInchConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts electricity from kV to mV. */
export interface IKilovoltsToMillivoltsConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts electricity from kV to V. */
export interface IKilovoltsToVoltsConversionStrategy extends IBaseConversionStrategy
{
  /**
  * @inheritdoc
  */
  unitOfMeasure: IUnitOfMeasure;
}


/** Implementation of which converts electricity from kW to mW. */
export interface IKilowattsToMilliwattsConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts electricity from kW to W. */
export interface IKilowattsToWattsConversionStrategy extends IBaseConversionStrategy
{
  /**
  * @inheritdoc
  */
  unitOfMeasure: IUnitOfMeasure;
}


/** Implementation of which converts speed from knots to feet/sec. */
export interface IKnotsToFeetPerSecondConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts speed from knots to km/h. */
export interface IKnotsToKilometersPerHourConversionStrategy extends IBaseConversionStrategy
{
  /**
  * @inheritdoc
  */
  unitOfMeasure: IUnitOfMeasure;
}


/** Implementation of which converts speed from knots to meters/sec. */
export interface IKnotsToMetersPerSecondConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts speed from knots to miles/hour. */
export interface IKnotsToMilesPerHourConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts fuel consumption from L/100 km to km/liter. */
export interface ILitersPer100KilometersToKilometersPerLiterConversionStrategy extends IBaseConversionStrategy
{
  /**
  * @inheritdoc
  */
  unitOfMeasure: IUnitOfMeasure;
}


/** Implementation of which converts fuel consumption from L/100 km to MPG (Imperial). */
export interface ILitersPer100KilometersToMilesPerGallonImperialConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts fuel consumption from L/100 km to MPG (US). */
export interface ILitersPer100KilometersToMilesPerGallonUsConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts from liter/hr to gallon/hr. */
export interface ILitersPerHourToGallonsPerHourConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts material consumption from L/km to gal/mi. */
export interface ILitersPerKilometerToGallonsUsPerMileConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts L/Tonne to gallons (US)/Short Ton. */
export interface ILitersPerTonneToGallonsUsPerShortTonConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts L to m^3. */
export interface ILitersToCubicMetersConversionStrategy extends IBaseConversionStrategy
{
  /** Gets which unit of measure the converted value now references. */
  unitOfMeasure: IUnitOfMeasure;
}


/** Implementation of which converts L to gallons (Imperial). */
export interface ILitersToGallonsImperialConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts L to gallons (US). */
export interface ILitersToGallonsUsConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts L to mL. */
export interface ILitersToMillilitersConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts frequency from MHz to GHz. */
export interface IMegahertzToGigahertzConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts frequency from MHz to Hz. */
export interface IMegahertzToHertzConversionStrategy extends IBaseConversionStrategy
{
  /** Gets which unit of measure the converted value now references. */
  unitOfMeasure: IUnitOfMeasure;
}


/** Implementation of which converts frequency from MHz to kHz. */
export interface IMegahertzToKilohertzConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts pressure from MPa to inHg. */
export interface IMegapascalsToInchesOfMercuryConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts pressure from MPa to inH2O. */
export interface IMegapascalsToInchesOfWaterConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts pressure from MPa to kPa. */
export interface IMegapascalsToKilopascalsConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts pressure from MPa to Pa. */
export interface IMegapascalsToPascalsConversionStrategy extends IBaseConversionStrategy
{
  /** Gets which unit of measure the converted value now references. */
  unitOfMeasure: IUnitOfMeasure;
}


/** Implementation of which converts pressure from MPa to psi. */
export interface IMegapascalsToPoundsPerSquareInchConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts acceleration from m/s^2 to ft/s^2. */
export interface IMetersPerSecondSquaredToFeetPerSecondSquaredConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts speed from m/s to feet/sec. */
export interface IMetersPerSecondToFeetPerSecondConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts speed from m/s to km/h. */
export interface IMetersPerSecondToKilometersPerHourConversionStrategy extends IBaseConversionStrategy
{
  /** Gets which unit of measure the converted value now references. */
  unitOfMeasure: IUnitOfMeasure;
}


/** Implementation of which converts speed from m/s to knots. */
export interface IMetersPerSecondToKnotsConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts speed from m/s to miles/hour. */
export interface IMetersPerSecondToMilesPerHourConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts distance from m to cm. */
export interface IMetersToCentimetersConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts distance from m to feet. */
export interface IMetersToFeetConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts distance from m to inches. */
export interface IMetersToInchesConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts distance from m to km. */
export interface IMetersToKilometersConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts distance from m to mm. */
export interface IMetersToMillimetersConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts distance from m to yards. */
export interface IMetersToYardsConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts fuel consumption from MPG (US) to km/L. */
export interface IMilesPerGallonUsToKilometersPerLiterConversionStrategy extends IBaseConversionStrategy
{
  /** Gets which unit of measure the converted value now references. */
  unitOfMeasure: IUnitOfMeasure;
}


/** Implementation of which converts fuel consumption from MPG (US) to L/100 km. */
export interface IMilesPerGallonUsToLitersPer100KilometersConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts fuel consumption from MPG (US) to MPG (Imperial). */
export interface IMilesPerGallonUsToMilesPerGallonImperialConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts velocity from mph/s to kph/s. */
export interface IMilesPerHourPerSecondToKilometersPerHourPerSecondConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts speed from miles/hour to feet/sec. */
export interface IMilesPerHourToFeetPerSecondConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts speed from miles/hour to km/h. */
export interface IMilesPerHourToKilometersPerHourConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts speed from miles/hour to knots. */
export interface IMilesPerHourToKnotsConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts speed from miles/hour to m/sec. */
export interface IMilesPerHourToMetersPerSecondConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts distance from miles to km. */
export interface IMilesToKilometersConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts electricity from mA to A. */
export interface IMilliampsToAmpsConversionStrategy extends IBaseConversionStrategy
{
  /** Gets which unit of measure the converted value now references. */
  unitOfMeasure: IUnitOfMeasure;
}


/** Implementation of which converts mass from mg to g. */
export interface IMilligramsToGramsConversionStrategy extends IBaseConversionStrategy
{
  /** Gets which unit of measure the converted value now references. */
  unitOfMeasure: IUnitOfMeasure;
}


/** Implementation of which converts mass from mg to kg. */
export interface IMilligramsToKilogramsConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts mass from mg to oz. */
export interface IMilligramsToOuncesConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts mass from mg to lbs. */
export interface IMilligramsToPoundsConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts mass from mg to metric tonnes. */
export interface IMilligramsToTonnesConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts distance from mm to cm. */
export interface IMillimetersToCentimetersConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts distance from mm to feet. */
export interface IMillimetersToFeetConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts distance from mm to inches. */
export interface IMillimetersToInchesConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts distance from mm to km. */
export interface IMillimetersToKilometersConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts distance from mm to m. */
export interface IMillimetersToMetersConversionStrategy extends IBaseConversionStrategy
{
  /** Gets which unit of measure the converted value now references. */
  unitOfMeasure: IUnitOfMeasure;
}


/** Implementation of which converts resistance from milli ohms to Ohms. */
export interface IMilliohmsToOhmsConversionStrategy extends IBaseConversionStrategy
{
  /** Gets which unit of measure the converted value now references. */
  unitOfMeasure: IUnitOfMeasure;
}


/** Implementation of which converts electricity from mV to kV. */
export interface IMillivoltsToKilovoltsConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts electricity from mV to V. */
export interface IMillivoltsToVoltsConversionStrategy extends IBaseConversionStrategy
{
  /** Gets which unit of measure the converted value now references. */
  unitOfMeasure: IUnitOfMeasure;
}


/** Implementation of which converts electricity from mW to kW. */
export interface IMilliwattsToKilowattsConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts electricity from mW to W. */
export interface IMilliwattsToWattsConversionStrategy extends IBaseConversionStrategy
{
  /** Gets which unit of measure the converted value now references. */
  unitOfMeasure: IUnitOfMeasure;
}


/** Implementation of which converts time from minutes to days. */
export interface IMinutesToDaysConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts time from minutes to hours. */
export interface IMinutesToHoursConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts time from minutes to milliseconds. */
export interface IMinutesToMillisecondsConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts time from minutes to seconds. */
export interface IMinutesToSecondsConversionStrategy extends IBaseConversionStrategy
{
  /** Gets which unit of measure the converted value now references. */
  unitOfMeasure: IUnitOfMeasure;
}


/** Implementation of which converts force from Nm to ft lbf. */
export interface INewtonMetersToFootPoundForceConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts force from N to lbf. */
export interface INewtonsToPoundsOfForceConversionStrategy extends IBaseConversionStrategy
{
}


/** Placeholder conversion strategy which does not alter the values. */
export interface INoConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts resistance from ohms to milli ohms. */
export interface IOhmsToMilliohmsConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts speed from ppm to g/L. */
export interface IPartsPerMillionToGramsPerLiterConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts pressure from Pa to inHg. */
export interface IPascalsToInchesOfMercuryConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts pressure from Pa to inH2O. */
export interface IPascalsToInchesOfWaterConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts pressure from Pa to kPa. */
export interface IPascalsToKilopascalsConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts pressure from Pa to MPa. */
export interface IPascalsToMegapascalsConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts pressure from Pa to psi. */
export interface IPascalsToPoundsPerSquareInchConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts force from lbf to N. */
export interface IPoundsOfForceToNewtonsConversionStrategy extends IBaseConversionStrategy
{
  /** Gets which unit of measure the converted value now references. */
  unitOfMeasure: IUnitOfMeasure;
}


/** Implementation of which converts pressure from psi to inHg. */
export interface IPoundsPerSquareInchToInchesOfMercuryConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts pressure from psi to inH2O. */
export interface IPoundsPerSquareInchToInchesOfWaterConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts pressure from psi to kPa. */
export interface IPoundsPerSquareInchToKilopascalsConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts pressure from psi to MPa. */
export interface IPoundsPerSquareInchToMegapascalsConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts pressure from psi to Pa. */
export interface IPoundsPerSquareInchToPascalsConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts pulses/km to pulses/mile. */
export interface IPulsesPerKilometerToPulsesPerMileConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts pulses/mile to pulses/km. */
export interface IPulsesPerMileToPulsesPerKilometerConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts radians to angular degrees. */
export interface IRadiansToDegreesConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts radians to revolutions. */
export interface IRadiansToRevolutionsConversionStrategy extends IBaseConversionStrategy
{
  /** Gets which unit of measure the converted value now references. */
  unitOfMeasure: IUnitOfMeasure;
}


/** Implementation of which converts revolutions to degrees. */
export interface IRevolutionsToDegreesConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts revolutions to radians. */
export interface IRevolutionsToRadiansConversionStrategy extends IBaseConversionStrategy
{
  /** Gets which unit of measure the converted value now references. */
  unitOfMeasure: IUnitOfMeasure;
}


/** Implementation of {@link IIConversionStrategy} which converts RPM to Hz. */
export interface IRotationsPerMinuteToHertzConversionStrategy extends IBaseConversionStrategy
{
  /** Gets which unit of measure the converted value now references. */
  unitOfMeasure: IUnitOfMeasure;
}


/** Implementation of which converts time from seconds to days. */
export interface ISecondsToDaysConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts time from seconds to hours. */
export interface ISecondsToHoursConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts time from seconds to milliseconds. */
export interface ISecondsToMillisecondsConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts time from seconds to minutes. */
export interface ISecondsToMinutesConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts mass from metric tonnes to g. */
export interface ITonnesToGramsConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts mass from metric tonnes to kg. */
export interface ITonnesToKilogramsConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts mass from metric tonnes to mg. */
export interface ITonnesToMilligramsConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts mass from metric tonnes to oz. */
export interface ITonnesToOuncesConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts mass from metric tonnes to lbs. */
export interface ITonnesToPoundsConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts weight from Tonnes to Short Tons (US). */
export interface ITonnesToShortTonsConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts electricity from V to kV. */
export interface IVoltsToKilovoltsConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts electricity from V to mV. */
export interface IVoltsToMillivoltsConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts electricity from W to kW. */
export interface IWattsToKilowattsConversionStrategy extends IBaseConversionStrategy
{
}


/** Implementation of which converts electricity from W to mW. */
export interface IWattsToMilliwattsConversionStrategy extends IBaseConversionStrategy
{
}


/** The object model for devices stored on the OEM Registry. */
export interface IOemDevice
{
  /** Gets or sets the device id. */
  id?: number;
  /** Gets or sets the Oem Identifier. */
  oemIdentifier?: string;
  /** Gets or sets the device serial number. */
  serialNo?: string;
  /**
  * Gets or sets the enrolment status. NOTE: This is an enum in the OEM Middleware,
  * but since we are just treating it as a passthrough and don't actually modify the
  * value, we can leave it as an int.
  */
  status: number;
  /** Gets or sets the sub plan. */
  subPlan?: string;
  /** Gets or sets the device vin. */
  vin?: string;
}


/** A geographic area defined by the top-left and bottom-right coordinates. */
export interface IBoundingBox
{
  /**
  * Gets or sets the bottom latitude. Minimum value [-90]. Maximum value [90]. Default
  * [0].
  */
  bottom: number;
  /**
  * Gets or sets the left longitude. Minimum value [-180]. Maximum value [180]. Default
  * [0].
  */
  left: number;
  /**
  * Gets or sets the right longitude. Minimum value [-180]. Maximum value [180]. Default
  * [0].
  */
  right: number;
  /**
  * Gets or sets the top latitude. Minimum value [-90]. Maximum value [90]. Default
  * [0].
  */
  top: number;
}


/** A sequential set of {@link IStep}s that make up directions. */
export interface IDirections
{
  /** Gets or sets the sequence of {@link ILeg}s for these Directions. */
  legs: ILeg[];
}


/** A single leg of {@link IWaypoint}s. */
export interface ILeg
{
  /** Gets or sets the destination {@link IWaypoint} of this leg. */
  destination: IWaypoint;
  /** Gets or sets the distance estimate for this leg in kilometers. */
  distance: number;
  /** Gets or sets the travel time duration estimate for this leg. */
  duration: Date;
  /** Gets or sets the origin {@link IWaypoint} of this leg. */
  origin: IWaypoint;
  /** Gets or sets the ordered sequence of this leg. */
  sequence: number;
  /**
  * Gets or sets the steps denoting information about each separate {@link IStep} of
  * the leg.
  */
  steps: IStep[];
}


/** A single step in a sequence of step-by-step instructions to complete {@link IDirections}. */
export interface IStep
{
  /** Gets or sets the distance estimate in kilometers for this step. */
  distance: number;
  /** Gets or sets the travel time duration estimate for this step. */
  duration: Date;
  /** Gets or sets the instructions for this step. */
  instructions: string;
  /** Gets or sets the ordered sequence of this step. */
  sequence: number;
}


/** A set of coordinates that reference a location. */
export interface IWaypoint
{
  /** Gets or sets the {@link ICoordinate}. */
  coordinate: ICoordinate;
  /** Gets or sets the waypoint description. */
  description: string;
  /** Gets or sets the sequence number. */
  sequence: number;
}


/**
*  Contains the DisplayMeasurementProfile for conversion information for each profile.
*
* @deprecated
*/
export interface IDisplayMeasurementProfile extends INameEntityWithVersion
{
  /**
  * Gets or sets the {@link IDisplayMeasurementProfileDetailsHelper} associated with
  * the profile.
  */
  displayMeasurementProfileDetails: IDisplayMeasurementProfileDetailsHelper;
  /** Gets or sets the Identifier of the parent profile. */
  parentId?: string;
}


/**
*  Class to track a single DisplayUnitOfMeasure for a given DisplayMeasurementProfile.
*
* @deprecated
*/
export interface IDisplayMeasurementProfileDetail extends IEntityWithVersion
{
  /** Gets or Sets the Identifier of the related Diagnostic. */
  diagnosticId: string;
  /** Gets or sets the matched to the base diagnostic {@link IId} for the profile. */
  displayUnitOfMeasure: IDisplayUnitOfMeasure;
  /** Gets or sets the Identifier of the related profile. */
  profileId: string;
}


/**
* The object used to specify the arguments when searching for a . When searching for
* DisplayMeasurementDProfileDetails including DisplayMeasurementProfileSearch and
* DiagnosticSearch<br> the system will return all records that match the search criteria.<br>
* This search has been designed to work efficiently with these combinations of parameters:IdDisplayMeasurementProfileSearch
* + DiagnosticSearch
*/
export interface IDisplayMeasurementProfileDetailSearch extends ISearch
{
  /**
  * Gets or sets search for DisplayProfileDetail with this {@link IDiagnosticSearch}
  * Id. Available DiagnosticSearch options are: Id
  */
  diagnosticSearch?: IDiagnosticSearch;
  /**
  * Gets or sets search for DisplayProfileDetail with this {@link IDisplayMeasurementProfileSearch}
  * Id. Available DisplayMeasurementProfileSearch options are: Id
  */
  displayMeasurementProfileSearch?: IDisplayMeasurementProfileSearch;
}


/**
*  Class to track Diagnostic to DisplayUnitOfMeasure for a given DisplayMeasurementProfile.
*
* @deprecated
*/
export interface IDisplayMeasurementProfileDetailsHelper extends IEntity
{
  /** Gets or sets the list to lookup the relevant {@link IId}. */
  displayDetails: IDisplayMeasurementProfileDetail[];
  /** Gets the KnownIds for DisplayMeasurementProfiles. */
  knownIdLookup: string[];
  /** Gets or sets the Identifier of the related profile. */
  profileId?: string;
}


/** The object used to specify the arguments when searching for a . */
export interface IDisplayMeasurementProfileSearch extends ISearch
{
  /**
  * Gets or sets whether or not to include corresponding DisplayMeasurementProfileDetails.
  * It can only be used when the number of returned profiles is limited by id or resultsLimit.
  */
  includeDetails?: boolean;
}


/**
*  Contains the conversion between the base UnitOfMeasure to the DisplayUnitOfMeasure.
*
* @deprecated
*/
export interface IDisplayUnitOfMeasure extends INameEntityWithVersion
{
  /** Gets or sets the Identifier of the base unit of measure. */
  baseId: string;
  /** Gets or sets the conversion factor from base units to the current unit. */
  factorFromBase: number;
  /**
  * Gets or sets a value indicating whether gets or sets whether or not an inversion
  * operation is performed on unit conversion.
  */
  inversionOperation: boolean;
  /** Gets or sets the offset to convert from base unit to current unit. */
  offsetFromBase: number;
}


/** The object used to specify the arguments when searching for a . */
export interface IDisplayUnitOfMeasureSearch extends ISearch
{
}


/**
*  Contains the link between User and DisplayMeasurementProfile.
*
* @deprecated
*/
export interface IUserDisplayProfile extends IEntity
{
  /** Gets or sets the profile Id. */
  profileId?: string;
  /** Gets or sets the user Id. */
  userId?: string;
}


/** The object used to specify the arguments when searching for a . */
export interface IUserDisplayProfileSearch extends ISearch
{
  /** Gets or sets the user. */
  user?: IUser;
}


/** Binary Message for Go Device. */
export interface IBinaryMessage extends IEntity
{
  /** Gets the delivered. */
  delivered?: Date;
  /** Gets or sets the device. */
  device: IDevice;
  /** Gets or sets a value indicating whether sets the direction to vehicle. */
  directionToVehicle: boolean;
  /** Gets the expire. */
  expire?: Date;
  /** Gets or sets the life span. */
  lifeSpan: Date;
  /** Gets or sets a value indicating whether sets the mark as delivered. */
  markAsDelivered: boolean;
  /** Gets or sets the payload. */
  payload: any;
  /** Gets the sent. */
  sent?: Date;
}


/** The xml payload used for live messaging. */
export interface IXmlBinaryPayload
{
  /** Gets or sets the encoded string. */
  encodedString: string;
  /** Gets or sets a the raw binary message. */
  payload: number[];
}


/** The answer to a CAPTCHA. */
export interface ICaptchaAnswer
{
  /** Gets or sets the answer to the CAPTCHA. */
  answer: string;
  /** Gets or sets the globally unique identifier of the CAPTCHA. */
  id: any;
}


/** A CAPTCHA error occurred. */
export interface ICaptchaException
{
}


/** Represents populated MyGeotab addin. */
export interface IAddin
{
  /**
  * Gets or sets a value indicating whether addin is going to setup the securityIds
  * for viewing support.
  */
  enableViewSecurityId: boolean;
  /** Gets or sets the add-in files. */
  files: any;
  /** Gets or sets if the install callback URL. */
  installCallbackUrl: string;
  /** Gets or sets a value indicating whether the add-in is signed. */
  isSigned: boolean;
  /** Gets or sets the add-in items. */
  items: any[];
  /** Gets or sets the add-in key. */
  key: string;
  /** Gets or sets addi-n name. */
  name: string;
  /**
  * Gets or sets a value indicating whether addin is executed upon log out within the
  * Drive App
  */
  onShutdown: boolean;
  /**
  * Gets or sets a value indicating whether addin is executed initially on start up
  * within the Drive App
  */
  onStartup: boolean;
  /** Gets or sets addin SecurityIds */
  securityIds: ICustomSecurityIdDefinition[];
  /** Gets or sets the add-in signature. */
  signature: string;
  /** Gets or sets add-in ID. */
  solutionId: string;
  /** Gets or sets the support email. */
  supportEmail: string;
  /** Gets or sets if the add-in uninstall callback URL. */
  uninstallCallbackUrl: string;
  /** Gets or sets the add-in version. */
  version: string;
}


/** Represents reference to app store addin. */
export interface IAddinReference
{
  /** Gets or sets addin reference URL pointing to app store. */
  url: string;
}


/** Converts AddIn manifests to and from JSON. */
export interface IAddinSerializer
{
}


/** the CustomSecurityIdDefinition */
export interface ICustomSecurityIdDefinition
{
  /** Gets or sets the English translation of the CustomSecurityIdDefinition */
  en: string;
  /** Gets or sets the name of the CustomSecurityIdDefinition */
  name: string;
}
