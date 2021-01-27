/* eslint-disable @typescript-eslint/no-empty-interface */


/** An enum representing invalid user exception types. */
export enum InvalidUserType { 
  /** User session is expired. */
  Default = "Default", 
  /** User session is expired. */
  SessionExpired = "SessionExpired", 
  /** User is locked out. */
  UserLockout = "UserLockout", 
  /** User session is invalid. */
  SessionInvalid = "SessionInvalid"
}
