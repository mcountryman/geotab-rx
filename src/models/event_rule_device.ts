/* eslint-disable @typescript-eslint/no-empty-interface */
import { IDevice } from "./device";
import { IEventRule } from "./event_rule";

/** EventRule and Device. */
export interface IEventRuleDevice {
  /** Gets or sets the device. */
  device: IDevice;
  /** Gets or sets the event rule. */
  eventRule: IEventRule;
}
