/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from './entity';
import { UserAuthenticationType } from './user_authentication_type';
import { CustomerClassifier } from './customer_classifier';
import { NotificationTokenType } from './notification_token_type';
import { ICustomWebMapProvider } from './custom_web_map_provider';
import { IResellerInfo } from './reseller_info';
import { IResultLimits } from './limits/result_limits';
import { IFileSizeLimits } from './limits/file_size_limits';

/** The settings related to the entire system. */
export interface ISystemSettings extends IEntity {
  /** Gets or sets the allowed user authentication type. */
  allowedUserAuthenticationType?: UserAuthenticationType;
  /** Gets or sets the allowed No access period for user in days. */
  allowedUserInactivityPeriod?: number;
  /** Gets or sets the default value for allowed No access period for user in days. */
  allowedUserInactivityPeriodDefault?: number;
  /** Gets or sets a value indicating whether marketplace purchases are allowed. */
  allowMarketplacePurchases?: boolean;
  /** Gets or sets if the resellers are allowed to login automatically. */
  allowResellerAutoLogin?: boolean;
  /**
   * Gets or sets a value indicating whether the user is allowed to see third-party marketplace
   * items.
   */
  allowThirdPartyMarketplaceApps?: boolean;
  /** Gets or sets a value indicating whether unsigned Add-Ins is allowed. */
  allowUnsignedAddIn?: boolean;
  /** Gets or sets the BigQuery entity upload versions. */
  bigQueryUploadVersions: any;
  /**
   * Gets or sets free text field where any user information can be stored and referenced
   * for this database.
   */
  comments: string;
  /** Gets or sets the address of the registered company - used in some reports. */
  companyAddress: string;
  /** Gets or sets the unique GUID for this database. */
  companyGuid?: any;
  /**
   * Gets or sets the name of the registered company for this database - it is used in
   * reports.
   */
  companyName: string;
  /** Gets or sets the custom code(s) used to enable specialized functionality. */
  customCode: string;
  /** Gets or sets the customer classifiers. */
  customerClassification: CustomerClassifier[];
  /** Gets or sets customer pages. */
  customerPages: string[];
  /** Gets or sets the custom Exempt HOS Abbreviation */
  customExemptHOSAbbreviation: string;
  /** Gets or sets the custom Exempt HOS name */
  customExemptHOSName: string;
  /** Gets or sets the custom web map provider list. */
  customWebMapProviderList: ICustomWebMapProvider[];
  /** Gets or sets the database owner. */
  databaseOwner: string;
  /** Gets or sets dataVersion of . */
  dataVersion: string;
  /** Gets or sets database expiry date. */
  demoExpiryDate?: Date;
  /** Gets or sets the DirectSupportAcceptedDate. */
  directSupportAcceptedDate?: Date;
  /**
   * Gets or sets percentage factor to add to each calculated distance, used to improve
   * accuracy.
   */
  distanceIncreaseFactor?: number;
  /**
   * Gets or sets the email sender for this database. System sent emails will be from
   * this address.
   */
  emailSenderFrom: string;
  /** Gets or sets the Encryption state. */
  enableDataFileEncryption?: boolean;
  /** Gets or sets the size limits for media files. */
  fileSizeLimits: IFileSizeLimits;
  /** Gets or sets ftpFeederLastIdSettings. */
  ftpFeederLastIdSettings: any;
  /** Gets or sets the fuel settings. */
  fuelSettings: any;
  /** Gets or sets the fuel transaction import settings. */
  fuelTransactionImportSettingsList: any[];
  /** Gets or sets the database specific Google API Key if one is provided. */
  googleApiKey: string;
  /** Gets or sets the database specific Here.com key if one is provided. */
  hereApiKey: string;
  /**
   * Gets or sets a value indicating whether or not to include report attachments in
   * email.
   */
  includeReportAttachmentsInEmail?: boolean;
  /** Gets or sets the Industry GUID. */
  industry: string;
  /** Gets or sets is this a backup. */
  isBackup?: boolean;
  /** Gets or sets the last time the company profile data was exported to big query. */
  lastCompanyProfileExportToBq?: Date;
  /** Gets or sets the LastUpdate. */
  lastUpdate?: Date;
  /** Gets or sets the validity period for live data updates. */
  liveDataValidityInterval?: Date;
  /** Gets or sets the database specific Map Box key if one is provided. */
  mapBoxApiKey: string;
  /**
   * Gets or sets The map download URL list.
   *
   * @deprecated
   */
  mapDownloadUrlList: string[];
  /** Gets or sets the Map Provider for this database. */
  mapProvider: string;
  /**
   * Gets or sets a system wide value representing the maximum stop time to be used for
   * some reports and calculations.
   */
  maximumStopInterval?: Date;
  /**
   * Gets or sets the maximum distance (in m) that a driver can travel in PC before getting
   * put into D.
   */
  maxPCDistance?: number;
  /**
   * Gets or sets a system wide value representing the minimum stop time to be used for
   * some reports and calculations.
   */
  minimumStopInterval?: Date;
  /** Gets or sets excluded tokens from notification types such as email */
  notificationExcludedTokens: NotificationTokenType[];
  /**
   * Gets or sets the password lifetime. A user's session ultimate expiry date will have
   * a maximum of when this lifetime expires. If a user authenticates and the lifetime
   * is up they will be forced to change their password. Does nothing if the lifetime
   * is 0 or less.
   */
  passwordLifetime?: Date;
  /** Gets or sets the password policy. */
  passwordPolicy: any;
  /** Gets or sets the percent of leased vehicles. */
  percentOfLeasedVehicles?: number;
  /** Gets or sets the percent of telematics devices. */
  percentOfTelematicsDevices?: number;
  /** Gets or sets the Purge settings. */
  purgeSettings: any;
  /** Gets or sets the rate plan downloader last call date for this database. */
  ratePlanDownloaderLastCallDate?: Date;
  /** Gets or sets returns the reseller info for this database, if it exists. */
  resellerInfo: IResellerInfo;
  /** Gets or sets the result limits for different sources. */
  resultLimits: IResultLimits;
  /**
   * Gets or sets returns true if the processor is set to light memory footprint mode
   * (for systems with large fleets).
   */
  smallCacheMode?: boolean;
  /**
   * Gets or sets the grace period to use when deciding whether speeding is happening
   * for the first speeding trigger.
   */
  speedingGraceDuration?: Date;
  /**
   * Gets or sets the 3 Speeding triggers used to calculate the violations in speed ranges
   * in (s), in km/h.
   */
  speedingTrigger: number[];
  /** Gets or sets the maximum speed for GO units, considered as NOT MOVING. */
  stopSpeedGo?: number;
  /**
   * Gets or sets the number of previous password hashes to remember. Used to prevent
   * users from changing their password to a previous password. 0 is a special value
   * where we will not prevent this. The maximum value is 1000.
   */
  storedPreviousPasswordHashes?: number;
  /** Gets or sets systemScript. */
  systemScript: string;
  /**
   * Gets or sets the trip upload version, which shows how many trips were already uploaded
   * to Google Big Query.
   */
  tripUploadVersion?: number;
  /** Gets or sets the lockout policy of user. */
  userLockoutPolicy: any;
  /**
   * Gets or sets the period (in minutes) after that user session expire if the user
   * has no activity.
   */
  userTimeoutPeriod?: number;
  /** Gets or sets the Weather Provider for this database. */
  weatherProvider: string;
  /**
   * Gets or sets a system wide value representing the maximum distance from a zone's
   * borders where a moving or stationary device is considered visiting the zone's neighbourhood.
   */
  zoneNeighbourhoodLimit?: number;
  /**
   * Gets or sets a system wide value representing the maximum distance from a zone's
   * borders where a moving device is considered visiting the zone's neighbourhood.
   */
  zoneNeighbourhoodLimitWhenMoving?: number;
}
