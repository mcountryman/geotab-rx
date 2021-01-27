/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from '../../../geotab/checkmate/object_model/i_entity';
import { DriverKeyType } from '../../../geotab/checkmate/object_model/driver_key_type';
import { IDriver } from '../../../geotab/checkmate/object_model/i_driver';



/** Represent the key used to identify a . */
export interface IKey extends IEntity
{
  /** Gets or sets driver of the driver key. */
  driver: IDriver;
  /** Gets or sets the . */
  driverKeyType?: DriverKeyType;
  /**
  * Gets or sets the ID of the driver key. Represents the decoded serial number. USB
  * blue keys are assigned a key ID.
  */
  keyId?: number;
  /**
  * Gets or sets the Serial Number of the driver key. Represents the key ID encoded
  * as a serial number. NFC keys are assigned a serial number.
  */
  serialNumber: string;
}
