/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISource } from "../engine/source";

/**
 * Specifies that the engine data originated from a legacy proprietary source for an
 * obsolete GUID.
 */
export interface ISourceLegacyObsolete extends ISource {
  /** Gets the singleton value. */
  value: ISourceLegacyObsolete;
}
