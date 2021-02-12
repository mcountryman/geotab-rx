/* eslint-disable @typescript-eslint/no-empty-interface */
import { IGroupRelations } from './group_relations';

/**
 * Exception with information about the grouped linked entities that hold a relation
 * preventing removal.
 */
export interface IGroupRelationViolatedException {
  /** Gets or sets the {@link IGroupRelations} preventing removal. */
  relations: IGroupRelations;
}
