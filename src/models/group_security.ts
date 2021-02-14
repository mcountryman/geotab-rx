/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntityWithVersion } from "./entity_with_version";
import { IGroup } from "./group";
import { ISecurityFilter } from "./security_filter";

/**
 * Represents a GroupSecurity entity. This defines the many to many relationship between
 * a {@link IGroup}.
 */
export interface IGroupSecurity extends IEntityWithVersion {
  /** Gets or sets the associated with the GroupSecurity. */
  group?: IGroup;
  /** Gets or sets the {@link ISecurityFilter} associated with the GroupSecurity. */
  securityFilter?: ISecurityFilter;
}
