/* eslint-disable @typescript-eslint/no-empty-interface */

/** The type of {@link ITextMessage} content. */
export enum MessageContentType {
  /** Basic text message. See {@link ITextContent}. */
  Normal = 'Normal',
  /** Text message that also includes response options. See {@link ICannedResponseContent}. */
  CannedResponse = 'CannedResponse',
  /** Text message that includes a location. See {@link ILocationContent}. */
  Location = 'Location',
  /** Content Type for sending data to a component */
  DataToComponent = 'DataToComponent',
  /** Content Type for a status data request */
  StatusDataRequest = 'StatusDataRequest',
  /** Content Type for immobilization */
  Immobilization = 'Immobilization',
  /** Text message that is converted to speech. Must have GOTalk. */
  GoTalk = 'GoTalk',
  /**
   * Text message that includes instructions to open or close an IOX-OUTPUT relay. See
   * {@link IIoxOutputContent}.
   */
  IoxOutput = 'IoxOutput',
  /** for Iox devices. Text message that causes the GoDevice to beep. See {@link IBeepContent}. */
  Beep = 'Beep',
  /**
   * Text message that contains bytes to give to a third-party IOX Add-On. See {@link
   * ISerialIoxContent}.
   */
  SerialIox = 'SerialIox',
  /** Text message with information to add/remove a driver from a {@link IDriverWhiteListContent}. */
  DriverWhiteList = 'DriverWhiteList',
  /**
   * Text message that contains bytes in a predefined format that describes the MimeType
   * to a third-party IOX Add-On over an RS232 connection. See .
   */
  MimeContent = 'MimeContent',
  /**
   * Text message that contains bytes to give to a third-party IOX Add-On. See {@link
   * ICANMessageContent}.
   */
  CAN = 'CAN',
  /**
   * Text message that contains bytes to give to a third-party IOX Add-On. See {@link
   * ICANMessageContent}.
   */
  PassthroughEnabledMessage = 'PassthroughEnabledMessage',
  /** Content used to issue commands to a vehicle (for example locking doors). */
  VehicleCommand = 'VehicleCommand',
}
