/* eslint-disable @typescript-eslint/no-empty-interface */

/** The authentication credentials for a {@link IUser} used when making calls to MyGeotab. */
export interface ICredentials {
  /** Gets or sets the database name. */
  database: string;
  /**
   * Gets or sets the users login password. This can be used instead of providing a session
   * Id. It is mutually exclusive with SessionId.
   */
  password: string;
  /**
   * Gets or sets the session Id is a token which is generated from an authentication
   * call and can be used instead of providing the password each time. It is mutually
   * exclusive with Password.
   */
  sessionId: string;
  /** Gets or sets the MyGeotab username. */
  userName: string;
}
