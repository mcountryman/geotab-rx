/* eslint-disable @typescript-eslint/no-empty-interface */
import { INameEntityWithVersion } from '../../../geotab/checkmate/object_model/i_name_entity_with_version';
import { IUser } from '../../../geotab/checkmate/object_model/i_user';



/**
* Entry of events, operations and issues for tracking purposes. Entries can be added
* and read but cannot be edited.
*/
export interface IAudit extends INameEntityWithVersion
{
  /**
  * Gets or sets free text field where any user information can be stored and referenced
  * for this entity.
  */
  comment: string;
  /** Gets or sets the date and time the audit was logged. */
  dateTime?: Date;
  /** Gets or sets the audit type name. */
  name: string;
  /** Gets or sets the {@link IUser} the audit is in reference to. */
  user: IUser;
  /** Gets or sets the name of the user associated with the audit entry. */
  userName: string;
}
