/* eslint-disable @typescript-eslint/no-empty-interface */


/**
* An exception for use within the Processor namespace only, which includes information
* about entities which violated foreign key constraints and caused a {@link IRelationViolatedException}.
*/
export interface ISuspectEntityException
{
  /**
  * Gets the collection containing IDs and type names of entities that are suspect in
  * causing the error.
  */
  suspectedEntities: [string,string][];
}
