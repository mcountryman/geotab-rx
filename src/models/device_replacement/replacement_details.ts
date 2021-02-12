/* eslint-disable @typescript-eslint/no-empty-interface */
import { IReplacementTypeDetails } from '../device_replacement/replacement_type_details';

/** Recall/Replacement Information coming from MyAdmin. */
export interface IReplacementDetails {
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
