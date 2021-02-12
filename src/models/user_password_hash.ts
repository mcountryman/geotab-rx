/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from './entity';
import { IUser } from './user';

/**
 * A password hash. May represent a currently valid hash, or could represent a previous
 * password hash that we are storing to prevent duplication. For internal use in the
 * User bridge.
 */
export interface IUserPasswordHash extends IEntity {
  /** Gets or sets the time this password was set. */
  dateTime?: Date;
  /** Gets or sets the password hash. */
  hash: string;
  /**
   * Gets or sets the password string. Used for checking for duplicates; wil be null
   * if read from database.
   */
  password: string;
  /** Gets or sets a User. */
  user: IUser;
}
