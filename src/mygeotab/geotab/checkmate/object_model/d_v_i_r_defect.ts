/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from '../../../geotab/checkmate/object_model/i_entity';
import { IDefectRemark } from '../../../geotab/checkmate/object_model/i_defect_remark';
import { IDefect } from '../../../geotab/checkmate/object_model/i_defect';
import { IUser } from '../../../geotab/checkmate/object_model/i_user';
import { RepairStatusType } from '../../../geotab/checkmate/object_model/repair_status_type';



/**
*  A DVIRDefect is a Defect that can be associated with a . It contains repair information
* such as repair , repair , and .<br> DVIRDefect also consists a list of {@link IDefectRemark}
* which can be used to store additional information for the defect.
*/
export interface IDVIRDefect extends IEntity
{
  /** Gets or sets the which this DVIRDefect belongs to. */
  defect: IDefect;
  /** Gets or sets the {@link IDefectRemark}s which this DVIRDefect has. */
  defectRemarks: IDefectRemark[];
  /** Gets or sets the date and time the DVIRDefect was repaired. */
  repairDateTime?: Date;
  /** Gets or sets the {@link IRepairStatusType} of this DVIRDefect. */
  repairStatus?: RepairStatusType;
  /** Gets or sets the {@link IUser} who repaired the DVIRDefect. */
  repairUser: IUser;
}
