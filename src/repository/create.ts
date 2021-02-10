import { Observable } from "rxjs";
import { Repo, RepoEntity } from "./types";

/**
 * Adds a new entity to the database. In most cases, the entity being added will need to 
 * be fully constructed. In other words, all its properties need to be defined. These 
 * requirements are defined in each entity definition.
 * 
 * @param repo - The repository to add entity to.
 * @param entity - The entity to create.
 * @returns - The newly created entity id.
 */
export function create<
  TRepo extends Repo<TEntity>,
  TEntity = RepoEntity<TRepo>
>(repo: TRepo, entity: TEntity): Observable<string> {
  return repo.client.call("Add", {
    entity,
    typeName: repo.typeName,
  });
}
