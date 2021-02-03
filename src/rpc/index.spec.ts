/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { from } from "rxjs";
import { first, mergeMap, tap } from "rxjs/operators";
import { Geotab } from "..";

const USERNAME = process.env.GEOTAB_USERNAME!;
const PASSWORD = process.env.GEOTAB_PASSWORD!;

describe("Geotab", () => {
  beforeEach(() => {
    jest.setTimeout(1000 * 60 * 60 * 24);

    if (!USERNAME)
      throw new Error("GEOTAB_USERNAME env var not defined");
    if (!PASSWORD)
      throw new Error("GEOTAB_PASSWORD env var not defined");
  });

  test("authenticate", async () => {
    const geotab = new Geotab({});
    const result = await geotab.authenticate(USERNAME, PASSWORD);

    expect(geotab.isAuthenticated).toBeTruthy();

    return geotab.users.find({ name: "me@maar.vin" }).pipe(
      mergeMap(users => from(users)),
      first(),
      tap(console.log),
    ).toPromise();
  });
});
