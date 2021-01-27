/* eslint-disable @typescript-eslint/no-empty-interface */
import { IReplacementDetails } from '../../../../geotab/checkmate/object_model/device_replacement/i_replacement_details';
import { IReplacementDeviceDetails } from '../../../../geotab/checkmate/object_model/device_replacement/i_replacement_device_details';



/** MyAdmin Device Recall/Replacement Info. */
export interface IDeviceReplacementInfo
{
  /** Gets or sets details of the device that need replacement. */
  device?: IReplacementDeviceDetails;
  /** Gets or sets device plan contract length of the device. */
  devicePlanContractLengthDays: number;
  /** Gets or sets details about the replacement of the device. */
  deviceReplacement?: IReplacementDetails;
  /** Gets or sets end date of eligibility of the device. */
  eligibleEndDate?: Date;
  /** Gets or sets start date of eligibility of the device. */
  eligibleStartDate?: Date;
  /** Gets or sets ERP product name of the device. */
  erpProductNameParam: string;
  /** Gets or sets feed version of the device. */
  feedVersion: string;
  /** Gets or sets a value indicating whether its Owner or not. */
  isOwner: boolean;
  /** Gets or sets device replacement completion date. */
  replacementCompletedDate?: Date;
  /** Gets or sets device replacement creation date. */
  replacementCreationDate?: Date;
  /** Gets or sets device replacement request initiation date. */
  replacementRequestInitiationDate?: Date;
}
