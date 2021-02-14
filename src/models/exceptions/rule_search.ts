/* eslint-disable @typescript-eslint/no-empty-interface */
import { ISearch } from "../search";
import { ExceptionRuleBaseType } from "../exceptions/exception_rule_base_type";
import { ExceptionRuleCategory } from "../exceptions/exception_rule_category";
import { IGroupSearch } from "../group_search";
import { IZoneType } from "../zone_type";

/**  The object used to specify the arguments when searching for a {@link IRule}. */
export interface IRuleSearch extends ISearch {
  /**
   * Gets or sets search for Rules that are this {@link IExceptionRuleBaseType}; either
   * Custom, Stock, or ZoneStop.
   */
  baseType?: ExceptionRuleBaseType;
  /**
   * Gets or sets search for Rules that are in this {@link IExceptionRuleCategory}; either
   * ApplicationExceptionRule, UserExceptionRules or ZoneStopExceptionRules.
   */
  category?: ExceptionRuleCategory;
  /**
   * Gets or sets search for Rules that are members of these {@link IGroupSearch}(s)
   * one of it's children or one of it's parents. Available GroupSearch options are:.
   * Id
   */
  groups: IGroupSearch[];
  /**
   * Gets or sets search for a {@link IRule} with this {@link IId}. Id cannot be used
   * with any other search properties.
   */
  id: string;
  /** Gets or sets include zone stop rules. Default [false]. */
  includeZoneStopRules?: boolean;
  /**
   * Gets or sets search for Rules with this Name. Wildcard can be used by prepending/appending
   * "%" to string. Example "%comments%".
   */
  name: string;
  /** Gets or sets the list of {@link IZoneType} to search by. */
  zoneTypes: IZoneType[];
}
