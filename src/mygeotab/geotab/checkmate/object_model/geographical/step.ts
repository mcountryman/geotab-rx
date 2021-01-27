/* eslint-disable @typescript-eslint/no-empty-interface */


/** A single step in a sequence of step-by-step instructions to complete {@link IDirections}. */
export interface IStep
{
  /** Gets or sets the distance estimate in kilometers for this step. */
  distance: number;
  /** Gets or sets the travel time duration estimate for this step. */
  duration: Date;
  /** Gets or sets the instructions for this step. */
  instructions: string;
  /** Gets or sets the ordered sequence of this step. */
  sequence: number;
}
