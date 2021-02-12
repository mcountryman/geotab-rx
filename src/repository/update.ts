import { Observable } from 'rxjs';
import { IEntity } from '../models/entity';
import { Repo, RepoEntity } from './types';

/**
 * Update supplied entity in supplied repo.
 *
 * @param repo - The repository to update entity in.
 * @param entity - The entity to update.
 * @returns Observable of updated entity.
 */
export function update<
  TRepo extends Repo<TEntity>,
  TEntity extends IEntity = RepoEntity<TRepo>
>(
  repo: TRepo,
  entity: Partial<TEntity> & Pick<TEntity, 'id'>
): Observable<string> {
  return repo.client.call('Set', {
    entity,
    typeName: repo.typeName,
  });
}
