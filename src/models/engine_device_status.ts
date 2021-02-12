/* eslint-disable @typescript-eslint/no-empty-interface */
import { IDeviceStatus } from './device_status';

/**
 *  An extended version of {@link IDeviceStatus} that includes a count of active {@link
 * IFaultData} and {@link IExceptionEvent}(s).
 *
 * @deprecated
 */
export interface IEngineDeviceStatus extends IDeviceStatus {
  /** Gets or sets the active fault data count. */
  activeFaultDataCount: number;
  /** Gets or sets the fault data count. */
  faultDataCount: number;
}
