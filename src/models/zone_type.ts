/* eslint-disable @typescript-eslint/no-empty-interface */
import { INameEntity } from "./name_entity";

/** The type of the zone. */
export interface IZoneType extends INameEntity {
  /**
   * Gets or sets a free text field where any user information can be stored and referenced
   * for this entity. Default [""].
   */
  comment: string;
}
