/* eslint-disable @typescript-eslint/no-empty-interface */
import { INotificationBinaryFile } from "./notification_binary_file";
import { NotificationBinaryFileType } from "./notification_binary_file_type";

/** Stores custom text notifications. */
export interface ITextTemplate extends INotificationBinaryFile {
  /** Gets or sets the text. */
  text: string;
  /** Gets or sets the type of the binary data for notifications. */
  type: NotificationBinaryFileType;
}
