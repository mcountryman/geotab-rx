import fetch from 'isomorphic-fetch';
import { from, Observable } from 'rxjs';
import { IHttpAdapter, IHttpResponse } from '../types';

/**
 * Default {@link IHttpAdapter} using `isomorphic-fetch`.
 */
export class FetchHttpAdapter implements IHttpAdapter {
  post(url: string, body: string): Observable<IHttpResponse> {
    return from(
      fetch(url, {
        body,
        method: 'POST',
      })
        .then(res => res.text())
        .then(body => ({
          body,
        }))
    );
  }
}
