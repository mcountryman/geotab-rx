import { map, tap } from 'rxjs/operators';
import { changed } from '../../src/repository';
import { mockRepo } from '../helpers/repo_helper';

describe('repository/changed', () => {
  /**
   * Ensures {@link changed} creates a valid `GetFeed` request and processes response
   * correctly.
   */
  test('Validate request/response', done => {
    const entityName = 'TEST_ENTITY_NAME';
    const entityType = 'TEST_ENTITY_TYPE';

    const feedData = [0, 1, 2, 3];
    const feedVersion = '';

    const repo = mockRepo(entityType, req$ =>
      req$.pipe(
        tap(req => {
          // Check method name
          expect(req.method).toBe('GetFeed');
          // Check typeName (pulled from repository)
          expect(req.params.typeName).toBe(entityType);
          // Check search (pulled from create args)
          expect(req.params.search.name).toBe(entityName);
        }),
        map(req => ({
          ...req,
          result: {
            data: feedData,
            toVersion: feedVersion,
          },
        }))
      )
    );

    changed(repo, { name: entityName }).subscribe({
      next: feed => {
        // Check feed data
        expect(feed.data).toBe(feedData);
        // Check feed version
        expect(feed.toVersion).toBe(feedVersion);
      },
      error: done,
      complete: done,
    });
  });
});
