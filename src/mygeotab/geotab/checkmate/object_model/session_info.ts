/* eslint-disable @typescript-eslint/no-empty-interface */


/**
*  Internal class with the session info.
*
* @deprecated
*/
export interface ISessionInfo
{
  /** Gets or sets the database this applies to. */
  database: string;
  /**
  * Gets or sets the expiry date in UTC. Sessions remain valid until this DateTime has
  * passed.
  */
  dateTime?: Date;
  /** Gets or sets the last date when user changed the password. */
  lastPasswordChangedDate?: Date;
  /**
  * Gets or sets the ultimate expiry date time. Sessions should expire after this time
  * and cannot be extended.
  */
  ultimateExpiryDateTime?: Date;
  /** Gets or sets the user name. */
  username: string;
}
