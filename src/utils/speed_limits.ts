import { Observable } from 'rxjs';
import { IDeviceSearch } from '../models/device_search';
import { IRpcClient } from '../rpc';

interface IGetSpeedLimitsOpts {
  toDate?: Date;
  fromDate?: Date;
  deviceSearch?: IDeviceSearch;
}

/**
 * Obtains the maximum posted road speed limit for a device's trips for the given
 * dates/times. If the from date and to date are in the middle of the trip, the data for
 * the whole trip are included.
 */
export function getSpeedLimits(
  client: IRpcClient,
  opts?: IGetSpeedLimitsOpts
): Observable<number> {
  return client.call('GetRoadMaxSpeeds', opts);
}
