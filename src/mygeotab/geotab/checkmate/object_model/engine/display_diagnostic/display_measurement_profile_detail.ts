/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntityWithVersion } from '../../../../../geotab/checkmate/object_model/i_entity_with_version';
import { IDisplayUnitOfMeasure } from '../../../../../geotab/checkmate/object_model/engine/display_diagnostic/i_display_unit_of_measure';



/**
*  Class to track a single DisplayUnitOfMeasure for a given DisplayMeasurementProfile.
*
* @deprecated
*/
export interface IDisplayMeasurementProfileDetail extends IEntityWithVersion
{
  /** Gets or Sets the Identifier of the related Diagnostic. */
  diagnosticId: string;
  /** Gets or sets the matched to the base diagnostic {@link IId} for the profile. */
  displayUnitOfMeasure: IDisplayUnitOfMeasure;
  /** Gets or sets the Identifier of the related profile. */
  profileId: string;
}
