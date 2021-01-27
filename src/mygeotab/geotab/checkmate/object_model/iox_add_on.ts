/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from '../../../geotab/checkmate/object_model/i_entity';
import { IDevice } from '../../../geotab/checkmate/object_model/i_device';



/**
* Represents an Iox Add-On (like modem or navigation device) that is attached to a
* GO unit. Each Iox Add-On is assigned a channel - which is the serial port number
* that it typically communicates with.
*/
export interface IIoxAddOn extends IEntity
{
  /**
  * Gets or sets the channel on which the Add-On is attached to the GO unit. This is
  * typically just a serial port. 0 means the Add-On is not attached.
  */
  channel: number;
  /** Gets or sets the DateTime this IoxAddOn was assigned it's . */
  dateTime?: Date;
  /** Gets or sets the {@link IDevice} this IoxAddOn is connected to. */
  device: IDevice;
  /**
  * Gets or sets the unique identifier for this Iox Add-On type. Iox Add-On types are
  * assigned by Geotab. See {@link IKnownIoxAddOnType}.
  */
  type: number;
}
