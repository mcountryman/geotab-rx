/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISystemSecurityClearance } from './system_security_clearance';

/**
 * This is a with an Id of . A user see that have their security assigned to this group
 * will only have access to view local data in the system. This user is unable to \*modify\*
 * any data in the system and is the type of access that is recommended for users that
 * need to view data in reports, tracking etc.
 */
export interface IViewOnlySecurityGroup extends ISystemSecurityClearance {
  /** Gets the unique identifier for this entity. see . */
  id: string;
  /** Gets the name of this system group. Cannot be set. */
  name: string;
}
