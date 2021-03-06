/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from "./entity";

/** An that has a name field. */
export interface INameEntity extends IEntity {
  /**
   * Gets or sets the name of this entity that uniquely identifies it and is used when
   * displaying this entity.
   */
  name: string;
}
