/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISecurityClearance } from '../../../geotab/checkmate/object_model/i_security_clearance';



/** The base class for (s) that are system entities. */
export interface ISystemSecurityClearance extends ISecurityClearance
{
  /** Gets or sets color used to render assets belonging to this group. */
  color: any;
  /** Gets or sets retrieves the . Cannot be set. */
  id: string;
  /** Gets or sets retrieves the name. Cannot be set. */
  name: string;
}
