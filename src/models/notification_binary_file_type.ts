/* eslint-disable @typescript-eslint/no-empty-interface */

/** The type of the data stored in NotificationBinary. */
export enum NotificationBinaryFileType {
  /** Notification binary file type. None. */
  None = "None",
  /** The Audio Alarm Binary file type. */
  AudioAlarmFile = "AudioAlarmFile",
  /** The email template binary file type. */
  EmailTemplate = "EmailTemplate",
  /** The Web request template binary file type. */
  WebRequestTemplate = "WebRequestTemplate",
  /** The text message template */
  TextTemplate = "TextTemplate",
}
