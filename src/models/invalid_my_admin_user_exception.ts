/* eslint-disable @typescript-eslint/no-empty-interface */

/**
 * This exception is thrown on a MyAdmin databaseName logon with an incorrect user/password
 * combination or when the MyAdmin user's credentials become invalid on a databaseName.
 */
export interface IInvalidMyAdminUserException {
  /** Gets the database related to the exception. */
  database: string;
  /** Gets the server related to the exception. */
  server: string;
}
