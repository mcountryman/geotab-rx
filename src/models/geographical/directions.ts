/* eslint-disable @typescript-eslint/no-empty-interface */
import { ILeg } from '../geographical/leg';

/** A sequential set of {@link IStep}s that make up directions. */
export interface IDirections {
  /** Gets or sets the sequence of {@link ILeg}s for these Directions. */
  legs: ILeg[];
}
