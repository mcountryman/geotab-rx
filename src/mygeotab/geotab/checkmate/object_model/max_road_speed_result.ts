/* eslint-disable @typescript-eslint/no-empty-interface */


/** Maximum road speed result. */
export interface IMaxRoadSpeedResult
{
  /** Gets or sets the Date. */
  date?: Date;
  /** Gets or sets the isEstimate value. */
  isEstimate?: boolean;
  /** Gets or sets the MaxSpeed. */
  maxSpeed: number;
  /** Gets or sets the TruckMaxSpeed. */
  truckMaxSpeed: number;
}
