import { Observable } from "rxjs";
import { Repo, RepoEntity } from "./types";

export function create<
  TRepo extends Repo<TEntity>,
  TEntity = RepoEntity<TRepo>
>(repo: TRepo, entity: TEntity): Observable<string> {
  return repo.client.call("Add", {
    entity,
    typeName: repo.typeName,
  });
}
