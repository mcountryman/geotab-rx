/* eslint-disable @typescript-eslint/no-empty-interface */

/**
 *  The message type of a ping message.
 *
 * @deprecated
 */
export enum PingMessageType {
  /** Unknown ping message type */
  Unknown = "Unknown",
  /** The hello ping message type */
  Hello = "Hello",
  /** The keep alive ping message type */
  KeepAlive = "KeepAlive",
  /** The finish ping message type */
  Finish = "Finish",
  /** The error message type */
  Error = "Error",
}
