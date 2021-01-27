/* eslint-disable @typescript-eslint/no-empty-interface */
import { IGenericTicket } from '../../../../geotab/checkmate/object_model/direct_support/i_generic_ticket';
import { BusinessImpact } from '../../../../geotab/checkmate/object_model/direct_support/business_impact';



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
