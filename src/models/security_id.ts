/* eslint-disable @typescript-eslint/no-empty-interface */
import { INameEntityWithVersion } from './name_entity_with_version';

/** For managing security identifiers. */
export interface ISecurityId extends INameEntityWithVersion {
  /** Gets or Sets the custom page name. */
  customPageName?: string;
  /**
   * Gets or sets a value indicating whether this securityIdentifier is a system Id or
   * custom identifier.
   */
  isSystemSecurityId: boolean;
}
