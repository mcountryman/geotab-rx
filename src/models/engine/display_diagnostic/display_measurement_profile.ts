/* eslint-disable @typescript-eslint/no-empty-interface */
import { INameEntityWithVersion } from "../../name_entity_with_version";
import { IDisplayMeasurementProfileDetailsHelper } from "../../engine/display_diagnostic/display_measurement_profile_details_helper";

/**
 *  Contains the DisplayMeasurementProfile for conversion information for each profile.
 *
 * @deprecated
 */
export interface IDisplayMeasurementProfile extends INameEntityWithVersion {
  /**
   * Gets or sets the {@link IDisplayMeasurementProfileDetailsHelper} associated with
   * the profile.
   */
  displayMeasurementProfileDetails: IDisplayMeasurementProfileDetailsHelper;
  /** Gets or sets the Identifier of the parent profile. */
  parentId?: string;
}
