/* eslint-disable @typescript-eslint/no-empty-interface */
import { IDevice } from './device';
import { ILogRecord } from './log_record';
import { IRoute } from './route';

/** Represents a route matched to a device's driving activity. */
export interface IRouteMatch {
  /** Gets the {@link IDevice} that was matched. */
  device: IDevice;
  /** Gets the duration. */
  duration?: number;
  /** Gets the end date. */
  endDate?: Date;
  /** Gets or sets the {@link ILogRecord}s of the route. */
  logRecords: ILogRecord[];
  /** Gets or sets the probability of a match. */
  probability?: number;
  /** Gets or sets the {@link IRoute} that is matched. */
  route: IRoute;
  /** Gets the start date. */
  startDate?: Date;
}
