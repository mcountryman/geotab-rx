/* eslint-disable @typescript-eslint/no-empty-interface */
import { INameEntity } from './name_entity';

/** An entity with a name and a version. */
export interface INameEntityWithVersion extends INameEntity {
  /** Gets or sets the version of the entity. */
  version?: number;
}
