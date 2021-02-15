import type { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IAddInData } from "./models/add_in_data";
import { IAddInDataSearch } from "./models/add_in_data_search";
import { IAnnotationLog } from "./models/annotation_log";
import { IAnnotationLogSearch } from "./models/annotation_log_search";
import { IAudit } from "./models/audit";
import { IAuditSearch } from "./models/audit_search";
import { IBinaryData } from "./models/binary_data";
import { IBinaryDataSearch } from "./models/binary_data_search";
import { ICannedDeviceResponse } from "./models/canned_device_response";
import { ICannedDeviceResponseSearch } from "./models/canned_device_response_search";
import { ICertificate } from "./models/certificate";
import { ICertificateSearch } from "./models/certificate_search";
import { IChargeEvent } from "./models/charging/charge_event";
import { IChargeEventSearch } from "./models/charging/charge_event_search";
import { ICustomData } from "./models/custom_data";
import { ICustomDataSearch } from "./models/custom_data_search";
import { IDashboard } from "./models/dashboard";
import { IDashboardSearch } from "./models/dashboard_search";
import { IDebugData } from "./models/debug_data";
import { IDebugDataSearch } from "./models/debug_data_search";
import { IDefectRemark } from "./models/defect_remark";
import { IDefectRemarkSearch } from "./models/defect_remark_search";
import { IDevice } from "./models/device";
import { IDeviceMasterFlag } from "./models/device_master_flag";
import { IDeviceMasterFlagSearch } from "./models/device_master_flag_search";
import { IDeviceSearch } from "./models/device_search";
import { IDeviceStatusInfo } from "./models/device_status_info";
import { IDeviceStatusInfoSearch } from "./models/device_status_info_search";
import { IDriverChange } from "./models/driver_change";
import { IDriverChangeSearch } from "./models/driver_change_search";
import { IDriverRegulation } from "./models/driver_regulation";
import { IDriverRegulationSearch } from "./models/driver_regulation_search";
import { IDutyStatusAvailability } from "./models/duty_status_availability";
import { IDutyStatusAvailabilitySearch } from "./models/duty_status_availability_search";
import { IDutyStatusLog } from "./models/duty_status_log";
import { IDutyStatusLogSearch } from "./models/duty_status_log_search";
import { IDutyStatusViolation } from "./models/duty_status_violation";
import { IDutyStatusViolationSearch } from "./models/duty_status_violation_search";
import { IDVIRDefect } from "./models/d_v_i_r_defect";
import { IDVIRDefectSearch } from "./models/d_v_i_r_defect_search";
import { IDVIRLog } from "./models/d_v_i_r_log";
import { IDVIRLogSearch } from "./models/d_v_i_r_log_search";
import { IController } from "./models/engine/controller";
import { IControllerSearch } from "./models/engine/controller_search";
import { IDiagnostic } from "./models/engine/diagnostic";
import { IDiagnosticSearch } from "./models/engine/diagnostic_search";
import { IEngineType } from "./models/engine/engine_type";
import { IEngineTypeSearch } from "./models/engine/engine_type_search";
import { IFailureMode } from "./models/engine/failure_mode";
import { IFailureModeSearch } from "./models/engine/failure_mode_search";
import { IFaultData } from "./models/engine/fault_data";
import { IFaultDataSearch } from "./models/engine/fault_data_search";
import { IParameterGroup } from "./models/engine/parameter_group";
import { IParameterGroupSearch } from "./models/engine/parameter_group_search";
import { ISource } from "./models/engine/source";
import { ISourceSearch } from "./models/engine/source_search";
import { IStatusData } from "./models/engine/status_data";
import { IStatusDataSearch } from "./models/engine/status_data_search";
import { IUnitOfMeasure } from "./models/engine/unit_of_measure";
import { IUnitOfMeasureSearch } from "./models/engine/unit_of_measure_search";
import { IExceptionEvent } from "./models/exceptions/exception_event";
import { IExceptionEventSearch } from "./models/exceptions/exception_event_search";
import { IRule } from "./models/exceptions/rule";
import { IRuleSearch } from "./models/exceptions/rule_search";
import { IMediaFile } from "./models/files/media_file";
import { IMediaFileSearch } from "./models/files/media_file_search";
import { IFuelTransaction } from "./models/fuel/fuel_transaction";
import { IFuelTransactionSearch } from "./models/fuel/fuel_transaction_search";
import { IFuelUpEvent } from "./models/fuel/fuel_up_event";
import { IFuelUpEventSearch } from "./models/fuel/fuel_up_event_search";
import { IFuelUsed } from "./models/fuel/fuel_used";
import { IFuelUsedSearch } from "./models/fuel/fuel_used_search";
import { IFuelTaxDetail } from "./models/fuel_tax_detail";
import { IFuelTaxDetailSearch } from "./models/fuel_tax_detail_search";
import { IGroup } from "./models/group";
import { IGroupSearch } from "./models/group_search";
import { IGroupSecurity } from "./models/group_security";
import { IGroupSecuritySearch } from "./models/group_security_search";
import { IIoxAddOn } from "./models/iox_add_on";
import { IIoxAddOnSearch } from "./models/iox_add_on_search";
import { ILogRecord } from "./models/log_record";
import { ILogRecordSearch } from "./models/log_record_search";
import { ILogRecordZoneDistance } from "./models/log_record_zone_distance";
import { ILogRecordZoneDistanceSearch } from "./models/log_record_zone_distance_search";
import { IReportStorage } from "./models/report_storage";
import { IReportStorageSearch } from "./models/report_storage_search";
import { IRoute } from "./models/route";
import { IRouteSearch } from "./models/route_search";
import { IShipmentLog } from "./models/shipment_log";
import { IShipmentLogSearch } from "./models/shipment_log_search";
import { ITextMessage } from "./models/text_message";
import { ITextMessageSearch } from "./models/text_message_search";
import { ITrailer } from "./models/trailer";
import { ITrailerAttachment } from "./models/trailer_attachment";
import { ITrailerAttachmentSearch } from "./models/trailer_attachment_search";
import { ITrailerSearch } from "./models/trailer_search";
import { ITrip } from "./models/trip";
import { ITripSearch } from "./models/trip_search";
import { ITripTypeChange } from "./models/trip_type_change";
import { ITripTypeChangeSearch } from "./models/trip_type_change_search";
import { IUser } from "./models/user";
import { IUserHosRuleSet } from "./models/user_hos_rule_set";
import { IUserHosRuleSetSearch } from "./models/user_hos_rule_set_search";
import { IUserSearch } from "./models/user_search";
import { IVehicleConfiguration } from "./models/vehicle_configuration";
import { IVehicleConfigurationSearch } from "./models/vehicle_configuration_search";
import { IWorkHoliday } from "./models/work_holiday";
import { IWorkHolidaySearch } from "./models/work_holiday_search";
import { IWorkTime } from "./models/work_time";
import { IWorkTimeSearch } from "./models/work_time_search";
import { IZone } from "./models/zone";
import { IZoneSearch } from "./models/zone_search";
import { Repo } from "./repository/types";
import { IRpcClientOpts, RpcClient } from "./rpc/client";

