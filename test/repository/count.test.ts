import { map, tap } from 'rxjs/operators';
import { count } from '../../src/repository/count';
import { mockRepo } from '../helpers/repo_helper';

describe('repository/count', () => {
  /**
   * Ensures {@link count} creates a valid `GetCountOf` request and processes response
   * correctly.
   */
  test('Validate request/response', done => {
    const entityType = 'TEST_ENTITY_TYPE';
    const entityCount = 420.69;

    const repo = mockRepo(entityType, req$ =>
      req$.pipe(
        tap(req => {
          // Check method name
          expect(req.method).toBe('GetCountOf');
          // Check typeName (pulled from repository)
          expect(req.params.typeName).toBe(entityType);
        }),
        map(req => ({
          ...req,
          result: entityCount,
        }))
      )
    );

    count(repo).subscribe({
      next: count => expect(count).toBe(entityCount),
      error: done,
      complete: done,
    });
  });
});
