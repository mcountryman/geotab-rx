/* eslint-disable @typescript-eslint/no-empty-interface */
import { IExceptionEvent } from '../exceptions/exception_event';
import { IDevice } from '../device';
import { IDriver } from '../driver';

/** Base class for all Exceptions. */
export interface IExceptionEventMargin {
  /** Gets the date. */
  dateTime?: Date;
  /** Gets the {@link IDevice}. */
  device: IDevice;
  /** Gets the {@link IDriver} of the {@link IExceptionInstance} . */
  driver: IDriver;
  /** Gets the {@link IExceptionEvent} of this instance. */
  exceptionEvent: IExceptionEvent;
}
