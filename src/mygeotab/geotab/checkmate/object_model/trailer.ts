/* eslint-disable @typescript-eslint/no-empty-interface */
import { INameEntityWithVersion } from '../../../geotab/checkmate/object_model/i_name_entity_with_version';
import { IGroup } from '../../../geotab/checkmate/object_model/i_group';



/**
*  A trailer which can be attached and detached from a vehicle with a {@link ITrailerAttachment}
* record.
*/
export interface ITrailer extends INameEntityWithVersion
{
  /**
  * Gets or sets free text field where any user information can be stored and referenced
  * for this entity. Default [""].
  */
  comment: string;
  /** Gets or sets the list of trailer groups. */
  groups: IGroup[];
  /** Gets or sets the unique {@link IId} of the trailer. */
  id: string;
  /** Gets or sets the name of the trailer. Maximum length [255]. */
  name: string;
}
