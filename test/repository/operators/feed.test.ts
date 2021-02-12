import { from } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { feed } from '../../../src/repository/operators';
import { mockRepo } from '../../helpers/repo_helper';

describe('repository/operators/feed', () => {
  /**
   * Tests for changed request/response as well as the caching of fromVersion within
   * observable pipe.
   */
  test('Validate fromVersion handling', done => {
    const entityId = 'TEST_ENTITY_ID';
    const entityName = 'TEST_ENTITY_NAME';
    const entityType = 'TEST_ENTITY_TYPE';

    let fromVersion: number | undefined = undefined;

    const repo = mockRepo(entityType, req$ =>
      req$.pipe(
        tap(req => {
          // Check method name
          expect(req.method).toBe('GetFeed');
          // Check typeName (pulled from repository)
          expect(req.params.typeName).toBe(entityType);
          // Check search.id (pulled from args)
          expect(req.params.search.id).toBe(entityId);

          if (fromVersion !== undefined) {
            expect(req.params.fromVersion).toBe(fromVersion + 1);
          }

          fromVersion = req.params.fromVersion;
        }),
        map(req => ({
          ...req,
          result: {
            data: [{ id: entityId, name: entityName }],
            toVersion: (fromVersion ?? -1) + 1,
          },
        }))
      )
    );

    from([0, 1, 2, 3])
      .pipe(
        feed(repo, { id: entityId }),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        tap((changed: any) => {
          expect(changed.id).toBe(entityId);
          expect(changed.name).toBe(entityName);
        })
      )
      .subscribe({
        error: done,
        complete: done,
      });
  });
});
