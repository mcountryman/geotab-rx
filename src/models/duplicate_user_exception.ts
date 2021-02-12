/* eslint-disable @typescript-eslint/no-empty-interface */
import { IDuplicateException } from './duplicate_exception';

/**
 * An exception that occurs when adding a new user or when updating an existing user
 * would cause a duplicate.
 */
export interface IDuplicateUserException extends IDuplicateException {
  /** Gets message of the exception. */
  message: string;
}
