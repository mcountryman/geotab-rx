/* eslint-disable @typescript-eslint/no-empty-interface */
import { INotificationBinaryFile } from '../../../geotab/checkmate/object_model/i_notification_binary_file';
import { IReportTemplate } from '../../../geotab/checkmate/object_model/i_report_template';
import { NotificationBinaryFileType } from '../../../geotab/checkmate/object_model/notification_binary_file_type';



/** Stores custom email notifications. */
export interface IEmailTemplate extends INotificationBinaryFile
{
  /** Gets or sets body of email. */
  body: string;
  /** Gets or sets report template. */
  exceptionsDetailTemplate: IReportTemplate;
  /** Gets or sets subject line of email. */
  subject: string;
  /** Gets or sets get the type of the binary data for notifications. */
  type: NotificationBinaryFileType;
}
