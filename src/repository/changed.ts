import { Observable } from "rxjs";
import { IFeedResult } from "../models/feed_result";
import { Repo, RepoEntity, RepoSearch, Search } from "./types";

export function changed<
  TRepo extends Repo<TEntity, TSearch>,
  TEntity = RepoEntity<TRepo>,
  TSearch = RepoSearch<TRepo>
>(
  repo: TRepo,
  search: Search<TSearch>,
  fromVersion?: number
): Observable<IFeedResult<TEntity>> {
  const { limit: resultsLimit, ...input } = search ?? {};
  return repo.client.call<IFeedResult<TEntity>>("GetFeed", {
    search: input,
    typeName: repo.typeName,
    fromVersion,
    resultsLimit,
  });
}
