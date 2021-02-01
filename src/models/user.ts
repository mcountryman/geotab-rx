/* eslint-disable @typescript-eslint/no-empty-interface */
import { INameEntityWithVersion } from "./name_entity_with_version";
import { IDisplayMeasurementProfile } from "./engine/display_diagnostic/display_measurement_profile";
import { IGroup } from "./group";
import { UserAuthenticationType } from "./user_authentication_type";
import { ICertificate } from "./certificate";

/** A user of the system. A user can be a MyGeotab user or a user that is a {@link IDriver}. */
export interface IUser extends INameEntityWithVersion {
  /** Gets a value indicating the user accepted EULA revision number. Default [0]. */
  acceptedEULA?: number;
  /**
   * Gets or sets the list of active dashboards for the user, displayed on the dashboard
   * page. Default [empty].
   */
  activeDashboardReports: string[];
  /** Gets or sets the date the user is active from. Default [UtcNow]. */
  activeFrom?: Date;
  /** Gets or sets the date the user is active to. Default [MaxDate]. */
  activeTo?: Date;
  /** Gets or sets the HOS authority address of the user. Default [""]. */
  authorityAddress: string;
  /** Gets or sets the HOS authority name of the user. Default [""]. */
  authorityName: string;
  /** Gets or sets list of all available dashboard reports to the user. Default [empty]. */
  availableDashboardReports: string[];
  /**
   * Gets or sets the user's stored list of custom response options to choose from when
   * sending a . Each item is a set of predefined response options. Default [empty].
   */
  cannedResponseOptions: string[][];
  /** Gets or sets the carrier number. Default [""]. */
  carrierNumber: string;
  /**
   * Gets or sets a flag indicating whether the user's password requires resetting. If
   * [true], the user will be forced to change their password on next login. Default
   * [false].
   */
  changePassword?: boolean;
  /**
   * Gets or sets free text field where any user information can be stored and referenced
   * for this entity. Default [""].
   */
  comment: string;
  /** Gets or sets the company address for the user. Default [""]. */
  companyAddress: string;
  /** Gets or sets the list of organization (s) that the user belongs to. */
  companyGroups: IGroup[];
  /** Gets or sets the name of the company for the user. Default [""]. */
  companyName: string;
  /**
   * Gets or sets the user two symbols country ISO code (https://www.iso.org/iso-3166-country-codes.html).
   * Maximum length [2] Default [""]
   */
  countryCode: string;
  /**
   * Gets or sets the format dates will be displayed to this user. Default ["MM/dd/yy
   * HH:mm:ss"].
   */
  dateFormat: string;
  /** Gets or sets the default tiles when using Google maps. Default [Roadmap]. */
  defaultGoogleMapStyle?: number;
  /** Gets or sets the default tiles when using Here Maps. Default [Roadmap]. */
  defaultHereMapStyle?: number;
  /**
   * Gets or sets the default map engine to use for this user. System map engines are:
   * GoogleMapsHereMapMapBox Default ["MapBox"].
   */
  defaultMapEngine: string;
  /** Gets or sets the default tiles when using Open Street Maps. Default [MapBox]. */
  defaultOpenStreetMapStyle?: number;
  /**
   * Gets or sets the default start page to view when login is complete. Maps to the
   * hash portion of the web site URL (https://url/enpoint/[#page]). Default [helpGuide].
   */
  defaultPage: string;
  /**
   * Gets or sets the designation or title of the employee. Maximum length [50] Default
   * [""].
   */
  designation: string;
  /** Gets or sets the DisplayMeasurementProfile. */
  displayMeasurementProfile: IDisplayMeasurementProfile;
  /** Gets or sets the driver's last viewed guide version. Default [0]. */
  driveGuideVersion?: number;
  /**
   * Gets or sets the user's preferred {@link IElectricEnergyEconomyUnit} for viewing
   * fuel economy. Default [LitersEPer100Km].
   */
  electricEnergyEconomyUnit?: number;
  /**
   * Gets or sets the employee number or external identifier. Maximum length [50] Default
   * [""].
   */
  employeeNo: string;
  /**
   * Gets or sets the user's preferred day to represent the start of the week. Default
   * ["Sunday"].
   */
  firstDayOfWeek?: number;
  /** Gets or sets the first name of the user. Maximum length [255]. */
  firstName: string;
  /**
   * Gets or sets the user's preferred {@link IFuelEconomyUnit} for viewing fuel economy.
   * Default [LitersPer100Km].
   */
  fuelEconomyUnit?: number;
  /** Gets or sets the aggregated list of all user groups. */
  groups: IGroup[];
  /** Gets or sets the {@link IHosRuleSet} the user follows. Default [None]. */
  hosRuleSet?: number;
  /** Gets or sets the unique identifier for the User. See . */
  id: string;
  /**
   * Gets or sets the is driver toggle, if [true] the user is a driver, otherwise [false].
   * Default [false].
   */
  isDriver?: boolean;
  /**
   * Gets or sets the isEmailReportEnabled, if [true] the user will receive the emailed
   * report, otherwise [false]. Default [true].
   */
  isEmailReportEnabled?: boolean;
  /**
   * Gets a value indicating whether the old EULA has been accepted by the end user.
   * Default [false].
   */
  isEULAAccepted?: boolean;
  /**
   * Gets or sets a value indicating whether the user is allowed to HOS personal conveyance.
   * Default [false].
   */
  isExemptHOSEnabled?: boolean;
  /**
   * Gets or sets a value indicating whether labs are enabled for this user. When set
   * to true this will enable experimental features that are still in the process of
   * being developed. Default [false].
   */
  isLabsEnabled?: boolean;
  /**
   * Gets or sets whether the current regional settings is in metric units of measurement
   * (or US/Imperial). Default [true].
   */
  isMetric?: boolean;
  /**
   * Gets or sets a value that indicates whether news notifications are enabled for this
   * user. Default [true].
   */
  isNewsEnabled?: boolean;
  /**
   * Gets or sets a value indicating whether the user is allowed to HOS personal conveyance.
   * Default [false].
   */
  isPersonalConveyanceEnabled?: boolean;
  /**
   * Gets or sets a value indicating whether are service update notifications enabled
   * for this user. Default [false].
   */
  isServiceUpdatesEnabled?: boolean;
  /**
   * Gets or sets the issuer {@link ICertificate} for the user. Will only be populated
   * for users not using basic authentication.
   */
  issuerCertificate: ICertificate;
  /**
   * Gets or sets a value indicating whether the user is allowed to HOS yard move. Default
   * [false].
   */
  isYardMoveEnabled?: boolean;
  /**
   * Gets or sets the user's culture identifier as a predefined {@link IName} of an existing
   * System.Globalization.CultureInfo, or Windows-only culture name. Default: ["en"]
   * for English.
   */
  language: string;
  /** Gets or sets the user's Last access date of the system. */
  lastAccessDate?: Date;
  /** Gets or sets the last name of the user. Maximum length [255]. */
  lastName: string;
  /**
   * Gets or sets the list of the of the available {@link IMapView}s from the live map.
   * Default [continent of the user's selected time zone].
   */
  mapViews: any[];
  /**
   * Gets or sets a value indicating the maximum personal conveyance distance per day
   * in meters. Default [0].
   */
  maxPCDistancePerDay?: number;
  /** Gets or sets the user's email address / login name. Maximum length [255]. */
  name: string;
  /** Gets or sets the user's password. */
  password: string;
  /**
   * Gets or sets the user phone number with space separated country phone code. Example
   * +1 5555555555. Maximum length [20] Default [""]
   */
  phoneNumber: string;
  /**
   * Gets or sets the user phone number without formatting. Maximum length [5] Default
   * [""]
   */
  phoneNumberExtension: string;
  /** Gets or sets the private (s) that the user belongs to. */
  privateUserGroups: IGroup[];
  /**
   * Gets or sets the report (s) for reporting that this user belongs to. The selected
   * reporting groups will allow the user to sort entities that are children of the selected
   * groups. It will not allow them to see entities that are outside of their data access.
   * Default [empty].
   */
  reportGroups: IGroup[];
  /** Gets or sets the security (s) this user belongs to; which define the user's access. */
  securityGroups: IGroup[];
  /**
   * Gets or sets a flag indicating whether to show ClickOnce support warning as the
   * default page. (legacy) Default [false].
   */
  showClickOnceWarning?: boolean;
  /**
   * Gets or sets the IANA time zone Id of the user. All data will be displayed in this
   * time zone. Default ["America/New\_York"].
   */
  timeZoneId: string;
  /** Gets or sets the . Default [Basic]. */
  userAuthenticationType?: UserAuthenticationType;
  /**
   * Gets or sets a value indicating the user accepted Wifi specific EULA revision number.
   * Default [0].
   */
  wifiEULA?: number;
  /**
   * Gets or sets the windows authentication user Id. This property is so we don't return
   * both User Id and Name to the client side when they have the same value. User Id
   * and Name only differ for WindowsAuthentication users.
   */
  windowsAuthenticationUserId: string;
  /** Gets or sets the default {@link IZoneDisplayMode} used on the map. Default [Default]. */
  zoneDisplayMode?: number;
}
