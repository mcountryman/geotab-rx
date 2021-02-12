/* eslint-disable @typescript-eslint/no-empty-interface */
import { ITextContent } from './text_content';
import { ICannedResponseOption } from './canned_response_option';

/**
 * Text message content including a list of predetermined responses. Derived from {@link
 * ITextContent}.
 */
export interface ICannedResponseContent extends ITextContent {
  /** Gets or sets the list of predetermined responses to a text message. See {@link ICannedResponseOption}. */
  cannedResponseOptions: ICannedResponseOption[];
  /** Gets or sets get the predetermined responses options that are serialized. */
  cannedResponseOptionsSerialized: ICannedResponseOption[];
}
