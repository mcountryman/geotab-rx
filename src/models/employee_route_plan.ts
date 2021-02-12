/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from './entity';
import { IEmployee } from './employee';
import { IRoute } from './route';

/**
 *  The {@link IEmployee} / {@link IRoute} association.
 *
 * @deprecated
 */
export interface IEmployeeRoutePlan extends IEntity {
  /** Gets or sets the associated {@link IEmployee}. */
  employee?: IEmployee;
  /** Gets or sets the end date for the plan item. */
  endDate?: Date;
  /** Gets or sets the external (custom) reference. */
  externalReference?: string;
  /** Gets or sets the associated {@link IRoute}. */
  route?: IRoute;
  /** Gets or sets the start date for the plan item. */
  startDate?: Date;
}
