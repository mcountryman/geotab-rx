/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from './search';

/**
 *  The object used to specify the arguments when searching for a .
 *
 * @deprecated
 */
export interface IWidgetSearch extends ISearch {
  /**
   * Gets or sets search for Widget with this Name. Wildcard can be used by prepending/appending
   * "%" to string. Example "%name%".
   */
  name: string;
  /**
   * Gets or sets search for Widgets by the list of widgetIds. Available WidgetSearch
   * options are:. Id
   */
  widgetIds: string[];
}