export const PATHED_END_POINT = "https://{{path}}/apiv1";
export const DEFAULT_END_POINT = "https://my.geotab.com/apiv1";

export interface IGeotabOpts extends Omit<IRpcClientOpts, "endPoint" | "credentials"> {
  pollIntervalMs?: number;
}
export class Geotab extends RpcClient {
  public getIsAuthenticated(): boolean {
    return this.credentials$.getValue() !== undefined;
  }

  public getIsAuthenticated$(): Observable<boolean> {
    return this.credentials$.pipe(map((value) => !!value));
  }

  /** {@inheritDoc IZone} */
  readonly zones = this.r<IZone, IZoneSearch>("Zone");

  /** {@inheritDoc IWorkTime} */
  readonly workTimes = this.r<IWorkTime, IWorkTimeSearch>("WorkTime");

  /** {@inheritDoc IDashboard} */
  readonly dashboards = this.r<IDashboard, IDashboardSearch>("Dashboard");

  /** {@inheritDoc IMediaFile} */
  readonly mediaFiles = this.r<IMediaFile, IMediaFileSearch>("MediaFile");

  /** {@inheritDoc IDVIRDefect} */
  readonly dvirDefects = this.r<IDVIRDefect, IDVIRDefectSearch>("DVIRDefect");

  /** {@inheritDoc ITextMessage} */
  readonly textMessages = this.r<ITextMessage, ITextMessageSearch>("TextMessage");

