/* eslint-disable @typescript-eslint/no-empty-interface */

/** The xml payload used for live messaging. */
export interface IXmlBinaryPayload {
  /** Gets or sets the encoded string. */
  encodedString: string;
  /** Gets or sets a the raw binary message. */
  payload: number[];
}
