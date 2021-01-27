/* eslint-disable @typescript-eslint/no-empty-interface */


/**  Search that implements IEntity for search objects. */
export interface ISearch
{
  /** Gets or sets search for an entry based on the specific {@link IId}. */
  id: string;
  /** Gets or sets the row version of the search criteria. */
  version?: number;
}
