/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from './entity';

/** An Entity with a version. */
export interface IEntityWithVersion extends IEntity {
  /** Gets or sets the version of the entity. */
  version?: number;
}
