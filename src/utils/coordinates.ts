import { from, Observable } from "rxjs";
import { mergeMap } from "rxjs/operators";
import { ICoordinate } from "../models/coordinate";
import { IRpcClient } from "../rpc";

export function getCoordinates(
  client: IRpcClient,
  addresses: string[]
): Observable<ICoordinate> {
  return client
    .call<ICoordinate[]>("GetCoordinates", {
      addresses,
    })
    .pipe(mergeMap((arr) => from(arr)));
}
