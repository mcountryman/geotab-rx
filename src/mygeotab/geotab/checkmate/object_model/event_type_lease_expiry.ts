/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEventType } from '../../../geotab/checkmate/object_model/i_event_type';



/** An event that occurs when the lease expires. */
export interface IEventTypeLeaseExpiry extends IEventType
{
  /** Gets or sets gets the unique identifier for this entity. See {@link IId}. */
  id: string;
  /**
  * @inheritdoc
  */
  name: string;
}
