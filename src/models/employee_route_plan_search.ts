/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from "./search";
import { IRouteSearch } from "./route_search";

/**
 *  The object used to specify the arguments when searching for {@link IEmployeeRoutePlan}(s).
 *
 * @deprecated
 */
export interface IEmployeeRoutePlanSearch extends ISearch {
  /** Gets or sets search for Employee Route Plan(s) recorded at this date or after. */
  fromDate?: Date;
  /**
   * Gets or sets search for Employee Route Plans with this {@link IRouteSearch} Id.
   * Available RouteSearch options are:. Id
   */
  routeSearch: IRouteSearch;
  /** Gets or sets search for Employee Route Plans recorded at this date or before. */
  toDate?: Date;
}
