/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEligibility } from '../../../../geotab/checkmate/object_model/device_replacement/i_eligibility';
import { IReplacement } from '../../../../geotab/checkmate/object_model/device_replacement/i_replacement';
import { IDevicePlanDetails } from '../../../../geotab/checkmate/object_model/device_replacement/i_device_plan_details';



/** Device Recall/Replacement Information to be sent to UI. */
export interface IResultDeviceReplacementInfo
{
  /** Gets or sets details of device plan. */
  devicePlanDetails?: IDevicePlanDetails;
  /** Gets or sets Serial Number of the device. */
  deviceSerialNumber: string;
  /** Gets or sets the eligibility details of the device */
  eligibilityInfo?: IEligibility;
  /** Gets or sets details about the replacement of the device. */
  replacementInfo?: IReplacement;
}
