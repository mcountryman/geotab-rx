/* eslint-disable @typescript-eslint/no-empty-interface */
import { IDataToComponentContent } from "./data_to_component_content";

/** Message content to make the device beep. */
export interface IBeepContent extends IDataToComponentContent {
  /** Gets or sets the length of each beep (in multiples of 100ms). */
  beepDuration: number;
  /** Gets or sets the number of beeps. */
  numberOfBeeps: number;
  /** Gets or sets the time between beeps (in multiples of 100ms). */
  timeBetweenBeeps: number;
}
