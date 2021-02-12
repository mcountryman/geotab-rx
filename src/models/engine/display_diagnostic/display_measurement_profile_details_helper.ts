/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from '../../entity';
import { IDisplayMeasurementProfileDetail } from '../../engine/display_diagnostic/display_measurement_profile_detail';

/**
 *  Class to track Diagnostic to DisplayUnitOfMeasure for a given DisplayMeasurementProfile.
 *
 * @deprecated
 */
export interface IDisplayMeasurementProfileDetailsHelper extends IEntity {
  /** Gets or sets the list to lookup the relevant {@link IId}. */
  displayDetails: IDisplayMeasurementProfileDetail[];
  /** Gets the KnownIds for DisplayMeasurementProfiles. */
  knownIdLookup: string[];
  /** Gets or sets the Identifier of the related profile. */
  profileId?: string;
}
