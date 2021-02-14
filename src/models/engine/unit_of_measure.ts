/* eslint-disable @typescript-eslint/no-empty-interface */
import { INameEntity } from "../name_entity";

/**
 * Describes the unit of measure (UOM) for engine data logs. In the case where no unit
 * of measure is available; this is represented by "UnitOfMeasureNoneId".
 */
export interface IUnitOfMeasure extends INameEntity {
  /** Gets or sets the unique identifier for this entity. See . */
  id: string;
  /**
   * Gets or sets the name of this entity that uniquely identifies it and is used when
   * displaying this entity.
   */
  name: string;
}
