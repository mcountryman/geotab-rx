/* eslint-disable @typescript-eslint/no-empty-interface */
import { IGenericTicket } from "../direct_support/generic_ticket";
import { BusinessImpact } from "../direct_support/business_impact";

/** A training ticket. */
export interface ISupportTicket extends IGenericTicket {
  /** Gets or sets business impact. */
  businessImpact: BusinessImpact;
  /** Gets or sets Go device serial number. */
  goDeviceSN: string;
  /** Gets or sets vehicle VIN. */
  vehicleIdentificationNumber: string;
  /** Gets or sets vehicle year and model. */
  vehicleYearModel: string;
}
