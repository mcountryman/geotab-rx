/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISource } from '../../../../geotab/checkmate/object_model/engine/i_source';



/**
* Specifies that the engine data originated from WWH enhanced type for an obsolete
* GUID.
*/
export interface ISourceObdSaObsolete extends ISource
{
  /** Gets the singleton value. */
  value: ISourceObdSaObsolete;
}
