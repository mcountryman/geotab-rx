/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEventType } from '../../../geotab/checkmate/object_model/i_event_type';



/** An Event that occurs when the license plate expires. */
export interface IEventTypeLicensePlateExpiry extends IEventType
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
