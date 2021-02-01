/* eslint-disable @typescript-eslint/no-empty-interface */

/**
 *  All objects that are stored in the database are entities. They are uniquely identified
 * by their {@link IId} which is used later to Get, modify (Set) or Remove that object.
 * The following entities are supported: {@link IEntityLinkRule}
 */
export interface IEntity {
  /** Gets or sets the unique identifier for the specific {@link IId}. */
  id: string;
}
