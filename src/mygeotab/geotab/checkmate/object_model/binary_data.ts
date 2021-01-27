/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntityWithVersion } from '../../../geotab/checkmate/object_model/i_entity_with_version';
import { BinaryDataType } from '../../../geotab/checkmate/object_model/binary_data_type';
import { IController } from '../../../geotab/checkmate/object_model/engine/i_controller';
import { IDevice } from '../../../geotab/checkmate/object_model/i_device';



/**
* This is binary data representing anything that can be stored. BinaryData can use
* this to store images but the data can be any custom data, including custom engine
* information types. The type of the data is defined by the {@link IBinaryDataType}.
*/
export interface IBinaryData extends IEntityWithVersion
{
  /** Gets or sets the {@link IBinaryDataType}. */
  binaryType?: BinaryDataType;
  /** Gets or sets the {@link IBinaryData} specified. */
  controller: IController;
  /** Gets the binary data for the {@link IBinaryData} object. */
  data: number[];
  /** Gets or sets the date and time of the logging of the data. */
  dateTime?: Date;
  /** Gets or sets the on which the binary data was recorded. */
  device: IDevice;
}
