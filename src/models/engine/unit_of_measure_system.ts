/* eslint-disable @typescript-eslint/no-empty-interface */
import { IUnitOfMeasure } from '../engine/unit_of_measure';

/** Represents a system supported unit of measure which cannot be changed. */
export interface IUnitOfMeasureSystem extends IUnitOfMeasure {
  /** Gets or sets the entity identifier. */
  id: string;
  /** Gets or sets the entity name. */
  name: string;
}
