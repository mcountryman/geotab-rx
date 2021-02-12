/* eslint-disable @typescript-eslint/no-empty-interface */

/** Components for info and performance evaluation. */
export enum DatabaseInfoComponent {
  /** Database name. */
  DatabaseName = 'DatabaseName',
  /** System Settings in milliseconds. */
  SystemSettingsReadMillis = 'SystemSettingsReadMillis',
  /** Time to read log record in milliseconds. */
  LogRecordReadMillis = 'LogRecordReadMillis',
  /** Time to read and count entities in milliseconds. */
  EntityCountMillis = 'EntityCountMillis',
  /** Time to read last user access date in milliseconds. */
  LastUserAccessReadMillis = 'LastUserAccessReadMillis',
  /** Time to get database location in milliseconds. */
  DatabaseLocationMillis = 'DatabaseLocationMillis',
  /** Time to get database uploader statistics in milliseconds. */
  UploaderStatsMillis = 'UploaderStatsMillis',
  /** Time taken to move between actions of measuring individual components. */
  OutsideComponentsMillis = 'OutsideComponentsMillis',
}
