/* eslint-disable @typescript-eslint/no-empty-interface */
import { IDateTimeWithTimeZone } from './date_time_with_time_zone';
import { IRoute } from './route';
import { IDevice } from './device';

/** This is a for a . */
export interface IRouteDevice {
  /** Gets or sets the . */
  device: IDevice;
  /** Gets or sets the end date. */
  endDate?: Date;
  /** Gets start Date of the route in the specific time zone. */
  localStartDate: IDateTimeWithTimeZone;
  /** Gets or sets the route. */
  route: IRoute;
  /** Gets or sets the start date. */
  startDate?: Date;
  /** Gets or sets the time zone. */
  timeZone: string;
}
