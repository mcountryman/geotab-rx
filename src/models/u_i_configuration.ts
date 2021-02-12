/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISecurityFilter } from './security_filter';

/** This object contains the users UI security configuration. */
export interface IUIConfiguration {
  /** Gets the access control list. */
  acl: ISecurityFilter[];
  /** Gets a value indicating whether returns true if the web ui config has any. */
  containsAny: boolean;
  /** Gets or sets the system script. This is a script that runs when the browser starts. */
  systemScript: string;
}
