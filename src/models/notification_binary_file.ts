/* eslint-disable @typescript-eslint/no-empty-interface */
import { INameEntity } from './name_entity';
import { NotificationBinaryFileType } from './notification_binary_file_type';
import { MediaFileType } from './media_file_type';

/** Notification binary file. */
export interface INotificationBinaryFile extends INameEntity {
  /** Gets or sets the file type. */
  fileType?: MediaFileType;
  /** Gets or sets get the type of the binary data for notifications. */
  type: NotificationBinaryFileType;
}
