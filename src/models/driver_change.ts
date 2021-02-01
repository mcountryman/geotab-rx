/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntityWithVersion } from "./entity_with_version";
import { DriverChangeType } from "./driver_change_type";
import { IDevice } from "./device";
import { IDriver } from "./driver";

/**  Information about timing of a {@link IDriver} change. */
export interface IDriverChange extends IEntityWithVersion {
  /** Gets or sets the date and time of the driver change. */
  dateTime?: Date;
  /** Gets or sets the {@link IDevice} that had the driver change. */
  device?: IDevice;
  /** Gets or sets the {@link IDriver} associated with the change. */
  driver?: IDriver;
  /** Gets or sets the {@link IDriverChangeType}. */
  type?: DriverChangeType;
}
