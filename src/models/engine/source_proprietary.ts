/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISource } from "../engine/source";

/** Specifies that the engine data originated from proprietary sources. */
export interface ISourceProprietary extends ISource {
  /** Gets the singleton value. */
  value: ISourceProprietary;
}
