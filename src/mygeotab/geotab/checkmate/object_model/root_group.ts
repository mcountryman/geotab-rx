/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISystemGroupBase } from '../../../geotab/checkmate/object_model/i_system_group_base';



/** This is a system group see that is the root of all groups. */
export interface IRootGroup extends ISystemGroupBase
{
  /** Gets the unique identifier for this entity. see . */
  id: string;
  /** Gets the name of this system group. Cannot be set. */
  name: string;
}
