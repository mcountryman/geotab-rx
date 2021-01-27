/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from '../../../geotab/checkmate/object_model/i_entity';
import { IGroup } from '../../../geotab/checkmate/object_model/i_group';



/** A class that holds data stored by an add-in. */
export interface IAddInData extends IEntity
{
  /** Gets or sets the add-in identifier. */
  addInId: string;
  /** Gets or sets the data. */
  data: string;
  /**
  * @inheritdoc
  */
  groups: IGroup[];
}
