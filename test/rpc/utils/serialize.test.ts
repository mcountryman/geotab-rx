import { of } from "rxjs";
import { map, tap } from "rxjs/operators";
import { IHttpResponse, IRpcResponse } from "../../../src/rpc";
import { deserializeResponse } from "../../../src/rpc/utils/serialize";

describe("rpc/utils/serialize", () => {
  const TEST_DATE = new Date();
  const TEST_DATE_ISO = TEST_DATE.toISOString();

  test.each([
    { body: { dateTime: TEST_DATE_ISO }, locate: (value: any) => value.dateTime },
    { body: TEST_DATE_ISO, locate: (value: any) => value },
    { body: [TEST_DATE_ISO], locate: (value: any) => value[0] },
    {
      body: { dateTimes: [TEST_DATE_ISO] },
      locate: (value: any) => value.dateTimes[0],
    },
    {
      body: [{ entities: [{ dateTime: TEST_DATE_ISO }] }],
      locate: (value: any) => value[0].entities[0].dateTime,
    },
  ])("Deserialize nested ISO dates", (test) =>
    of(test.body as any)
      .pipe(
        map((body) => ({ result: body } as IRpcResponse)),
        map((body) => JSON.stringify(body)),
        map((body) => ({ body: body } as IHttpResponse)),
        deserializeResponse(),
        map((res) => res as IRpcResponse<any>),
        tap((res) => {
          const date = test.locate(res.result);

          expect(date).toBeInstanceOf(Date);
          expect(date).toStrictEqual(TEST_DATE);
        })
      )
      .toPromise()
  );
});
