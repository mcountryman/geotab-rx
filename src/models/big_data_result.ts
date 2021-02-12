/* eslint-disable @typescript-eslint/no-empty-interface */
import { IBigDataApiResult } from './big_data_api_result';
import { IBigDataError } from './big_data_error';

/** The big data result. */
export interface IBigDataResult<T> {
  /** Gets or sets the big data result, including errors and toVersion. */
  apiResult?: IBigDataApiResult<T>;
  /** Gets or sets the big data errors. */
  errors?: IBigDataError[];
}
