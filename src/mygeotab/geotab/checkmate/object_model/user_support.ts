/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from '../../../geotab/checkmate/object_model/i_entity';
import { IUser } from '../../../geotab/checkmate/object_model/i_user';
import { UserSupportType } from '../../../geotab/checkmate/object_model/user_support_type';



/** A user's support. */
export interface IUserSupport extends IEntity
{
  /** Gets or sets type of support for current user. */
  type: UserSupportType;
  /** Gets or sets the user. */
  user: IUser;
}
