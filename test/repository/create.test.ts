import { map, tap } from "rxjs/operators";
import { create } from "../../src/repository";
import { mockRepo } from "../helpers/repo_helper";

describe("repository/create", () => {
  /**
   * Ensures {@link create} creates a valid `Add` request and handles an `Add` response
   * correctly.
   */
  test("Valid request/response", (done) => {
    const entityId = "TEST_ENTITY_ID";
    const entityName = "TEST_ENTITY_NAME";
    const entityType = "TEST_ENTITY_TYPE";
    const repo = mockRepo(entityType, (req$) =>
      req$.pipe(
        tap((req) => {
          // Check method name
          expect(req.method).toBe("Add");
          // Check typeName (pulled from repository)
          expect(req.params.typeName).toBe(entityType);
          // Check entity (pulled from create args)
          expect(req.params.entity.name).toBe(entityName);
        }),
        map((req) => ({
          ...req,
          result: entityId,
        }))
      )
    );

    create(repo, { name: entityName }).subscribe({
      // Check response is entity ID
      next: (id) => expect(id).toBe(entityId),
      error: done,
      complete: done,
    });
  });
});
