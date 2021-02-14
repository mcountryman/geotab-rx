/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from "./entity";
import { IRoute } from "./route";
import { IZone } from "./zone";

/**  The class representing an individual item in a planned {@link IRoute}. */
export interface IRoutePlanItem extends IEntity {
  /** Gets or sets the start date for the plan item. */
  activeFrom?: Date;
  /** Gets or sets the end date for the plan item. */
  activeTo?: Date;
  /** Gets expected date and time of arrival. */
  dateTime?: Date;
  /** Gets or sets expected trip distance to arrival. */
  expectedDistanceToArrival?: number;
  /** Gets or sets expected stop duration in milliseconds. */
  expectedStopDuration?: Date;
  /** Gets or sets expected trip time to arrival in milliseconds. */
  expectedTripDurationToArrival?: Date;
  /** Gets or sets the associated {@link IRoute} of the plan. */
  route: IRoute;
  /** Gets or sets the sequence number of the plan item. */
  sequence?: number;
  /** Gets or sets the associated {@link IZone} in the route. */
  zone: IZone;
}