  /** {@inheritDoc IChargeEvent} */
  readonly chargeEvents = this.r<IChargeEvent, IChargeEventSearch>("ChargeEvent");

  /** {@inheritDoc IAddInData} */
  readonly addInData = this.r<IAddInData, IAddInDataSearch>("AddInData");

  /** {@inheritDoc ILogRecordZoneDistance} */
  readonly logRecordZoneDistances = this.r<
    ILogRecordZoneDistance,
    ILogRecordZoneDistanceSearch
  >("LogRecordZoneDistance");

  /** {@inheritDoc IUser} */
  readonly users = this.r<IUser, IUserSearch>("User");

  /** {@inheritDoc IReportStorage} */
  readonly reportStorages = this.r<IReportStorage, IReportStorageSearch>("ReportStorage");

  /** {@inheritDoc ITrailerAttachment} */
  readonly trailerAttachments = this.r<ITrailerAttachment, ITrailerAttachmentSearch>(
    "TrailerAttachment"
  );

  /** {@inheritDoc IFaultData} */
  readonly faultData = this.r<IFaultData, IFaultDataSearch>("FaultData");

  /** {@inheritDoc IController} */
  readonly controllers = this.r<IController, IControllerSearch>("Controller");

  /** {@inheritDoc ISource} */
  readonly sources = this.r<ISource, ISourceSearch>("Source");

  /** {@inheritDoc IDiagnostic} */
  readonly diagnostics = this.r<IDiagnostic, IDiagnosticSearch>("Diagnostic");

  /** {@inheritDoc IParameterGroup} */
  readonly parameterGroups = this.r<IParameterGroup, IParameterGroupSearch>(
    "ParameterGroup"
  );

  /** {@inheritDoc IEngineType} */
  readonly engineTypes = this.r<IEngineType, IEngineTypeSearch>("EngineType");

  /** {@inheritDoc IStatusData} */
  readonly statusData = this.r<IStatusData, IStatusDataSearch>("StatusData");

  /** {@inheritDoc IFailureMode} */
  readonly failureModes = this.r<IFailureMode, IFailureModeSearch>("FailureMode");

  /** {@inheritDoc ITrailer} */
  readonly trailers = this.r<ITrailer, ITrailerSearch>("Trailer");

  /** {@inheritDoc IUnitOfMeasure} */
  readonly unitOfMeasures = this.r<IUnitOfMeasure, IUnitOfMeasureSearch>("UnitOfMeasure");

  /** {@inheritDoc IAudit} */
  readonly audits = this.r<IAudit, IAuditSearch>("Audit");

  /** {@inheritDoc IDVIRLog} */
  readonly dvirLogs = this.r<IDVIRLog, IDVIRLogSearch>("DVIRLog");

  /** {@inheritDoc ICustomData} */
  readonly customData = this.r<ICustomData, ICustomDataSearch>("CustomData");

  /** {@inheritDoc IDefectRemark} */
  readonly defectRemarks = this.r<IDefectRemark, IDefectRemarkSearch>("DefectRemark");

  /** {@inheritDoc IDutyStatusLog} */
  readonly dutyStatusLogs = this.r<IDutyStatusLog, IDutyStatusLogSearch>("DutyStatusLog");

  /** {@inheritDoc IWorkHoliday} */
  readonly workHolidays = this.r<IWorkHoliday, IWorkHolidaySearch>("WorkHoliday");

  /** {@inheritDoc IDriverChange} */
  readonly driverChanges = this.r<IDriverChange, IDriverChangeSearch>("DriverChange");

  /** {@inheritDoc ICannedDeviceResponse} */
  readonly cannedDeviceResponses = this.r<
    ICannedDeviceResponse,
    ICannedDeviceResponseSearch
  >("CannedDeviceResponse");

  /** {@inheritDoc IVehicleConfiguration} */
  readonly vehicleConfigurations = this.r<
    IVehicleConfiguration,
    IVehicleConfigurationSearch
  >("VehicleConfiguration");

  /** {@inheritDoc IShipmentLog} */
  readonly shipmentLogs = this.r<IShipmentLog, IShipmentLogSearch>("ShipmentLog");

  /** {@inheritDoc IFuelTaxDetail} */
  readonly fuelTaxDetails = this.r<IFuelTaxDetail, IFuelTaxDetailSearch>("FuelTaxDetail");

