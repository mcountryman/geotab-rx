/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from "../entity";
import { MonitorPredicate } from "../exceptions/monitor_predicate";
import { IExceptionEvent } from "../exceptions/exception_event";
import { IDiagnostic } from "../engine/diagnostic";

/**
 *  The metadata monitored by or generated from the {@link IExceptionEventMetadata}
 * processing.
 *
 * @deprecated
 */
export interface IExceptionEventMetadata extends IEntity {
  /** Gets or sets the recorded value of the data value parameter. */
  data?: number;
  /** Gets or sets the date and time the log was created. */
  dateTime?: Date;
  /** Gets or sets  */
  diagnostic: IDiagnostic;
  /** Gets or sets  */
  exceptionEvent: IExceptionEvent;
  /** Gets or sets the recorded value of the monitor predicate parameter. */
  monitorPredicate?: MonitorPredicate;
}
