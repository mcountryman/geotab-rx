/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from "./search";
import { IDeviceSearch } from "./device_search";
import { IGroupSearch } from "./group_search";
import { IUserSearch } from "./user_search";
import { MessageContentType } from "./message_content_type";

/** The object used to specify the arguments when searching for a {@link ITextMessage}. */
export interface ITextMessageSearch extends ISearch {
  /** Gets or sets search for TextMessages filtered based on the {@link IMessageContentType}. */
  contentTypes: MessageContentType[];
  /**
   * Gets or sets search for TextMessages sent to this {@link IDeviceSearch}. Available
   * DeviceSearch options are: IdGroupsGroupListSearch
   */
  deviceSearch: IDeviceSearch;
  /** Gets or sets search for TextMessages that were sent at this date or after. */
  fromDate?: Date;
  /**
   * Gets or sets search for TextMessages sent to Devices that are members of these GroupSearch(s)
   * or their child Groups. Available {@link IGroupSearch} options are: Id
   */
  groups: IGroupSearch[];
  /**
   * Gets or sets search for delivered or undelivered TextMessages. If it's set to true,
   * it will return all TextMessages that were delivered. If it set to false, it will
   * return all TextMessages that were not delivered. If it is set to null, it will return
   * both delivered and undelivered TextMessages.
   */
  isDelivered?: boolean;
  /**
   * Gets or sets search for TextMessages based on the "direction" of the message. If
   * it's set to true, it will return all TextMessages that were sent to a {@link IDevice}.
   * If it set to false, it will return all TextMessages that were not sent to a {@link
   * IDevice}. If it is set to null, it will return TextMessages sent to or from any
   * asset type.
   */
  isDirectionToVehicle?: boolean;
  /**
   * Gets or sets search for read or unread TextMessages. If it's set to true, it will
   * return all TextMessages that were read. If it set to false, it will return all TextMessages
   * that were not unread. If it is set to null, it will return both read and unread
   * TextMessages.
   */
  isRead?: boolean;
  /** Gets or sets search for TextMessages that were delivered/sent/read since this date. */
  modifiedSinceDate?: Date;
  /** Gets or sets search for TextMessages that have parent id as this {@link IId}. */
  parentMessageId: string;
  /** Gets or sets search for TextMessages that have parent id as this id. */
  parentTextMessageId?: number;
  /**
   * Gets or sets search for TextMessages sent to this {@link IUserSearch}. Available
   * UserSearch options are: IdCompanyGroupsDriverGroupsDriverGroupListSearch
   */
  recipientSearch: IUserSearch;
  /** Gets or sets search for TextMessages that were sent at this date or before. */
  toDate?: Date;
  /**
   * Gets or sets search for TextMessages sent by this {@link IUserSearch}. Available
   * UserSearch options are: IdCompanyGroupsDriverGroupsDriverGroupListSearch
   */
  userSearch: IUserSearch;
}
