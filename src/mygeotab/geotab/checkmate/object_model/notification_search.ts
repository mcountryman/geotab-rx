/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from '../../../geotab/checkmate/object_model/i_search';
import { INotificationData } from '../../../geotab/checkmate/object_model/i_notification_data';
import { IRecipientSearch } from '../../../geotab/checkmate/object_model/i_recipient_search';



/**
*  The object used to specify the arguments when searching for {@link INotification}(s).
*
* @deprecated
*/
export interface INotificationSearch extends ISearch
{
  /** Gets or sets search for Notifications with this {@link INotificationData} Id. */
  notificationData: INotificationData;
  /** Gets or sets search for Notifications with this {@link IRecipientSearch} Id. */
  recipientSearch: IRecipientSearch;
}
