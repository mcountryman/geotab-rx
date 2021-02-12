/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntityWithVersion } from './entity_with_version';
import { IExceptionEvent } from './exceptions/exception_event';
import { IDevice } from './device';
import { IDriver } from './driver';
import { IGroup } from './group';

/**
 * Represents the current state of a vehicle by providing information such as the vehicle
 * bearing location and speed, active exception events and whether the device is currently
 * communicating.
 */
export interface IDeviceStatusInfo extends IEntityWithVersion {
  /**
   * Gets or sets the bearing (heading) in integer degrees. Valued between 0 and 359
   * inclusive. 0 represents North, 90 represents East, and so on. -1 represents unknown
   * bearing.<br>
   */
  bearing?: number;
  /**
   * Gets or sets the duration between the last Trip state change (i.e. driving or stop),
   * and the most recent date of location information.
   */
  currentStateDuration?: Date;
  /** Gets or sets the most recent date of location information. */
  dateTime?: Date;
  /** Gets or sets the {@link IDevice} this DeviceStatusInfo belongs to. */
  device: IDevice;
  /** Gets or sets the {@link IDevice}. */
  driver: IDriver;
  /** Gets or sets the {@link IExceptionEvent}(s) that are currently active. */
  exceptionEvents: IExceptionEvent[];
  /** Gets or sets the {@link IDevice} currently belongs to. */
  groups: IGroup[];
  /** Gets or sets a value indicating whether the {@link IDevice} is communicating. */
  isDeviceCommunicating: boolean;
  /**
   * Gets or sets a value indicating whether the current {@link IDevice} state. If set
   * true, is driving. Otherwise, it is stopped.
   */
  isDriving: boolean;
  /** Gets or sets a value indicating whether the {@link IDriver} is returned. */
  isHistoricLastDriver: boolean;
  /** Gets or sets the current latitude of the {@link IDevice}. */
  latitude?: number;
  /** Gets or sets the current longitude of the {@link IDevice}. */
  longitude?: number;
  /** Gets or sets the current vehicle speed. */
  speed?: number;
}
