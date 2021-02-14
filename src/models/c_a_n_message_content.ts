/* eslint-disable @typescript-eslint/no-empty-interface */
import { IDataToComponentContent } from "./data_to_component_content";

/**
 * The contents of a {@link ITextMessage} containing data to give to a device connected
 * to a CAN-IOX. The CANMessageContent is a 'dumb pipe' type of message. Whatever data
 * is put in the data property will be delivered, as is, to the system on the other
 * end of the device connected to a CAN-IOX.<br>
 */
export interface ICANMessageContent extends IDataToComponentContent {
  /** Gets or sets the ArbitrationId. Length is 4 bytes. */
  arbitrationId: number;
  /**
   * Gets or sets the channel the {@link IIoxAddOn} is communicating over. 0 means the
   * Add-On is not attached.
   */
  channel: number;
  /** Gets or sets the data. Up to 8 bytes can be sent. */
  data: number[];
  /** Gets or sets a value indicating whether ExtendedFrameFlag is enabled. */
  extendedFrameFlag: boolean;
}
