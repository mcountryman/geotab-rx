/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from "../search";
import { IEngineTypeSearch } from "../engine/engine_type_search";
import { ISourceSearch } from "../engine/source_search";
import { DiagnosticType } from "../engine/diagnostic_type";
import { FaultResetMode } from "../engine/fault_reset_mode";

/**  The object used to specify the arguments when searching for {@link IDiagnostic}(s). */
export interface IDiagnosticSearch extends ISearch {
  /** Gets or sets search for a Diagnostic by the code number. */
  code?: number;
  /** Gets or sets the {@link IDiagnosticType} to search for in Diagnostics. */
  diagnosticType?: DiagnosticType;
  /**
   * Gets or sets search for {@link IDiagnostic}(s) with this {@link IId}. Available
   * EngineTypeSearch options are:. Id
   */
  engineTypeSearch: IEngineTypeSearch;
  /** Gets or sets the {@link IFaultResetMode} to search by. */
  faultResetMode?: FaultResetMode;
  /**
   * Gets or sets search for Diagnostics with this Name. Wildcard can be used by prepending/appending
   * "%" to string. Example "%name%".
   */
  name: string;
  /**
   * Gets or sets the {@link ISourceSearch} Id to search for in Diagnostics. Available
   * SourceSearch options are:. IdName
   */
  sourceSearch: ISourceSearch;
  /** Gets or sets the row version of the {@link IDiagnostic} search criteria. */
  version?: number;
}
