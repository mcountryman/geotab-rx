import { Observable } from 'rxjs';
import { ITimeZoneInfo } from '../models/time_zone_info';
import { IRpcClient } from '../rpc';

/**
 * Get a collection of TimeZoneInfo (Olson time zones).
 */
export function getTimeZones(client: IRpcClient): Observable<ITimeZoneInfo> {
  return client.call('GetTimeZones', {});
}
