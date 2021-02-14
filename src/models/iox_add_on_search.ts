/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from "./search";
import { IDeviceSearch } from "./device_search";

/**
 *  The object used to specify the arguments when searching for {@link IIoxAddOn}(s).<br>
 */
export interface IIoxAddOnSearch extends ISearch {
  /**
   * Gets or sets if true only Iox Add-Ons that are currently connected to a device will
   * be returned.
   */
  connectedOnly?: boolean;
  /**
   * Gets or sets search for Iox Add-Ons that are or have been attached to this Id. Available
   * DeviceSearch options are:. Id
   */
  deviceSearch: IDeviceSearch;
  /**
   * Gets or sets search for Iox Add-Ons of a specific type (Garmin, GoTalk etc). See
   * {@link IKnownIoxAddOnType}.
   */
  type?: number;
}
