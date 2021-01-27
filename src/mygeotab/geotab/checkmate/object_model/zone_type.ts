/* eslint-disable @typescript-eslint/no-empty-interface */
import { INameEntity } from '../../../geotab/checkmate/object_model/i_name_entity';



/** The type of the zone. */
export interface IZoneType extends INameEntity
{
  /**
  * Gets or sets a free text field where any user information can be stored and referenced
  * for this entity. Default [""].
  */
  comment: string;
}
