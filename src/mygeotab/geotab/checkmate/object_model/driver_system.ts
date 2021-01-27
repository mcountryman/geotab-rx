/* eslint-disable @typescript-eslint/no-empty-interface */
import { IDriver } from '../../../geotab/checkmate/object_model/i_driver';
import { IGroup } from '../../../geotab/checkmate/object_model/i_group';



/** A driver that is a system driver. */
export interface IDriverSystem extends IDriver
{
  /** Gets or sets the list of organization {@link IGroup}(s) that the user belongs to. */
  companyGroups: IGroup[];
  /** Gets or sets the home {@link IGroup}(s) for the driver. */
  driverGroups: IGroup[];
  /** Gets or sets the unique identifier for this entity. see {@link IId}. */
  id: string;
  /**
  * Gets or sets the name of this entity that uniquely identifies it and is used when
  * displaying this entity. The name cannot be changed for this Driver.
  */
  name: string;
  /** Gets or sets the private {@link IGroup}(s) that the user belongs to. */
  privateUserGroups: IGroup[];
  /** Gets or sets the {@link IGroup}(s) for reporting that this user belongs to. */
  reportGroups: IGroup[];
  /**
  * Gets or sets the security {@link IGroup}(s) this user belongs to defining the users
  * access.
  */
  securityGroups: IGroup[];
}
