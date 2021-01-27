/* eslint-disable @typescript-eslint/no-empty-interface */
import { INameEntity } from '../../../geotab/checkmate/object_model/i_name_entity';



/** An entity with a name and a version. */
export interface INameEntityWithVersion extends INameEntity
{
  /** Gets or sets the version of the entity. */
  version?: number;
}
