/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISource } from '../../../../geotab/checkmate/object_model/engine/i_source';



/** Specifies that the engine data originated from a third-party device. */
export interface ISourceThirdParty extends ISource
{
  /** Gets the singleton value. */
  value: ISourceThirdParty;
}
