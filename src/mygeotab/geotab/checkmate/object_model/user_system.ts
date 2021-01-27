/* eslint-disable @typescript-eslint/no-empty-interface */
import { IUser } from '../../../geotab/checkmate/object_model/i_user';
import { IGroup } from '../../../geotab/checkmate/object_model/i_group';



/** Base class for all system user types. */
export interface IUserSystem extends IUser
{
  /** Gets or sets the list of organization (s) that the user belongs to. */
  companyGroups: IGroup[];
  /** Gets or sets the unique identifier for this entity. see . */
  id: string;
  /**
  * Gets or sets the name of this entity that uniquely identifies it and is used when
  * displaying this entity. The name cannot be changed for this user.
  */
  name: string;
  /** Gets or sets the private (s) that the user belongs to. */
  privateUserGroups: IGroup[];
  /** Gets or sets the (s) for reporting that this user belongs to. */
  reportGroups: IGroup[];
  /** Gets or sets the security (s) this user belongs to defining the users access. */
  securityGroups: IGroup[];
  /**
  * @inheritdoc
  */
  version?: number;
}
