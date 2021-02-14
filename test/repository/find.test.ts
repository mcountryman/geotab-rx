import { map, tap } from "rxjs/operators";
import { find } from "../../src/repository";
import { mockRepo } from "../helpers/repo_helper";

describe("repository/find", () => {
  /**
   * Ensures {@link find} creates a valid `Get` request and processes response
   * correctly.
   */
  test("Validate request/response", (done) => {
    const entityId = "TEST_ENTITY_ID";
    const entityType = "TEST_ENTITY_TYPE";
    const entityName = "TEST_ENTITY_NAME";

    const repo = mockRepo(entityType, (req$) =>
      req$.pipe(
        tap((req) => {
          // Check method name
          expect(req.method).toBe("Get");
          // Check typeName (pulled from repository)
          expect(req.params.typeName).toBe(entityType);
          // Check search.id (pulled from args)
          expect(req.params.search.id).toBe(entityId);
        }),
        map((req) => ({
          ...req,
          result: [
            {
              id: entityId,
              name: entityName,
            },
          ],
        }))
      )
    );

    find(repo, { id: entityId }).subscribe({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      next: (entity: any) => {
        expect(entity.id).toBe(entityId);
        expect(entity.name).toBe(entityName);
      },
      error: done,
      complete: done,
    });
  });
});
