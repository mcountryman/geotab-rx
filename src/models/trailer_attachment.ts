/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntityWithVersion } from './entity_with_version';
import { ITrailer } from './trailer';
import { IDevice } from './device';

/**
 * A TrailerAttachment is a record of the attachment of a {@link IDevice} over a period
 * of time.
 */
export interface ITrailerAttachment extends IEntityWithVersion {
  /** Gets or sets the date and time the {@link ITrailer} was attached. Default [UtcNow]. */
  activeFrom?: Date;
  /** Gets or sets the date and time the {@link ITrailer} was detached. Default [MaxDate]. */
  activeTo?: Date;
  /**
   * Gets the date the {@link ITrailer} was attached. This is only present so that we
   * can implement IDeviceProvider.
   */
  dateTime?: Date;
  /** Gets or sets the {@link ITrailer} is associated with. */
  device: IDevice;
  /** Gets or sets the attached {@link ITrailer}. */
  trailer: ITrailer;
}
