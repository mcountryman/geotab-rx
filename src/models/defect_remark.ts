/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from "./entity";
import { IDVIRDefect } from "./d_v_i_r_defect";
import { IUser } from "./user";
import { IMediaFile } from "./files/media_file";

/**  An DefectRemark is a remark that can be associated with a . */
export interface IDefectRemark extends IEntity {
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
