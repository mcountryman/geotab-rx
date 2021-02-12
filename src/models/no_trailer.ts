/* eslint-disable @typescript-eslint/no-empty-interface */
import { ITrailer } from './trailer';

/**
 *  A for (s) with no trailer.
 *
 * @deprecated
 */
export interface INoTrailer extends ITrailer {
  /** Gets or sets the serial number. */
  comment: string;
  /** Gets or sets the unique identifier for this entity. see . */
  id: string;
  /**
   * Gets or sets the name of this entity that uniquely identifies it and is used when
   * displaying this entity.
   */
  name: string;
}
