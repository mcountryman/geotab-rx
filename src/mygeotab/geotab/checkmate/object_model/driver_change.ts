/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntityWithVersion } from '../../../geotab/checkmate/object_model/i_entity_with_version';
import { DriverChangeType } from '../../../geotab/checkmate/object_model/driver_change_type';
import { IDevice } from '../../../geotab/checkmate/object_model/i_device';
import { IDriver } from '../../../geotab/checkmate/object_model/i_driver';



/**  Information about timing of a {@link IDriver} change. */
export interface IDriverChange extends IEntityWithVersion
{
  /** Gets or sets the date and time of the driver change. */
  dateTime?: Date;
  /** Gets or sets the {@link IDevice} that had the driver change. */
  device?: IDevice;
  /** Gets or sets the {@link IDriver} associated with the change. */
  driver?: IDriver;
  /** Gets or sets the {@link IDriverChangeType}. */
  type?: DriverChangeType;
}
