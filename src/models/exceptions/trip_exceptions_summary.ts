/* eslint-disable @typescript-eslint/no-empty-interface */
import { IExceptionsSummary } from '../exceptions/exceptions_summary';

/**
 *  The trip exceptions summary class.
 *
 * @deprecated
 */
export interface ITripExceptionsSummary extends IExceptionsSummary {
  /** Gets the Start Utc for the trip. */
  tripId: string;
}
