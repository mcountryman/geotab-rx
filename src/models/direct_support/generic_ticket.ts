/* eslint-disable @typescript-eslint/no-empty-interface */
import { IComment } from '../direct_support/comment';

/** Represents generic support ticket. */
export interface IGenericTicket {
  /** Gets or sets tickets additional reply. */
  addComment: IComment;
  /** Gets or sets ticket replies. */
  comments: IComment[];
  /** Gets or sets ticket creation date. */
  createdAt: Date;
  /** Gets or sets an email of the user created the ticket. */
  email: string;
  /** Gets or sets ticket's id. */
  id: string;
  /** Gets or sets current training status. */
  status: string;
  /** Gets or sets ticket's subject. */
  title: string;
  /** Gets or sets a user name (first + ' ' + last). */
  userName: string;
  /** Gets or sets ticket's version. */
  version?: number;
}
