/* eslint-disable @typescript-eslint/no-empty-interface */


/** This describes an error that the web Javascript client has. */
export interface IWebClientError
{
  /** Gets or sets the ajax call. */
  ajaxCall: string;
  /** Gets or sets the ajax error. */
  ajaxError: string;
  /** Gets or sets the ajax success. */
  ajaxSuccess: string;
  /** Gets or sets the browser properties. */
  browserProperties: string;
  /** Gets or sets the error client settings. */
  clientSettings: string;
  /** Gets or sets the comment. */
  comment: string;
  /** Gets or sets the database. */
  database: string;
  /** Gets or sets he error source for errors without stack trace. */
  errorSource: string;
  /** Gets or sets the name of the exception. */
  exceptionName: string;
  /** Gets or sets the name of the file. */
  fileName: string;
  /** Gets or sets the error hash. */
  hash: string;
  /** Gets or sets the line number. */
  lineNumber: number;
  /** Gets or sets the message. */
  message: string;
  /**
  * Gets or sets additional error details. Might be navigation history, request logs
  * - everything that doesn't match other fields.
  */
  otherDetails: string;
  /** Gets or sets the previous errors. */
  previousErrors: string;
  /** Gets or sets the stack trace. */
  stackTrace: string;
  /** Gets or sets the tag. */
  tag: string;
  /** Gets or sets gets or Sets description of tasks running when exception happened. */
  tasks: string;
  /** Gets or sets the error timeStamp. */
  timeStamp: string;
  /** Gets or sets the URL. */
  url: string;
  /** Gets or sets the user. */
  user: string;
}
