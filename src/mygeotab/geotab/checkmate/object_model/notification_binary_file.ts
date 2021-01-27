/* eslint-disable @typescript-eslint/no-empty-interface */
import { INameEntity } from '../../../geotab/checkmate/object_model/i_name_entity';
import { NotificationBinaryFileType } from '../../../geotab/checkmate/object_model/notification_binary_file_type';
import { MediaFileType } from '../../../geotab/checkmate/object_model/media_file_type';



/** Notification binary file. */
export interface INotificationBinaryFile extends INameEntity
{
  /** Gets or sets the file type. */
  fileType?: MediaFileType;
  /** Gets or sets get the type of the binary data for notifications. */
  type: NotificationBinaryFileType;
}
