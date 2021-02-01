/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from "./entity";
import { DriverKeyType } from "./driver_key_type";
import { IDriver } from "./driver";

/** Represent the key used to identify a . */
export interface IKey extends IEntity {
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
