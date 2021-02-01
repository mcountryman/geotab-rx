/* eslint-disable @typescript-eslint/no-empty-interface */

/**
 * An exception that occurs when adding a new object or when updating an existing object
 * that would cause a duplicate entry to occur.
 */
export interface IDuplicateException {
  /** Gets the message of the exception. */
  message: string;
}
