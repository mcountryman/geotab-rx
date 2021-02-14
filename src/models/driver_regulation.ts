/* eslint-disable @typescript-eslint/no-empty-interface */
import { IEntity } from "./entity";
import { IDutyStatusAvailability } from "./duty_status_availability";
import { IUser } from "./user";
import { IDutyStatusViolation } from "./duty_status_violation";
import { IDaySummary } from "./day_summary";
import { IWorkdaySummary } from "./workday_summary";
import { ICycleSummary } from "./cycle_summary";
import { IUserHosRuleSet } from "./user_hos_rule_set";

/** Detailed information for Hours of Service regulation for a driver. */
export interface IDriverRegulation extends IEntity {
  /** Gets or sets the {@link IDutyStatusAvailability}. */
  availability: IDutyStatusAvailability;
  /** Gets or sets the cycle summaries. */
  cycleSummaries: ICycleSummary[];
  /** Gets or sets the day summaries. */
  daySummaries: IDaySummary[];
  /** Gets or sets the . */
  driver: IUser;
  /** Gets or sets when off duty is needed. */
  offDutyNeeded: Date;
  /** Gets or sets when rest break is needed. */
  restBreakNeeded: Date;
  /** Gets or sets rulesets that cannot be changed currently. */
  rulesetsThatCannotChange: IUserHosRuleSet[];
  /** Gets or sets the {@link IDutyStatusViolation}. */
  violations: IDutyStatusViolation[];
  /** Gets or sets the workday summaries. */
  workdaySummaries: IWorkdaySummary[];
}
