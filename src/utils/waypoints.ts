import { Observable } from "rxjs";
import { IWaypoint } from "../models/geographical/waypoint";
import { IRpcClient } from "../rpc";

/** Optimizes a set of Waypoint(s). */
export function getOptimizedWaypoints(
  client: IRpcClient,
  waypoints: IWaypoint[]
): Observable<IWaypoint> {
  return client.call("OptimizeWaypoints", { waypoints });
}
