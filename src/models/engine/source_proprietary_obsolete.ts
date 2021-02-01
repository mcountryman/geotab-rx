/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISource } from "../engine/source";

/**
 * Specifies that the engine data originated from proprietary sources for an obsolete
 * GUID.
 */
export interface ISourceProprietaryObsolete extends ISource {
  /** Gets the singleton value. */
  value: ISourceProprietaryObsolete;
}
