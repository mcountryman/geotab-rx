/* eslint-disable @typescript-eslint/no-empty-interface */

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
  ZoneId = "ZoneId",
}
