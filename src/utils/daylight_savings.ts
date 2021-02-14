import { Observable } from "rxjs";
import { ITimeZoneInfoWithRules } from "../models/time_zone_info_with_rules";
import { IRpcClient } from "../rpc";

export function getDaylightSavingsRules(
  client: IRpcClient,
  timeZoneId: string
): Observable<ITimeZoneInfoWithRules> {
  // TODO: Add timeZoneId validation?

  return client.call("GetDaylightSavingRules", {
    timeZoneId,
  });
}
