/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntityWithVersion } from '../../../geotab/checkmate/object_model/i_entity_with_version';
import { IDateRange } from '../../../geotab/checkmate/object_model/i_date_range';



/** Stores the binary data for a generate excel report. */
export interface IReportStorage extends IEntityWithVersion
{
  /** Gets or sets the excel binary data. */
  binaryData?: number[];
  /** Gets or sets a {@link IDateTime} of when the report was generated. */
  creationDate?: Date;
  /** Gets or sets the start of the reports date range. */
  reportDateRange?: IDateRange;
  /** Gets or sets the name of the report. */
  reportName?: string;
  /** Gets or sets the type of the report. */
  reportType?: string;
}
