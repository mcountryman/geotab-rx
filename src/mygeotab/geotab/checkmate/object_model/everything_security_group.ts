/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISystemSecurityClearance } from '../../../geotab/checkmate/object_model/i_system_security_clearance';



/**
* This is a {@link ISystemSecurityClearance} with an Id of . {@link IUser}(s) that
* have this group assigned to their security groups means they have access to everything
* in the system.
*/
export interface IEverythingSecurityGroup extends ISystemSecurityClearance
{
  /** Gets the unique identifier for this entity. see . */
  id: string;
  /** Gets the name of this system group. Cannot be set. */
  name: string;
}
