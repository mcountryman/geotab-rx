/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from "./search";
import { IDeviceSearch } from "./device_search";
import { BinaryDataType } from "./binary_data_type";

/**  The object used to specify the arguments when searching for {@link IBinaryData}. */
export interface IBinaryDataSearch extends ISearch {
  /** Gets or sets search for BinaryData that has this {@link IBinaryDataType}. */
  binaryDataType?: BinaryDataType;
  /**
   * Gets or sets search for BinaryData recorded for this {@link IDeviceSearch} Id. Available
   * DeviceSearch options are:. IdGroupGroupListSearch
   */
  deviceSearch: IDeviceSearch;
  /** Gets or sets search for BinaryData records that were logged at this date or after. */
  fromDate?: Date;
  /** Gets or sets search for BinaryData records that were logged at this date or before. */
  toDate?: Date;
  /** Gets or sets the row version of the {@link IBinaryData} search criteria. */
  version?: number;
}
