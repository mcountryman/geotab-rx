/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISystemSecurityClearance } from '../../../geotab/checkmate/object_model/i_system_security_clearance';



/**
* This is a . The sub tree of this group is used to manage security to various parts
* of the system.
*/
export interface ISecurityGroup extends ISystemSecurityClearance
{
  /** Gets the unique identifier for this entity. see . */
  id: string;
  /** Gets the name of this system group. Cannot be set. */
  name: string;
}
