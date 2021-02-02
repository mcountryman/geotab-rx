import { from, Observable, of } from "rxjs";
import { delay, map, mergeMap, take, toArray } from "rxjs/operators";
import { RpcClient } from "./client";
import {
  IHttpAdapter,
  IHttpResponse,
  IRpcBatchRequest,
  IRpcRequest,
  IRpcResponse,
} from "./types";

describe("RpcClient", () => {
  /**
   * # Edge cases
   * - Call single
   * - Call batched
   * - Call rpc error single
   * - Call rpc error batched
   * - Call http error single
   * - Call http error batched
   * - Call timeout
   * - Call cancel single
   * - Call cancel batched
   */

  test.each([
    { params: ["simple"] },
    { params: [420] },
    { params: [0, 1, 3, 4, 5] },
  ])("call - echo", async (input) => {
    const client = new RpcClient({
      endPoint: "",
      adapter: new EchoHttpAdapter(),
    });

    return from(input.params)
      .pipe(
        mergeMap((param) => client.call("echo", param)),
        map((res, i) => {
          expect(res).toBe(input.params[i]);
          return res;
        }),
        toArray(),
        take(1)
      )
      .toPromise();
  });

  /**
   * Ensures calls that definitely should be batched are in fact batched by creating a mock
   * http adapter that throws an exception when a non-batch request is passed through.
   */
  test("call - batched", (done) => {
    const adapter = mockHttpAdapter((req$) =>
      req$.pipe(
        map((req) => {
          expect(req.method).toBe("ExecuteMultiCall");
          return req;
        })
      )
    );

    const client = new RpcClient({ endPoint: "", adapter: new adapter() });
    return from([0, 1, 2, 3])
      .pipe(mergeMap((params) => client.call("", params)))
      .subscribe({
        next: console.log,
        complete: done(),
      });
  });

  /**
   * Ensures that observable throws an `RpcError` on a single request when http adapter
   * returns error response.
   */
  test("call - rpc error single", (done) => {
    new RpcClient({ endPoint: "", adapter: new RpcErrorHttpAdapter() })
      .call("", false)
      .subscribe({
        next: (value) => done(`Unexpected value '${value}'`),
        error: (err) => {
          expect(err.code).toBe(69.42);
          expect(err.message).toBe("RpcError");
          done();
        },
      });
  });

  /**
   * Ensures that observable throws an `RpcError` on a batch request when http adapter
   * returns error response.
   */
  test("call - rpc error batched", (done) => {
    const client = new RpcClient({
      endPoint: "",
      adapter: new RpcErrorHttpAdapter(),
    });

    from([0, 1, 2, 3])
      .pipe(mergeMap((params) => client.call("", params)))
      .subscribe({
        next: (value) => done(`Unexpected value '${value}'`),
        error: (err) => {
          expect(err.code).toBe(69.42);
          expect(err.message).toBe("RpcError");
          done();
        },
      });
  });

  /**
   * Ensures that observable throws an `HttpError` on a single request when http adapter
   * throws an error.
   */
  test("call - http error single", (done) => {
    new RpcClient({ endPoint: "", adapter: new HttpErrorHttpAdapter() })
      .call("", false)
      .subscribe({
        next: (value) => done(`Unexpected value '${value}'`),
        error: (err) => {
          expect(err.message).toBe("HttpError");
          done();
        },
      });
  });

  /**
   * Ensures that observable throws an `HttpError` on a batch request when http adapter
   * throws an error.
   */
  test("call - http error batched", (done) => {
    const client = new RpcClient({
      endPoint: "",
      adapter: new HttpErrorHttpAdapter(),
    });

    from([0, 1, 2, 3])
      .pipe(mergeMap((params) => client.call("", params)))
      .subscribe({
        next: (value) => done(`Unexpected value '${value}'`),
        error: (err) => {
          expect(err.message).toBe("HttpError");
          done();
        },
      });
  });

  /**
   * Ensure timeout error is pushed when `IHttpAdapter` doesn't respond quick enough.
   */
  test("call - timeout", (done) => {
    const adapter = mockHttpAdapter((req$) =>
      req$.pipe(
        delay(150),
        map((req) => req)
      )
    );

    const client = new RpcClient({
      endPoint: "",
      adapter: new adapter(),
      timeoutMs: 100,
    });

    return client.call("", false).subscribe({
      next: (value) => done(`Expected timeout, got value '${value}'`),
      error: (err) => {
        expect(err.message).toBe("Timeout has occurred");
        done();
      },
    });
  });

  test("call - cancel", (done) => {
    const client = new RpcClient({
      endPoint: "",
      adapter: new EchoHttpAdapter(),
    });

    return new Observable((observer) => {
      client.call("", 0);
      client.call("", 1).subscribe(observer);
      client.call("", 2);
      client.call("", 3);
    }).subscribe({
      next: (value) => {
        expect(value).not.toBe(0);
        expect(value).not.toBe(2);
        expect(value).not.toBe(3);
      },
      complete: done,
    });
  });
});

function mockHttpAdapter(
  handle: (req$: Observable<IRpcRequest>) => Observable<IRpcResponse>
) {
  return class implements IHttpAdapter {
    post(_: string, body: string): Observable<IHttpResponse> {
      const req: IRpcRequest = JSON.parse(body);

      return handle(of(req)).pipe(
        map((res) => ({ body: JSON.stringify(res) }))
      );
    }
  };
}

const EchoHttpAdapter = mockHttpAdapter((req$) =>
  req$.pipe(
    map((req) => {
      const res: IRpcResponse = {
        id: req.id ?? "",
        result: req.params,
        jsonrpc: "2.0",
      };

      if (req.method === "ExecuteMultiCall") {
        const batchReq = req as IRpcBatchRequest;

        res.result = batchReq.params.calls.map((call) => call.params);
      }

      return res;
    })
  )
);

const RpcErrorHttpAdapter = mockHttpAdapter((req$) =>
  req$.pipe(
    map((req) => ({
      id: req.id,
      error: {
        code: 69.42,
        message: "RpcError",
      },
      jsonrpc: "2.0",
    }))
  )
);

const HttpErrorHttpAdapter = mockHttpAdapter((req$) =>
  req$.pipe(
    map(() => {
      throw new Error("HttpError");
    })
  )
);
