import { Observable } from 'rxjs';
import { IVersionInformation } from '../models/version_information';
import { IRpcClient } from '../rpc';

export function getVersion(client: IRpcClient): Observable<string> {
  return client.call('GetVersion', {});
}

export function getVersionInfo(
  client: IRpcClient
): Observable<IVersionInformation> {
  return client.call('GetVersionInformation', {});
}
