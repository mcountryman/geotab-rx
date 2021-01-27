/* eslint-disable @typescript-eslint/no-empty-interface */
import { INameEntity } from '../../../geotab/checkmate/object_model/i_name_entity';
import { IFirmware } from '../../../geotab/checkmate/object_model/i_firmware';
import { IRadioData } from '../../../geotab/checkmate/object_model/i_radio_data';
import { RadioDownloaderStatus } from '../../../geotab/checkmate/object_model/radio_downloader_status';



/** A base class for the family of 900/868MHz Radio Downloaders. */
export interface IRadioDownloader extends INameEntity
{
  /** Gets or sets the channel number this radio downloader operates on. */
  channel?: number;
  /**
  * Gets or sets the date when this {@link IRadioDownloader} was configured. Null if
  * the configuration is still pending and the RadioDownload has not been configured.
  */
  configurationTimeStamp?: Date;
  /** Gets or sets the firmware version for this radio downloader. */
  firmware?: IFirmware;
  /**
  * Gets or sets the frequency offset for this radio. The default is 0x1. To limit communication
  * to frequencies above 915 MHz, set to 0x17. This only applies to channel set 0 (0x00
  * to 0x0F).
  */
  frequencyOffset?: number;
  /**
  * Gets or sets determines if this RadioDownloader is managed by the system. RadioDownloaders
  * that are not managed will not be reprogrammed when you change the settings. It is
  * assumed that the downloader is already correctly programmed.
  */
  isManaged?: boolean;
  /** Gets or sets the is up status value. */
  isUp?: boolean;
  /**
  * Gets or sets details about the last Radio Connection made to this radio downloader.
  * This field is never populated unless explicitly done by the datastore methods.
  */
  lastConnection?: IRadioData;
  /** Gets or sets the current. {@link IRadioDownloaderStatus} */
  radioDownloaderStatus?: RadioDownloaderStatus;
  /** Gets or sets the unique Serial Number for this. {@link IRadioDownloader} */
  serialNumber?: string;
}
