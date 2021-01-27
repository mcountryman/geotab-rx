/* eslint-disable @typescript-eslint/no-empty-interface */


/** Device plan details to be sent to UI. */
export interface IDevicePlanDetails
{
  /** Gets or sets device plan contract length of the device. */
  devicePlanContractLengthDays: number;
  /** Gets or sets ERP product name of the device. */
  erpProductNameParam: string;
  /** Gets or sets a value indicating whether to ignore warranty or not. */
  ignoreWarranty: boolean;
}
