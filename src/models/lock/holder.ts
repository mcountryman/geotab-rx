/* eslint-disable @typescript-eslint/no-empty-interface */
import { INameEntity } from "../name_entity";
import { ILock } from "../lock/lock";

/** The Lock permission. */
export interface IHolder extends INameEntity {
  /** Gets or sets gets if the holder is disabled. */
  isDisabled?: boolean;
  /** Gets or sets the Lock. */
  lock: ILock;
}
