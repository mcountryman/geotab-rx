/* eslint-disable @typescript-eslint/no-empty-interface */
import { INameEntity } from '../../../../geotab/checkmate/object_model/i_name_entity';



/**
*  Standard Parameter Group Number (PGN). Where there is no parameter group it is
* represented by "ParameterGroupNoneId".
*/
export interface IParameterGroup extends INameEntity
{
  /** Gets or sets the unique code of the PGN. */
  code?: number;
  /** Gets or sets the total length in bytes of the PGN. */
  dataLength?: number;
  /** Gets or sets the unique identifier for this entity. See {@link IId}. */
  id: string;
  /**
  * Gets or sets the name of this entity that uniquely identifies it and is used when
  * displaying this entity.
  */
  name: string;
}
