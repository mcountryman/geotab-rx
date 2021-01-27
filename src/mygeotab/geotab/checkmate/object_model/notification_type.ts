/* eslint-disable @typescript-eslint/no-empty-interface */


/** The type of {@link INotification}. */
export enum NotificationType { 
  /** Notification is info or status data */
  Info = "Info", 
  /**
  * Notification is an application exception (server and client errors) that are due
  * to factors outside of user control. NotificationApplicationExceptionData is being
  * deprecated, send errors directly to FogBugz instead.
  */
  ApplicationException = "ApplicationException", 
  /** Notification is due to an exception rule being triggered */
  Exception = "Exception", 
  /** Notification is System News */
  News = "News", 
  /** Notification will be processed and have it's Info updated. */
  ExceptionToBeProcessed = "ExceptionToBeProcessed", 
  /**
  * Notification is an application exception (server and/or client errors) that are
  * due to user inputs/actions that the user can fix.
  */
  ApplicationExceptionForUsers = "ApplicationExceptionForUsers", 
  /** Notification is user account settings changed. */
  MessageForUser = "MessageForUser", 
  /**
  * Notification that a user was modified (created, removed, modified, etc.) for administrators
  * (SystemNotice subscribers) with appropriate permissions. Related: {@link IUserModifiedValueInfo}.<br>
  */
  UserModified = "UserModified", 
  /**
  * Notification for administrators (SystemNotice subscribers) that are due to user
  * inputs/actions. Related: {@link INotificationForAdminUsersData}.<br> 
  */
  ApplicationNotificationForAdmins = "ApplicationNotificationForAdmins"
}
