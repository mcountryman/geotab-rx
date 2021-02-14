/* eslint-disable @typescript-eslint/no-empty-interface */
import { PingMessageType } from "../web/ping_message_type";

/**
 *  A ping message.
 *
 * @deprecated
 */
export interface IPingMessage {
  /** Gets or sets the date time the message was created. */
  dateTime?: Date;
  /** Gets or sets the key, used to identify sender. */
  key?: any;
  /** Gets or sets the type of message. */
  messageType?: PingMessageType;
  /** Gets or sets free test field. */
  textContent: string;
}
