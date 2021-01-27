/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from '../../../geotab/checkmate/object_model/i_entity';



/** The class representing an Employee. */
export interface IEmployee extends IEntity
{
  /** Gets or sets the {@link IEmployee} first name. */
  firstName: string;
  /** Gets or sets the {@link IEmployee} identification reference. */
  identification: string;
  /** Gets or sets the {@link IEmployee} last name. */
  lastName: string;
}
