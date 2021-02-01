/* eslint-disable @typescript-eslint/no-empty-interface */
import { INameEntity } from "./name_entity";

/** AddressZone */
export interface IAddressZone extends INameEntity {
  /** Gets or sets the lower bound of latitude of the AddressZone. */
  minLat: number;
  /** Gets or sets the lower bound of longitude of the AddressZone. */
  minLong: number;
}
