/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from '../../../geotab/checkmate/object_model/i_search';
import { ReportDataSource } from '../../../geotab/checkmate/object_model/report_data_source';



/**
*  The object used to specify the arguments when searching for {@link IReportTemplate}(s).
*
* @deprecated
*/
export interface IReportTemplateSearch extends ISearch
{
  /** Gets or sets include report Binary Data for this ReportTemplate. */
  includeBinaryData?: boolean;
  /** Gets or sets search for a ReportTemplate with this ReportDataSource. */
  reportDataSource?: ReportDataSource;
}
