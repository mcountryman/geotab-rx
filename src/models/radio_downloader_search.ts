/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from './search';
import { RadioDownloaderStatus } from './radio_downloader_status';
import { RadioDownloaderType } from './radio_downloader_type';

/**
 *  The object used to specify the arguments when searching for a {@link IRadioDownloader}.
 *
 * @deprecated
 */
export interface IRadioDownloaderSearch extends ISearch {
  /**
   * Gets or sets search for a RadioDownloader which is associated to the particular
   * {@link IRadioDownloaderStatus}.
   */
  radioDownloaderStatus?: RadioDownloaderStatus;
  /**
   * Gets or sets search for a RadioDownloader which is associated to the particular
   * {@link IRadioDownloaderType}.
   */
  radioDownloaderType?: RadioDownloaderType;
  /**
   * Gets or sets search for a RadioDownloader which is associated to the particular
   * SerialNumber.
   */
  serialNumber: string;
}
