/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from "./entity";
import { IDevice } from "./device";

export interface IProcessPending extends IEntity {
  dateTime?: Date;
  device: IDevice;
  isCompleteReprocess: boolean;
}
