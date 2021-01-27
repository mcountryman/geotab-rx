/* eslint-disable @typescript-eslint/no-empty-interface */
import { IDataToComponentContent } from '../../../geotab/checkmate/object_model/i_data_to_component_content';



/** Message to request status data. */
export interface IStatusDataRequestContent extends IDataToComponentContent
{
  /** Gets or sets the s to request data from. */
  ids: string[];
}
