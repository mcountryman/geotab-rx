/* eslint-disable @typescript-eslint/no-empty-interface */
import { INameEntityWithVersion } from '../../../../geotab/checkmate/object_model/i_name_entity_with_version';
import { MediaType } from '../../../../geotab/checkmate/object_model/files/media_type';
import { ITag } from '../../../../geotab/checkmate/object_model/files/i_tag';
import { IDriver } from '../../../../geotab/checkmate/object_model/i_driver';
import { IDevice } from '../../../../geotab/checkmate/object_model/i_device';
import { Status } from '../../../../geotab/checkmate/object_model/files/status';



/** The entity which describes the binary media. */
export interface IMediaFile extends INameEntityWithVersion
{
  /** Gets or sets the {@link IDevice} associated with the file. */
  device: IDevice;
  /** Gets or sets the {@link IDriver} associated with the file. */
  driver: IDriver;
  /** Gets or sets the from date. */
  fromDate?: Date;
  /** Gets or sets the {@link IMediaType}. */
  mediaType?: MediaType;
  /** Gets or sets file metadata in JSON format. */
  metaData: string;
  /** Gets or sets the {@link IId} of the solution which added the data. */
  solutionId: string;
  /** Gets or sets the file processing {@link IStatus}. */
  status?: Status;
  /** Gets or sets the list of tags to provide context to the file. */
  tags: ITag[];
  /** Gets or sets the list of files which serve as the thumbnail for this file. */
  thumbnails: IMediaFile[];
  /** Gets or sets the to date. */
  toDate?: Date;
}
