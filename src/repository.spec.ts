import { merge } from "rxjs";
import { take, timeout, toArray } from "rxjs/operators";
import { Geotab } from ".";

describe("Repository", () => {
  test("create", () => {
    //
  });

  test("update", () => {
    //
  });

  test("delete", () => {
    //
  });

  test("find", () => {
    //
  });

  test("observe", async () => {
    // const geotab = new Geotab();
    // await geotab.authenticate(
    //   process.env.GEOTAB_USERNAME!,
    //   process.env.GEOTAB_PASSWORD!
    // );

    // const event = await merge(
    //   geotab.events.observe({
    //     fromDate: new Date(Date.now() - 1000 * 60 * 60 * 4),
    //     ruleSearch: { id: "abKGitdH0ikypkbk0rC4B5A" },
    //   }).pipe(take(1)),
    //   geotab.events.observe({
    //     fromDate: new Date(Date.now() - 1000 * 60 * 60 * 4),
    //     ruleSearch: { id: "agDsucC_GfkyKqUEWR9KjgQ" },
    //   }).pipe(take(1)),
    // )
    //   .pipe(toArray(), take(1), timeout(2500))
    //   .toPromise();

    // console.log(event);
  });
});
