/* eslint-disable @typescript-eslint/no-empty-interface */
import { INotificationBinaryFile } from "./notification_binary_file";
import { NotificationBinaryFileType } from "./notification_binary_file_type";

/** Custom Notification Alert sound. */
export interface INotificationAudioAlarmFile extends INotificationBinaryFile {
  /** Gets or sets the binary data. */
  binaryData: number[];
  /** Gets or sets the type of the binary data for notifications. */
  type: NotificationBinaryFileType;
}
