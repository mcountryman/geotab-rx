/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from './search';

/**  The object used to specify the arguments when searching for a . */
export interface IDashboardSearch extends ISearch {
  /**
   * Gets or sets search for Dashboard with this Name. Wildcard can be used by prepending/appending
   * "%" to string. Example "%name%".
   */
  name: string;
}
