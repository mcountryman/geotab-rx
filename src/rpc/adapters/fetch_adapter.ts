import { from, Observable } from "rxjs";
import { fromFetch } from "rxjs/fetch";
import { map, mergeMap } from "rxjs/operators";
import { IHttpAdapter, IHttpResponse } from "../types";

/**
 * Default {@link IHttpAdapter} using `isomorphic-fetch`.
 */
export class FetchHttpAdapter implements IHttpAdapter {
  post(url: string, body: string): Observable<IHttpResponse> {
    return fromFetch(url, {
      body,
      method: "POST",
    }).pipe(
      mergeMap((res) => from(res.text())),
      map((body) => ({
        body,
      }))
    );
  }
}
