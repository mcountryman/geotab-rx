/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from './entity';

/** Representation of risk-based data belonging to a . */
export interface IRiskData {
  /** Gets or sets the total (s) during after hours. */
  afterHoursTripCount: number;
  /** Gets the average speed calculated as distance traveled over time, in KM/h. */
  averageSpeed: number;
  /** Gets or sets the idling count over 5 minutes. */
  idlingOver5Count: number;
  /** Gets or sets the total idling time for the period. */
  idlingTime: Date;
  /** Gets or sets the Owner () of the risk data. */
  item: IEntity;
  /** Gets or sets the max speed for the period. */
  maxSpeed: number;
  /** Gets or sets the period end date. */
  periodEndDate?: Date;
  /** Gets or sets the period sequence number. */
  periodNumber?: number;
  /** Gets or sets the period start date. */
  periodStartDate?: Date;
  /** Gets or sets the count of seat belt violations (aux 1). */
  seatbeltViolation: number;
  /** Gets or sets the count of speed 1 violations. */
  speed1Count: number;
  /** Gets or sets the count of speed 2 violations. */
  speed2Count: number;
  /** Gets or sets the count of speed 3 violations. */
  speed3Count: number;
  /** Gets or sets the count of stops over 10 minutes and under 20 minutes. */
  stopOver10Count: number;
  /** Gets or sets the count of stops over 20 minutes and under 30 minutes. */
  stopOver20Count: number;
  /** Gets or sets the count of stops over 30 minutes and under 40 minutes. */
  stopOver30Count: number;
  /** Gets or sets the count of stops over 40 minutes and under 50 minutes. */
  stopOver40Count: number;
  /** Gets or sets the count of stops over 50 minutes. */
  stopOver50Count: number;
  /** Gets or sets the count of stops under 10 minutes. */
  stopUnder10Count: number;
  /** Gets or sets the total distance traveled for the period, in KM/h. */
  totalDistance: number;
  /** Gets or sets the total driving time. */
  totalDrivingTime: Date;
  /** Gets or sets the total stops for the period. */
  totalStops: number;
}
