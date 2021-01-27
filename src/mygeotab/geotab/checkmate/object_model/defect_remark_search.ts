/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from '../../../geotab/checkmate/object_model/i_search';
import { IDVIRDefectSearch } from '../../../geotab/checkmate/object_model/i_d_v_i_r_defect_search';
import { IUserSearch } from '../../../geotab/checkmate/object_model/i_user_search';



/** The object used to specify the arguments when searching for (s). */
export interface IDefectRemarkSearch extends ISearch
{
  /**
  * Gets or sets search for DefectRemark with this Id. Available DVIRDefectSearch options
  * are:. Id
  */
  dvirDefectSearch: IDVIRDefectSearch;
  /** Gets or sets search for DefectRemark that were recorded at this date or after. */
  fromDate?: Date;
  /** Gets or sets search for DefectRemarks with this remark as part of it. */
  remarkSearch: string;
  /** Gets or sets search for DefectRemark that were recorded at this date or before. */
  toDate?: Date;
  /**
  * Gets or sets search for DefectRemarks with this Id. Available UserSearch options
  * are:. Id
  */
  userSearch: IUserSearch;
}
