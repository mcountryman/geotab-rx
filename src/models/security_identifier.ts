/* eslint-disable @typescript-eslint/no-empty-interface */

/**
 * The list of identifiers that gives a security identity to something whose access
 * can be controlled.
 */
export enum SecurityIdentifier {
  /**
   * The Unknown identifier is not used for security purposes. It's used internally to
   * indicate a particular type could not be translated into a security identifier. This
   * always yields in access denied.
   */
  Unknown = "Unknown",
  /** Access to Everything. */
  Everything = "Everything",
  /**  Access to SystemSettings. */
  SystemSettings = "SystemSettings",
  /** Access to ImportFromOtherDatabase. */
  ImportFromOtherDatabase = "ImportFromOtherDatabase",
  /** Access to AuditLog. */
  AuditLog = "AuditLog",
  /** Access to User/Driver List. */
  UserList = "UserList",
  /** Administer Users/Drivers. */
  UserAdmin = "UserAdmin",
  /** Access to PurgeData. */
  PurgeData = "PurgeData",
  /** Access to Device List. */
  DeviceList = "DeviceList",
  /** Access to EngineManagementReport. */
  EngineManagementReport = "EngineManagementReport",
  /** Access to List of ZoneType's. */
  ZoneTypeList = "ZoneTypeList",
  /** Access to ReprocessData. */
  ReprocessData = "ReprocessData",
  /** Access to WorkTimeList. */
  WorkTimeList = "WorkTimeList",
  /** Access to WorkHolidayList. */
  WorkHolidayList = "WorkHolidayList",
  /** Access to ZoneList. */
  ZoneList = "ZoneList",
  /** Access to ZoneAdmin. */
  ZoneAdmin = "ZoneAdmin",
  /** Access to ExceptionsList. */
  ExceptionsList = "ExceptionsList",
  /** Access to ReminderReport. */
  ReminderReport = "ReminderReport",
  /** Access to EventOccurrenceList. */
  EventOccurrenceList = "EventOccurrenceList",
  /** Access to NodesList. */
  NodesList = "NodesList",
  /** Access to ReminderRuleList. */
  ReminderRuleList = "ReminderRuleList",
  /** Access to ChangePassword. */
  ChangePassword = "ChangePassword",
  /** Access to CreateExtractKey. */
  CreateExtractKey = "CreateExtractKey",
  /** Access to CreateTestKey. */
  CreateTestKey = "CreateTestKey",
  /** Access to CreateFirmwareKey. */
  CreateFirmwareKey = "CreateFirmwareKey",
  /** Access to CreateProgrammingKey. */
  CreateProgrammingKey = "CreateProgrammingKey",
  /** Access to CreateKeyBackup. */
  CreateKeyBackup = "CreateKeyBackup",
  /** Access to RestoreKeyBackup. */
  RestoreKeyBackup = "RestoreKeyBackup",
  /** Access to CreateWifiKey. */
  CreateWifiKey = "CreateWifiKey",
  /** Access to ImportZones. */
  ImportZones = "ImportZones",
  /** Access to RadioDownloaderList. */
  RadioDownloaderList = "RadioDownloaderList",
  /** Access to NotificationList. */
  NotificationList = "NotificationList",
  /** Access to OrganizeViews. */
  OrganizeViews = "OrganizeViews",
  /** Access to RouteList. */
  RouteList = "RouteList",
  /** Access to UserSettings. */
  UserSettings = "UserSettings",
  /** Access to EngineDiagnosticList. */
  EngineDiagnosticList = "EngineDiagnosticList",
  /** Access to EngineTypeList. */
  EngineTypeList = "EngineTypeList",
  /** Access to EngineFailureModeList. */
  EngineFailureModeList = "EngineFailureModeList",
  /** Access to EngineFlashCodelist. */
  EngineFlashCodelist = "EngineFlashCodelist",
  /** Access to EngineUnitOfMeasureList. */
  EngineUnitOfMeasureList = "EngineUnitOfMeasureList",
  /** Access to TripsActivityReport. */
  TripsActivityReport = "TripsActivityReport",
  /** Access to CongregationReport. */
  CongregationReport = "CongregationReport",
  /** Access to CustomerVisitsReport. */
  CustomerVisitsReport = "CustomerVisitsReport",
  /** Access to SpeedProfileReport. */
  SpeedProfileReport = "SpeedProfileReport",
  /** Access to TimeCardReport. */
  TimeCardReport = "TimeCardReport",
  /** Access to EngineStatusDataGraph. */
  EngineStatusDataGraph = "EngineStatusDataGraph",
  /** Access to ExceptionsReport. */
  ExceptionsReport = "ExceptionsReport",
  /** Access to RiskManagementReport. */
  RiskManagementReport = "RiskManagementReport",
  /** Access to RouteSummaryReport. */
  RouteSummaryReport = "RouteSummaryReport",
  /** Access to UnassignedRouteReport. */
  UnassignedRouteReport = "UnassignedRouteReport",
  /** Access to AccidentDebugReport. */
  AccidentDebugReport = "AccidentDebugReport",
  /** Access to DeviceInstallHistoryReport. */
  DeviceInstallHistoryReport = "DeviceInstallHistoryReport",
  /** Access to PerformanceReport (DEPRECATED) */
  LaunchAddIn = "LaunchAddIn",
  /** Access to DeviceAdmin. */
  DeviceAdmin = "DeviceAdmin",
  /** Access to removing vehicle, unpluging device, and replacing device. */
  DeviceAdminDeleteUnplugReplace = "DeviceAdminDeleteUnplugReplace",
  /** Access to KeyInformation. */
  KeyInformation = "KeyInformation",
  /** Access to SecurityClearanceList. */
  SecurityClearanceList = "SecurityClearanceList",
  /**
   * This security identifier is required to support WATERMARK and is only applicable
   * if their custom code has been configured.
   */
  TrackHistoricData = "TrackHistoricData",
  /** The "Services" settings tab. */
  ServicesSettings = "ServicesSettings",
  /**
   * This is dashboard security. Allow access to dashboard and CustomReportSchedule.
   */
  MileageSummaryDashboard = "MileageSummaryDashboard",
  /** Allow access to create or download accident keys. */
  AccidentWizard = "AccidentWizard",
  /** Allow access to the Fuel Tax Report. */
  FuelTax = "FuelTax",
  /** Allow access to managing report templates. */
  ManageReportTemplates = "ManageReportTemplates",
  /** Allow viewing data using report template. */
  ViewReportTemplate = "ViewReportTemplate",
  /** Access to ExportFromOtherDatabase. */
  ExportFromOtherDatabase = "ExportFromOtherDatabase",
  /** Allow viewing sent and received GPS Text Messages. */
  ViewGpsTextMessage = "ViewGpsTextMessage",
  /** Allow sending GPS Text Message, Routes and Addresses. */
  SendGpsTextMessage = "SendGpsTextMessage",
  /** Allow deleting GPS Text Message. */
  DeleteGpsTextMessage = "DeleteGpsTextMessage",
  /**
   * Requests the current GPS location from a GO device. Typical implementation is for
   * Iridium network.
   */
  RequestDeviceLocation = "RequestDeviceLocation",
  /** Display devices on a map. */
  DisplayMap = "DisplayMap",
  /** Allow starting full version of MyGeotab from a web page. */
  StartFullVersion = "StartFullVersion",
  /** Allow changing exception email templates. */
  EditNotificationEmailTemplate = "EditNotificationEmailTemplate",
  /** Allow user to see advanced device settings. */
  DeviceAdminAdvanced = "DeviceAdminAdvanced",
  /** Allow use to configure driver feedback settings. */
  DeviceAdminDriverFeedback = "DeviceAdminDriverFeedback",
  /** Allow user to edit the odometer reading associated with the device. */
  EditDeviceOdometer = "EditDeviceOdometer",
  /** Allow external relay instruction to be send to the vehicle. */
  SendExternalRelayInstruction = "SendExternalRelayInstruction",
  /** Allow viewing the about checkmate page. */
  AboutCheckmate = "AboutCheckmate",
  /** Access to Fuel Usage Report. */
  FuelUsageReport = "FuelUsageReport",
  /**
   * This security identifier is required to support ENGCO and is only applicable if
   * their custom code has been configured. Allow user to configure driver blacklist
   * on devices.
   */
  DriverBlacklist = "DriverBlacklist",
  /** Allow user to edit an exception rule using the wizard. */
  EditException = "EditException",
  /** Allow user to edit a distribution list. */
  EditDistributionList = "EditDistributionList",
  /** Allow user to run Route Comparison Report. */
  RouteComparisonReport = "RouteComparisonReport",
  /** Allow user to edit HOS driver logs. */
  ManageHOSLogs = "ManageHOSLogs",
  /** Allow user to view HOS driver logs. */
  ViewHOSLogs = "ViewHOSLogs",
  /** Allow user to view DVIR logs. */
  ViewDVIRLogs = "ViewDVIRLogs",
  /** Allow user to edit DVIR logs. */
  ManageDVIRLogs = "ManageDVIRLogs",
  /** Allow user to view existing trailers. */
  ViewTrailers = "ViewTrailers",
  /** All user to add/edit/remove trailers. */
  ManageTrailers = "ManageTrailers",
  /** Allow user to view the advanced help items. */
  ViewAdvancedHelp = "ViewAdvancedHelp",
  /** Allow user to edit OSM road speeds. */
  EditRoadSpeeds = "EditRoadSpeeds",
  /** Access to FuelTransactionList. */
  FuelTransactionList = "FuelTransactionList",
  /** Access to FuelTransactionAdmin. */
  FuelTransactionAdmin = "FuelTransactionAdmin",
  /** Allow user to see paid Marketplace items. */
  ViewMarketplacePaidItems = "ViewMarketplacePaidItems",
  /** Allow user to view certificates. */
  ViewCertificates = "ViewCertificates",
  /** Allow user to manage certificates. */
  ManageCertificates = "ManageCertificates",
  /** Access to repair DVIR. */
  RepairDVIR = "RepairDVIR",
  /** Allow user to purchase paid items on the Marketplace. */
  PurchaseMarketplacePaidItems = "PurchaseMarketplacePaidItems",
  /** Allow user to add, edit, or remove AddInData objects. */
  ManageAddInData = "ManageAddInData",
  /** Allow user to view AddInData objects. */
  ViewAddInData = "ViewAddInData",
  /** Allow user to view BinaryData. */
  ViewBinaryData = "ViewBinaryData",
  /** Allow user to view driver identification (keys). */
  DriverIdentificationClearance = "DriverIdentificationClearance",
  /** Allow user to view and edit accelerometer stock rules and device settings. */
  AccelerometerDataClearance = "AccelerometerDataClearance",
  /** Allow user to view device service plans. */
  ServicePlansClearance = "ServicePlansClearance",
  /** Allow user to view auxiliary settings. */
  AuxiliaryClearance = "AuxiliaryClearance",
  /** Allow user to view and edit engine status stock rules. */
  EngineStatusDataClearance = "EngineStatusDataClearance",
  /** Allow user to view reseller data. */
  ResellerControlClearance = "ResellerControlClearance",
  /** Allow user to view GoTalk settings and version. */
  GoTalkClearance = "GoTalkClearance",
  /** Allow user to view and edit status groups. */
  StatusGroupsClearance = "StatusGroupsClearance",
  /** Allow user to view product guide. */
  ProductGuideClearance = "ProductGuideClearance",
  /** Allow user to view feature preview switcher. */
  FeaturePreviewClearance = "FeaturePreviewClearance",
  /** Allow user to view news notifications switcher. */
  NewsNotificationsClearance = "NewsNotificationsClearance",
  /** Allow user to view and edit addins. */
  ManageAddinsClearance = "ManageAddinsClearance",
  /** Allow user to view device current status link. */
  DeviceCurrentStatusClearance = "DeviceCurrentStatusClearance",
  /** Allow user to view TripType Change Data. */
  ViewTripTypeChangeData = "ViewTripTypeChangeData",
  /** Allow user to view and edit TripType Change Data. */
  EditTripTypeChangeData = "EditTripTypeChangeData",
  /** Allow user to view and edit DirectSupport tickets */
  DirectSupportAdmin = "DirectSupportAdmin",
  /** Allow user to view Business Intelligence data (Fleet Industry Trends and etc.) */
  ViewBusinessIntelligence = "ViewBusinessIntelligence",
  /** Allow user to view turn on/off Active tracking feature */
  ActiveTrackingClearance = "ActiveTrackingClearance",
  /** Access to certify DVIR. */
  CertifyDVIR = "CertifyDVIR",
  /** Access to inspect DVIR. */
  InspectDVIR = "InspectDVIR",
  /** Allow user to view media files. */
  ViewMedia = "ViewMedia",
  /** Allow user to add, set or remove media files. */
  ManageMedia = "ManageMedia",
  /** Allow user only to view groups. */
  ViewGroups = "ViewGroups",
  /**
   * Allow user to view the wifi settings tab and view/modify the wifi hotspot SSID and
   * password.
   */
  AdministerWiFiHotspotSettings = "AdministerWiFiHotspotSettings",
  /** Allow user to view the wifi hotspot SSID and password. */
  ViewWiFiHotspotSettings = "ViewWiFiHotspotSettings",
  /** Access to Material Management report */
  MaterialManagementReport = "MaterialManagementReport",
}
