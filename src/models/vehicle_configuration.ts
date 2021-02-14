/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntityWithVersion } from "./entity_with_version";
import { IDevice } from "./device";

/** VehicleConfiguration parameters entity. */
export interface IVehicleConfiguration extends IEntityWithVersion {
  /** Gets or sets the {@link IDevice} associated with this VehicleConfiguration. */
  device: IDevice;
}
