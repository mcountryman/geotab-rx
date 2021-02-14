/* eslint-disable @typescript-eslint/no-empty-interface */
import { IDevice } from "../device";
import { IDriver } from "../driver";

/**
 * Base class for all Exceptions.
 *
 * @deprecated
 */
export interface IExceptionInstance {
  /** Gets the date of this exception instance. */
  dateTime?: Date;
  /** Gets the {@link IDevice} of the {@link IExceptionInstance}. */
  device: IDevice;
  /** Gets the Driver" /&gt; of the {@link ExceptionInstance} . */
  driver: IDriver;
}
