/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from './search';
import { INotificationData } from './notification_data';
import { IRecipientSearch } from './recipient_search';

/**
 *  The object used to specify the arguments when searching for {@link INotification}(s).
 *
 * @deprecated
 */
export interface INotificationSearch extends ISearch {
  /** Gets or sets search for Notifications with this {@link INotificationData} Id. */
  notificationData: INotificationData;
  /** Gets or sets search for Notifications with this {@link IRecipientSearch} Id. */
  recipientSearch: IRecipientSearch;
}
