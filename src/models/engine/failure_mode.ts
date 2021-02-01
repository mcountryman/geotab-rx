/* eslint-disable @typescript-eslint/no-empty-interface */
import { INameEntity } from "../name_entity";
import { ISource } from "../engine/source";

/**
 *  The Failure Mode Identifier (FMI) used to describe engine fault codes. This is
 * represented by the string "NoFailureModeId" when there is no applicable FMI.
 */
export interface IFailureMode extends INameEntity {
  /** Gets or sets the specific FMI code number. */
  code?: number;
  /** Gets or sets the unique identifier for this entity. See . */
  id: string;
  /**
   * Gets or sets the name of this entity that uniquely identifies it and is used when
   * displaying this entity.
   */
  name: string;
  /** Gets or sets the type for the FMI. */
  source: ISource;
}
