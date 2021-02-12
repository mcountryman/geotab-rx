import { map, tap } from 'rxjs/operators';
import { remove } from '../../src/repository/remove';
import { mockRepo } from '../helpers/repo_helper';

describe('repository/remove', () => {
  /**
   * Ensures {@link find} creates a valid `Get` request and processes response
   * correctly.
   */
  test('Validate request/response', done => {
    const entityId = 'TEST_ENTITY_ID';
    const entityType = 'TEST_ENTITY_TYPE';

    const repo = mockRepo(entityType, req$ =>
      req$.pipe(
        tap(req => {
          // Check method name
          expect(req.method).toBe('Remove');
          // Check typeName (pulled from repository)
          expect(req.params.typeName).toBe(entityType);
          // Check search.id (pulled from args)
          expect(req.params.entity.id).toBe(entityId);
        }),
        map(req => ({
          ...req,
          result: {},
        }))
      )
    );

    remove(repo, { id: entityId }).subscribe({
      error: done,
      complete: done,
    });
  });
});
