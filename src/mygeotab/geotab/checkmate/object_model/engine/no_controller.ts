/* eslint-disable @typescript-eslint/no-empty-interface */
import { IController } from '../../../../geotab/checkmate/object_model/engine/i_controller';
import { ISource } from '../../../../geotab/checkmate/object_model/engine/i_source';



/** An object representing NoController. */
export interface INoController extends IController
{
  /** Gets or sets the code. */
  codeId?: number;
  /** Gets or sets the unique identifier for this entity. see {@link IId}. */
  id: string;
  /**
  * Gets or sets the name of this entity that uniquely identifies it and is used when
  * displaying this entity.
  */
  name: string;
  /** Gets or sets the {@link ISource}. */
  source: ISource;
}
