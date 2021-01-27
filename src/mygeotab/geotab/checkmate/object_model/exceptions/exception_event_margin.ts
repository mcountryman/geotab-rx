/* eslint-disable @typescript-eslint/no-empty-interface */
import { IExceptionEvent } from '../../../../geotab/checkmate/object_model/exceptions/i_exception_event';
import { IDevice } from '../../../../geotab/checkmate/object_model/i_device';
import { IDriver } from '../../../../geotab/checkmate/object_model/i_driver';



/** Base class for all Exceptions. */
export interface IExceptionEventMargin
{
  /** Gets the date. */
  dateTime?: Date;
  /** Gets the {@link IDevice}. */
  device: IDevice;
  /** Gets the {@link IDriver} of the {@link IExceptionInstance} . */
  driver: IDriver;
  /** Gets the {@link IExceptionEvent} of this instance. */
  exceptionEvent: IExceptionEvent;
}
