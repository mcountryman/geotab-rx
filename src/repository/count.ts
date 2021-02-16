import { Observable } from "rxjs";
import { Repo } from "./types";

/**
 * Gets the count of entities in the supplied repository. Entities that are currently
 * inactive (the Entity's ActiveTo date is before the current time) are counted as well.
 * 
 * @example
 * Log number of users in database:
 * ```
 * import { Geotab } from "geotab-rx";
 * import { count } from "geotab-rx/repository/count";
 * 
 * function logNumberOfUsers(geotab: Geotab) {
 *   count(geotab.users)
 *     .subscribe(count => 
 *       console.log(`Number of users = '${count}'`)
 *     );
 * }
 * ```
 *
 * @param repo - The repository to get size of.
 * @returns Number of entities in supplied repository.
 */
export function count<TRepo extends Repo<unknown>>(
  repo: Repo<TRepo>
): Observable<number> {
  return repo.client.call("GetCountOf", {
    typeName: repo.typeName,
  });
}
