/* eslint-disable @typescript-eslint/no-empty-interface */

/** Represents ticket comment. */
export interface IComment {
  /** Gets or sets creation date. */
  createdAt: Date;
  /** Gets or sets commenter email. */
  email: string;
  /** Gets or sets commenter name. */
  name: string;
  /** Gets or sets comment text. */
  text: string;
}
