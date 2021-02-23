import { Observable } from "rxjs";
import { IFeedResult } from "../models/feed_result";
import { Repo, RepoEntity, RepoSearch, Search } from "./types";

/**
 * Fetches changed records since last request.  Feed result can contain only-new or
 * updated and new records depending on the entity type.
 *
 * @see {@link https://geotab.github.io/sdk/software/guides/data-feed/#active-vs-calculated}
 * for details on which feeds will return udpated results.
 *
 * @example
 * Log new driver changes to console:
 * ```typescript
 * import { interval } from "rxjs";
 * import { switchMap, mergeMap } from "rxjs/operators";
 * import { Geotab } from "geotab-rx";
 * import { changes } from "geotab-rx/repository/changes";
 *
 * function monitorChanges(geotab: Geotab, id: string) {
 *   interval(1000)
 *     .pipe(
 *        switchMap(_ =>
 *          changed(
 *            geotab.driverChanges,
 *            { deviceSearch: { id } }
 *          )
 *        ),
 *        mergeMap(feed => feed.data),
 *     )
 *     .subscribe(change => console.log(`New driver '${change.driver.id}'!`));
 * }
 * ```
 *
 * @remarks
 *
 * It may be required to provide an entity search using from date to "back-fill" or "seed"
 * data from a date in the past. Providing a from date guarantees that the feed will start
 * at a version with all entities that have a date greater than or equal to the date
 * provided. However, it is possible that the feed will return entities before the
 * provided date. Searching using from date should be used independent of fromVersion and
 * only on the first request.
 *
 * @param repo - The repository to search for entities in.
 * @param search - The search object for the type of data to return.
 * @param fromVersion - The Last retrieved version. All new data that has arrived after
 * this version will be returned in this call, up to a maximum of resultsLimit data
 * records. The FeedResult returned by the feed method will contain the highest version
 * for subsequent calls. When starting a new feed, if this value is not provided, the call
 * will return only the toVersion (last version in the system). The start date can be
 * specified in the search argument.
 */
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
