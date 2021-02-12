/* eslint-disable @typescript-eslint/no-empty-interface */

/** The type of radio connection data. */
export enum RadioConnectionType {
  /** Unknown type. */
  Unknown = 'Unknown',
  /** gps data. */
  GpsData = 'GpsData',
  /** firmware update data. */
  Firmware = 'Firmware',
  /** parameter data. */
  Parameters = 'Parameters',
  /** aiding data. */
  AidingData = 'AidingData',
  /** Third-party firmware update */
  ThirdPartyFirmware = 'ThirdPartyFirmware',
  /** 802.11 security parameter update */
  WifiConfiguration = 'WifiConfiguration',
}
