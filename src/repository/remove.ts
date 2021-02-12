import { Observable } from 'rxjs';
import { IEntity } from '../models/entity';
import { Repo, RepoEntity } from './types';

/**
 * Permanently removes an entity and it's associated data from supplied repository.  The
 * entity must have an `id` field, remaining fields are optional.
 *
 * @remarks
 *
 * This can trigger cascading removal of all depanent objects associated with the entity.
 * For example removing a {@link Device} would remove all {@link LogRecord}s associated
 * with it.
 *
 * @param repo - The repo to remove entity from.
 * @param entity - The entity to remove.
 * @returns Squat.
 */
export function remove<
  TRepo extends Repo<TEntity>,
  TEntity extends IEntity = RepoEntity<TRepo>
>(
  repo: TRepo,
  entity: Partial<TEntity> & Pick<TEntity, 'id'>
): Observable<void> {
  return repo.client.call('Remove', {
    entity,
    typeName: repo.typeName,
  });
}
