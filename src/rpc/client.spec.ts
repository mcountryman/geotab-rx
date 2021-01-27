import { from, Observable } from "rxjs";
import { mergeMap, toArray } from "rxjs/operators";
import { RpcClient } from "./client";
import {
  IHttpAdapter,
  IHttpResponse,
  IRpcRequest,
  IRpcResponse,
} from "./types";

class EchoHttpAdapter implements IHttpAdapter {
  post(url: string, body: string): Observable<IHttpResponse> {
    const request: IRpcRequest = JSON.parse(body);
    const response: IRpcResponse = {
      id: request.id ?? "",
      result: request.params,
      jsonrpc: "2.0",
    };

    if (request.method === "ExecuteMultiCall") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      response.result = (request.params as any).calls.map(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (call: any) => call.params
      );
    }

    return from([{ body: JSON.stringify(response) }]);
  }
}

describe("RpcClient", () => {
  test.each([
    { params: ["simple"] },
    { params: [420] },
    { params: [0, 1, 3, 4, 5] },
  ])("call", async (input) => {
    const client = new RpcClient("", undefined, new EchoHttpAdapter());
    const results = await from(input.params)
      .pipe(
        mergeMap((param) =>
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          client.call<any>("echo", param)
        ),
        toArray()
      )
      .toPromise();

    for (let i = 0; i < input.params.length; i++) {
      expect(results[i]).toBe(input.params[i]);
    }
  });
});
