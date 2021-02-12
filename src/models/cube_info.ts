/* eslint-disable @typescript-eslint/no-empty-interface */
import { INameEntity } from './name_entity';
import { CubeType } from './cube_type';

/** The object model for containing the data related to generated cube metadata */
export interface ICubeInfo extends INameEntity {
  /** Gets or sets the cube created date time */
  createStartTime: Date;
  /** Gets or sets the type of the cube */
  cubeType: CubeType;
  /** Gets or sets the lower bound of the date range used to create the cube */
  fromDate: Date;
  /** Gets or sets a value indicating whether the cube is outdated or not */
  isOutdated: boolean;
  /** Gets or sets the last date time when the cube has marked as outdated */
  outdatedTime: Date;
  /** Gets or sets the time zone Id which is used to create the cube */
  timeZoneId: string;
  /** Gets or sets the upper bound of the date range used to create the cube */
  toDate: Date;
}
