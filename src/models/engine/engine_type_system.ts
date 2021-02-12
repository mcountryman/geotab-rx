/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEngineType } from '../engine/engine_type';

/** Base class for all system engine types. */
export interface IEngineTypeSystem extends IEngineType {
  /** Gets or sets the unique identifier for this entity. see {@link IId}. */
  id: string;
  /**
   * Sets the name of this entity that uniquely identifies it and is used when displaying
   * this entity. The name cannot be changed for this engine type.
   */
  name: string;
}
