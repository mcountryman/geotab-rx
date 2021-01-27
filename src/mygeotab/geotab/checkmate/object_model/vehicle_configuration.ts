/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntityWithVersion } from '../../../geotab/checkmate/object_model/i_entity_with_version';
import { IDevice } from '../../../geotab/checkmate/object_model/i_device';



/** VehicleConfiguration parameters entity. */
export interface IVehicleConfiguration extends IEntityWithVersion
{
  /** Gets or sets the {@link IDevice} associated with this VehicleConfiguration. */
  device: IDevice;
}
