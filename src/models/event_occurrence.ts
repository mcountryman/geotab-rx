/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from './entity';
import { IEventRule } from './event_rule';
import { IDevice } from './device';

/**
 *  A particular occurrence of an {@link IEventRule}.
 *
 * @deprecated
 */
export interface IEventOccurrence extends IEntity {
  /** Gets or sets a value indicating whether this {@link IEventOccurrence} is active. */
  active?: boolean;
  /** Gets or sets the adjusted engine horus. */
  adjustedEngineHours?: Date;
  /** Gets or sets the adjusted odometer. */
  adjustedOdometer?: number;
  /**
   * Gets or sets free text field where any user information can be stored and referenced
   * for this entity.
   */
  comment: string;
  /** Gets or sets the current engine hours. */
  currentEngineHours?: Date;
  /** Gets or sets the current odometer. */
  currentOdometer?: number;
  /** Gets or sets gets the {@link IDevice}. */
  device: IDevice;
  /** Gets or sets the event date. */
  eventDate?: Date;
  /** Gets or sets the event rule. */
  eventRule: IEventRule;
}
