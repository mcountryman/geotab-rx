/* eslint-disable @typescript-eslint/no-empty-interface */


/** The types of identification keys that can be assigned to a. {@link IKey} */
export enum DriverKeyType { 
  /** USB blue driver ID Key */
  Usb = "Usb", 
  /** NFC driver ID Key */
  Nfc = "Nfc", 
  /** CustomNfc driver ID Key */
  CustomNfc = "CustomNfc", 
  /** Tachograph driver ID Key */
  Tachograph = "Tachograph", 
  /** Custom driver ID Key */
  Custom = "Custom"
}
