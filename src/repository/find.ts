import { from, Observable } from "rxjs";
import { mergeMap } from "rxjs/operators";
import { Repo, RepoEntity, RepoSearch, Search } from "./types";

export function find<
  TRepo extends Repo<TEntity, TSearch>,
  TEntity = RepoEntity<TRepo>,
  TSearch = RepoSearch<TRepo>
>(repo: TRepo, search: Search<TSearch>): Observable<TEntity> {
  const { limit: resultsLimit, ...input } = search ?? {};
  return repo.client
    .call<TEntity[]>("Get", {
      search: input,
      typeName: repo.typeName,
      resultsLimit,
    })
    .pipe(mergeMap((entities) => from(entities)));
}
