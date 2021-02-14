/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from "../entity";
import { IDevice } from "../device";

/** Binary Message for Go Device. */
export interface IBinaryMessage extends IEntity {
  /** Gets the delivered. */
  delivered?: Date;
  /** Gets or sets the device. */
  device: IDevice;
  /** Gets or sets a value indicating whether sets the direction to vehicle. */
  directionToVehicle: boolean;
  /** Gets the expire. */
  expire?: Date;
  /** Gets or sets the life span. */
  lifeSpan: Date;
  /** Gets or sets a value indicating whether sets the mark as delivered. */
  markAsDelivered: boolean;
  /** Gets or sets the payload. */
  payload: any;
  /** Gets the sent. */
  sent?: Date;
}
