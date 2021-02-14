/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from "./entity";
import { IDevice } from "./device";

/**
 *  This stores unique geohash based on {@link ITrip}.
 *
 * @deprecated
 */
export interface ITripGeohash extends IEntity {
  /** Gets or sets the associated trip start date time. */
  dateTime?: Date;
  /** Gets or sets the {@link ITripGeohash}. */
  device?: IDevice;
  /** Gets or sets geohash of precision 6 based on latitude and longitude of {@link ILogRecord}. */
  geohash?: string;
}
