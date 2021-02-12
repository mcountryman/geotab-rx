/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from './search';
import { IDeviceSearch } from './device_search';
import { ITrailerSearch } from './trailer_search';

/**
 *  The object used to specify the arguments when searching for {@link ITrailerAttachment}
 * record(s).
 */
export interface ITrailerAttachmentSearch extends ISearch {
  /**
   * Gets or sets search for TrailerAttachments that were active at this date or after.
   * Set to UTC now to search for only currently active TrailerAttachments.
   */
  activeFrom?: Date;
  /** Gets or sets search for TrailerAttachments that were active at this date or before. */
  activeTo?: Date;
  /**
   * Gets or sets search for TrailerAttachments attached to this {@link IDeviceSearch}
   * Id. Available DeviceSearch options are:. Id
   */
  deviceSearch: IDeviceSearch;
  /** Gets or sets the maximum row version of the TrailerAttachment search criteria. */
  maxVersion?: number;
  /**
   * Gets or sets search for TrailerAttachments with this {@link ITrailerSearch} Id.
   * Available TrailerSearch options are:. Id
   */
  trailerSearch: ITrailerSearch;
  /** Gets or sets the row version of the TrailerAttachment search criteria. */
  version?: number;
}
