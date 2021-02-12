/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISource } from '../engine/source';

/**
 * Specifies that the engine data originated from WWH enhanced type for an obsolete
 * GUID.
 */
export interface ISourceObdSaObsolete extends ISource {
  /** Gets the singleton value. */
  value: ISourceObdSaObsolete;
}
