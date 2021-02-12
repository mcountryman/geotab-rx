/* eslint-disable @typescript-eslint/no-empty-interface */
import { ProcessingStatus } from '../web/processing_status';

/** Information about the performance of a hosted database. */
export interface IDatabaseInfo {
  /** Gets or sets the bad file count. */
  badFileCount: number;
  /** Gets or sets the billable device count. */
  billableDeviceCount: number;
  /** Gets or sets the comment. */
  comment: string;
  /** Gets or sets the company unique identifier. */
  companyGuid: any;
  /** Gets or sets the cpu time / total time ratio - based load factor as percent. */
  cpuSeconds: number;
  /** Gets or sets the custom codes to report. */
  customCode: string;
  /** Gets or sets the Country and City of the database. */
  databaseLocation: string;
  /** Gets or sets the data size KB. */
  dataSizeKB: number;
  /** Gets or sets the demo database expiry date. */
  demoExpiryDate?: Date;
  /** Gets or sets the fuel customer identifiers. */
  fuelCustomerIds: string[];
  /** Gets or sets the geocoder type. */
  geocoderType: string;
  /** Gets or sets a value indicating whether this database instance is bad (unreachable). */
  isBad: boolean;
  /** Gets or sets the lag time of the uploader in ms. */
  lagTime: Date;
  /** Gets or sets the last activity date. */
  lastActivityDateTime?: Date;
  /** Gets or sets the last GPS date time. */
  lastGPSDateTime?: Date;
  /** Gets or sets the load factor. */
  loadFactor: number;
  /** Gets or sets the map provider. */
  mapProvider: string;
  /** Gets or sets the name. */
  name: string;
  /** Gets or sets the processing status. */
  processingStatus: ProcessingStatus;
  /** Gets or sets the database provider. */
  sqlType: string;
  /** Gets or sets the TXT file count. */
  txtFileCount: number;
}
