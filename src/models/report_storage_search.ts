/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from "./search";

/** The object used to specify the arguments when searching for (s). */
export interface IReportStorageSearch extends ISearch {
  /**
   * Gets or sets a value indicating whether to retrieve the {@link IReportStorage} objects
   * by descending order.
   */
  descendingOrderByRowVersion: boolean;
  /**
   * Gets or sets a value indicating whether the binary data field of the report storage
   * object should be set.
   */
  includeBinaryData: boolean;
  /** Gets or sets the max row version to retrieve a {@link IReportStorage} object for. */
  maxRowVersion?: number;
}
