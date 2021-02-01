/* eslint-disable @typescript-eslint/no-empty-interface */

/** A type of {@link IRoute}. Route is either Basic or Plan. */
export enum RouteType {
  /** A basic route. Does not have a {@link IDevice} associated. */
  Basic = "Basic",
  /**
   * A route with a plan of the time/distance it is expected to take from stop to stop.
   * A plan route has a {@link IDevice} associated.
   */
  Plan = "Plan",
}
