/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISource } from '../../../../geotab/checkmate/object_model/engine/i_source';



/** Specifies that the engine data originated from proprietary sources. */
export interface ISourceBrp extends ISource
{
  /** Gets the singleton value. */
  value: ISourceBrp;
}
