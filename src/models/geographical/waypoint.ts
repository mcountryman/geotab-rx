/* eslint-disable @typescript-eslint/no-empty-interface */
import { ICoordinate } from '../coordinate';

/** A set of coordinates that reference a location. */
export interface IWaypoint {
  /** Gets or sets the {@link ICoordinate}. */
  coordinate: ICoordinate;
  /** Gets or sets the waypoint description. */
  description: string;
  /** Gets or sets the sequence number. */
  sequence: number;
}
