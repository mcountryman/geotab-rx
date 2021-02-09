import { Observable } from "rxjs";
import { Repo } from "./types";

export function count<TRepo extends Repo<unknown>>(
  repo: Repo<TRepo>
): Observable<number> {
  return repo.client.call("GetCountOf", {
    typeName: repo.typeName,
  });
}
