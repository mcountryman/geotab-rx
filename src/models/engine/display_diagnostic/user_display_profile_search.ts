/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from '../../search';
import { IUser } from '../../user';

/** The object used to specify the arguments when searching for a . */
export interface IUserDisplayProfileSearch extends ISearch {
  /** Gets or sets the user. */
  user?: IUser;
}
