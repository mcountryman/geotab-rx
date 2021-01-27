/* eslint-disable @typescript-eslint/no-empty-interface */
import { IDataToComponentContent } from '../../../geotab/checkmate/object_model/i_data_to_component_content';
import { RelayState } from '../../../geotab/checkmate/object_model/relay_state';



/** The message content to immobilize a device. */
export interface IImmobilizationContent extends IDataToComponentContent
{
  /** Gets or sets the relay state. */
  relayState: RelayState;
}
