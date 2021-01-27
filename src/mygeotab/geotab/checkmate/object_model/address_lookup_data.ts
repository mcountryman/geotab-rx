/* eslint-disable @typescript-eslint/no-empty-interface */
import { IReverseGeocodeAddress } from '../../../geotab/checkmate/object_model/i_reverse_geocode_address';
import { IZone } from '../../../geotab/checkmate/object_model/i_zone';
import { IZoneType } from '../../../geotab/checkmate/object_model/i_zone_type';



/** The address data looked up on the server. */
export interface IAddressLookupData
{
  /** Gets or sets the address. */
  address?: IReverseGeocodeAddress;
  /** Gets or sets the geocoder name. */
  dataSource?: string;
  /** Gets or sets the exception. */
  exception?: any;
  /** Gets or sets the location. */
  location?: any;
  /** Gets or sets the owner. */
  owner?: any;
  /** Gets the zone external references. */
  zoneExternalReferences?: string;
  /** Gets or sets gets the zones. */
  zones?: IZone[];
  /** Gets the zone types. */
  zoneTypes?: IZoneType[];
}
