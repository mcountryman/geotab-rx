/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from '../../../geotab/checkmate/object_model/i_entity';
import { IDevice } from '../../../geotab/checkmate/object_model/i_device';



/**
*  A {@link IDevice} and date pair that represents the last time a particular {@link
* IRouteExtract} has been executed for a specific vehicle.
*
* @deprecated
*/
export interface IRouteExtract extends IEntity
{
  /** Gets or sets the vehicle object to which the last date of the extract applies. */
  device: IDevice;
  /** Gets or sets the date when the extract has been completed for this vehicle. */
  lastExtractDateTime?: Date;
}
