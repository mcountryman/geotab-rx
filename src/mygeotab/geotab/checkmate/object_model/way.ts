/* eslint-disable @typescript-eslint/no-empty-interface */


/** Represents a way or road segment in OSM. */
export interface IWay
{
  /** Gets or sets the road segment index. */
  index?: number;
  /** Gets or sets is the speed value and estimate. */
  isEstimate?: boolean;
  /** Gets or sets the IsOverRide of the points. */
  isOverRide?: boolean;
  /** Gets or sets the date the way was last edited. */
  lastEdited?: Date;
  /** Gets or sets the MaxSpeed of the points. */
  maxSpeed?: number;
  /** Gets or sets the of the points. */
  points: any[];
  /** Gets or sets details on the provider of the road data. */
  provider: string;
  /** Gets or sets the RoadName of the points. */
  roadName: string;
  /** Gets or sets the Truck MaxSpeed of the points. */
  truckMaxSpeed?: number;
  /** Gets or sets the OSM Way Id. */
  wayId?: number;
}
