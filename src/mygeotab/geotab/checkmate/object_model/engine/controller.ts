/* eslint-disable @typescript-eslint/no-empty-interface */
import { INameEntityWithVersion } from '../../../../geotab/checkmate/object_model/i_name_entity_with_version';
import { ISource } from '../../../../geotab/checkmate/object_model/engine/i_source';



/**
* The controller that the diagnostic belongs to. Controllers could be ABS controller,
* suspension controller etc. The available controllers are listed in the {@link IKnownId}.
*/
export interface IController extends INameEntityWithVersion
{
  /** Gets the controller diagnostic code (if applicable). */
  code?: number;
  /**
  * Gets or sets the message identification code for the controller of the diagnostic
  * (if applicable).
  */
  codeId?: number;
  /** Gets or sets the unique identifier for the specific {@link IId}. */
  id: string;
  /**
  * Gets or sets the name of this entity that uniquely identifies it and is used when
  * displaying this entity.
  */
  name: string;
  /** Gets or sets the standard (format) of the {@link ISource}. */
  source: ISource;
}
