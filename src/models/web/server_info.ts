/* eslint-disable @typescript-eslint/no-empty-interface */
import { IServerInfoBase } from '../web/server_info_base';
import { IDatabaseInfo } from '../web/database_info';
import { IDiskUsage } from '../web/disk_usage';

/** The performance information about a particular hosting server. */
export interface IServerInfo extends IServerInfoBase {
  /** Gets or sets a value indicating whether the server accepts registrations. */
  acceptsRegistrations: boolean;
  /** Gets or sets the Drive usage for the C drive only. */
  cDriveUsage: IDiskUsage;
  /** Gets or sets the number of times ExcelClient has failed consecutively. */
  consecutiveExcelFailures: number;
  /** Gets or sets the overall database load factor. */
  databaseFactor: number;
  /** Gets or sets gets the database info list. */
  databaseInfo: IDatabaseInfo[];
  /** Gets the free disk space in GB. */
  freeDiskSpaceGB: number[];
  /** Gets or sets gets the old free space array. */
  freeDiskSpaceKB: number[];
  /**
   * Gets or sets a value indicating whether database alarm is triggered for any DB on
   * this server.
   */
  isAnyDatabaseBad: boolean;
  /** Gets or sets a value indicating whether fuel transaction import is enabled. */
  isFuelImportEnabled: boolean;
  /** Gets or sets the new registrations pool identifier. */
  newRegistrationsPoolId: number;
  /** Gets or sets gets the Drive usage for all non-C drives. */
  otherDriveUsage: IDiskUsage;
  /** Gets or sets gets the old percentage free space array. */
  percentageDiskSpace: number[];
  /** Gets or sets gets the Country and City of where the server is located. */
  serverLocation: string;
  /** Gets or sets the list of server host tag metadata. */
  serverTags: { [key: string]: string };
  /** Gets or sets the overall web server load factor. */
  webServerFactor: number;
}
