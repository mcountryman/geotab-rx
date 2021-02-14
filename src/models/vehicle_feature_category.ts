/* eslint-disable @typescript-eslint/no-empty-interface */

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
  GeotabDriveHos = "GeotabDriveHos",
}
