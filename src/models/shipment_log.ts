/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntityWithVersion } from './entity_with_version';
import { IDevice } from './device';
import { IUser } from './user';

/**
 *  A ShipmentLog is a record of shipment transported by a specified vehicle for a
 * duration of time.
 */
export interface IShipmentLog extends IEntityWithVersion {
  /** Gets or sets the date the shipment was started. Default [UtcNow]. */
  activeFrom?: Date;
  /** Gets or sets the date the shipment was ended. Default [MaxDate]. */
  activeTo?: Date;
  /** Gets or sets the commodity shipped. Maximum length [255] Default [""]. */
  commodity: string;
  /** Gets or sets the date and time the log was created. */
  dateTime?: Date;
  /** Gets or sets the {@link IDevice} associated with this log. */
  device: IDevice;
  /** Gets or sets the identifier of the shipment document. Default [""]. */
  documentNumber: string;
  /** Gets or sets the {@link IUser} who created this log. */
  driver: IUser;
  /** Gets or sets the name of the shipper. Default [""]. */
  shipperName: string;
}
