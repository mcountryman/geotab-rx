/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from '../../../geotab/checkmate/object_model/i_entity';
import { FirmwareType } from '../../../geotab/checkmate/object_model/firmware_type';



/**
* Represents a binary firmware image of a particular type and version. Various items
* can utilize a reference to this firmware object - for example, a go device's firmware
* or the firmware loaded on an Ethernet Downloader.
*/
export interface IFirmware extends IEntity
{
  /** Gets or sets the byte array containing the firmware data. */
  data: number[];
  /**
  * Gets or sets the version indicator for this Firmware. This can be in any distinct
  * format depending on the type of Firmware we're dealing with. For example, GO devices
  * use a three byte scheme as follows productid.major.minor.
  */
  firmwareVersion: string;
  /** Gets or sets the type of firmware. This differentiates firmware for different devices. */
  type?: FirmwareType;
}
