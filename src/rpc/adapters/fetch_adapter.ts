import fetch from "isomorphic-fetch";
import { from, Observable } from "rxjs";
import { map, mergeMap } from "rxjs/operators";
import { IHttpAdapter, IHttpResponse } from "../types";

/**
 * Default {@link IHttpAdapter} using `isomorphic-fetch`.
 */
export class FetchHttpAdapter implements IHttpAdapter {
  post(url: string, body: string): Observable<IHttpResponse> {
    return from(fetch(url, { body, method: "POST" })).pipe(
      mergeMap((res) => from(res.text())),
      map((body) => ({
        body,
      }))
    );
  }
}
