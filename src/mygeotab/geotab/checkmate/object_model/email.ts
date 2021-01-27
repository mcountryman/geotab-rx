/* eslint-disable @typescript-eslint/no-empty-interface */


/** Models an Email. */
export interface IEmail
{
  /** Gets or sets the email body in HTML format. */
  bodyHtml: string;
  /** Gets or sets the email body in plain text format. */
  bodyText: string;
  /** Gets or sets the sender email address. */
  from: string;
  /** Gets or sets the email subject. */
  subject: string;
  /** Gets or sets the recipient email address. */
  to: string;
}
