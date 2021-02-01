/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISource } from "../engine/source";

/** Specifies that the engine data originated from Brp sources for an obsolete GUID. */
export interface ISourceBrpObsolete extends ISource {
  /** Gets the singleton value. */
  value: ISourceBrpObsolete;
}
