/* eslint-disable @typescript-eslint/no-empty-interface */
import { IDefect } from '../../../geotab/checkmate/object_model/i_defect';



/**
* This is a with an Id of . This is the root defect group for vehicle and trailer
* defects. The children of this group are not user defined.
*/
export interface IDefectsGroup extends IDefect
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
