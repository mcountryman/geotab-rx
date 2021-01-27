/* eslint-disable @typescript-eslint/no-empty-interface */
import { IDevice } from '../../../geotab/checkmate/object_model/i_device';
import { IEventRule } from '../../../geotab/checkmate/object_model/i_event_rule';



/** EventRule and Device. */
export interface IEventRuleDevice
{
  /** Gets or sets the device. */
  device: IDevice;
  /** Gets or sets the event rule. */
  eventRule: IEventRule;
}
