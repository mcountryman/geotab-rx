/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from '../../../geotab/checkmate/object_model/i_entity';
import { IDevice } from '../../../geotab/checkmate/object_model/i_device';
import { TripType } from '../../../geotab/checkmate/object_model/trip_type';



/** Indicates when a was changed. */
export interface ITripTypeChange extends IEntity
{
  /** Gets or sets the date time. */
  dateTime?: Date;
  /** Gets or sets the device. */
  device: IDevice;
  /** Gets or sets the type of the trip. */
  tripType?: TripType;
}
