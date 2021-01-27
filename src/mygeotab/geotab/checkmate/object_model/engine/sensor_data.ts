/* eslint-disable @typescript-eslint/no-empty-interface */
import { IStatusData } from '../../../../geotab/checkmate/object_model/engine/i_status_data';



/**
* The class that represents {@link IStatusData} received from a sensor like bluetooth
* dongle.
*/
export interface ISensorData extends IStatusData
{
  /** Gets or sets the MAC address of the sensor. */
  address?: number;
}
