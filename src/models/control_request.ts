/* eslint-disable @typescript-eslint/no-empty-interface */

/** The format of requests sent to OEM Control service. */
export interface IControlRequest {
  /** Gets or sets the payload. */
  payload: string;
  /** Gets or sets the vin. */
  vin: string;
}
