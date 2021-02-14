/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISystemSecurityClearance } from "./system_security_clearance";

/**
 * This is a with an Id of . A user see that has this group in its security groups
 * will have access to modify local data in the system. This is the type of user that
 * does not need to administrate the system, but needs to create devices, zones, work
 * times etc.
 */
export interface ISupervisorSecurityGroup extends ISystemSecurityClearance {
  /** Gets the unique identifier for this entity. see . */
  id: string;
  /** Gets the name of this system group. Cannot be set. */
  name: string;
}
