/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from "../../search";

/** The object used to specify the arguments when searching for a . */
export interface IDisplayMeasurementProfileSearch extends ISearch {
  /**
   * Gets or sets whether or not to include corresponding DisplayMeasurementProfileDetails.
   * It can only be used when the number of returned profiles is limited by id or resultsLimit.
   */
  includeDetails?: boolean;
}
