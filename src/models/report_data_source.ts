/* eslint-disable @typescript-eslint/no-empty-interface */

/** Used to specify the type of the report template. */
export enum ReportDataSource {
  /** Trips detail report */
  TripsDetail = "TripsDetail",
  /** Risk management report */
  RiskManagement = "RiskManagement",
  /** Exceptions Details report */
  ExceptionsDetail = "ExceptionsDetail",
  /** Debug report */
  Debug = "Debug",
  /** Exceptions Summary report */
  ExceptionsSummary = "ExceptionsSummary",
  /** Trips Summary report */
  TripsSummary = "TripsSummary",
  /** Time card report */
  TimeCard = "TimeCard",
  /** Audit Log list */
  AuditLog = "AuditLog",
  /** Users List */
  UserList = "UserList",
  /** Diagnostic list */
  DiagnosticList = "DiagnosticList",
  /** Customer visit detail report */
  CustomerVisitsDetail = "CustomerVisitsDetail",
  /** Customer visit summary report */
  CustomerVisitsSummary = "CustomerVisitsSummary",
  /** Route summary report */
  RouteSummary = "RouteSummary",
  /** Unassigned route report */
  UnassignedRoute = "UnassignedRoute",
  /** Notification list */
  Notification = "Notification",
  /** Fuel tax report */
  FuelTax = "FuelTax",
  /** Zones List */
  ZoneList = "ZoneList",
  /** Congregation report */
  Congregation = "Congregation",
  /** Engine summary report */
  EngineSummary = "EngineSummary",
  /** Engine fault summary report */
  EngineFault = "EngineFault",
  /** Engine status summary report */
  EngineStatus = "EngineStatus",
  /** Device report */
  Device = "Device",
  /** Route direction report */
  RouteDirections = "RouteDirections",
  /** Reminder report */
  Reminder = "Reminder",
  /** EventRule device report */
  EventRuleDevice = "EventRuleDevice",
  /** Event history report */
  EventHistory = "EventHistory",
  /** Groups list */
  GroupsList = "GroupsList",
  /** Key usage report (DEPRECATED) */
  DeviceInstallHistory = "DeviceInstallHistory",
  /** Time performance report (DEPRECATED) */
  EngineStatusStatistics = "EngineStatusStatistics",
  /** Text Message. */
  TextMessage = "TextMessage",
  /** Route Comparison report. */
  RouteComparisonDetail = "RouteComparisonDetail",
  /** HOS drivers log report. */
  HosLog = "HosLog",
  /** Driver Vehicle Inspection Report. */
  DVIRLog = "DVIRLog",
  /** HOS violation */
  HosViolation = "HosViolation",
  /** Exceptions Summary Graph */
  ExceptionsSummaryGraph = "ExceptionsSummaryGraph",
  /** Trips Idling Summary Graph */
  TripsIdlingSummaryGraph = "TripsIdlingSummaryGraph",
  /** Fleet Summary Graph */
  FleetSummaryGraph = "FleetSummaryGraph",
  /** Customer Stop Graph */
  CustomerStopGraph = "CustomerStopGraph",
  /** Trips Density Summary Graph. */
  TripsDensitySummaryGraph = "TripsDensitySummaryGraph",
  /** Fill-ups report */
  FillUps = "FillUps",
  /** HOS availability */
  HosAvailability = "HosAvailability",
  /** Charging events */
  ChargeEvent = "ChargeEvent",
  /** Material management report */
  MaterialManagement = "MaterialManagement",
}
