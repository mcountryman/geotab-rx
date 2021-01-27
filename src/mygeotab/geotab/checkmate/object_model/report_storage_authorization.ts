/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from '../../../geotab/checkmate/object_model/i_entity';
import { IReportStorage } from '../../../geotab/checkmate/object_model/i_report_storage';
import { IUser } from '../../../geotab/checkmate/object_model/i_user';



/**
* The {@link IReportStorageAuthorization} links a report to a user who is authorised
* to view that report.
*/
export interface IReportStorageAuthorization extends IEntity
{
  /** Gets or sets a timestamp of when the report was generated. */
  dateTime?: Date;
  /** Gets or sets the report. */
  reportStorage?: IReportStorage;
  /** Gets or sets the id of the user who is authorized to view the report. */
  user?: IUser;
}
