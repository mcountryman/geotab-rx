/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from '../../../geotab/checkmate/object_model/i_entity';
import { IDevice } from '../../../geotab/checkmate/object_model/i_device';
import { DevicePlanMasterFlag } from '../../../geotab/checkmate/object_model/device_plan_master_flag';



/** The master flag of a device. */
export interface IDeviceMasterFlag extends IEntity
{
  /** Gets a value indicating the timestamp of master flag. */
  dateTime?: Date;
  /**
  * @inheritdoc
  */
  device?: IDevice;
  /** Gets device id. */
  deviceId?: string;
  /** Gets a value indicating whether master flag is enabled. */
  enabled?: boolean;
  /** Gets a value indicating device master flag. */
  masterFlag?: DevicePlanMasterFlag;
}