  /** {@inheritDoc IRule} */
  readonly rules = this.r<IRule, IRuleSearch>("Rule");

  /** {@inheritDoc IGroupSecurity} */
  readonly groupSecurities = this.r<IGroupSecurity, IGroupSecuritySearch>(
    "GroupSecurity"
  );

  /** {@inheritDoc IExceptionEvent} */
  readonly exceptionEvents = this.r<IExceptionEvent, IExceptionEventSearch>(
    "ExceptionEvent"
  );

  /** {@inheritDoc ICertificate} */
  readonly certificates = this.r<ICertificate, ICertificateSearch>("Certificate");

  /** {@inheritDoc ILogRecord} */
  readonly logRecords = this.r<ILogRecord, ILogRecordSearch>("LogRecord");

  /** {@inheritDoc IIoxAddOn} */
  readonly ioxAddOns = this.r<IIoxAddOn, IIoxAddOnSearch>("IoxAddOn");

  /** {@inheritDoc IUserHosRuleSet} */
  readonly userHosRuleSets = this.r<IUserHosRuleSet, IUserHosRuleSetSearch>(
    "UserHosRuleSet"
  );

  /** {@inheritDoc IDutyStatusAvailability} */
  readonly dutyStatusAvailabilities = this.r<
    IDutyStatusAvailability,
    IDutyStatusAvailabilitySearch
  >("DutyStatusAvailability");

  /** {@inheritDoc ITrip} */
  readonly trips = this.r<ITrip, ITripSearch>("Trip");

  /** {@inheritDoc IDeviceStatusInfo} */
  readonly deviceStatusInfos = this.r<IDeviceStatusInfo, IDeviceStatusInfoSearch>(
    "DeviceStatusInfo"
  );

  /** {@inheritDoc IBinaryData} */
  readonly binaryData = this.r<IBinaryData, IBinaryDataSearch>("BinaryData");

  /** {@inheritDoc IDevice} */
  readonly devices = this.r<IDevice, IDeviceSearch>("Device");

  /** {@inheritDoc IRoute} */
  readonly routes = this.r<IRoute, IRouteSearch>("Route");

  /** {@inheritDoc IDriverRegulation} */
  readonly driverRegulations = this.r<IDriverRegulation, IDriverRegulationSearch>(
    "DriverRegulation"
  );

  /** {@inheritDoc ITripTypeChange} */
  readonly tripTypeChanges = this.r<ITripTypeChange, ITripTypeChangeSearch>(
    "TripTypeChange"
  );

  /** {@inheritDoc IGroup} */
  readonly groups = this.r<IGroup, IGroupSearch>("Group");

  /** {@inheritDoc IDeviceMasterFlag} */
  readonly deviceMasterFlags = this.r<IDeviceMasterFlag, IDeviceMasterFlagSearch>(
    "DeviceMasterFlag"
  );

  /** {@inheritDoc IFuelUpEvent} */
  readonly fuelUpEvents = this.r<IFuelUpEvent, IFuelUpEventSearch>("FuelUpEvent");

  /** {@inheritDoc IFuelUsed} */
  readonly fuelUsed = this.r<IFuelUsed, IFuelUsedSearch>("FuelUsed");

  /** {@inheritDoc IFuelTransaction} */
  readonly fuelTransactions = this.r<IFuelTransaction, IFuelTransactionSearch>(
    "FuelTransaction"
  );

  /** {@inheritDoc IAnnotationLog} */
  readonly annotationLogs = this.r<IAnnotationLog, IAnnotationLogSearch>("AnnotationLog");

  /** {@inheritDoc IDebugData} */
  readonly debugData = this.r<IDebugData, IDebugDataSearch>("DebugData");

  /** {@inheritDoc IDutyStatusViolation} */
  readonly dutyStatusViolations = this.r<
    IDutyStatusViolation,
    IDutyStatusViolationSearch
  >("DutyStatusViolation");

  constructor(opts: IGeotabOpts = {}) {
    super({ ...opts, endPoint: DEFAULT_END_POINT });

    if (opts.pollIntervalMs) {
      // this._pollInterval$.next(opts.pollIntervalMs);
    }
  }

  private r<TEntity, TSearch>(typeName: string) {
    return new Repo<TEntity, TSearch>(this, typeName);
  }
}
