/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from "../../entity";

/**
 *  Contains the link between User and DisplayMeasurementProfile.
 *
 * @deprecated
 */
export interface IUserDisplayProfile extends IEntity {
  /** Gets or sets the profile Id. */
  profileId?: string;
  /** Gets or sets the user Id. */
  userId?: string;
}
