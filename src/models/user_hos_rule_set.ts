/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntityWithVersion } from "./entity_with_version";
import { IHosRuleSetNew } from "./hos_rule_set_new";
import { IUser } from "./user";

/** A user's Hos Ruleset. */
export interface IUserHosRuleSet extends IEntityWithVersion {
  /** Gets or sets the active from. */
  dateTime?: Date;
  /** Gets or sets the ruleset. */
  hosRuleSet: IHosRuleSetNew;
  /** Gets or sets the start of day. */
  startOfDay?: Date;
  /** Gets or sets the user. */
  user: IUser;
}
