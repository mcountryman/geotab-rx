/* eslint-disable @typescript-eslint/no-empty-interface */
import { ReplacementType } from '../../../../geotab/checkmate/object_model/device_replacement/replacement_type';



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
