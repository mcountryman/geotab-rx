/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEventType } from '../../../geotab/checkmate/object_model/i_event_type';



/** An event that occurs when the oil needs to be changed. */
export interface IEventTypeOilChange extends IEventType
{
  /**
  * @inheritdoc
  */
  id: string;
  /**
  * @inheritdoc
  */
  name: string;
}
