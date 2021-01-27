/* eslint-disable @typescript-eslint/no-empty-interface */
import { INameEntityWithVersion } from '../../../geotab/checkmate/object_model/i_name_entity_with_version';
import { IZoneType } from '../../../geotab/checkmate/object_model/i_zone_type';
import { IGroup } from '../../../geotab/checkmate/object_model/i_group';



/**
* Sometimes referred to as a "Geofence", a zone is a virtual geographic boundary,
* defined by its points representing a real-world geographic area.
*/
export interface IZone extends INameEntityWithVersion
{
  /**
  * Gets or sets the date indicating when this zone begins it's active lifespan. Default
  * [UtcNow].
  */
  activeFrom?: Date;
  /**
  * Gets or sets the date indicating when this zone finishes it's active lifespan. Default
  * [MaxDate].
  */
  activeTo?: Date;
  /** Gets the latitude coordinate of the zone's centroid. */
  centroidLatitude?: number;
  /** Gets the longitude coordinate of the zone's centroid. */
  centroidLongitude?: number;
  /**
  * Gets or sets a free text field where any user information can be stored and referenced
  * for this entity. Default [""].
  */
  comment: string;
  /**
  * Gets or sets a value indicating whether this zone must be displayed when viewing
  * a map or it should be hidden. Default [true].
  */
  displayed?: boolean;
  /** Gets the zone's extent. */
  extent: any[];
  /**
  * Gets or sets external Reference. Any type of external reference you would like to
  * attach to the zone. For example; an ID from another data source referenced when
  * exporting zone data into another program. Maximum length [255] Default [""].
  */
  externalReference: string;
  /**
  * Gets or sets the of the fill for this zone when showing on a map. Default [based
  * on zone type; Customer: Orange, Office: Light Orange, Home: Green, Other: Blue].
  */
  fillColor: any;
  /** Gets or sets the group(s) this zone belongs to. */
  groups: IGroup[];
  /** Gets or sets the unique identifier for this entity. See . */
  id: string;
  /**
  * Gets or sets whether this zone name must be shown when devices stop in this zone.
  * If [true] a "zone stop rule" (Rule with BaseType: ZoneStop) will automatically be
  * created for this zone. This is to facilitate reporting on zone stops. The rule is
  * not visible via the UI. Default [true].
  */
  mustIdentifyStops?: boolean;
  /**
  * Gets or sets the name of this entity that uniquely identifies it and is used when
  * displaying this entity.
  */
  name: string;
  /**
  * Gets or sets the list of points (see ) that make up this zone. A zone should be
  * closed, the first point is the same coordinate as the last point. It is possible
  * to add a zone with an unclosed set of points but the points will be closed by the
  * system.<br> 
  */
  points: any[];
  /** Gets or sets the list of {@link IZoneType}(s) this zone belongs to. Default [Customer]. */
  zoneTypes: IZoneType[];
}
