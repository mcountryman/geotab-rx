/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from "./search";
import { IGroupSearch } from "./group_search";
import { IncludeGroups } from "./nclude_groups";
import { IBoundingBox } from "./geographical/bounding_box";
import { IZoneTypeSearch } from "./zone_type_search";

/**  The object used to specify the arguments when searching for (s). */
export interface IZoneSearch extends ISearch {
  /**
   * Gets or sets search for Zones with this External Reference. Wildcard can be used
   * by prepending/appending "%" to string. Example "%reference%".
   */
  externalReference: string;
  /**
   * Gets or sets search for Zones that were active at this date or after. Set to UTC
   * now to search for only currently active (non-archived) zones.
   */
  fromDate?: Date;
  /**
   * Gets or sets search for Zones that are members of these (s) one of it's children
   * or one of it's parents. Available GroupSearch options are:. Id
   */
  groups: IGroupSearch[];
  /**
   * Gets or sets include zones that are in the in this hierarchy of the (s) provided.
   * If no (s) are provided the user's data scope groups will be used. Default: .ParentAndChild.
   */
  includeGroups?: IncludeGroups;
  /**
   * Gets or sets search for entities that contain specific keywords in all wildcard
   * string-searchable fields.
   */
  keywords: string[];
  /** Gets or sets exclude Zones whose radius is smaller than this size (meters). */
  minimumRadiusInMeters?: number;
  /**
   * Gets or sets search for Zones with this Name. Wildcard can be used by prepending/appending
   * "%" to string. Example "%name%".
   */
  name: string;
  /**
   * Gets or sets the {@link IBoundingBox} search for Zones in this area extent, the
   * zones being retrieved must be located in this area. Typically used for retrieving
   * Zones in the extents of a bounding box. The SearchArea object should contain the
   * minimum and maximum latitude and longitude representing the search area.
   */
  searchArea: IBoundingBox;
  /** Gets or sets search for Zones that were active at this date or before. */
  toDate?: Date;
  /**
   * Gets or sets search for Zones in this area extent, the zones being retrieved must
   * be located in this area. Typically used for retrieving Zones in the extents of a
   * Map Viewport. The viewport object should contain the top left coordinate of the
   * viewport (x,y) and the width, height. An example of the JSON structure of this object
   * is: { "x":-106.72608947754628, "y":55.862873349922104, "width":41.04492187500384,
   * "height":-28.66703166908511 }.
   */
  viewport: any;
  /**
   * Gets or sets search for Zones that are of type (s). Available ZoneTypeSearch options
   * are:. Id
   */
  zoneTypes: IZoneTypeSearch[];
}
