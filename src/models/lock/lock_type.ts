/* eslint-disable @typescript-eslint/no-empty-interface */
import { INameEntity } from "../name_entity";

/**
 *  A Process lock record.
 *
 * @deprecated
 */
export interface ILockType extends INameEntity {
  /** Gets or sets if the type is disabled. */
  isDisabled?: boolean;
}
