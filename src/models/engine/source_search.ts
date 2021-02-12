/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from '../search';

/**  The object used to specify the arguments when searching for a . */
export interface ISourceSearch extends ISearch {
  /** Gets or sets the name of the search criteria. */
  name: string;
  /** Gets or sets the row version of the search criteria. */
  version?: number;
}
