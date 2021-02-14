/* eslint-disable @typescript-eslint/no-empty-interface */
import { INotificationNewsDataInfo } from "../notification_news_data_info";

/** The message of maintenance notification in the provided languages. */
export interface ILocalizedNews {
  /** Gets or sets the expiration. */
  expiration: Date;
  /** Gets or sets the messages. */
  languageMessage: { [key: string]: INotificationNewsDataInfo };
}
