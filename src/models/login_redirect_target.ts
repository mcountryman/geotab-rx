/* eslint-disable @typescript-eslint/no-empty-interface */

/**
 *  Target app for SSO authentication redirect.
 *
 * @deprecated
 */
export enum LoginRedirectTarget {
  /** MyGeotab, or the white-labeled equivalent */
  Manage = 'Manage',
  /** Geotab Drive, or the white-labeled equivalent */
  Drive = 'Drive',
  /** Logs in a co-driver to Geotab Drive, or the white-labeled equivalent */
  DriveCoDriver = 'DriveCoDriver',
}
