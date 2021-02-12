/* eslint-disable @typescript-eslint/no-empty-interface */
import { Error } from '../lock/error';

/**
 *  Defines the result of process locking for .
 *
 * @deprecated
 */
export interface IResult {
  /** Gets or sets time value. */
  dateTime?: Date;
  /** Gets or sets the error value. */
  error?: Error;
}
