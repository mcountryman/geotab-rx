import { from, Observable, OperatorFunction } from "rxjs";
import { filter, mergeMap, switchMap, tap } from "rxjs/operators";
import { changed } from "../changed";
import { Repo, RepoEntity, RepoSearch, Search } from "../types";

/**
 * Transforms observable into stream of changed entities in supplied repository matching
 * conditions supplied by search parameter.
 * 
 * @see {@link changed} For underlying change call documentation.
 * 
 * @param repo - The repository to monitor for changes.
 * @param search - The search parameters.
 */
export function feed<
  T,
  TRepo extends Repo<TEntity, TSearch>,
  TEntity = RepoEntity<TRepo>,
  TSearch = RepoSearch<TRepo>
>(repo: TRepo, search: Search<TSearch>): OperatorFunction<T, TEntity> {
  return function withFeedOperator(in$: Observable<T>) {
    let fromVersion: number | undefined = undefined;
    return in$.pipe(
      switchMap(() => changed(repo, search, fromVersion)),
      tap((feed) => (fromVersion = feed.toVersion)),
      filter((feed) => !!feed.data),
      mergeMap((feed) => from(feed.data!))
    );
  };
}
