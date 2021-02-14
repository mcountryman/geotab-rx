/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from "./search";
import { IDVIRLogSearch } from "./d_v_i_r_log_search";
import { IUserSearch } from "./user_search";
import { IGroupSearch } from "./group_search";

/** The object used to specify the arguments when searching for (s). */
export interface IDVIRDefectSearch extends ISearch {
  /**
   * Gets or sets search for DVIRDefect that are a member of these defect {@link IGroup}(s).
   * Available {@link IGroupSearch} options are:. Id
   */
  defectSearch: IGroupSearch;
  /**
   * Gets or sets search for DVIRDefect with this Id. Available DVIRLogSearch options
   * are:. Id
   */
  dvirLogSearch: IDVIRLogSearch;
  /** Gets or sets search for DVIRDefect that were recorded at this date or after. */
  fromDate?: Date;
  /** Gets or sets search for DVIRDefect that were recorded at this date or before. */
  toDate?: Date;
  /**
   * Gets or sets search for DVIRDefects with this Id. Available UserSearch options are:.
   * Id
   */
  userSearch: IUserSearch;
}
