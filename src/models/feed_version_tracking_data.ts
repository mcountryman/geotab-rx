/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from './entity';

/**
 * Represents the most recent records inserted into each table. This is used to ensure
 * that the feed pulls the newest data possible without missing data.
 */
export interface IFeedVersionTrackingData extends IEntity {
  /** Gets or sets specify when this log was taken. */
  dateTime?: Date;
  /** Gets or sets specify the table name that this record belongs to. */
  tableName: string;
  /** Gets or sets specify the latest row version for this table. */
  trackedRowVersion: number;
}
