import { Observable } from 'rxjs';
import { Repo } from './types';

/**
 * Gets the count of entities in the supplied repository. Entities that are currently
 * inactive (the Entity's ActiveTo date is before the current time) are counted as well.
 *
 * @param repo - The repository to get size of.
 * @returns Number of entities in supplied repository.
 */
export function count<TRepo extends Repo<unknown>>(
  repo: Repo<TRepo>
): Observable<number> {
  return repo.client.call('GetCountOf', {
    typeName: repo.typeName,
  });
}
