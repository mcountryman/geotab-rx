/* eslint-disable @typescript-eslint/no-empty-interface */
import { IRule } from '../../../../geotab/checkmate/object_model/exceptions/i_rule';
import { IZone } from '../../../../geotab/checkmate/object_model/i_zone';
import { IDevice } from '../../../../geotab/checkmate/object_model/i_device';
import { IDriver } from '../../../../geotab/checkmate/object_model/i_driver';



/**
*  Exception Activity.
*
* @deprecated
*/
export interface IExceptionsActivity
{
  /** Gets or sets the device. */
  device: IDevice;
  /** Gets Distance. */
  distance?: number;
  /** Gets or sets the driver. */
  driver: IDriver;
  /** Gets the duration in ms. */
  duration: Date;
  /** Gets or sets the {@link IRule}. */
  exceptionRule: IRule;
  /** Gets or sets the stop zone. */
  stopZone: IZone;
}
