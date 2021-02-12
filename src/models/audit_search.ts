/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from './search';

/** The object used to specify the arguments when searching entries. */
export interface IAuditSearch extends ISearch {
  /** Gets or sets search for audit entries that were recorded at this date or after. */
  fromDate?: Date;
  /**
   * Gets or sets search for entities that contain specific keywords in all wildcard
   * string-searchable fields.
   */
  keywords: string[];
  /**
   * Gets or sets search for audit entries with this Name. Wildcard can be used by prepending/appending
   * "%" to string. Example "%name%".
   */
  name: string;
  /** Gets or sets search for audit entries that were recorded before this date. */
  toDate?: Date;
  /**
   * Gets or sets search for audit entries with this User Name. Wildcard can be used
   * by prepending/appending "%" to string. Example "%name%".
   */
  userName: string;
  /** Gets or sets the row version of the search criteria. */
  version?: number;
}
