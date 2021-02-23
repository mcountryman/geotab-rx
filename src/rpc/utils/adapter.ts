import { from, Observable, of } from "rxjs";
import { map, withLatestFrom } from "rxjs/operators";
import { IRpcClientOpts } from "..";

export function withHttpAdapter<T>(opts: IRpcClientOpts) {
  const adapter$ = opts.adapter
    ? of(opts.adapter)
    : from(import("../adapters/fetch_adapter")).pipe(
        map((imp) => imp.FetchHttpAdapter),
        map((FetchHttpAdapter) => new FetchHttpAdapter())
      );

  return (observer: Observable<T>) => observer.pipe(withLatestFrom(adapter$));
}
