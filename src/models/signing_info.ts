/* eslint-disable @typescript-eslint/no-empty-interface */

/** Used to hold all signing info. */
export interface ISigningInfo {
  /** Gets or sets the datetime when the report is approved. */
  datetime: Date;
  /** Gets or sets the signatory, the person who approve the report. */
  signatory: string;
  /** Gets or sets the signature of the report. */
  signature: string;
  /** Gets or sets the report binary. */
  signingObjectHash: number[];
  /** Gets or sets the thumbprint. */
  thumbprint: string;
}
