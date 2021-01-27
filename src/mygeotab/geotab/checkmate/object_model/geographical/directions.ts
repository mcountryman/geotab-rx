/* eslint-disable @typescript-eslint/no-empty-interface */
import { ILeg } from '../../../../geotab/checkmate/object_model/geographical/i_leg';



/** A sequential set of {@link IStep}s that make up directions. */
export interface IDirections
{
  /** Gets or sets the sequence of {@link ILeg}s for these Directions. */
  legs: ILeg[];
}
