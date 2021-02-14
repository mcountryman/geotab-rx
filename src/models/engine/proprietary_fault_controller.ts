/* eslint-disable @typescript-eslint/no-empty-interface */
import { IController } from "../engine/controller";
import { ISource } from "../engine/source";

/**
 * Object representing the specific, known ID reserved for faults generated with manufacturer
 * specific codes.
 */
export interface IProprietaryFaultController extends IController {
  /** Gets or sets the code. */
  codeId?: number;
  /** Gets or sets the unique identifier for this entity. see {@link IId}. */
  id: string;
  /**
   * Gets or sets the name of this entity that uniquely identifies it and is used when
   * displaying this entity.
   */
  name: string;
  /** Gets or sets the {@link ISource}. */
  source: ISource;
}
