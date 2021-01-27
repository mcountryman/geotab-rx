/* eslint-disable @typescript-eslint/no-empty-interface */


/**
* This class contains helper methods related to encoding and parsing device serial
* numbers and hardware IDs.
*/
export interface IThirdPartyHelper
{
  /** Gets the OEM device types. */
  oemDeviceTypes: number[];
  /** Gets the third-party device types. */
  thirdPartyDeviceTypes: { [key:number]: string };
  /** Gets the third-party vehicle device types. */
  thirdPartyVehicleDeviceTypes: number[];
}
