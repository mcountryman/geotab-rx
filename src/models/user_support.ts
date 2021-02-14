/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from "./entity";
import { IUser } from "./user";
import { UserSupportType } from "./user_support_type";

/** A user's support. */
export interface IUserSupport extends IEntity {
  /** Gets or sets type of support for current user. */
  type: UserSupportType;
  /** Gets or sets the user. */
  user: IUser;
}
