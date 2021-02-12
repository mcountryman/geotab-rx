/* eslint-disable @typescript-eslint/no-empty-interface */
import { ITextMessageContentType } from './text_message_content_type';

/** The contents of a {@link ITextMessage} that will be delivered to a GoTalk. */
export interface IGoTalkContent extends ITextMessageContentType {
  /** Gets or sets the message. The message can be up to 256 characters. */
  message: string;
  /**
   * Gets method to get raw binary. NOTE: The endianness of IDs and other numbers inside
   * of the payload are reversed to keep the C# format.
   */
  payload: number[];
}
