/* eslint-disable @typescript-eslint/no-empty-interface */
import { IRule } from '../exceptions/rule';
import { IZone } from '../zone';
import { IDevice } from '../device';
import { IDriver } from '../driver';

/**
 *  Exception Activity.
 *
 * @deprecated
 */
export interface IExceptionsActivity {
  /** Gets or sets the device. */
  device: IDevice;
  /** Gets Distance. */
  distance?: number;
  /** Gets or sets the driver. */
  driver: IDriver;
  /** Gets the duration in ms. */
  duration: Date;
  /** Gets or sets the {@link IRule}. */
  exceptionRule: IRule;
  /** Gets or sets the stop zone. */
  stopZone: IZone;
}
