/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from '../../../geotab/checkmate/object_model/i_entity';
import { IDevice } from '../../../geotab/checkmate/object_model/i_device';



/** Represents a canned response to a text message for a device. Used by Garmin service. */
export interface ICannedDeviceResponse extends IEntity
{
  /**
  * Gets or sets the date when this {@link ICannedDeviceResponse} has been configured
  * on the device that needs to display it.
  */
  configurationDateTime?: Date;
  /** Gets or sets the {@link IDevice} this response is associated with. */
  device: IDevice;
  /** Gets or sets the text that is displayed to the user. */
  response: string;
  /** Gets or sets a unique id for this response. The unique ID is by device. */
  responseId?: number;
}
