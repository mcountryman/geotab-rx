/* eslint-disable @typescript-eslint/no-empty-interface */
import { IFailureMode } from "../engine/failure_mode";
import { ISource } from "../engine/source";

/** A for diagnostics with no real world failure mode. */
export interface INoFailureMode extends IFailureMode {
  /** Gets or sets the unique identifier for this entity. see . */
  id: string;
  /**
   * Gets or sets the name of this entity that uniquely identifies it and is used when
   * displaying this entity.
   */
  name: string;
  /** Sets the . */
  source: ISource;
}
