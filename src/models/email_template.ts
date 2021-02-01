/* eslint-disable @typescript-eslint/no-empty-interface */
import { INotificationBinaryFile } from "./notification_binary_file";
import { IReportTemplate } from "./report_template";
import { NotificationBinaryFileType } from "./notification_binary_file_type";

/** Stores custom email notifications. */
export interface IEmailTemplate extends INotificationBinaryFile {
  /** Gets or sets body of email. */
  body: string;
  /** Gets or sets report template. */
  exceptionsDetailTemplate: IReportTemplate;
  /** Gets or sets subject line of email. */
  subject: string;
  /** Gets or sets get the type of the binary data for notifications. */
  type: NotificationBinaryFileType;
}
