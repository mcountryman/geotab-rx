/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBigDataError } from "./big_data_error";

/** The big data API result. */
export interface IBigDataApiResult<T> {
  /** Gets or sets the big data API errors. */
  errors?: IBigDataError[];
  /** Gets or sets the big data API results. */
  results?: T[];
  /**
   * Gets or sets the last version of the data returned by the feed call. If this parameter
   * is passed back into the feed call, then returned data will be the changes that occurred
   * after the last feed call was made. In this way the feed can return a continuous
   * stream of data.
   */
  toVersion?: string;
}
