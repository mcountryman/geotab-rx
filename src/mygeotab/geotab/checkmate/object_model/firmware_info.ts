/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from '../../../geotab/checkmate/object_model/i_entity';



/** Information about a firmware. */
export interface IFirmwareInfo extends IEntity
{
  /** Gets or sets the firmware channel. */
  channel?: number;
  /**
  * Gets or sets any additional information about this firmware. Used for informational
  * purposes only.
  */
  comments: string;
  /** Gets or sets a byte array representing the binary firmware image. */
  firmware: number[];
  /** Gets or sets a value indicating if this firmware is active. */
  isActive?: boolean;
  /**
  * Gets or sets a value indicating whether this is the default for the current product
  * ID.
  */
  isDefault?: boolean;
  /** Gets or sets major revision number. */
  major?: number;
  /** Gets or sets minor revision number. */
  minor?: number;
  /** Gets or sets product ID. */
  productId?: number;
}
