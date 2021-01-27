/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from '../../../geotab/checkmate/object_model/i_entity';
import { IUser } from '../../../geotab/checkmate/object_model/i_user';



/** User's Login status. */
export interface IUserLoginStatus extends IEntity
{
  /** Gets or sets updated time of this record. */
  dateTime?: Date;
  /** Gets or sets user's first failure authentication time. */
  firstLoginFailureDatetime?: Date;
  /** Gets or sets user's lockout time. */
  lockoutUntil?: Date;
  /** Gets or sets user's failure count. */
  loginFailureCount?: number;
  /** Gets or sets the user. */
  user: IUser;
}
