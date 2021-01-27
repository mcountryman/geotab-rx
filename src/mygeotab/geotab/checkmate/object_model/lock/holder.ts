/* eslint-disable @typescript-eslint/no-empty-interface */
import { INameEntity } from '../../../../geotab/checkmate/object_model/i_name_entity';
import { ILock } from '../../../../geotab/checkmate/object_model/lock/i_lock';



/** The Lock permission. */
export interface IHolder extends INameEntity
{
  /** Gets or sets gets if the holder is disabled. */
  isDisabled?: boolean;
  /** Gets or sets the Lock. */
  lock: ILock;
}
