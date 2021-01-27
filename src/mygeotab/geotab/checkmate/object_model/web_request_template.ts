/* eslint-disable @typescript-eslint/no-empty-interface */
import { INotificationBinaryFile } from '../../../geotab/checkmate/object_model/i_notification_binary_file';
import { WebRequestTemplateHttpVerb } from '../../../geotab/checkmate/object_model/web_request_template_http_verb';
import { NotificationBinaryFileType } from '../../../geotab/checkmate/object_model/notification_binary_file_type';



/** URL template. */
export interface IWebRequestTemplate extends INotificationBinaryFile
{
  /** Gets or sets the data to be sent as the POST data. Null otherwise. */
  postBody: string;
  /** Gets or sets the request type is an HTTP GET or POST. */
  requestType?: WebRequestTemplateHttpVerb;
  /** Gets or sets get the type of the binary data for notifications. */
  type: NotificationBinaryFileType;
  /** Gets or sets the url to connect to. */
  url: string;
}
