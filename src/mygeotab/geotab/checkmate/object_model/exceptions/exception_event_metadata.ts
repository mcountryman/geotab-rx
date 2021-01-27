/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from '../../../../geotab/checkmate/object_model/i_entity';
import { MonitorPredicate } from '../../../../geotab/checkmate/object_model/exceptions/monitor_predicate';
import { IExceptionEvent } from '../../../../geotab/checkmate/object_model/exceptions/i_exception_event';
import { IDiagnostic } from '../../../../geotab/checkmate/object_model/engine/i_diagnostic';



/**
*  The metadata monitored by or generated from the {@link IExceptionEventMetadata}
* processing.
*
* @deprecated
*/
export interface IExceptionEventMetadata extends IEntity
{
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
