/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISystemSecurityClearance } from './system_security_clearance';

/**
 * This is a with an Id of . A User see that has this group in its security groups
 * means that there is no access to anything in the system. This is useful if you want
 * to revoke access to the system or build upon this role and give access to a small
 * set of items.
 */
export interface INothingSecurityGroup extends ISystemSecurityClearance {
  /** Gets the unique identifier for this entity. see . */
  id: string;
  /** Gets the name of this system group. Cannot be set. */
  name: string;
}
