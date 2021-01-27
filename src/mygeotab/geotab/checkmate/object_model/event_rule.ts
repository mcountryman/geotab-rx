/* eslint-disable @typescript-eslint/no-empty-interface */
import { INameEntity } from '../../../geotab/checkmate/object_model/i_name_entity';
import { IEventType } from '../../../geotab/checkmate/object_model/i_event_type';



/** The rule describing an event. */
export interface IEventRule extends INameEntity
{
  /**
  * Gets or sets free text field where any user information can be stored and referenced
  * for this entity.
  */
  comment: string;
  /** Gets or sets the of the event. */
  dateTime?: Date;
  /** Gets or sets the engine hours. */
  engineHours?: Date;
  /** Gets or sets the event date. */
  eventDate?: Date;
  /** Gets or sets the type of the event. */
  eventType: IEventType;
  /** Gets or sets gets the unique identifier for this entity. See {@link IId}. */
  id: string;
  /** Gets or sets the kilometers. */
  kilometers?: number;
  /** Gets or sets the months. */
  months?: number;
  /**
  * Gets or sets the name of this entity that uniquely identifies it and is used when
  * displaying this entity.
  */
  name: string;
}
