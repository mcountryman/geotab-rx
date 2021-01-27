/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from '../../../geotab/checkmate/object_model/i_entity';
import { IDevice } from '../../../geotab/checkmate/object_model/i_device';



export interface IProcessPending extends IEntity
{
  dateTime?: Date;
  device: IDevice;
  isCompleteReprocess: boolean;
}
