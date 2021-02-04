import { map } from "rxjs/operators";
import { Geotab } from ".";
import { mockHttpAdapter } from "./rpc/client.spec";

describe("Geotab", () => {
  test("authenticate", async () => {
    const username = "username";
    const password = "password";

    const adapter = mockHttpAdapter((req$) =>
      req$.pipe(
        map((req) => {
          expect(req.params.userName).toBe(username);
          expect(req.params.password).toBe(password);

          return {
            ...req,
            result: {
              path: "ThisServer",
              credentials: {
                username,
                password,
              },
            },
          };
        })
      )
    );

    const geotab = new Geotab({
      adapter: new adapter(),
    });

    const result = await geotab.authenticate("username", "password");

    expect(result.path).toBe("ThisServer");
    expect(geotab.isAuthenticated).toBeTruthy();
  });
});
