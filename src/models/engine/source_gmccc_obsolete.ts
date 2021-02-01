/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISource } from "../engine/source";

/** Specifies that the engine data originated from Gmccc sources for an obsolete GUID. */
export interface ISourceGmcccObsolete extends ISource {
  /** Gets the singleton value. */
  value: ISourceGmcccObsolete;
}
