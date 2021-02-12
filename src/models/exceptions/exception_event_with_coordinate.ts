/* eslint-disable @typescript-eslint/no-empty-interface */
import { IExceptionEvent } from '../exceptions/exception_event';
import { ICoordinate } from '../coordinate';

/**
 * This class contains the {@link IExceptionEvent} and estimated driver and coordinates
 * for the {@link IExceptionEvent}. It is used most for Engine ExceptionEvents for
 * they do not associate to Gps Data directly.
 */
export interface IExceptionEventWithCoordinate extends IExceptionEvent {
  /** Gets the coordinate. */
  coordinate: ICoordinate;
}
