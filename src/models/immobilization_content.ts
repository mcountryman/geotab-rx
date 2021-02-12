/* eslint-disable @typescript-eslint/no-empty-interface */
import { IDataToComponentContent } from './data_to_component_content';
import { RelayState } from './relay_state';

/** The message content to immobilize a device. */
export interface IImmobilizationContent extends IDataToComponentContent {
  /** Gets or sets the relay state. */
  relayState: RelayState;
}
