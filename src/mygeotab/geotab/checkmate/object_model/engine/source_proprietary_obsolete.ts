/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISource } from '../../../../geotab/checkmate/object_model/engine/i_source';



/**
* Specifies that the engine data originated from proprietary sources for an obsolete
* GUID.
*/
export interface ISourceProprietaryObsolete extends ISource
{
  /** Gets the singleton value. */
  value: ISourceProprietaryObsolete;
}
