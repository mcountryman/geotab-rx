/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEventType } from "./event_type";

/** An event that occurs when the tires need to be rotated. */
export interface IEventTypeTireRotation extends IEventType {
  /**
   * @inheritdoc
   */
  id: string;
  /**
   * @inheritdoc
   */
  name: string;
}
