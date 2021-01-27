/* eslint-disable @typescript-eslint/no-empty-interface */
import { IRouteDevice } from '../../../geotab/checkmate/object_model/i_route_device';
import { IEmployee } from '../../../geotab/checkmate/object_model/i_employee';
import { IZone } from '../../../geotab/checkmate/object_model/i_zone';
import { IDateTimeWithTimeZone } from '../../../geotab/checkmate/object_model/i_date_time_with_time_zone';



/** A summary of vehicle activity for a given route and day. */
export interface IVehicleDayRoute extends IRouteDevice
{
  /** Gets or sets the number of customer stops over the minimum stop time threshold. */
  customerStopsOverThreshold: number;
  /** Gets or sets the number of customer stops under the minimum stop time threshold. */
  customerStopsUnderThreshold: number;
  /** Gets or sets the total duration of customer stops over the minimum stop time threshold. */
  customerTimeOverThreshold: Date;
  /** Gets or sets the total duration of customer stops under the minimum stop time threshold. */
  customerTimeUnderThreshold: Date;
  /** Gets or sets the total distance driven for the day. */
  distance: number;
  /** Gets or sets the total driving time for the day. */
  driveTime: Date;
  /** Gets the list of the matched route for the day. */
  employeeList: string;
  /** Gets or sets the list of employees associated with this route and day. */
  employees: IEmployee[];
  /** Gets or sets the first time the device departed for the day in UTC time. */
  firstDepartureTime: Date;
  /** Gets or sets the total number of stops at a home type zone. */
  homeStops: number;
  /** Gets or sets the total amount of time spent at home. */
  homeTime: Date;
  /** Gets or sets the total amount of time spent idling. */
  idleTime: Date;
  /** Gets or sets the number of jack rabbit starts (not implemented currently). */
  jackRabbitStarts: number;
  /** Gets or sets the time of the last trips arrival. */
  lastArrivalTime?: Date;
  /** Gets or sets the Last Office Stop . */
  lastOfficeStopZone?: IZone;
  /** Gets the first time the device departed for the day in device's time zone. */
  localFirstDepartureTime?: IDateTimeWithTimeZone;
  /** Gets the time of the last trips arrival in the device's time zone. */
  localLastArrivalTime?: IDateTimeWithTimeZone;
  /** Gets or sets the count or candidate {@link IRoute}. */
  matchedRouteCandidateRouteItemCount: number;
  /** Gets or sets gets the matched route zone names. */
  matchedRouteZoneNames: string;
  /** Gets or sets the number of office stops. */
  officeStops: number;
  /** Gets or sets the total duration spent at an office type zone. */
  officeTime: Date;
  /**
  * Gets the percentage of time spent speeding. The percentage is calculated against
  * the total amount of driving time.
  */
  percentageSpeeding: number;
  /** Gets or sets the number of seat belt violations for the day. */
  seatbeltViolations: number;
  /** Gets or sets the number of speeding violations for the day. */
  speedingViolations: number;
  /** Gets or sets the total amount of time spent over the speeding threshold. */
  speedingViolationTime: Date;
  /** Gets or sets gets the stops within thresholds. */
  stopsWithinThresholds: number;
  /** Gets the total stops, regardless of type. */
  totalStops: number;
  /** Gets the total time. */
  totalTime: Date;
  /** Gets or sets the number of undefined stops over the minimum stop time threshold. */
  undefinedStopsOverThreshold: number;
  /** Gets or sets the number of undefined stops under the minimum stop time threshold. */
  undefinedStopsUnderThreshold: number;
  /** Gets or sets the total duration of stops over the minimum stop time threshold. */
  undefinedStopTimeOverThreshold: Date;
  /** Gets or sets the total duration of stops under the minimum stop time threshold. */
  undefinedStopTimeUnderThreshold: Date;
}
