/* eslint-disable @typescript-eslint/no-empty-interface */

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
  CustomDriverId = "CustomDriverId",
}
