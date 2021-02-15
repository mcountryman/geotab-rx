import { from } from "rxjs";
import { delay, map, mergeMap, take, toArray } from "rxjs/operators";
import { RpcClient } from "../../src/rpc/client";
import {
  echoHttpAdapter,
  httpErrorHttpAdapter,
  HTTP_ERROR_MESSAGE,
  mockHttpAdapter,
  rpcErrorHttpAdapter,
  RPC_ERROR_CODE,
  RPC_ERROR_MESSAGE,
} from "../helpers/http_helpers";

describe("rpc/client", () => {
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

  test.each([{ params: ["simple"] }, { params: [420] }, { params: [0, 1, 3, 4, 5] }])(
    "call - echo",
    async (input) => {
      const client = new RpcClient({
        endPoint: "",
        adapter: echoHttpAdapter,
      });

      return from(input.params)
        .pipe(
          mergeMap((param) => client.call<{ param: number }>("echo", { param })),
          map((res, i) => {
            expect(res.param).toBe(input.params[i]);
            return res;
          }),
          toArray(),
          take(1)
        )
        .toPromise();
    }
  );

  /**
   * Ensures calls that definitely should be batched are in fact batched by creating a mock
   * http adapter that throws an exception when a non-batch request is passed through.
   */
  test("call - batched", (done) => {
    const adapter = mockHttpAdapter((req$) =>
      req$.pipe(
        map((req) => {
          expect(req.method).toBe("ExecuteMultiCall");
          return {
            id: req.id,
            result: (req.params as any).calls.map((call: any) => call.params),
            jsonrpc: "2.0",
          };
        })
      )
    );

    const client = new RpcClient({ endPoint: "", adapter });
    return from([0, 1, 2, 3])
      .pipe(
        mergeMap((params) => client.call<{ params: number }>("echo", { params }))
      )
      .subscribe({
        complete: done,
      });
  });

  /**
   * Ensures that observable throws an `RpcError` on a single request when http adapter
   * returns error response.
   */
  test("call - rpc error single", (done) => {
    new RpcClient({ endPoint: "", adapter: rpcErrorHttpAdapter })
      .call("", { params: false })
      .subscribe({
        next: (value) => done(`Unexpected value '${value}'`),
        error: (err) => {
          expect(err.code).toBe(RPC_ERROR_CODE);
          expect(err.message).toBe(RPC_ERROR_MESSAGE);
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
      adapter: rpcErrorHttpAdapter,
    });

    from([0, 1, 2, 3])
      .pipe(
        mergeMap((params) => client.call<{ params: number }>("", { params }))
      )
      .subscribe({
        next: (value) => done(`Unexpected value '${value}'`),
        error: (err) => {
          expect(err.code).toBe(RPC_ERROR_CODE);
          expect(err.message).toBe(RPC_ERROR_MESSAGE);
          done();
        },
      });
  });

  /**
   * Ensures that observable throws an `HttpError` on a single request when http adapter
   * throws an error.
   */
  test("call - http error single", (done) => {
    new RpcClient({ endPoint: "", adapter: httpErrorHttpAdapter })
      .call("", { params: false })
      .subscribe({
        next: (value) => done(`Unexpected value '${value}'`),
        error: (err) => {
          expect(err.message).toBe(HTTP_ERROR_MESSAGE);
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
      adapter: httpErrorHttpAdapter,
    });

    from([0, 1, 2, 3])
      .pipe(mergeMap((params) => client.call("", { params })))
      .subscribe({
        next: (value) => done(`Unexpected value '${value}'`),
        error: (err) => {
          expect(err.message).toBe(HTTP_ERROR_MESSAGE);
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
      adapter,
      endPoint: "",
      timeoutMs: 100,
    });

    return client.call("", { params: false }).subscribe({
      next: (value) => done(`Expected timeout, got value '${value}'`),
      error: (err) => {
        expect(err.message).toBe("Timeout has occurred");
        done();
      },
    });
  });

  test("call - cancel", (done) => {
    const adapter = mockHttpAdapter((req$) =>
      req$.pipe(map(() => done("Request was not cancelled after unsubscribe.")))
    );

    const client = new RpcClient({
      endPoint: "",
      adapter: adapter,
    });

    client
      .call<{ params: number }>("", { params: 0 })
      .subscribe({
        next: (value) => {
          expect(value.params).not.toBe(0);
          expect(value.params).not.toBe(2);
          expect(value.params).not.toBe(3);
        },
        error: done,
        complete: done,
      })
      .unsubscribe();

    setTimeout(done, 300);
  });
});
