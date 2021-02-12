/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from './entity';
import { IDevice } from './device';
import { TripType } from './trip_type';

/** Indicates when a was changed. */
export interface ITripTypeChange extends IEntity {
  /** Gets or sets the date time. */
  dateTime?: Date;
  /** Gets or sets the device. */
  device: IDevice;
  /** Gets or sets the type of the trip. */
  tripType?: TripType;
}
