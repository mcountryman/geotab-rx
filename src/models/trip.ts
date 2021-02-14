/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from "./entity";
import { IDevice } from "./device";
import { IDriver } from "./driver";

/**
 *  This is a vehicles trip and a summary of the driving activity during that trip.
 * To get more information about stops during a trip please see {@link IExceptionEvent}.
 * A complete "trip" is defined as starting at the time in which the vehicle starts
 * and begins being driven. The trip continues after the vehicle has been stopped and
 * ends at the time the vehicle restarts and begins being driven again; which then
 * starts the next trip.
 */
export interface ITrip extends IEntity {
  /** Gets the distance the vehicle was driven after work hours (in km). */
  afterHoursDistance?: number;
  /** Gets the duration the vehicle was driven after work hours. */
  afterHoursDrivingDuration?: Date;
  /** Gets or sets whether the trip ends after hours. */
  afterHoursEnd?: boolean;
  /** Gets or sets whether the trip starts after hours. */
  afterHoursStart?: boolean;
  /** Gets the duration the vehicle was stopped after work hours. */
  afterHoursStopDuration?: Date;
  /** Gets average speed in km/h. This only includes the average speed while driving. */
  averageSpeed?: number;
  /**
   * Gets the trip date time.
   *
   * @deprecated
   */
  dateTime?: Date;
  /** Gets or sets the {@link IDevice} associated with the trip. */
  device: IDevice;
  /** Gets or sets the distance the vehicle was driven during this trip (in km). */
  distance?: number;
  /** Gets or sets the {@link IDriver} for the trip. */
  driver: IDriver;
  /** Gets or sets the duration between the start and stop of the trip. */
  drivingDuration?: Date;
  /** Gets the "From" Date. */
  from?: Date;
  /**
   * Gets or sets total end of trip idling (idling is defined as speed is 0 and ignition
   * on). It is calculated from the beginning of this trip to beginning of next trip.
   */
  idlingDuration?: Date;
  /**
   * Gets or sets Does this trip have a Seat Belt Off Incident. Not Supported/Obsolete.
   * We still have a field in the Trips table though.
   *
   * @deprecated
   */
  isSeatBeltOff?: boolean;
  /** Gets or sets the maximum speed of the vehicle during this trip (in km/h). */
  maximumSpeed?: number;
  /** Gets the start date of the next trip. */
  nextTripStart?: Date;
  /**
   * Gets or sets the number of incidents where the vehicle reached the first range of
   * speeding triggers.
   */
  speedRange1?: number;
  /**
   * Gets or sets the duration where the vehicle drove in the first range of speeding
   * triggers.
   */
  speedRange1Duration?: Date;
  /**
   * Gets or sets the number of incidents where the vehicle reached the second range
   * of speeding triggers.
   */
  speedRange2?: number;
  /**
   * Gets or sets the duration where the vehicle drove in the second range of speeding
   * triggers.
   */
  speedRange2Duration?: Date;
  /**
   * Gets or sets the number of incidents where the vehicle reached the third range of
   * speeding triggers.
   */
  speedRange3?: number;
  /**
   * Gets or sets the duration where the vehicle drove in the third range of speeding
   * triggers.
   */
  speedRange3Duration?: Date;
  /** Gets or sets the date and time that the trip started. */
  start?: Date;
  /** Gets or sets the date and time the trip stopped. */
  stop?: Date;
  /**
   * Gets or sets the duration the vehicle was stopped at the end of the trip. This also
   * includes any idling done at the end of a trip.
   */
  stopDuration?: Date;
  /** Gets or sets the {@link ICoordinate} associated with this Trip's stop. */
  stopPoint: any;
  /** Gets the "To" Date. */
  to?: Date;
  /** Gets or sets the distance the vehicle was driven during work hours. */
  workDistance?: number;
  /** Gets or sets the duration the vehicle was driven during work hours. */
  workDrivingDuration?: Date;
  /** Gets or sets the duration the vehicle was stopped during work hours. */
  workStopDuration?: Date;
}
