/* eslint-disable @typescript-eslint/no-empty-interface */

/**
 * The security rights a user has. These are also used in {@link IAudit}(s) as the
 * action being audited.
 */
export enum SecurityRole {
  /** The unknown role */
  Unknown = "Unknown",
  /** The user view role */
  UserView = "UserView",
  /** The user removal role */
  UserRemove = "UserRemove",
  /** The user set role */
  UserSet = "UserSet",
  /** The user insertion role */
  UserInsert = "UserInsert",
  /** The device view role */
  DeviceView = "DeviceView",
  /** The device removal role */
  DeviceRemove = "DeviceRemove",
  /** The device insertion role */
  DeviceInsert = "DeviceInsert",
  /** The device set role */
  DeviceSet = "DeviceSet",
  /** The zone view role */
  ZoneView = "ZoneView",
  /** The zone removal role */
  ZoneRemove = "ZoneRemove",
  /** The zone insertion role */
  ZoneInsert = "ZoneInsert",
  /** The zone set role */
  ZoneSet = "ZoneSet",
  /** The zone type view role */
  ZoneTypeView = "ZoneTypeView",
  /** The zone type removal role */
  ZoneTypeRemove = "ZoneTypeRemove",
  /** The zone type insertion role */
  ZoneTypeInsert = "ZoneTypeInsert",
  /** The zone type set role */
  ZoneTypeSet = "ZoneTypeSet",
  /** The route view role */
  RouteView = "RouteView",
  /** The route removal role */
  RouteRemove = "RouteRemove",
  /** The route insertion role */
  RouteInsert = "RouteInsert",
  /** The route set role */
  RouteSet = "RouteSet",
  /** The database upgrade */
  DatabaseUpgrade = "DatabaseUpgrade",
  /** The database migrate */
  DatabaseMigrate = "DatabaseMigrate",
  /** The export database role */
  ExportDatabase = "ExportDatabase",
  /** The import database role */
  ImportDatabase = "ImportDatabase",
  /** The server upgrade role */
  ServerUpgrade = "ServerUpgrade",
  /** The set company Guid role */
  SysSetCompanyGUID = "SysSetCompanyGUID",
  /** The system settings set role */
  SysSettingsSetAll = "SysSettingsSetAll",
  /** The event removal role */
  EventRemove = "EventRemove",
  /** The event insertion role */
  EventInsert = "EventInsert",
  /** The event set role */
  EventSet = "EventSet",
  /** The event rule removal role */
  EventRuleRemove = "EventRuleRemove",
  /** The event rule insertion role */
  EventRuleInsert = "EventRuleInsert",
  /** The event ruleset role */
  EventRuleSet = "EventRuleSet",
  /** The event rule view role */
  EventRuleView = "EventRuleView",
  /** The event type removal role */
  EventTypeRemove = "EventTypeRemove",
  /** The event type insertion role */
  EventTypeInsert = "EventTypeInsert",
  /** The event type set role */
  EventTypeSet = "EventTypeSet",
  /** The exception rule view role */
  ExceptionRuleView = "ExceptionRuleView",
  /** The exception rule removal role */
  ExceptionRuleRemove = "ExceptionRuleRemove",
  /** The exception rule insertion role */
  ExceptionRuleInsert = "ExceptionRuleInsert",
  /** The exception ruleset role */
  ExceptionRuleSet = "ExceptionRuleSet",
  /** The distribution ListView */
  DistributionListView = "DistributionListView",
  /** The distribution list removal role */
  DistributionListRemove = "DistributionListRemove",
  /** The distribution list insertion role */
  DistributionListInsert = "DistributionListInsert",
  /** The distribution list set role */
  DistributionListSet = "DistributionListSet",
  /** The uom removal role */
  UomRemove = "UomRemove",
  /** The uom insertion role */
  UomInsert = "UomInsert",
  /** The uom set role */
  UomSet = "UomSet",
  /** The diagnostic view role */
  DiagnosticView = "DiagnosticView",
  /** The diagnostic removal role */
  DiagnosticRemove = "DiagnosticRemove",
  /** The diagnostic insertion role */
  DiagnosticInsert = "DiagnosticInsert",
  /** The diagnostic set role */
  DiagnosticSet = "DiagnosticSet",
  /** The failure mode view role */
  FailureModeView = "FailureModeView",
  /** The failure mode removal role */
  FailureModeRemove = "FailureModeRemove",
  /** The failure mode insertion role */
  FailureModeInsert = "FailureModeInsert",
  /** The failure mode set role */
  FailureModeSet = "FailureModeSet",
  /** The work times view role */
  WorkTimesView = "WorkTimesView",
  /** The work times removal role */
  WorkTimesRemove = "WorkTimesRemove",
  /** The work times insertion role */
  WorkTimesInsert = "WorkTimesInsert",
  /** The work times set role */
  WorkTimesSet = "WorkTimesSet",
  /** The work holidays view role */
  WorkHolidaysView = "WorkHolidaysView",
  /** The work holidays removal role */
  WorkHolidaysRemove = "WorkHolidaysRemove",
  /** The work holidays insertion role */
  WorkHolidaysInsert = "WorkHolidaysInsert",
  /** The work holidays set role */
  WorkHolidaysSet = "WorkHolidaysSet",
  /** The engine type view role */
  EngineTypeView = "EngineTypeView",
  /** The engine type removal role */
  EngineTypeRemove = "EngineTypeRemove",
  /** The engine type insertion role */
  EngineTypeInsert = "EngineTypeInsert",
  /** The engine type set role */
  EngineTypeSet = "EngineTypeSet",
  /** The flash code removal role */
  FlashCodeRemove = "FlashCodeRemove",
  /** The flash code insertion role */
  FlashCodeInsert = "FlashCodeInsert",
  /** The flash code set role */
  FlashCodeSet = "FlashCodeSet",
  /** The archived device removal role */
  HistoricDeviceRemove = "HistoricDeviceRemove",
  /** The archived device insertion role */
  HistoricDeviceInsert = "HistoricDeviceInsert",
  /** The archived device set role */
  HistoricDeviceSet = "HistoricDeviceSet",
  /** The archived device make archived */
  HistoricDeviceMakeHistoric = "HistoricDeviceMakeHistoric",
  /** The archived device un make archived */
  HistoricDeviceUnMakeHistoric = "HistoricDeviceUnMakeHistoric",
  /** The edl set role */
  EdlSet = "EdlSet",
  /** The edl insertion role */
  EdlInsert = "EdlInsert",
  /** The edl removal role */
  EdlRemove = "EdlRemove",
  /** The hos log removal role */
  HosLogRemove = "HosLogRemove",
  /** The hos log add */
  HosLogAdd = "HosLogAdd",
  /** The hos log edit */
  HosLogEdit = "HosLogEdit",
  /** The dvir log add */
  DvirLogAdd = "DvirLogAdd",
  /** The dvir log set role */
  DvirLogSet = "DvirLogSet",
  /** The dvir log removal role */
  DvirLogRemove = "DvirLogRemove",
  /** The process manual update */
  ProcessManualUpdate = "ProcessManualUpdate",
  /** The radio set role */
  RadioSet = "RadioSet",
  /** The Report Audit Log role */
  ReportAuditLog = "ReportAuditLog",
  /** The Report Speed Profile role */
  ReportSpeedProfile = "ReportSpeedProfile",
  /** The Report Congregation role */
  ReportCongregation = "ReportCongregation",
  /** The Report Customer Visits Detail role */
  ReportCustomerVisitsDetail = "ReportCustomerVisitsDetail",
  /** The Report Customer Visits Summary role */
  ReportCustomerVisitsSummary = "ReportCustomerVisitsSummary",
  /** The Report DVIR Log role */
  ReportDVIRLog = "ReportDVIRLog",
  /** The Report Debug role */
  ReportDebug = "ReportDebug",
  /** The Report Device Install History role */
  ReportDeviceInstallHistory = "ReportDeviceInstallHistory",
  /** The Report Device role */
  ReportDevice = "ReportDevice",
  /** The Report Diagnostic List role */
  ReportDiagnosticList = "ReportDiagnosticList",
  /** The Report Engine Fault role */
  ReportEngineFault = "ReportEngineFault",
  /** The Report Engine Status role */
  ReportEngineStatus = "ReportEngineStatus",
  /** The Report Engine Summary role */
  ReportEngineSummary = "ReportEngineSummary",
  /** The Report Engine History role */
  ReportEventHistory = "ReportEventHistory",
  /** The Report Event Rule Device role */
  ReportEventRuleDevice = "ReportEventRuleDevice",
  /** The Report Exceptions Detail role */
  ReportExceptionsDetail = "ReportExceptionsDetail",
  /** The Report Exceptions Summary role */
  ReportExceptionsSummary = "ReportExceptionsSummary",
  /** The Report Fill Ups role */
  ReportFillUps = "ReportFillUps",
  /** The Report Fuel Tax role */
  ReportFuelTax = "ReportFuelTax",
  /** The Report Engine Status Statistics role */
  ReportEngineStatusStatistics = "ReportEngineStatusStatistics",
  /** The Report Groups List role */
  ReportGroupsList = "ReportGroupsList",
  /** The Report HOS Logs role */
  ReportHosLogs = "ReportHosLogs",
  /** The Report HOS Violation role */
  ReportHosViolation = "ReportHosViolation",
  /** The Report Notification role */
  ReportNotification = "ReportNotification",
  /** The Report Reminders role */
  ReportReminders = "ReportReminders",
  /** The Report Risk Management role */
  ReportRiskManagement = "ReportRiskManagement",
  /** The Report Route Comparison Detail role */
  ReportRouteComparisonDetail = "ReportRouteComparisonDetail",
  /** The Report Route Direction role */
  ReportRouteDirection = "ReportRouteDirection",
  /** The Report Route Summary role */
  ReportRouteSummary = "ReportRouteSummary",
  /** The Report Text Message role */
  ReportTextMessage = "ReportTextMessage",
  /** The Report Time Card role */
  ReportTimeCard = "ReportTimeCard",
  /** The Report Trips Detail role */
  ReportTripsDetail = "ReportTripsDetail",
  /** The Report Trips Summary role */
  ReportTripsSummary = "ReportTripsSummary",
  /** The Report Unassigned Route role */
  ReportUnassignedRoute = "ReportUnassignedRoute",
  /** The Report User List role */
  ReportUserList = "ReportUserList",
  /** The Report Zone List role */
  ReportZoneList = "ReportZoneList",
  /** The Report Exceptions Summary Graph role */
  ReportExceptionsSummaryGraph = "ReportExceptionsSummaryGraph",
  /** The Report TripsIdling Summary Graph role */
  ReportTripsIdlingSummaryGraph = "ReportTripsIdlingSummaryGraph",
  /** The Report Fleet Summary Graph role */
  ReportFleetSummaryGraph = "ReportFleetSummaryGraph",
  /** The Report Customer Stop Graph role */
  ReportCustomerStopGraph = "ReportCustomerStopGraph",
  /** The ReportTrips Density Summary Graph role */
  ReportTripsDensitySummaryGraph = "ReportTripsDensitySummaryGraph",
  /** The map view role */
  ShowMap = "ShowMap",
  /** The purge role */
  Purge = "Purge",
  /** The usb radio downloader removal role */
  UsbRadioDownloaderRemove = "UsbRadioDownloaderRemove",
  /** The excel report view role */
  ExcelReportView = "ExcelReportView",
  /** The excel report removal role */
  ExcelReportRemove = "ExcelReportRemove",
  /** The excel report edit role */
  ExcelReportEdit = "ExcelReportEdit",
  /** The excel report insertion role */
  ExcelReportInsert = "ExcelReportInsert",
  /** The key creation role */
  KeyCreate = "KeyCreate",
  /** The key backup role */
  KeyBackup = "KeyBackup",
  /** The key restore role */
  KeyRestore = "KeyRestore",
  /** The key data download role */
  KeyDataDownload = "KeyDataDownload",
  /** The user login role */
  UserLogin = "UserLogin",
  /** The user logout role */
  UserLogoff = "UserLogoff",
  /** The user login failure role */
  UserLoginFailure = "UserLoginFailure",
  /** The user lock out role */
  UserLockout = "UserLockout",
  /** The user unlocked role */
  UserUnlocked = "UserUnlocked",
  /** The request location */
  RequestLocation = "RequestLocation",
  /** The GPS text message send role */
  GpsTextMessageSend = "GpsTextMessageSend",
  /** The GPS text message deletion role */
  GpsTextMessageDelete = "GpsTextMessageDelete",
  /** The GPS text message view role */
  GpsTextMessageView = "GpsTextMessageView",
  /** The notification view role */
  NotificationView = "NotificationView",
  /** The notifications dismiss */
  NotificationsDismiss = "NotificationsDismiss",
  /** The notification template view role */
  NotificationTemplateView = "NotificationTemplateView",
  /** The notification template removal role */
  NotificationTemplateRemove = "NotificationTemplateRemove",
  /** The notification template set role */
  NotificationTemplateSet = "NotificationTemplateSet",
  /** The notification template insertion role */
  NotificationTemplateInsert = "NotificationTemplateInsert",
  /** The node view role */
  NodeView = "NodeView",
  /** The node removal role */
  NodeRemove = "NodeRemove",
  /** The node set role */
  NodeSet = "NodeSet",
  /** The node insertion role */
  NodeInsert = "NodeInsert",
  /** The security group view role */
  SecurityGroupView = "SecurityGroupView",
  /** The key insertion role */
  KeyInsert = "KeyInsert",
  /** The trailer view role */
  TrailerView = "TrailerView",
  /** The trailer removal role */
  TrailerRemove = "TrailerRemove",
  /** The trailer set role */
  TrailerSet = "TrailerSet",
  /** The trailer insertion role */
  TrailerInsert = "TrailerInsert",
  /** The driver change removal role */
  DriverChangeRemove = "DriverChangeRemove",
  /** The driver change insertion role */
  DriverChangeInsert = "DriverChangeInsert",
  /** The custom report schedule insertion role */
  CustomReportScheduleInsert = "CustomReportScheduleInsert",
  /** The custom report schedule set role */
  CustomReportScheduleSet = "CustomReportScheduleSet",
  /** The custom report schedule removal role */
  CustomReportScheduleRemove = "CustomReportScheduleRemove",
  /** The custom report send error */
  CustomReportSendError = "CustomReportSendError",
  /** The fuel transaction view role */
  FuelTransactionView = "FuelTransactionView",
  /** The fuel transaction removal role */
  FuelTransactionRemove = "FuelTransactionRemove",
  /** The fuel transaction insertion role */
  FuelTransactionInsert = "FuelTransactionInsert",
  /** The fuel transaction set role */
  FuelTransactionSet = "FuelTransactionSet",
  /** The posted road speed set role */
  PostedRoadSpeedSet = "PostedRoadSpeedSet",
  /** The fill ups graph */
  FillUpsGraph = "FillUpsGraph",
  /** The misc page view role */
  MiscPageView = "MiscPageView",
  /** The about view role */
  AboutView = "AboutView",
  /** The dashboard view role */
  DashboardView = "DashboardView",
  /** The radio downloader view role */
  RadioDownloaderView = "RadioDownloaderView",
  /** The fuel transaction import */
  FuelTransactionImport = "FuelTransactionImport",
  /** The drive lock user cleared */
  DriveLockUserCleared = "DriveLockUserCleared",
  /** Password reset request */
  PasswordResetRequest = "PasswordResetRequest",
  /** The defect group view role */
  DefectGroupView = "DefectGroupView",
  /** The {@link ICertificate} insertion role */
  CertificateInsert = "CertificateInsert",
  /** The {@link ICertificate} removal role */
  CertificateRemove = "CertificateRemove",
  /** The {@link ICertificate} set role */
  CertificateSet = "CertificateSet",
  /** The {@link IDutyStatusAvailability} reporting role */
  ReportHosAvailability = "ReportHosAvailability",
  /** The {@link ITripTypeChange} insertion role */
  TripTypeChangeInsert = "TripTypeChangeInsert",
  /** The {@link ITripTypeChange} removal role */
  TripTypeChangeRemove = "TripTypeChangeRemove",
  /** The reassign data view role */
  ReassignData = "ReassignData",
  /** The {@link IShipmentLog} insertion role */
  ShipmentLogInsert = "ShipmentLogInsert",
  /** The {@link IShipmentLog} set role */
  ShipmentLogSet = "ShipmentLogSet",
  /** The {@link IShipmentLog} removal role */
  ShipmentLogRemove = "ShipmentLogRemove",
  /** The {@link ITrailerAttachment} attachment role */
  TrailerAttachmentInsert = "TrailerAttachmentInsert",
  /** The {@link ITrailerAttachment} set role */
  TrailerAttachmentSet = "TrailerAttachmentSet",
  /** The {@link ITrailerAttachment} removal role */
  TrailerAttachmentRemove = "TrailerAttachmentRemove",
  /** The SupportTicket insert role */
  SupportTicketInsert = "SupportTicketInsert",
  /** The TrainingTicket insert role */
  TrainingTicketInsert = "TrainingTicketInsert",
  /** The SupportTicket update role */
  SupportTicketSet = "SupportTicketSet",
  /** The TrainingTicket update role */
  TrainingTicketSet = "TrainingTicketSet",
  /** The EmailSent role */
  EmailSent = "EmailSent",
  /** The skip verify {@link IDutyStatusLog} role */
  SkipHosVerify = "SkipHosVerify",
  /** The skip claim unassigned {@link IDutyStatusLog} role */
  SkipHosClaimUnassigned = "SkipHosClaimUnassigned",
  /** The skip {@link IDVIRLog} inspection role */
  SkipDvirInspect = "SkipDvirInspect",
  /** The ELD Data Transfer role */
  ELDDataTransfer = "ELDDataTransfer",
  /** The credits view role */
  CreditsView = "CreditsView",
  /** The charging events report role */
  ReportchargeEvent = "ReportchargeEvent",
  /** Hardware purchase role. */
  HardwarePurchase = "HardwarePurchase",
  /** The Media File view role */
  MediaFileView = "MediaFileView",
  /** The Media File removal role */
  MediaFileRemove = "MediaFileRemove",
  /** The Media File insertion role */
  MediaFileInsert = "MediaFileInsert",
  /** The Media File set role */
  MediaFileSet = "MediaFileSet",
  /** The Media File upload role */
  MediaFileUpload = "MediaFileUpload",
  /** The wifi view role */
  WiFiView = "WiFiView",
  /** The wifi removal role */
  WiFiRemove = "WiFiRemove",
  /** The wifi set role */
  WiFiSet = "WiFiSet",
  /** The wifi insertion role */
  WiFiInsert = "WiFiInsert",
  /** The UserSupport insertion role */
  UserSupportInsert = "UserSupportInsert",
  /** The UserSupport removal role */
  UserSupportRemove = "UserSupportRemove",
  /** The Material Management report role */
  MaterialManagement = "MaterialManagement",
}
