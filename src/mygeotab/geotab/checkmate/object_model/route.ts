/* eslint-disable @typescript-eslint/no-empty-interface */
import { INameEntityWithVersion } from '../../../geotab/checkmate/object_model/i_name_entity_with_version';
import { IRoutePlanItem } from '../../../geotab/checkmate/object_model/i_route_plan_item';
import { RouteType } from '../../../geotab/checkmate/object_model/route_type';
import { IDevice } from '../../../geotab/checkmate/object_model/i_device';



/**  A connected sequence of zones which create a path for the vehicle to follow. */
export interface IRoute extends INameEntityWithVersion
{
  /**
  * Gets or sets free text field where any user information can be stored and referenced
  * for this entity. Default [""].
  */
  comment: string;
  /**
  * Gets or sets the {@link IDevice} linked to the route. Only applies to "Plan" type
  * routes.
  */
  device: IDevice;
  /** Gets or sets the unique identifier for this entity. See {@link IId}. */
  id: string;
  /**
  * Gets or sets the name of this entity that uniquely identifies it and is used when
  * displaying this entity. Maximum length [255].
  */
  name: string;
  /**
  * Gets or sets the {@link IRoutePlanItem} item collection (sequence of stops which
  * make up the route).
  */
  routePlanItemCollection: IRoutePlanItem[];
  /** Gets or sets the {@link IRouteType}. Default [Basic]. */
  routeType?: RouteType;
}
