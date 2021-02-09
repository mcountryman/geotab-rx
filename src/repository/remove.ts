import { Observable } from "rxjs";
import { Repo, RepoEntity } from "./types";

export function remove<
  TRepo extends Repo<TEntity>,
  TEntity = RepoEntity<TRepo>
  >(repo: TRepo, entity: Partial<TEntity>): Observable<void> {
  return repo.client.call("Remove", {
    entity,
    typeName: repo.typeName,
  });
}
