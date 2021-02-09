import { Observable } from "rxjs";
import { Repo, RepoEntity } from "./types";

export function update<
  TRepo extends Repo<TEntity>,
  TEntity = RepoEntity<TRepo>
>(repo: TRepo, entity: Partial<TEntity>): Observable<string> {
  return repo.client.call("Set", {
    entity,
    typeName: repo.typeName,
  });
}
