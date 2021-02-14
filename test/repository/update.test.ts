import { map, tap } from "rxjs/operators";
import { update } from "../../src/repository/update";
import { mockRepo } from "../helpers/repo_helper";

describe("repository/update", () => {
  /**
   * Ensures {@link find} creates a valid `Get` request and processes response
   * correctly.
   */
  test("Validate request/response", (done) => {
    const entityId = "TEST_ENTITY_ID";
    const entityName = "TEST_ENTITY_NAME";
    const entityType = "TEST_ENTITY_TYPE";

    const repo = mockRepo(entityType, (req$) =>
      req$.pipe(
        tap((req) => {
          // Check method name
          expect(req.method).toBe("Set");
          // Check typeName (pulled from repository)
          expect(req.params.typeName).toBe(entityType);
          // Check entity.id (pulled from args)
          expect(req.params.entity.id).toBe(entityId);
          // Check entity.name (pulled from args)
          expect(req.params.entity.name).toBe(entityName);
        }),
        map((req) => ({
          ...req,
          result: req.params.entity,
        }))
      )
    );

    update(repo, { id: entityId, name: entityName }).subscribe({
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
