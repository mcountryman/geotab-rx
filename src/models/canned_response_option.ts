/* eslint-disable @typescript-eslint/no-empty-interface */

/** Specifies the allowed responses to a {@link ITextMessage}. */
export interface ICannedResponseOption {
  /** Gets or sets the id number of the reply or null. */
  id: number;
  /** Gets or sets the text options provided for the CannedResponse message reply. */
  text: string;
}
