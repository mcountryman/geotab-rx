import { of } from "rxjs";
import { fromFetch } from "rxjs/fetch";
import { mocked } from "ts-jest/utils";
import { FetchHttpAdapter } from "../../../src/rpc/adapters/fetch_adapter";

jest.mock("rxjs/fetch");

const mockedFetch = mocked(fromFetch);

describe("rpc/adapters/fetch_adapter", () => {
  test("Returns string promise", (done) => {
    const url = "TEST_URL";
    const body = "TEST_BODY";
    const response = "TEST_JSON_RESPONSE";
    const adapter = new FetchHttpAdapter();

    mockedFetch.mockReturnValue(
      of(({
        text: () => Promise.resolve(response),
      } as any) as Response)
    );

    adapter.post(url, body).subscribe({
      next: (res) => expect(res.body).toBe(response),
      error: done,
      complete: () => {
        expect(mockedFetch.mock.calls.length).toBe(1);
        expect(mockedFetch.mock.calls[0][0]).toBe(url);
        expect(mockedFetch.mock.calls[0][1]?.body).toBe(body);
        expect(mockedFetch.mock.calls[0][1]?.method).toBe("POST");
        done();
      },
    });
  });
});
