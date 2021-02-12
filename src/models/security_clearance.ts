/* eslint-disable @typescript-eslint/no-empty-interface */
import { IGroup } from './group';
import { ISecurityFilter } from './security_filter';

/**
 *  Represents a with (s) that are used to determine security access to different parts
 * of the application. To get all SecurityClearance(s), call the Get method with typeName<br>
 * and a<br> <br> with the Id property set to GroupSecurityId.<br>
 */
export interface ISecurityClearance extends IGroup {
  /**
   * Gets or sets the (s) either adds or removes a particular SecurityIdentifier to a
   * user's set of allowed items.
   */
  securityFilters: ISecurityFilter[];
}
