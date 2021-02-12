/* eslint-disable @typescript-eslint/no-empty-interface */
import { IZoneType } from './zone_type';

/** Base class for all system zone types. */
export interface IZoneTypeSystem extends IZoneType {
  /** Gets or sets the comment. The comment cannot be changed for this zone type. */
  comment: string;
  /** Gets or sets the unique identifier for this entity. see . */
  id: string;
  /**
   * Sets the name of this entity that uniquely identifies it and is used when displaying
   * this entity. The name cannot be changed for this zone type.
   */
  name: string;
}
