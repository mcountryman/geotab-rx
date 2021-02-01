/* eslint-disable @typescript-eslint/no-empty-interface */
import { IExceptionsActivity } from "../exceptions/exceptions_activity";
import { IExceptionEvent } from "../exceptions/exception_event";
import { IAddressLookupData } from "../address_lookup_data";

/** The exception details for reports. */
export interface IExceptionsDetail extends IExceptionsActivity {
  /** Gets the duration in ms. */
  duration: Date;
  /** Gets the end time. */
  endTime?: Date;
  /** Gets the exception event. */
  exceptionEvent: IExceptionEvent;
  /** Gets or sets the exceptions info. */
  exceptionsInfo: string;
  /** Gets or sets the extra exception data. */
  extraExceptionData: string;
  /** Gets the latitude. */
  latitude?: number;
  /** Gets or sets the location. */
  location: IAddressLookupData;
  /** Gets the longitude. */
  longitude?: number;
  /** Gets or sets the max road speed limit. */
  maxRoadSpeedLimit?: number;
  /** Gets or sets the max road speed limit is estimated. */
  maxRoadSpeedLimitEstimated?: boolean;
  /** Gets or sets the max speed. */
  maxSpeed?: number;
  /** Gets the start time. */
  startTime?: Date;
  /** Gets the trip distance when the exception occurs. */
  tripDistance?: number;
}
