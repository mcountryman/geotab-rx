/* eslint-disable @typescript-eslint/no-empty-interface */
import { IUser } from '../../../geotab/checkmate/object_model/i_user';
import { IGroup } from '../../../geotab/checkmate/object_model/i_group';
import { IKey } from '../../../geotab/checkmate/object_model/i_key';



/**
*  A driver in the system, and it is derived from {@link IUser}, with key ids and
* driver groups. If the driver is unknown then the driver is represented by "UnknownDriver".
*/
export interface IDriver extends IUser
{
  /** Gets or sets the home {@link IGroup}(s) for the driver. */
  driverGroups: IGroup[];
  /** Gets or sets the NFC Key's serial number associated with the driver. */
  keys: IKey[];
  /** Gets or sets the driver license number of the user. Default [""]. */
  licenseNumber: string;
  /** Gets or sets the driver license province or state of the user. Default [""]. */
  licenseProvince: string;
  /** Gets or sets a value indicating whether the driver can view their own data. */
  viewDriversOwnDataOnly?: boolean;
}
