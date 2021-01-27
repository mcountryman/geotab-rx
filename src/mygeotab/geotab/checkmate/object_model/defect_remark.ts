/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from '../../../geotab/checkmate/object_model/i_entity';
import { IDVIRDefect } from '../../../geotab/checkmate/object_model/i_d_v_i_r_defect';
import { IUser } from '../../../geotab/checkmate/object_model/i_user';
import { IMediaFile } from '../../../geotab/checkmate/object_model/files/i_media_file';



/**  An DefectRemark is a remark that can be associated with a . */
export interface IDefectRemark extends IEntity
{
  /** Gets or sets the date and time the log was created. */
  dateTime?: Date;
  /** Gets or sets the which this DefectRemark belongs to. */
  dvirDefect: IDVIRDefect;
  /** Gets or sets the list of {@link IMediaFile} for a defect remark. */
  mediaFiles: IMediaFile[];
  /** Gets or sets the DVIR text associated with the log. */
  remark: string;
  /** Gets or sets the {@link IUser} who created the log. */
  user: IUser;
}
