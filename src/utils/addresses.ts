import { from, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { ICoordinate } from '../models/coordinate';
import { IReverseGeocodeAddress } from '../models/reverse_geocode_address';
import { IRpcClient } from '../rpc';

type GetAddressesOpts = IGetAddressesOpts | ICoordinate[];

export interface IGetAddressesOpts {
  coordinates: ICoordinate[];
  hosAddresses?: boolean;
  movingAddresses?: boolean;
}

export function getAddresses(
  client: IRpcClient,
  opts: GetAddressesOpts
): Observable<IReverseGeocodeAddress> {
  const { coordinates, hosAddresses, movingAddresses } =
    opts instanceof Array ? ({ coordinates: opts } as IGetAddressesOpts) : opts;

  return client
    .call<IReverseGeocodeAddress[]>('GetAddresses', {
      coordinates,
      hosAddresses,
      movingAddresses,
    })
    .pipe(mergeMap(arr => from(arr)));
}
