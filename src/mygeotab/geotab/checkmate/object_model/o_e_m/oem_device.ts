/* eslint-disable @typescript-eslint/no-empty-interface */


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
