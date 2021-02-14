import { mocked } from "ts-jest/utils";
import fetch from "isomorphic-fetch";
import { FetchHttpAdapter } from "../../../src/rpc/adapters/fetch_adapter";

jest.mock("isomorphic-fetch");

const mockedFetch = mocked(fetch);

describe("rpc/adapters/fetch_adapter", () => {
  test("Returns string promise", (done) => {
    const url = "TEST_URL";
    const body = "TEST_BODY";
    const response = "TEST_JSON_RESPONSE";
    const adapter = new FetchHttpAdapter();

    mockedFetch.mockResolvedValue({
      text: () => Promise.resolve(response),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any);

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
