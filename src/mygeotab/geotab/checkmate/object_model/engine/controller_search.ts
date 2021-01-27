/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from '../../../../geotab/checkmate/object_model/i_search';
import { ISourceSearch } from '../../../../geotab/checkmate/object_model/engine/i_source_search';



/** The object used to specify the arguments when searching for {@link IController}(s). */
export interface IControllerSearch extends ISearch
{
  /**
  * Gets or sets search for Controllers with this Name. Wildcard can be used by prepending/appending
  * "%" to string. Example "%name%".
  */
  name: string;
  /**
  * Gets or sets search for Controllers with this {@link ISourceSearch} Id. Available
  * SourceSearch options are:. Id
  */
  sourceSearch: ISourceSearch;
  /** Gets or sets the row version of the {@link IController} search criteria. */
  version?: number;
}
