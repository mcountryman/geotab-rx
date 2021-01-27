/* eslint-disable @typescript-eslint/no-empty-interface */


/** The results from notifying all databases on a server of news. */
export interface INotifyNewsResult
{
  /** Gets or sets the database. */
  database: string;
  /** Gets or sets the message. */
  message: string;
  /** Gets or sets a value indicating whether this {@link INotifyNewsResult} is success. */
  success: boolean;
}
