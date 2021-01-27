/* eslint-disable @typescript-eslint/no-empty-interface */
import { IDataToComponentContent } from '../../../geotab/checkmate/object_model/i_data_to_component_content';



/**
* The contents of a {@link ITextMessage} that can be used to control the state of
* an IOX-OUTPUT.
*/
export interface IIoxOutputContent extends IDataToComponentContent
{
  /**
  * Gets or sets a value indicating whether the relay state. [true] if the relay is
  * on; otherwise, [false].
  */
  isRelayOn: boolean;
}
