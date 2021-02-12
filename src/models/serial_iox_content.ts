/* eslint-disable @typescript-eslint/no-empty-interface */
import { IDataToComponentContent } from './data_to_component_content';

/**
 * The contents of a {@link ITextMessage} containing data to give to a third-party
 * IOX Add-On over an RS232. The SerialIoxContent is a 'dumb pipe' type of message.
 * Whatever data is put in the data property will be delivered, as is, to the system
 * on the other end of the IOX-RS232.<br>
 */
export interface ISerialIoxContent extends IDataToComponentContent {
  /**
   * Gets or sets the channel the {@link IIoxAddOn} is communicating over. 0 means the
   * Add-On is not attached.
   */
  channel: number;
  /** Gets or sets the data to send to the {@link IIoxAddOn}. Up to 249 bytes can be sent. */
  data: number[];
}
