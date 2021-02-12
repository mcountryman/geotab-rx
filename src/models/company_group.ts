/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISystemGroupBase } from './system_group_base';

/**
 * This is a system group see {@link IGroupCompanyId} and is the root group of the
 * organization structure. The entire sub tree of this group is user defined.
 */
export interface ICompanyGroup extends ISystemGroupBase {
  /** Gets the unique identifier for this entity. see . */
  id: string;
  /** Gets the name of this system group. Cannot be set. */
  name: string;
}
