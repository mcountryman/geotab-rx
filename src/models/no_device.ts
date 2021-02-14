/* eslint-disable @typescript-eslint/no-empty-interface */
import { IDevice } from "./device";
import { IGroup } from "./group";

/** A {@link IDevice} type that represents no device. */
export interface INoDevice extends IDevice {
  /** Gets or sets the device was active at this date or after. */
  activeFrom?: Date;
  /** Gets or sets the device was active at this date or before. */
  activeTo?: Date;
  /** Sets the {@link IGroup}(s) for reporting that this device belongs to. */
  groups?: IGroup[];
  /** Gets or sets the unique identifier for this entity. see {@link IId}. */
  id?: string;
  /**
   * Gets or sets the name of this entity that uniquely identifies it and is used when
   * displaying this entity.
   */
  name?: string;
  /** Gets or sets device's ProductID. */
  productId?: number;
}
