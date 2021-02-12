/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from '../search';

/** The object used to specify the arguments when searching for a . */
export interface IUnitOfMeasureSearch extends ISearch {
  /**
   * Gets or sets search for a UnitOfMeasure with a name containing this String. Wildcard
   * can be used by prepending/appending "%" to string. Example "%name%".
   */
  name: string;
}
