/* eslint-disable @typescript-eslint/no-empty-interface */
import { IGroup } from '../../../geotab/checkmate/object_model/i_group';
import { IDevice } from '../../../geotab/checkmate/object_model/i_device';
import { IUser } from '../../../geotab/checkmate/object_model/i_user';
import { IRule } from '../../../geotab/checkmate/object_model/exceptions/i_rule';
import { IZone } from '../../../geotab/checkmate/object_model/i_zone';
import { ICustomReportSchedule } from '../../../geotab/checkmate/object_model/i_custom_report_schedule';
import { IDVIRLog } from '../../../geotab/checkmate/object_model/i_d_v_i_r_log';
import { ITrailer } from '../../../geotab/checkmate/object_model/i_trailer';
import { IDefect } from '../../../geotab/checkmate/object_model/i_defect';
import { IAddInData } from '../../../geotab/checkmate/object_model/i_add_in_data';



/** The entities which hold a relation to a group. */
export interface IGroupRelations
{
  /** Gets or sets the {@link IAddInData}(s) related to the Group. */
  addInDatas: IAddInData[];
  /** Gets or sets the {@link ICustomReportSchedule}(s) related to the Group. */
  customReportSchedules: ICustomReportSchedule[];
  /** Gets or sets the {@link IDefect}(s) related to the Group. */
  defects: IDefect[];
  /** Gets or sets the {@link IDevice}(s) with auto groups related to the Group. */
  deviceAutoGroups: IDevice[];
  /** Gets or sets the {@link IDevice}(s) related to the Group. */
  devices: IDevice[];
  /** Gets or sets the {@link IDriver}(s) related to the Group. */
  drivers: IUser[];
  /** Gets or sets the {@link IDVIRLog}(s) related to the Group. */
  dvirLogs: IDVIRLog[];
  /** Gets or sets the which the entities are related to. */
  group: IGroup;
  /** Gets or sets the {@link IRule}(s) related to the Group. */
  rules: IRule[];
  /** Gets or sets the {@link ITrailer}(s) related to the Group. */
  trailers: ITrailer[];
  /** Gets or sets the {@link IUser}(s) related to the Group. */
  users: IUser[];
  /** Gets or sets the {@link IZone}(s) related to the Group. */
  zones: IZone[];
}
