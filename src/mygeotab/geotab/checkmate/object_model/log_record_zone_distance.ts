/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from '../../../geotab/checkmate/object_model/i_entity';
import { IZone } from '../../../geotab/checkmate/object_model/i_zone';
import { IDevice } from '../../../geotab/checkmate/object_model/i_device';



/** Couples a and a objects with a distance between them in kilometers. */
export interface ILogRecordZoneDistance extends IEntity
{
  /** Gets or sets the date. */
  dateTime?: Date;
  /** Gets or sets the . */
  device?: IDevice;
  /** Gets or sets nullable Distance. */
  distance?: number;
  /** Gets or sets . */
  zone?: IZone;
}
