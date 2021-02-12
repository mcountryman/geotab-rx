/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from './search';

/**
 *  The object used to specify the arguments when searching for {@link IFeedVersionTrackingData}(s).
 *
 * @deprecated
 */
export interface IFeedVersionTrackingDataSearch extends ISearch {
  /**
   * @inheritdoc
   */
  id: string;
  /** Gets or sets search for the table name of the record. */
  tableName: string;
}
