/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISystemSecurityClearance } from '../../../geotab/checkmate/object_model/i_system_security_clearance';



/**
* This is a with an Id of . A user see that has this group assigned to its security
* groups will have access to all features of the Geotab Drive app.
*/
export interface IDriveUserSecurityGroup extends ISystemSecurityClearance
{
  /** Gets the unique identifier for this entity. see . */
  id: string;
  /** Gets the name of this system group. Cannot be set. */
  name: string;
}
