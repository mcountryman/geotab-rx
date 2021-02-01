/* eslint-disable @typescript-eslint/no-empty-interface */
import { IExceptionsActivity } from "../exceptions/exceptions_activity";

/**
 *  The Exceptions summary class.
 *
 * @deprecated
 */
export interface IExceptionsSummary extends IExceptionsActivity {
  /** Gets the duration. */
  duration: Date;
  /** Gets the first {@link IExceptionEvent} instance of the {@link IRule}. */
  firstIncident?: Date;
  /** Gets the event count for the {@link IRule}. */
  incidentCount: number;
  /** Gets the last {@link IExceptionEvent} instance of the {@link IRule}. */
  lastIncident?: Date;
}
