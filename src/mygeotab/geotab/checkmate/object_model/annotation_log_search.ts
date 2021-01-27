/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from '../../../geotab/checkmate/object_model/i_search';
import { IUserSearch } from '../../../geotab/checkmate/object_model/i_user_search';



/** The object used to specify the arguments when searching for (s). */
export interface IAnnotationLogSearch extends ISearch
{
  /**
  * Gets or sets search for AnnotationLogs which have a comment that contains this .
  * Wildcard can be used by prepending/appending "%" to string.
  */
  comment: string;
  /** Gets or sets search for AnnotationLogs that were recorded at this date or after. */
  fromDate?: Date;
  /** Gets or sets search for s with a maximum of this version. */
  maxVersion?: number;
  /** Gets or sets search for AnnotationLogs that were recorded at this date or before. */
  toDate?: Date;
  /**
  * Gets or sets search for AnnotationLogs with this Id. Available UserSearch options
  * are:. Id
  */
  userSearch: IUserSearch;
  /** Gets or sets the row version of the AnnotationLog search criteria. */
  version?: number;
}
