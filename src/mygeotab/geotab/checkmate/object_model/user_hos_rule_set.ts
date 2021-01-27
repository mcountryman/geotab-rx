/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntityWithVersion } from '../../../geotab/checkmate/object_model/i_entity_with_version';
import { IHosRuleSetNew } from '../../../geotab/checkmate/object_model/i_hos_rule_set_new';
import { IUser } from '../../../geotab/checkmate/object_model/i_user';



/** A user's Hos Ruleset. */
export interface IUserHosRuleSet extends IEntityWithVersion
{
  /** Gets or sets the active from. */
  dateTime?: Date;
  /** Gets or sets the ruleset. */
  hosRuleSet: IHosRuleSetNew;
  /** Gets or sets the start of day. */
  startOfDay?: Date;
  /** Gets or sets the user. */
  user: IUser;
}
