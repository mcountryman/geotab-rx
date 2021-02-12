/* eslint-disable @typescript-eslint/no-empty-interface */
import { INameEntity } from '../name_entity';

/**
 * The type of engine the device has, or which engine type an Engine Management Code
 * belongs to. The standard types are represented by the strings "EngineTypeGenericId"
 * for the generic engine and "EngineTypeNoneId" where engine type is not available.
 */
export interface IEngineType extends INameEntity {
  /** Gets or sets the unique identifier for this entity. See {@link IId}. */
  id: string;
  /**
   * Gets or sets the name of this entity that uniquely identifies it and is used when
   * displaying this entity.
   */
  name: string;
}
