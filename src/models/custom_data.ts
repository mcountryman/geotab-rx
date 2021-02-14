/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from "./entity";
import { IDevice } from "./device";

/**
 * Generic Custom Data from a GO unit that was sent through from a third-party device
 * that is attached to the serial port.
 */
export interface ICustomData extends IEntity {
  /** Gets or sets the custom data in binary format. Default [empty]. */
  data: number[];
  /** Gets or sets the date and time the log was created. */
  dateTime?: Date;
  /** Gets or sets the {@link IDevice} for which the data was recorded. */
  device: IDevice;
}
