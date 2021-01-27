/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from '../../../geotab/checkmate/object_model/i_search';
import { IDeviceSearch } from '../../../geotab/checkmate/object_model/i_device_search';
import { DevicePlanMasterFlag } from '../../../geotab/checkmate/object_model/device_plan_master_flag';



/**
*  The object used to specify the arguments when searching for {@link IDeviceMasterFlag}(s).<br>
*/
export interface IDeviceMasterFlagSearch extends ISearch
{
  /** Gets or sets search for {@link IDevicePlanMasterFlag}. */
  devicePlanMasterFlag?: DevicePlanMasterFlag;
  /** Gets or sets search for {@link IDeviceSearch}. */
  deviceSearch?: IDeviceSearch;
  /** Gets or sets search for {@link IDeviceMasterFlag}s recorded at this date or after. */
  fromDate?: Date;
  /**
  * Gets or sets a value indicating whether gets or sets a value to include the first
  * {@link IFromDate} is null this has no effect.
  */
  includeFromDateOverlap: boolean;
  /** Gets or sets search for {@link IDeviceMasterFlag}s recorded at this date or before. */
  toDate?: Date;
}
