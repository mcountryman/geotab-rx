/* eslint-disable @typescript-eslint/no-empty-interface */


/** Inner JSON error class. */
export interface IJsonErrorInner
{
  /**
  * Gets or sets a Primitive or Structured value that contains additional information
  * about the error.
  */
  data: string;
  /** Gets or sets the message. */
  message: string;
  /** Gets or sets the name. */
  name: string;
  /** Gets or sets the stack trace. */
  stackTrace: string;
}
