/* eslint-disable @typescript-eslint/no-empty-interface */
import { ICoordinate } from "./coordinate";

/** A coordinate that is related to a DateTime. */
export interface ITemporalCoordinate extends ICoordinate {
  /** Gets or sets the date and time of this coordinate. */
  dateTime?: Date;
}
