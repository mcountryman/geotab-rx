/* eslint-disable @typescript-eslint/no-empty-interface */
import { IZoneTypeSystem } from '../../../geotab/checkmate/object_model/i_zone_type_system';



/** A zone type that is for address lookup. */
export interface IZoneTypeAddressLookup extends IZoneTypeSystem
{
  /** Gets the singleton value. */
  value: IZoneTypeAddressLookup;
}
