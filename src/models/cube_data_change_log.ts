/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from "./entity";

/** The object model for containing the data related to change log for cube data */
export interface ICubeDataChangeLog extends IEntity {
  /** Gets or sets the date time for which the fact table data has changed */
  dateTime: Date;
  /** Gets or sets the name of the fact table */
  factTableName: string;
  logTime: Date;
}
