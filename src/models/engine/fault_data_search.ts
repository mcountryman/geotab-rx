/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from "../search";
import { IDeviceSearch } from "../device_search";
import { IDiagnosticSearch } from "../engine/diagnostic_search";
import { IGroupSearch } from "../group_search";
import { FaultState } from "../engine/fault_state";
import { IControllerSearch } from "../engine/controller_search";

/**
 *  The object used to specify the arguments when searching for a<br> .<br> This search
 * has been designed to work efficiently with these combinations of parameters:IdDeviceSearch
 * + DiagnosticSearch + FromDate and/or ToDateGroupSearch + DiagnosticSearch + FromDate
 * and/or ToDate
 */
export interface IFaultDataSearch extends ISearch {
  /**
   * Gets or sets the search options which are used to search for fault data for a controller
   * by Id. Available ControllerSearch options are:. Id
   */
  controllerSearch: IControllerSearch;
  /**
   * Gets or sets the search options which are used to search for fault data for a device
   * by Id. Available DeviceSearch options are:. Id
   */
  deviceSearch: IDeviceSearch;
  /**
   * Gets or sets search for FaultData recorded for the diagnostic code using the Id.
   * Available DiagnosticSearch options are:. IdCodeNameSourceSearch.NameSourceSearch.Id
   */
  diagnosticSearch: IDiagnosticSearch;
  /**
   * Gets or sets the from date. The FaultData logs are searched for events which were
   * recorded on or after this date.
   */
  fromDate?: Date;
  /**
   * Gets or sets the groups which should be searched. (s). Available GroupSearch options
   * are:. Id
   */
  groups: IGroupSearch[];
  /**
   * Gets or sets the to state of the fault. The Fault data logs are searched for events
   * which are under the this state.
   */
  state?: FaultState;
  /**
   * Gets or sets the to date. The Fault data logs are searched for events which were
   * recorded on or before this date.
   */
  toDate?: Date;
}
