/* eslint-disable @typescript-eslint/no-empty-interface */
import { IGroup } from '../../../geotab/checkmate/object_model/i_group';



/** The base class for all groups that are a system group. */
export interface ISystemGroupBase extends IGroup
{
  /** Gets or sets color used to render assets belonging to this group. */
  color: any;
  /** Gets or sets the unique identifier for this entity. see . */
  id: string;
  /**
  * Gets or sets the name of this entity that uniquely identifies it and is used when
  * displaying this entity.
  */
  name: string;
}
