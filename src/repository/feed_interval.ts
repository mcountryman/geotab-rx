import { interval, Observable } from "rxjs";
import { feed } from "./operators";
import { Repo, RepoEntity, RepoSearch, Search } from "./types";

export type FeedOpts<TSearch> = Search<TSearch> & IInterval;

export function feedInterval<
  TRepo extends Repo<TEntity, TSearch>,
  TEntity = RepoEntity<TRepo>,
  TSearch = RepoSearch<TRepo>
>(repo: TRepo, opts: FeedOpts<TSearch>): Observable<TEntity> {
  return interval(opts.intervalMs).pipe(feed(repo, opts));
}

interface IInterval {
  intervalMs: number;
}
