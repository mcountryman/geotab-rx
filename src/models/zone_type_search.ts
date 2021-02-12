/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from './search';

/**
 *  The object used to specify the arguments when searching for (s).
 *
 * @deprecated
 */
export interface IZoneTypeSearch extends ISearch {
  /**
   * Gets or sets get name of ZoneType to search for. Wildcard can be used by prepending/appending
   * "%" to string. Example "%comments%".
   */
  name: string;
}
