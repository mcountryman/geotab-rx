/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from "../../search";
import { IDisplayMeasurementProfileSearch } from "../../engine/display_diagnostic/display_measurement_profile_search";
import { IDiagnosticSearch } from "../../engine/diagnostic_search";

/**
 * The object used to specify the arguments when searching for a . When searching for
 * DisplayMeasurementDProfileDetails including DisplayMeasurementProfileSearch and
 * DiagnosticSearch<br> the system will return all records that match the search criteria.<br>
 * This search has been designed to work efficiently with these combinations of parameters:IdDisplayMeasurementProfileSearch
 * + DiagnosticSearch
 */
export interface IDisplayMeasurementProfileDetailSearch extends ISearch {
  /**
   * Gets or sets search for DisplayProfileDetail with this {@link IDiagnosticSearch}
   * Id. Available DiagnosticSearch options are: Id
   */
  diagnosticSearch?: IDiagnosticSearch;
  /**
   * Gets or sets search for DisplayProfileDetail with this {@link IDisplayMeasurementProfileSearch}
   * Id. Available DisplayMeasurementProfileSearch options are: Id
   */
  displayMeasurementProfileSearch?: IDisplayMeasurementProfileSearch;
}
