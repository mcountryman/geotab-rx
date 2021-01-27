/* eslint-disable @typescript-eslint/no-empty-interface */


/** Indicates the type of operation delivered by {@link IPubSubDataUpdateData`1}. */
export enum PubSubDataUpdateVerb { 
  /** Data was added. */
  Add = "Add", 
  /** Data was updated. */
  Set = "Set", 
  /** Data was removed. */
  Remove = "Remove"
}
