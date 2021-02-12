/* eslint-disable @typescript-eslint/no-empty-interface */
import { INotificationData } from './notification_data';
import { INotificationNewsDataInfo } from './notification_news_data_info';

/** The notification data pertaining to Exception Rules. */
export interface INotificationNewsData extends INotificationData {
  /** Gets or sets the exception event that holds the data for this notification. */
  info: INotificationNewsDataInfo;
}
